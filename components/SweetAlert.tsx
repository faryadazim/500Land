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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SweetAlert({ children, screenWidth }: any) {
  return (

    <DialogContent className={`sm:max-w-[${screenWidth}]`} >

      {children}
    </DialogContent>

  )
}
