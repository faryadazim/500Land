"use client"
import React, { useState } from "react"
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"


import downIcon from "../../../public/downIcon.png";
import Image from "next/image"

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



export default function OpportunitiesPage() {

  // const isOpen=(false); 

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <   div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-8 lg:px-30 xl:px-36  mx-auto  w-full">



            <div className=' flex justify-between mt-4'  >
              <h1 className='w-1/2 font-bold text-[28px] mb-3'>Other Opportunities</h1>
              <div className="w-full flex flex-row md:flex-row lg:flex-row justify-end items-center">
                <Select >
                  <SelectTrigger className="  bg-white     w-28  mr-3  font-normal text-[13px]">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="grapes">Pakistan</SelectItem>
                      {/* <SelectLabel>UAE</SelectLabel> */}
                      <SelectItem value="apple">Oman</SelectItem>
                      <SelectItem value="banana">Egypt</SelectItem>
                      <SelectItem value="blueberry">United Kingdom</SelectItem>
                      <SelectItem value="pineapple">USA</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select >
                  <SelectTrigger className="  bg-white w-[138px] font-normal text-[13px]">
                    <SelectValue placeholder="Fund Ammount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="grapes">Pakistan</SelectItem>
                      {/* <SelectLabel>UAE</SelectLabel> */}
                      <SelectItem value="apple">Oman</SelectItem>
                      <SelectItem value="banana">Egypt</SelectItem>
                      <SelectItem value="blueberry">United Kingdom</SelectItem>
                      <SelectItem value="pineapple">USA</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {[1, 2, 3].map((x: any): any => {
              return <>
                <div className="w-full flex flex-col md:flex-col lg:flex-row">

                  <div className="w-full md:w-full">
                    <Image src={map} alt="opertunity" className="w-full h-full rounded-[14px]  " />

                  </div>
                  <div className="w-full  py-1 px-3 md:w-full">

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
