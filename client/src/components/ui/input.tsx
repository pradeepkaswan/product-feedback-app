import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "../../utils"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn("", className)}
				ref={ref}
				{...props}
			/>
		)
	},
)

Input.displayName = "Input"

export { Input }
