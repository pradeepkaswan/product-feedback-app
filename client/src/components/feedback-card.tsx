import { Link } from "react-router-dom"
import { Feedback } from "../types"
import { Icons } from "./ui/icons"
import { Badge } from "./ui/badge"

interface FeedbackCardProps {
	item: Feedback
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ item }) => {
	return (
		<li
			key={item.id}
			className="flex flex-col rounded-lg p-6 bg-product-100 | md:flex-row md:items-center md:px-8 md:py-7"
		>
			<div className="flex-grow mb-4 | md:order-2 md:mb-0">
				<h2 className="text-[13px] font-bold tracking-[-0.181px] text-product-700 mb-2 | md:text-heading-3 md:mb-1">
					<Link to={`/feedback/${item.id}`}>{item.title}</Link>
				</h2>
				<p className="text-[13px] font-normal mb-2 | md:mb-[12px] md:text-body-1">
					{item.description}
				</p>
				<Badge>{item.category}</Badge>
			</div>

			<div className="flex justify-between items-center | md:order-1 md:flex-col md:mr-10">
				<button className="flex md:flex-col gap-[10px] md:gap-2 items-center px-4 py-2 md:w-10 rounded-lg text-body-3 bg-product-300 text-product-700  hover:bg-[#CFD7FF] focus:bg-product-800 focus:text-product-100 cursor-pointer">
					<Icons.arrowUp className="h-1.5 w-2.5 md:mt-1" />
					{item.upvotes}
				</button>
				<div className="flex md:hidden md:order-3 items-center gap-2 text-body-3 text-product-700">
					<Icons.comments className="h-4 w-[18px]" />
					<span>{item.comments ? item.comments?.length : 0}</span>
				</div>
			</div>

			<div className="hidden md:flex md:order-3 items-center gap-2 text-body-3 text-product-700 ml-auto">
				<Icons.comments className="h-4 w-[18px]" />
				<span>{item.comments ? item.comments?.length : 0}</span>
			</div>
		</li>
	)
}

export default FeedbackCard
