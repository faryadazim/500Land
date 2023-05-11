import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (



        
        <div className="relative flex w-full">
     <select
          className="absolute left-0 top-0 h-full border-l border-input bg-white pl-2 pr-3 text-sm appearance-none focus:outline-none rounded-l-lg"
        >
          <option value="+1">USA (+1)</option>
          <option value="+44">UK (+44)</option>
          <option value="+91">India (+91)</option>
          {/* Add more country code options here */}
        </select>
    
    
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-28",
            className
          )}
          ref={ref}
        {...props}
        />
       
      </div>
    )
  }
)
PhoneInput.displayName = "PhoneInput"

export { PhoneInput }
