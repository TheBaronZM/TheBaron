'use client'

import Link from 'next/link'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant = 'primary', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variants = {
      primary: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-white',
      secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
      outline: 'border-2 border-white text-white hover:bg-white/10 focus:ring-white',
    }

    const styles = cn(baseStyles, variants[variant], className)

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={styles}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button' 