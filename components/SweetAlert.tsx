import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" 

export function SweetAlert( {children , pageName}:any) {
  return (
  
      <DialogContent className={pageName=="market-single"?`w-[20000px]`:`w-[1800px]`}>
        
        {children}
      </DialogContent>
  
  )
}
