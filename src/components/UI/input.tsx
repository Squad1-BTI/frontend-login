"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { type VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'flex flex-col gap-2',
  {
    variants: {
      variant: {
        default: 'text-gray-800 peer block w-full border-2 px-3 py-2 focus:outline-none focus:ring-2',
      },
      inputSize: { 
        default: 'w-96 text-lg',
        sm: 'w-18 text-xl',
        lg: 'w-54 text-xl',
      },
      rounded: {
        default: 'rounded-full',
        md: 'rounded-md',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
      rounded: 'default',
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  togglePassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, togglePassword = false, ...props }, ref) => { 
    const [showPassword, setShowPassword] = React.useState(true);

    const handleToggle = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
      <div className="relative flex items-center">
        <input
          className={cn(inputVariants({ variant, inputSize, className }), togglePassword && 'pr-10')}
          ref={ref}
          type={togglePassword && showPassword ? 'password' : 'text'}
          {...props}
        />
        {togglePassword && (
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleToggle}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-6 h-6 text-gray-400"/>
            ) : (
              <EyeIcon className="w-6 h-6 text-gray-400"/>
            )}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };