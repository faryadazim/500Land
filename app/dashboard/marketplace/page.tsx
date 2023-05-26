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



export default function MarketplacePage() {


  const columnsNames = [
    "Property Name", "Email", "Phone Number", "Property Size"
  ]

  const values = [
    {
      text: "Lynch Canyon Road",
      color: "#475467",
      style: "normal",
      weight: "normal",
    },
    {
      text: "johndoe@gmail.com",
      color: "#475467",
      style: "normal",
      weight: "normal",
    },
    {
      text: "+201123123123",
      color: "#475467",
      style: "normal",
      weight: "normal",
    },
    {
      text: "2000 sqft",
      color: "#475467",
      style: "normal",
      weight: "normal",
    },
   
    {
      text: "",
      color: "",
      style: "",
      weight: "",
    },
     
  ]
  // const isOpen=(false);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <   div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-36 mx-auto w-full">






            <div id="setting_section" className=" mt-5">



              <div className="mt-3">
                <TaskPage pageName="marketplace" columns={columnsNames} Data={values} />
              </div>

              <div className="mt-3">
                <TaskPage pageName="marketplace2"  columns={columnsNames} Data={values} />
              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  )
}
