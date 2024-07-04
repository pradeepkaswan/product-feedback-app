import { createContext, useContext, useEffect, useState } from "react"
import { Feedback, ProductRequestsData } from "../types"

interface DataContextType {
	data: ProductRequestsData | null
	addFeedback: (feedback: Feedback) => void
	updateFeedback: (feedback: Feedback) => void
	deleteFeedback: (id: number) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [data, setData] = useState<ProductRequestsData | null>(null)

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setData(data))
	}, [])

	const addFeedback = (feedback: Feedback) => {
		setData((prevData) => {
			if (!prevData) return null
			const updatedData = {
				...prevData,
				productRequests: [...prevData.productRequests, feedback],
			}
			localStorage.setItem("productFeedbackData", JSON.stringify(updatedData))
			return updatedData
		})
	}

	const updateFeedback = (updatedFeedback: Feedback) => {
		setData((prevData) => {
			if (!prevData) return null
			const updatedData = {
				...prevData,
				productRequests: prevData.productRequests.map((feedback) =>
					feedback.id === updatedFeedback.id ? updatedFeedback : feedback,
				),
			}
			localStorage.setItem("productFeedbackData", JSON.stringify(updatedData))
			return updatedData
		})
	}

	const deleteFeedback = (id: number) => {
		setData((prevData) => {
			if (!prevData) return null
			const updatedData = {
				...prevData,
				productRequests: prevData.productRequests.filter(
					(feedback) => feedback.id !== id,
				),
			}
			localStorage.setItem("productFeedbackData", JSON.stringify(updatedData))
			return updatedData
		})
	}

	return (
		<DataContext.Provider
			value={{ data, addFeedback, updateFeedback, deleteFeedback }}
		>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => {
	const context = useContext(DataContext)
	if (context === undefined) {
		throw new Error("useData must be used within a DataProvider")
	}
	return context
}
