"use client"; // Necessário para o uso de hooks no Next.js

import * as React from 'react';
import { cn } from '@/lib/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Import dos ícones
import { type VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'flex flex-col gap-2',
  {
    variants: {
      variant: {
        default: 'text-black peer block w-full border-2 px-3 py-2 focus:outline-none focus:ring-2',
      },
      size: {
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
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  togglePassword?: boolean; // Habilita o modo de alternância de senha
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, togglePassword = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(true); // Estado para controlar a exibição de senha

    const handleToggle = () => {
      setShowPassword((prevState) => !prevState); // Alterna o estado de exibição
    };

    return (
      <div className="relative flex items-center">
        <input
          className={cn(inputVariants({ variant, size, className }), togglePassword && 'pr-10')}
          ref={ref}
          // Altera o tipo de input de 'password' para 'text' com base no estado showPassword
          type={togglePassword && showPassword ? 'password' : 'text'}
          {...props}
        />
        {togglePassword && (
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleToggle}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-6 h-6 text-black"/>
            ) : (
              <EyeIcon className="w-6 h-6 text-black"/>
            )}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/*
<Input togglePassword={true} />
<Input />
*/

export { Input, inputVariants };
