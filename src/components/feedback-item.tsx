import { Link } from "react-router-dom"
import iconComments from "../assets/shared/icon-comments.svg"
import iconArrowUp from "../assets/shared/icon-arrow-up.svg"
import { Feedback } from "../types"

interface FeedbackItemProps {
	item: Feedback
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
	return (
		<li
			key={item.id}
			className="flex flex-col md:flex-row md:items-center bg-product-100 rounded-lg p-6 md:py-7 md:px-8"
		>
			<div className="md:order-2 flex-grow">
				<h2 className="text-body-3 text-product-700 mb-2">
					<Link to={`/feedback/${item.id}`}>{item.title}</Link>
				</h2>
				<p className="text-body-3 font-normal">{item.description}</p>
				<span className="mt-2 md:mt-[18px] inline-block text-body-3 capitalize text-product-800 bg-product-300 hover:bg-[#CFD7FF] px-4 py-2 rounded-lg">
					{item.category}
				</span>
			</div>

			<div className="flex justify-between items-center mt-4 md:mt-0 md:order-1 md:flex-col md:mr-10">
				<button className="flex md:flex-col gap-[10px] md:gap-2 items-center px-4 py-2 md:w-10 rounded-lg text-body-3 bg-product-300 text-product-700  hover:bg-[#CFD7FF] focus:bg-product-800 cursor-pointer">
					<img
						src={iconArrowUp}
						className="h-1.5 w-2.5 md:mt-1"
						alt=""
					/>
					{item.upvotes}
				</button>
				<div className="flex md:hidden md:order-3 items-center gap-2 text-body-3 text-product-700">
					<img
						src={iconComments}
						className="h-4 w-[18px]"
						alt=""
					/>
					<span>{item.comments ? item.comments?.length : 0}</span>
				</div>
			</div>

			<div className="hidden md:flex md:order-3 items-center gap-2 text-body-3 text-product-700 ml-auto">
				<img
					src={iconComments}
					className="h-4 w-[18px]"
					alt=""
				/>
				<span>{item.comments ? item.comments?.length : 0}</span>
			</div>
		</li>
	)
}

export default FeedbackItem
