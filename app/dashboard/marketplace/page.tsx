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



export default function MarketplacePage() {

  // const isOpen=(false);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="flex">
      <div className="relative">
        {/* Outer Ring*/}
        <div className="w-12 h-12 rounded-full absolute
                  border border-solid border-gray-200" />
        {/* Inner Ring */}
        <div className="w-12 h-12 rounded-full animate-spin absolute
                  border border-solid border-yellow-500 border-t-transparent" />
      </div>
    </div>

  </div >
  )
}
