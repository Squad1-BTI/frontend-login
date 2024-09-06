import * as React from 'react';

import { cn } from '@/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-white p-3 border-2 border-primary shadow-md bg-primary hover:bg-white hover:text-primary',
      },
      size: {
        default: 'w-96 text-xl',
        sm: 'w-18 text-xl',
        lg: 'w-54 text-xl',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-full',
        md: 'rounded-md',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
      </button>
    );
  }
);

export { Button, buttonVariants };