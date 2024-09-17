"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  togglePassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, togglePassword = false, type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleToggle = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
      <div className="relative flex items-center w-full">
        <input
          className={cn('min-w-[440px] h-14 text-gray-800 bg-inputColor peer block w-full px-4 py-2 focus:outline-none placeholder:text-place placeholder:text-sm rounded-lg', className, togglePassword && 'pr-16')}
          ref={ref}
          type={togglePassword && !showPassword ? 'password' : 'text'}
          {...props}
        />
        {togglePassword && (
          <span
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleToggle}
          >
            {showPassword ? (
              <EyeIcon className="w-5 font-bold text-place" />
            ) : (
              <EyeSlashIcon className="w-5  h-5 text-place" />
            )}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };