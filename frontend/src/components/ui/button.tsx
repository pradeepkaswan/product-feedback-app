import { ButtonHTMLAttributes, forwardRef, ReactNode, useState } from "react";

import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import {
  ComponentAnimation,
  ComponentAnimationType,
} from "@/components/configs/animation-config";

import { Icons } from "./icons";

export type ButtonVariantType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withArrow?: boolean;
  icon?: ReactNode;
  iconDirection?: "left" | "right";
  variant?: ButtonVariantType;
  stretch?: boolean;
  isLoading?: boolean;
  animationType?: ComponentAnimationType;
}

const ButtonVariantStyles: Record<ButtonVariantType, string> = {
  primary: "bg-primary-100 text-primary-500 hover:bg-[#C75AF6]",
  secondary: "",
  tertiary: "",
  danger: "",
  ghost: "bg-transparent text-white hover:underline underline-offset-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      icon = <></>,
      iconDirection = "left",
      withArrow = false,
      stretch = false,
      disabled = false,
      isLoading = false,
      animationType = "none",
      ...args
    },
    ref,
  ) => {
    const [hovering, setHovering] = useState<boolean>(false);

    return (
      <motion.button
        initial={{ ...ComponentAnimation[animationType].initial }}
        animate={{ ...ComponentAnimation[animationType].animate }}
        whileTap={{ scale: isLoading || disabled ? 1 : 0.9 }}
        ref={ref}
        className={cn(
          "h-10 px-4 cursor-pointer outline-none gap-4 md:px-6 text-[0.875rem] leading-[1.25rem] tracking-[-0.0125rem] font-bold flex items-center justify-center rounded-[10px]",
          !disabled && "hover:brightness-110 active:brightness-90",
          animationType === "none" && "transition-all",
          ButtonVariantStyles[variant],
          stretch && "w-full",
          isLoading && "cursor-default opacity-60 transition-all",
          disabled && "cursor-not-allowed opacity-40",
          className,
        )}
        onMouseEnter={(event) => {
          if (withArrow) setHovering(true);
          if (args && args.onMouseEnter) {
            args.onMouseEnter(event);
          }
        }}
        onMouseLeave={(event) => {
          setHovering(false);
          if (args && args.onMouseLeave) {
            args.onMouseLeave(event);
          }
        }}
        {...(args as unknown as any)}
      >
        {withArrow &&
          (!hovering ? (
            <Icons.arrowLeft />
          ) : (
            <ArrowLeft className="h-4 w-4 animate-pulse" />
          ))}
        <span className="button-content-wrapper flex items-center gap-4">
          {isLoading && (
            <motion.span
              key={"loader-wrapper"}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <Loader2 className="h-4 w-4 animate-spin" />
            </motion.span>
          )}
          {iconDirection === "left" && icon}
          {children}
          {iconDirection === "right" && icon}
        </span>
      </motion.button>
    );
  },
);
Button.displayName = "Button";
