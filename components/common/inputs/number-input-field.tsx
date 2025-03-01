import { Tooltip } from "@/components";
import clsx from "clsx";
import React from "react";

interface NumberFieldProps {
  label: string;
  name: string;
  required?: boolean;
  infoText?: string;
  error?: string;
  disabled?: boolean;
  step?: number; // Optional prop for step increment/decrement
  endorsement?: React.ReactNode; // New prop for endorsement (currency symbol or text)
  className?: string;
}

const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      label,
      name,
      required = false,
      infoText = "",
      error = "",
      disabled = false,
      step = 1, // Default step is 1
      endorsement, // Accept JSX for endorsement },
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full mb-4">
        <label
          htmlFor={name}
          className={clsx(
            "flex items-center mb-1 text-sm text-black"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {infoText && (
            <Tooltip className="ml-2">
              <div className="text-xs text-slate-600 dark:text-slate-200 text-center drop-shadow-none">
                {infoText}
              </div>
            </Tooltip>
          )}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={name}
            name={name}
            type="number" // Set input type to number
            step={step} // Set step for increment/decrement
            disabled={disabled}
            className={clsx(
              "",
              endorsement ? "pr-10" : "", // Add padding on the right for the eye button
              className
            )}
            {...rest}
          />
          {endorsement && (
            <div className="absolute right-2 top-2 min-w-[2rem] flex justify-center items-center">
              {endorsement}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

export default NumberField;
