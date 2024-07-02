import { Link } from "react-router-dom"
import { useData } from "../context/data-context"
import FeedbackList from "../components/feedback-list"
import illustrationEmpty from "../assets/suggestions/illustration-empty.svg"
import iconHamburger from "../assets/shared/mobile/icon-hamburger.svg"
import iconPlus from "../assets/shared/icon-plus.svg"
import { buttonVariants } from "../components/ui/button"

const Home: React.FC = () => {
	const { data } = useData()

	if (!data) return <div>Loading...</div>

	return (
		<>
			<header className=" text-product-100">
				<div className="flex items-center justify-between py-4 px-6">
					<div>
						<h1 className="text-body-2 font-bold ">Frontend Mentor</h1>
						<h2 className="text-body-3 font-medium opacity-75">
							Feedback Board
						</h2>
					</div>
					<img
						src={iconHamburger}
						alt=""
					/>
				</div>
				<div className="flex justify-between items-center bg-product-700 py-2 px-6">
					<div className="text-body-3 font-normal text-product-300">
						<label htmlFor="filter">Sort by :</label>
						<select
							className="bg-transparent font-bold"
							id="filter"
							name="filters"
						>
							<option value="most-upvotes">Most Upvotes</option>
							<option value="least-upvotes">Least Upvotes</option>
							<option value="most-comments">Most Comments</option>
							<option value="least-comments">Least Comments</option>
						</select>
					</div>
					<Link
						to="/add"
						className={buttonVariants({ variant: "default" })}
					>
						<img
							src={iconPlus}
							className="h-2 w-2 mr-2"
							alt=""
						/>
						Add Feedback
					</Link>
				</div>
			</header>
			<div className="mx-6 md:mx-10 lg:mx-auto px-4 py-8">
				{data.productRequests.length === 0 ? (
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
							<img
								src={iconPlus}
								className="h-2 w-2 mr-2"
								alt=""
							/>
							Add Feedback
						</Link>
					</div>
				) : (
					<FeedbackList feedbackItems={data.productRequests} />
				)}
			</div>
		</>
	)
}

export default Home
