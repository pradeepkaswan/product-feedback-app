import { Link } from "react-router-dom"
import { useData } from "../context/data-context"
import FeedbackList from "../components/feedback-list"
import illustrationEmpty from "../assets/suggestions/illustration-empty.svg"
import { buttonVariants } from "../components/ui/button"
import { Category, ProductRequestsData } from "../types"
import { useState } from "react"
import { Icons } from "../components/ui/icons"
import Header from "../components/header"
// import { useQuery } from "@apollo/client"
// import { GET_FEEDBACKS } from "../graphql/queries"

const Home: React.FC = () => {
	const { data } = useData() as { data: ProductRequestsData }
	// const { loading, error, data } = useQuery(GET_FEEDBACKS)
	const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
		"all",
	)
	const [sortOption, setSortOption] = useState<string>("most-upvotes")

	if (!data) return <p>Loading...</p>
	// if (loading) return <p>Loading...</p>
	// if (error) return <p>Error: {error.message}</p>

	const filteredRequests = data.productRequests.filter(
		(request) =>
			selectedCategory === "all" || request.category === selectedCategory,
	)

	const sortedRequests = [...filteredRequests].sort((a, b) => {
		switch (sortOption) {
			case "most-upvotes":
				return b.upvotes - a.upvotes
			case "least-upvotes":
				return a.upvotes - b.upvotes
			case "most-comments":
				return (b.comments?.length || 0) - (a.comments?.length || 0)
			case "least-comments":
				return (a.comments?.length || 0) - (b.comments?.length || 0)
			default:
				return 0
		}
	})

	return (
		<div className="md:mx-10 | lg:flex lg:mx-auto lg:justify-center lg:mt-[94px]">
			<Header
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div className="flex-col | lg:justify-center lg:items-center">
				<section className="flex justify-between items-center py-2 px-6 mb-8 bg-product-700  | md:py-[14px] md:rounded-lg md:pl-6 md:pr-3">
					<div className="flex items-center gap-[38px]">
						<div className="hidden md:flex text-heading-3 font-bold text-product-100">
							<Icons.suggestions className="h-6 w-6 mr-4" />
							{sortedRequests.length} Suggestions
						</div>
						<div className="text-body-3 font-normal text-product-300">
							<label htmlFor="filter">Sort by :</label>
							<select
								className="bg-transparent font-bold"
								id="filter"
								name="filters"
								onChange={(e) => setSortOption(e.target.value)}
							>
								<option value="most-upvotes">Most Upvotes</option>
								<option value="least-upvotes">Least Upvotes</option>
								<option value="most-comments">Most Comments</option>
								<option value="least-comments">Least Comments</option>
							</select>
						</div>
					</div>
					<Link
						to="/add"
						className={buttonVariants({ variant: "default" })}
					>
						<Icons.plus className="h-2 w-2 mr-2" />
						Add Feedback
					</Link>
				</section>

				<section className="mx-6 | md:mx-0">
					{sortedRequests.length === 0 ? (
						<div className="flex flex-col items-center justify-center bg-product-100 px-6 py-[76px] gap-[14px] mt-8 rounded-lg">
							<img
								src={illustrationEmpty}
								className=""
								alt=""
							/>
							<h1 className="text-[18px] leading-[-0.25px] text-product-700 font-bold">
								There is no feedback yet.
							</h1>
							<p className="text-body-3 font-normal text-product-400 text-center">
								Got a suggestion? Found a bug that needs to be squashed? We love
								hearing about new ideas to improve our app.
							</p>
							<Link
								to="/add-feedback"
								className={buttonVariants({ variant: "default" })}
							>
								<Icons.plus className="h-2 w-2 mr-2" />
								Add Feedback
							</Link>
						</div>
					) : (
						<FeedbackList feedbackItems={sortedRequests} />
					)}
				</section>
			</div>
		</div>
	)
}

export default Home
