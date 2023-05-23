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



export default function ReferralsPage() {

  // const isOpen=(false);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <   div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-36 mx-auto w-full">



            <div className='    mt-4'  >
              <h1 className='w-1/2 font-bold text-[28px] mb-3'>Referrals</h1>
              <p id="header-info" className="font-normal text-[17px] text-black">

                Share your referral link and earn $100 in Share value for every friend that signs up and invests. Plus, your friend will also receive $100 in Share value. Start referring today and grow your rewards
              </p>
            </div>


            <div id="setting_section" className=" ">


              <div className="row flex justify-between pt-6">
                <div className="w-4/6 flex items-end">
                  <div className="w-full mr-2">


                    <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">



                      Copy your referral link
                    </label>
                    <Input placeholder="John Doe" value="https://500land.com/referrals/4012930AAC29KLAZASDA" className="bg-white mt-[6px] " />
                  </div>
                  <div className="">  <Button variant="primaryDark" className="w-28 p-5  mr-2    text-center     rounded-full font-bold lg:font-semibold md:font-normal  md:my-1   " style={{ fontFamily: "Basier Square Regular" }}>

                    <span className="mr-2">

                      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 14.8125C3.90625 14.8125 3.61198 14.6901 3.36719 14.4454C3.1224 14.2006 3 13.9063 3 13.5625V1.89587C3 1.55212 3.1224 1.25785 3.36719 1.01306C3.61198 0.76827 3.90625 0.645874 4.25 0.645874H13.4167C13.7604 0.645874 14.0547 0.76827 14.2995 1.01306C14.5443 1.25785 14.6667 1.55212 14.6667 1.89587V13.5625C14.6667 13.9063 14.5443 14.2006 14.2995 14.4454C14.0547 14.6901 13.7604 14.8125 13.4167 14.8125H4.25ZM4.25 13.5625H13.4167V1.89587H4.25V13.5625ZM1.75 17.3125C1.40625 17.3125 1.11198 17.1901 0.867188 16.9454C0.622396 16.7006 0.5 16.4063 0.5 16.0625V4.12504C0.5 3.94796 0.560243 3.79952 0.680729 3.67973C0.801229 3.55994 0.950535 3.50004 1.12865 3.50004C1.30677 3.50004 1.45486 3.55994 1.57292 3.67973C1.69097 3.79952 1.75 3.94796 1.75 4.12504V16.0625H11C11.1771 16.0625 11.3255 16.1228 11.4453 16.2433C11.5651 16.3638 11.625 16.5131 11.625 16.6912C11.625 16.8693 11.5651 17.0174 11.4453 17.1355C11.3255 17.2535 11.1771 17.3125 11 17.3125H1.75Z" fill="white" />
                      </svg>

                    </span>

                    Copy</Button>
                  </div>


                </div>

              </div>
              <div className="row flex justify-between pt-6">
                <div className="w-4/6 flex items-end">
                  <div className="w-full mr-2">


                    <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">



                      Invite Via Email
                    </label>
                    <Input placeholder="John Doe" value="https://500land.com/referrals/4012930AAC29KLAZASDA" className="bg-white mt-[6px] " />
                  </div>
                  <div className="">  <Button variant="primaryDark" className="w-28 p-5  mr-2    text-center     rounded-full font-bold lg:font-semibold md:font-normal  md:my-1   " style={{ fontFamily: "Basier Square Regular" }}>

                    <span className="mr-2">


                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.7292V1.27084C0 1.04862 0.09375 0.878479 0.28125 0.760424C0.46875 0.642368 0.666667 0.625007 0.875 0.70834L14.4583 6.41667C14.7083 6.52778 14.8333 6.72223 14.8333 7.00001C14.8333 7.27778 14.7083 7.47223 14.4583 7.58334L0.875 13.2917C0.666667 13.375 0.46875 13.3576 0.28125 13.2396C0.09375 13.1215 0 12.9514 0 12.7292ZM1.25 11.7292L12.5833 7.00001L1.25 2.20834V5.70834L6.29167 7.00001L1.25 8.25001V11.7292ZM1.25 7.00001V2.20834V11.7292V7.00001Z" fill="white" />
                      </svg>


                    </span>

                    Send</Button>
                  </div>


                </div>

              </div>


            </div>


          </div>
        </div>
      </div>
    </>
  )
}
