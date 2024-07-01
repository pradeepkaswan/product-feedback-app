import { Feedback } from "../types"
import FeedbackItem from "./feedback-item"

interface FeedbackListProps {
	feedbackItems: Feedback[]
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackItems }) => {
	return (
		<ul className="flex flex-col gap-4">
			{feedbackItems.map((item) => (
				<FeedbackItem item={item} />
			))}
		</ul>
	)
}

export default FeedbackList
