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
			className="bg-product-100 rounded-[10px] p-6"
		>
			<Link to={`/feedback/${item.id}`}>
				<h2 className="text-body-3 text-product-500 mb-2">{item.title}</h2>
				<p className="text-body-3 font-normal mb-2">{item.description}</p>
				<span className="text-body-3 capitalize text-product-800 bg-product-300 h-[30px] rounded-[10px]">
					{item.category}
				</span>
				<div className="flex justify-between mt-2">
					<span className="flex items-center gap-[10px] bg-product-300 rounded-[10px] text-body-3 text-product-500">
						<img
							src={iconArrowUp}
							className="h-1 w-2"
							alt=""
						/>
						{item.upvotes}
					</span>
					<span className="flex items-center gap-2 text-body-3 text-product-500">
						<img
							src={iconComments}
							className="h-4 w-[18px]"
							alt=""
						/>
						{item.comments ? item.comments?.length : 0}
					</span>
				</div>
			</Link>
		</li>
	)
}

export default FeedbackItem
