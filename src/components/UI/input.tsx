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
        default: 'text-gray-800 bg-secundary peer block w-full border-1 px-2 py-2 focus:outline-none placeholder:text-place  placeholder:text-sm ',
      },
      inputSize: {
        default: 'min-w- text-lg',
        sm: 'w-18 text-xl',
        lg: 'w-54 text-xl',
      },
      rounded: {
        default: 'rounded-lg',
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

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>{
  togglePassword?: boolean; 
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, togglePassword = false, type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false); 

    const handleToggle = () => {
      setShowPassword((prevState) => !prevState); 
    };

    return (
      <div className="relative flex items-center m-4 w-full">
        <input
          className={cn('min-w-[440px]:', className , togglePassword && 'pr-10')}
          ref={ref}
          type={togglePassword && !showPassword ? 'password' : 'text'}
          {...props}
        />
        {togglePassword && (
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleToggle}
          >
            {showPassword ? (
              <EyeIcon className="w-5 h-5 text-gray-400"/>
            ) : (
              <EyeSlashIcon className="w-5 h-5 text-gray-400"/>
            )}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };