import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, className, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95'
    
    const variants = {
      primary: 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg hover:shadow-xl',
      secondary: 'bg-gray-700 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl',
      outline: 'border-2 border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white dark:border-blue-400 dark:text-blue-400',
      ghost: 'text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800',
      glass: 'glass text-gray-900 font-medium dark:text-white hover:bg-white/30 dark:hover:bg-black/20'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
