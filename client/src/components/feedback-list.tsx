import { Feedback } from "../types"
import FeedbackCard from "./feedback-card"

interface FeedbackListProps {
	feedbackItems: Feedback[]
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackItems }) => {
	return (
		<ul className="flex flex-col gap-4">
			{feedbackItems.map((item) => (
				<FeedbackCard item={item} />
			))}
		</ul>
	)
}

export default FeedbackList
