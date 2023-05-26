"use client"
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import AddFund from "@/components/AddFund";
// export const metadata = {
//   title: "Add Fund",
// };

export default async function DashboardPage() {
  return (
    <>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> 
       <AddFund/>
      </Dialog>
    </>
  );
}
