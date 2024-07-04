import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../../utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-lg text-body-3 font-bold disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-product-900 text-product-300 hover:bg-[#C75AF6]",
				secondary: "bg-product-800 text-product-300 hover:bg-[#7C91F9",
				tertiary: "bg-product-700 text-product-300 hover:bg-[#656EA3]",
				destructive: "bg-[#D73737] text-product-300 hover:bg-[#E98888]",
				link: "bg-transparent text-product-400 underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		const Comp = "button"
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)

Button.displayName = "Button"

export { Button, buttonVariants }
