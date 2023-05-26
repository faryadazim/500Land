"use client"
import React, { useState } from "react"
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import downIcon from "../../../public/downIcon.png";
import Image from "next/image"
import Rectangle from "../../../public/500 Land — Dashboard/Rectangle 158.png";
import Link from "next/link"

import map from "@/public/images/map.png";
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import AddFund from "@/components/AddFund"

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



export default function DashboardPage() {

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
              <h1 className='font-bold text-[28px] '>Overall Portfolio</h1>
              <div className="">

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='px-6 text-[15px] text-customDarkGreen  font-bold border-customDarkGreen  bg-white border-2 rounded-full hover:bg-white ml-2'
                    >WithDraw</Button>
                  </DialogTrigger>
                  <AddFund />
                </Dialog>

                <Button className='text-[15px]  text-white font-bold rounded-full px-6 text-md md:ml-3 ml-2   bg-customDarkGreen '

                >
                  Check Opportunities
                </Button>
              </div>
            </div>

            <div
              className="w-full flex rounded-md flex-wrap pb-6"
              style={{ backgroundColor: '#FBFBFB', border: '1px solid #E7E7E7' }}
            >
              {
                CARD_DATA.map((items, index) => (
                  <>
                    <div
                      className="p-4 my-10 w-full lg:w-6/12 xl:w-3/12 px-4 text-center"
                      key={index}
                      style={{ borderRight: index === 3 ? '' : '1px solid #E7E7E7' }}
                    >
                      <h3 className="font-medium text-lg">
                        {items?.heading}
                      </h3>
                      <div className="flex justify-center">
                        <h1 className="font-bold text-2xl">
                          {items?.price}
                        </h1>
                        {
                          items.heading === 'Total Profit' || items.heading === 'Investment' ?
                            <>
                              <div className="flex" style={{ alignItems: 'flex-end' }}>
                                <p
                                  className="ml-2 text-[13px] font-bold      mt-3"
                                  style={{ color: '#0E8C43' }}
                                >
                                  {items?.increment}
                                </p>
                                <div className="rounded-full ml-2" style={{ backgroundColor: '#DAF2E4', padding: '5px' }}>

                                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="9" fill="#DAF2E4" />
                                    <path d="M9 13.075C8.85833 13.075 8.73958 13.0271 8.64375 12.9313C8.54792 12.8355 8.5 12.7209 8.5 12.5875V6.81255L5.975 9.35005C5.875 9.45005 5.75833 9.50005 5.625 9.50005C5.49167 9.50005 5.375 9.45005 5.275 9.35005C5.175 9.25838 5.125 9.1438 5.125 9.0063C5.125 8.8688 5.175 8.75005 5.275 8.65005L8.65 5.27505C8.7 5.21672 8.75625 5.17505 8.81875 5.15005C8.88125 5.12505 8.94167 5.11255 9 5.11255C9.06667 5.11255 9.12917 5.12505 9.1875 5.15005C9.24583 5.17505 9.3 5.21672 9.35 5.27505L12.725 8.65005C12.825 8.75005 12.875 8.8688 12.875 9.0063C12.875 9.1438 12.8292 9.25838 12.7375 9.35005C12.6292 9.45005 12.5104 9.50005 12.3813 9.50005C12.2521 9.50005 12.1375 9.45005 12.0375 9.35005L9.5 6.81255V12.5875C9.5 12.7209 9.45208 12.8355 9.35625 12.9313C9.26042 13.0271 9.14167 13.075 9 13.075Z" fill="#0E8C43" />
                                  </svg>  </div>
                              </div>
                            </>
                            :
                            <></>
                        }
                      </div>
                    </div>
                  </>
                ))
              }

              <Collapsible
                open={isOpen}
                // onOpenChange={setIsOpen}
                className="w-full space-y-2 mx-6"
              >
                <div className="flex items-center justify-center px-4">
                  <CollapsibleTrigger asChild>
                    <Button className="p-0 text-lg font-medium bg-transparent text-customDarkGreen hover:bg-transparent hover:text-customDarkGreen" onClick={() => setIsOpen(!isOpen)}
                    >
                      <p className="text-customDarkGreen font-bold text-[15px]">{isOpen ? `Show less` : `Show more`}</p>
                      <Image src={downIcon} alt="Image Not Found" className="ml-2" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <h1 className="font-bold text-[17px] mb-6">
                    Invested Properties
                  </h1>
                  {
                    [1, 2].map((items, index) => (
                      <>
                        <div className={`${index == 0 && `rounded-t-md`} ${index == 1 ? `rounded-b-md border` : `border border-b-0 `} flex flex-wrap    p-6 font-mono text-sm bg-white w-full`} key={index}>
                          <div className="w-1/5">
                            <Image src={Rectangle} alt="Image Not Found" />
                          </div>
                          <div className="w-4/5" >
                            <div style={{ justifyContent: 'space-between', width: '100%' }} className="md:flex mt-1">
                              <p className="font-bold text-xl">Lnych Canyon Road</p>
                              <p>
                                <Link
                                  href={"#"}
                                  className="font-medium"
                                  style={{ color: '#007AFF', textDecoration: 'underline' }}
                                >
                                  Land Details
                                </Link>
                              </p>
                            </div>

                            <div className="flex md:justify-between justify-center flex-wrap">
                              {
                                SMALL_CARD_DATA.map((items, index) => (
                                  <>
                                    <div className="mt-2" key={index}>
                                      <div className="flex">
<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.97917 15.9792C10.1458 15.9792 10.2917 15.9237 10.4167 15.8126C10.5417 15.7015 10.6042 15.5487 10.6042 15.3542V14.9376C11.4375 14.8542 12.0938 14.5799 12.5729 14.1147C13.0521 13.6494 13.2917 13.0348 13.2917 12.2709C13.2917 11.5348 13.0903 10.9445 12.6875 10.5001C12.2847 10.0556 11.5903 9.67369 10.6042 9.35425C9.74306 9.06258 9.15278 8.77439 8.83333 8.48967C8.51389 8.20494 8.35417 7.84036 8.35417 7.39592C8.35417 6.99314 8.50347 6.68064 8.80208 6.45842C9.1007 6.23619 9.5 6.12508 10 6.12508C10.3333 6.12508 10.6285 6.18758 10.8854 6.31258C11.1424 6.43758 11.3681 6.62508 11.5625 6.87508C11.6875 7.01397 11.8299 7.0973 11.9896 7.12508C12.1493 7.15286 12.2986 7.12508 12.4375 7.04175C12.6042 6.95842 12.7083 6.83342 12.75 6.66675C12.7917 6.50008 12.7569 6.34036 12.6458 6.18758C12.4097 5.85425 12.1285 5.59383 11.8021 5.40633C11.4757 5.21883 11.0903 5.0973 10.6458 5.04175V4.64591C10.6458 4.45147 10.5833 4.30216 10.4583 4.198C10.3333 4.09383 10.1875 4.04175 10.0208 4.04175C9.85417 4.04175 9.70486 4.09383 9.57292 4.198C9.44097 4.30216 9.375 4.45147 9.375 4.64591V5.04175C8.63889 5.15286 8.07292 5.42369 7.67708 5.85425C7.28125 6.2848 7.08333 6.81258 7.08333 7.43758C7.08333 8.14592 7.27083 8.70842 7.64583 9.12508C8.02083 9.54175 8.72222 9.94453 9.75 10.3334C10.6528 10.6667 11.2569 10.9654 11.5625 11.2292C11.8681 11.4931 12.0208 11.8404 12.0208 12.2709C12.0208 12.7015 11.8472 13.0695 11.5 13.3751C11.1528 13.6806 10.7014 13.8334 10.1458 13.8334C9.70139 13.8334 9.29167 13.7258 8.91667 13.5105C8.54167 13.2952 8.25695 12.9931 8.0625 12.6042C7.97917 12.4792 7.86806 12.382 7.72917 12.3126C7.59028 12.2431 7.45139 12.2292 7.3125 12.2709C7.10417 12.3542 6.97222 12.4792 6.91667 12.6459C6.86111 12.8126 6.88889 12.9792 7 13.1459C7.27778 13.6181 7.61111 13.9966 8 14.2813C8.38889 14.5661 8.83333 14.7709 9.33333 14.8959V15.3542C9.33333 15.5348 9.39931 15.6841 9.53125 15.8022C9.6632 15.9202 9.8125 15.9792 9.97917 15.9792ZM10 18.6251C8.77778 18.6251 7.64236 18.4063 6.59375 17.9688C5.54514 17.5313 4.63194 16.9237 3.85417 16.1459C3.07639 15.3681 2.46875 14.4549 2.03125 13.4063C1.59375 12.3577 1.375 11.2223 1.375 10.0001C1.375 8.79175 1.59375 7.6598 2.03125 6.60425C2.46875 5.54869 3.07639 4.6355 3.85417 3.86466C4.63194 3.09383 5.54514 2.48272 6.59375 2.03133C7.64236 1.57994 8.77778 1.35425 10 1.35425C11.2083 1.35425 12.3403 1.57647 13.3958 2.02091C14.4514 2.46536 15.3681 3.07647 16.1458 3.85425C16.9236 4.63203 17.5347 5.54522 17.9792 6.59383C18.4236 7.64244 18.6458 8.77786 18.6458 10.0001C18.6458 11.2223 18.4201 12.3577 17.9688 13.4063C17.5174 14.4549 16.9062 15.3681 16.1354 16.1459C15.3646 16.9237 14.4514 17.5313 13.3958 17.9688C12.3403 18.4063 11.2083 18.6251 10 18.6251ZM10 16.9792C11.9861 16.9792 13.6458 16.3161 14.9792 14.9897C16.3125 13.6633 16.9792 12.0001 16.9792 10.0001C16.9792 8.01397 16.3125 6.35425 14.9792 5.02092C13.6458 3.68758 11.9861 3.02091 10 3.02091C8.01389 3.02091 6.35417 3.68411 5.02083 5.0105C3.6875 6.33689 3.02083 8.00008 3.02083 10.0001C3.02083 11.9862 3.6875 13.6459 5.02083 14.9792C6.35417 16.3126 8.01389 16.9792 10 16.9792Z" fill="#3C3C43" fillOpacity="0.6" />
</svg>

                                        <p className="ml-2 text-[13px] font-normal">{items?.heading}</p>
                                      </div>
                                      <p className="font-bold text-[15px] text-center">{items?.amount}</p>
                                    </div>
                                  </>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  }
                </CollapsibleContent>
              </Collapsible>
            </div>


            <div className='lg:flex justify-between mt-4'  >
              <h1 className='font-bold text-[28px] mb-3'>Other Opportunities</h1>

            </div>
            {[1, 2, 3].map((x: any): any => {
              return <>
                <div className="w-full flex">

                  <div className="w-2/5">
                    <Image src={map} alt="opertunity" className="w-full h-full rounded-[14px]  " />

                  </div>
                  <div className="w-3/5 py-1 px-3">

                    <h1 className="font-bold text-xl">North Wilkesboro, Wilkes County</h1>


                    <div className="location flex items-center  py-1">
                      <span>
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.57496 16.9375C4.14939 16.9375 3.79092 16.7919 3.49956 16.5005C3.20819 16.2091 3.0625 15.8507 3.0625 15.4251C3.0625 14.9995 3.20819 14.6417 3.49956 14.3517C3.79092 14.0617 4.14939 13.9167 4.57496 13.9167C5.00053 13.9167 5.35832 14.0617 5.64833 14.3517C5.93835 14.6417 6.08335 14.9995 6.08335 15.4251C6.08335 15.8507 5.93835 16.2091 5.64833 16.5005C5.35832 16.7919 5.00053 16.9375 4.57496 16.9375ZM10.0045 16.9375C9.58122 16.9375 9.2239 16.7919 8.93254 16.5005C8.64117 16.2091 8.49548 15.8507 8.49548 15.4251C8.49548 14.9995 8.63967 14.6417 8.92806 14.3517C9.21644 14.0617 9.57226 13.9167 9.99554 13.9167C10.4188 13.9167 10.7761 14.0617 11.0675 14.3517C11.3589 14.6417 11.5046 14.9995 11.5046 15.4251C11.5046 15.8507 11.3604 16.2091 11.072 16.5005C10.7836 16.7919 10.4278 16.9375 10.0045 16.9375ZM15.4251 16.9375C14.9995 16.9375 14.6417 16.7919 14.3517 16.5005C14.0617 16.2091 13.9167 15.8507 13.9167 15.4251C13.9167 14.9995 14.0617 14.6417 14.3517 14.3517C14.6417 14.0617 14.9995 13.9167 15.4251 13.9167C15.8507 13.9167 16.2091 14.0617 16.5005 14.3517C16.7919 14.6417 16.9375 14.9995 16.9375 15.4251C16.9375 15.8507 16.7919 16.2091 16.5005 16.5005C16.2091 16.7919 15.8507 16.9375 15.4251 16.9375ZM4.57496 11.5046C4.14939 11.5046 3.79092 11.3604 3.49956 11.072C3.20819 10.7836 3.0625 10.4278 3.0625 10.0045C3.0625 9.58122 3.20819 9.2239 3.49956 8.93254C3.79092 8.64117 4.14939 8.49548 4.57496 8.49548C5.00053 8.49548 5.35832 8.63967 5.64833 8.92806C5.93835 9.21644 6.08335 9.57226 6.08335 9.99554C6.08335 10.4188 5.93835 10.7761 5.64833 11.0675C5.35832 11.3589 5.00053 11.5046 4.57496 11.5046ZM10.0045 11.5046C9.58122 11.5046 9.2239 11.3604 8.93254 11.072C8.64117 10.7836 8.49548 10.4278 8.49548 10.0045C8.49548 9.58122 8.63967 9.2239 8.92806 8.93254C9.21644 8.64117 9.57226 8.49548 9.99554 8.49548C10.4188 8.49548 10.7761 8.63967 11.0675 8.92806C11.3589 9.21644 11.5046 9.57226 11.5046 9.99554C11.5046 10.4188 11.3604 10.7761 11.072 11.0675C10.7836 11.3589 10.4278 11.5046 10.0045 11.5046ZM15.4251 11.5046C14.9995 11.5046 14.6417 11.3604 14.3517 11.072C14.0617 10.7836 13.9167 10.4278 13.9167 10.0045C13.9167 9.58122 14.0617 9.2239 14.3517 8.93254C14.6417 8.64117 14.9995 8.49548 15.4251 8.49548C15.8507 8.49548 16.2091 8.63967 16.5005 8.92806C16.7919 9.21644 16.9375 9.57226 16.9375 9.99554C16.9375 10.4188 16.7919 10.7761 16.5005 11.0675C16.2091 11.3589 15.8507 11.5046 15.4251 11.5046ZM4.57496 6.08335C4.14939 6.08335 3.79092 5.93835 3.49956 5.64833C3.20819 5.35832 3.0625 5.00053 3.0625 4.57496C3.0625 4.14939 3.20819 3.79092 3.49956 3.49956C3.79092 3.20819 4.14939 3.0625 4.57496 3.0625C5.00053 3.0625 5.35832 3.20819 5.64833 3.49956C5.93835 3.79092 6.08335 4.14939 6.08335 4.57496C6.08335 5.00053 5.93835 5.35832 5.64833 5.64833C5.35832 5.93835 5.00053 6.08335 4.57496 6.08335ZM10.0045 6.08335C9.58122 6.08335 9.2239 5.93835 8.93254 5.64833C8.64117 5.35832 8.49548 5.00053 8.49548 4.57496C8.49548 4.14939 8.63967 3.79092 8.92806 3.49956C9.21644 3.20819 9.57226 3.0625 9.99554 3.0625C10.4188 3.0625 10.7761 3.20819 11.0675 3.49956C11.3589 3.79092 11.5046 4.14939 11.5046 4.57496C11.5046 5.00053 11.3604 5.35832 11.072 5.64833C10.7836 5.93835 10.4278 6.08335 10.0045 6.08335ZM15.4251 6.08335C14.9995 6.08335 14.6417 5.93835 14.3517 5.64833C14.0617 5.35832 13.9167 5.00053 13.9167 4.57496C13.9167 4.14939 14.0617 3.79092 14.3517 3.49956C14.6417 3.20819 14.9995 3.0625 15.4251 3.0625C15.8507 3.0625 16.2091 3.20819 16.5005 3.49956C16.7919 3.79092 16.9375 4.14939 16.9375 4.57496C16.9375 5.00053 16.7919 5.35832 16.5005 5.64833C16.2091 5.93835 15.8507 6.08335 15.4251 6.08335Z" fill="#3C3C43" fillOpacity="0.6" />
</svg>

                      </span>  <span className="px-4  font-normal text-[13px]">2000 SQFT</span>
                    </div>
                    <div className="location flex  items-center py-1">
                      <span>



                   <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.99779 9.86239C10.4177 9.86239 10.7778 9.71288 11.0783 9.41389C11.3787 9.11487 11.5289 8.75542 11.5289 8.33553C11.5289 7.91564 11.3794 7.55548 11.0804 7.25505C10.7814 6.95464 10.4219 6.80443 10.002 6.80443C9.58215 6.80443 9.22199 6.95393 8.92156 7.25293C8.62114 7.55194 8.47093 7.91139 8.47093 8.33128C8.47093 8.75117 8.62043 9.11133 8.91943 9.41176C9.21845 9.71218 9.5779 9.86239 9.99779 9.86239ZM9.99991 16.4167C11.7793 14.7885 13.0935 13.3117 13.9427 11.9864C14.7918 10.6611 15.2164 9.49771 15.2164 8.49628C15.2164 6.92007 14.7131 5.62946 13.7066 4.62445C12.7 3.61943 11.4653 3.11693 10.0026 3.11693C8.53981 3.11693 7.30427 3.61968 6.29593 4.62518C5.2876 5.63066 4.78343 6.92189 4.78343 8.49886C4.78343 9.50209 5.21851 10.6644 6.08868 11.9858C6.95885 13.3072 8.26259 14.7842 9.99991 16.4167ZM9.99991 18.5925C7.70099 16.6347 5.98179 14.8183 4.84229 13.143C3.7028 11.4678 3.13306 9.91961 3.13306 8.49853C3.13306 6.35463 3.82321 4.64666 5.20351 3.37461C6.58382 2.10257 8.18226 1.46655 9.99883 1.46655C11.8154 1.46655 13.4142 2.10257 14.7952 3.37461C16.1763 4.64666 16.8668 6.35463 16.8668 8.49853C16.8668 9.91961 16.297 11.4678 15.1575 13.143C14.018 14.8183 12.2988 16.6347 9.99991 18.5925Z" fill="#3C3C43" fillOpacity="0.6" />
</svg>

                      </span>  <span className="px-4 font-normal text-[13px]"> Wilkesboro, Wilkes County</span>
                    </div>
                    <div className="flex justify-between pb-2 text-base mt-2">
                      <span className="  font-normal text-[17px] leading-5 text-black">Requested Fund</span>
                      <span className=" font-bold text-[17px] leading-5 text-black">USD 1,023,550</span>
                    </div>

                    <div className=" flex pb-1 items-center justify-between">

                      <Progress value={75} className="mr-2" />

                      <div className="  text-right">
                        70%
                      </div>
                    </div>
                  </div>
                </div>

                {x !== 3 && <Separator className=" bg-gray-200 my-3" />}
              </>
            })}


          </div>
        </div>
      </div>
    </>
  )
}
