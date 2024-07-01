import { useParams } from "react-router-dom"
import { useData } from "../context/data-context"

const FeedbackDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const { data } = useData()

	if (!data) return <div>Loading...</div>

	const feedback = data.productRequests.find((item) => item.id === Number(id))

	if (!feedback) return <div>Feedback not found</div>
}

export default FeedbackDetail
