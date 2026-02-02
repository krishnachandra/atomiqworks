import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
                    // Variants
                    variant === 'primary' && "bg-brand-primary text-white hover:bg-indigo-700 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40",
                    variant === 'secondary' && "bg-brand-secondary text-brand-dark hover:bg-teal-500 shadow-md",
                    variant === 'outline' && "border border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
                    variant === 'ghost' && "hover:bg-slate-100 text-slate-700",
                    // Sizes
                    size === 'sm' && "h-9 px-3 text-sm",
                    size === 'md' && "h-11 px-6 text-base",
                    size === 'lg' && "h-14 px-8 text-lg font-semibold",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
