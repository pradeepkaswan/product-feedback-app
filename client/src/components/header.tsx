import { Dispatch, SetStateAction, useState } from "react"
import { CategoryFilter } from "./category-filter"
import { Icons } from "./ui/icons"
import bgHeaderMobile from "../assets/suggestions/mobile/background-header.png"
import bgHeaderTablet from "../assets/suggestions/tablet/background-header.png"
import bgHeaderDesktop from "../assets/suggestions/desktop/background-header.png"
import Sidebar from "./sidebar"
import { Category } from "../types"

interface HeaderProps {
	selectedCategory: Category | "all"
	setSelectedCategory: Dispatch<SetStateAction<Category | "all">>
}

const Header: React.FC<HeaderProps> = ({
	selectedCategory,
	setSelectedCategory,
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

	return (
		<header>
			<div className="gap-[10px] text-product-100 | md:flex md:mb-10 md:mt-14 | lg:flex-col lg:gap-[46px] lg:mt-0">
				<section className="relative h-[72px] w-full | md:h-[178px] md:rounded-lg | lg:h-[137px]">
					<img
						className="absolute inset-0 w-full h-full object-cover md:hidden"
						src={bgHeaderMobile}
						alt="Background Header Mobile"
					/>
					<img
						className="absolute inset-0 w-full h-full object-cover hidden md:block lg:hidden"
						src={bgHeaderTablet}
						alt="Background Header Tablet"
					/>
					<img
						className="absolute inset-0 w-full h-full object-cover hidden lg:block"
						src={bgHeaderDesktop}
						alt="Background Header Desktop"
					/>
					<div className="absolute inset-0 flex justify-between items-center py-4 px-6">
						<div>
							<h1 className="text-body-2 font-bold | md:text-heading-2">
								Frontend Mentor
							</h1>
							<h2 className="text-body-3 font-medium opacity-75 | md:text-body-2">
								Feedback Board
							</h2>
						</div>
						<button
							onClick={toggleSidebar}
							className="md:hidden"
						>
							{isSidebarOpen ? <Icons.close /> : <Icons.hamburger />}
						</button>
					</div>
				</section>

				<section className="hidden md:block bg-product-100 p-6 rounded-lg">
					<CategoryFilter
						selectedCategory={selectedCategory}
						onCategoryChange={(category) => setSelectedCategory(category)}
					/>
				</section>

				<section className="hidden md:block bg-product-100 p-6 rounded-lg"></section>
			</div>
			<Sidebar
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>
		</header>
	)
}

export default Header
