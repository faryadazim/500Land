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
import SweeAlert3 from "@/components/sweeAlert3";
import logo from "../../../public/images/logoDark.png";
import crossIcon from "../../../public/Icons/crossIcon.png";
import vector from "../../../public/500 Land — Dashboard/Vector.png";
import dollarGreen from "../../../public/500 Land — Dashboard/dollar-green.png";
import dollarOrange from "../../../public/500 Land — Dashboard/dollar-orange.png";
import dollarSilver from "../../../public/500 Land — Dashboard/dollar-silver.png";
import redClock from "../../../public/500 Land — Dashboard/red-clock.png";
import card from "../../../public/500 Land — Dashboard/card.png";
import card1 from "../../../public/500 Land — Dashboard/card1.png";
import card2 from "../../../public/500 Land — Dashboard/card2.png";
import card3 from "../../../public/500 Land — Dashboard/card3.png";
import location from "../../../public/500 Land — Dashboard/location.png";
import sqft from "../../../public/500 Land — Dashboard/sqft.png";
import bigFarm from "../../../public/500 Land — Dashboard/Rectangle 22.png";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
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
