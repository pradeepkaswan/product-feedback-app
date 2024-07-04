import { Category } from "../types"
import { badgeVariants } from "./ui/badge"

const categories: (Category | "all")[] = [
	"all",
	"ui",
	"ux",
	"enhancement",
	"bug",
	"feature",
]

interface CategoryFilterProps {
	selectedCategory: Category | "all"
	onCategoryChange: (category: Category | "all") => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
	selectedCategory,
	onCategoryChange,
}) => (
	<div>
		<div className="flex gap-2 flex-wrap">
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => onCategoryChange(category)}
					className={badgeVariants({ variant: "default" })}
				>
					{category}
				</button>
			))}
		</div>
	</div>
)
