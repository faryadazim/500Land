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



export default function SettingPage() {

  // const isOpen=(false);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <   div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-36 mx-auto w-full">



            <div className=' flex justify-between mt-4'  >
              <h1 className='w-1/2 font-bold text-[28px] mb-3'>Settings</h1>

            </div>


            <div id="setting_section" className="border border-[#E7E7E7] rounded-md p-6">
              <h3 id="heading" className="font-bold text-[17px]">

                Personal Info
              </h3>
             
              <div className="row flex justify-between pt-6">
                <div className="w-4/6">
                  <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Name</label>
                  <Input placeholder="John Doe" className="bg-white mt-[6px] " />

                </div>

              </div>
              <div className="row flex justify-between pt-6">
                <div className="w-4/6">
                  <label htmlFor="" className=" my-8   font-normal  text-[13px]">Email</label>
                  <Input placeholder="johndoe@gmail.com" className="bg-white mt-[6px] " />

                </div>

              </div>
              <div className="row flex justify-between pt-6">
                <div className="w-4/6">
                  <label htmlFor="Chad" className=" my-8    font-normal  text-[13px]">Phone </label>
                  <PhoneInput placeholder="+20 123 456 789" className="bg-white mt-[6px] " />

                </div>

              </div>
              <div className="row flex pt-6 items-center">
              
                <Button size="sm"  variant="outline" className=  " border-customDarkGreen p-5 text-customDarkgreen w-100 px-10 rounded-full font-normal w-32 mr-3"  style={{ fontFamily: "Basier Square Regular" }}>Cancel</Button>
                <Button variant="primaryDark"  className="w-44 p-5  mr-2    text-center     rounded-full font-bold lg:font-semibold md:font-normal  md:my-1   " style={{ fontFamily: "Basier Square Regular" }}>Update</Button>
               
             

              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
