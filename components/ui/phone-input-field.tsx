import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (




      <div className="relative flex w-full">
        <Select >
          <SelectTrigger className="  bg-white rounded-l-lg mt-[6px] border-r-0  rounded-r-none w-18">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="grapes">Pakistan</SelectItem>
              {/* <SelectLabel>UAE</SelectLabel> */}
              <SelectItem value="apple">Oman</SelectItem>
              <SelectItem value="banana">Egypt</SelectItem>
              <SelectItem value="blueberry">United Kingdom</SelectItem>
              <SelectItem value="pineapple">USA</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50   border-l-0  rounded-r-lg rounded-l-none",
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
