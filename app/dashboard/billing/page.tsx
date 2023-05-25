"use client"
import React, { useState } from "react"
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import downIcon from "../../../public/downIcon.png";
import Image from "next/image"
import Rectangle from "../../../public/500 Land — Dashboard/Rectangle 158.png";
import Link from "next/link"

import { PhoneInput } from "@/components/ui/phone-input-field"
import { Input } from "@/components/ui/input"
import map from "@/public/images/map.png";
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import AddFundPage from "@/components/AddFund"
import TaskPage from "@/components/customDataTable/page"
const CARD_DATA = [
  {
    heading: 'My Balance',
    price: '$2,500',
    increment: '',
  },
  {
    heading: 'Total Profit',
    price: '$2,000',
    increment: '13.32%',
  },
  {
    heading: 'Investment',
    price: '$500',
    increment: '13.32%',
  },
  {
    heading: 'Available to Withdraw',
    price: '$500',
    increment: '',
  },
];

const SMALL_CARD_DATA = [
  {
    heading: 'Fund Amount',
    amount: '$100',
  },
  {
    heading: 'Current Profit',
    amount: '$100',
  },
  {
    heading: 'Available to Withdraw',
    amount: '$100',
  },
];



export default function BillingPage() {

  // const isOpen=(false);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <   div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-36 mx-auto w-full">
            <div className='lg:flex justify-between my-6'  >
              <h1 className='font-bold text-[28px] '>Billing</h1>
              <div className="">

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='px-6 text-[15px] text-customDarkGreen  font-bold border-customDarkGreen  bg-white border-2 rounded-full hover:bg-white ml-2'
                    >WithDraw</Button>
                  </DialogTrigger>
                  <AddFundPage />
                </Dialog>

                <Button className='text-[15px]  text-white font-bold rounded-full px-6 text-md md:ml-3 ml-2   bg-customDarkGreen '

                >
                  Check Opportunities
                </Button>
              </div>
            </div>
 

 

            <div id="setting_section" className=" mt-5">

 
        
              <div className="mt-3">
                <TaskPage pageName="billing"/> 
              </div>
        
              
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
