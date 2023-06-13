"use client"
import React, { useState } from "react"
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import AddFundPage from "@/components/AddFund"
import TaskPage from "@/components/customDataTable/page"
import { SweetAlert } from "@/components/SweetAlert"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"




export default function BillingPage() {


  const columnsNames = [
    "Date", "Invoice Detail", "Total Charged", "Invoices"
  ]

  const values = [
    {
      text: "March 5, 2023",
      color: "#1B4638",
      style: "normal",
      weight: "normal",
    },
    {
      text: "Egypt Land Fund",
      color: "#1B4638",
      style: "underline",
      weight: "bold"
    },
    {
      text: "$103",
      color: "#000000",
      weight: "normal"
    }, {
      text: "Download Invoice",
      color: "#1B4638",
      style: "underline",
      weight: "bold"
    }
  ]

  // const isOpen=(false); 

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-8 lg:px-30 xl:px-36 mx-auto w-full">
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

            {/* Card Info  */}
            <div className="flex justify-between items-center">
              <div className="font-bold text-[17px]">
                Your Cards
              </div>



              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer  text-[15px] font-medium   text-[#4672E1] p-[22px]">
                    Add new payment method
                  </div>
                </DialogTrigger>
                <SweetAlert pageName={"market-single"}>

                  <div className="flex justify-between ">
                    <h3 className="font-bold text-xl">
                      Add New Payment Method
                    </h3>
                    <div>
                      <DialogTrigger asChild>
                        <Button
                          className="bg-transparent hover:bg-transparent"
                        >
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#EBEBEB" />
                            <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#5F5F5F" />
                          </svg>
                        </Button>
                      </DialogTrigger>
                    </div>

                  </div>


                  <div >
                    <div className="row flex justify-between ">
                      <div className="w-full ">
                        <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Name</label>
                        <Input placeholder="John Doe" className="bg-white mt-[2px]" />

                      </div>

                    </div>
                    <div className="row flex justify-between pt-6">
                      <div className="w-full ">
                        <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Address</label>
                        <Input placeholder="Sample Address, 21233" className="bg-white mt-[2px]" />

                      </div>

                    </div>
                    <div className="row flex justify-between pt-6">
                      <div className="w-full ">
                        <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Country</label>
                        <Input placeholder="Egypt" className="bg-white mt-[2px]" />

                      </div>

                    </div>

                    <div className="row flex justify-between pt-6">
                      <div className="w-full ">
                        <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">City</label>
                        <Input placeholder="Cairo" className="bg-white mt-[6px]" />

                      </div>

                    </div>
                    <div className="row flex justify-between pt-6">
                      <div className="w-full ">
                        <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Card Infomation</label>
                        <div className="flex flex-wrap">
                          <Input placeholder="1234 1234 1234 1234" className="w-full rounded-b-none bg-white  mt-[2px]  border-b-0" />

                          <Input placeholder="MM/YY" className=" rounded-t-none basis-2/4 rounded-r-none border-r-0 bg-white w-1/2 " />
                          <Input placeholder="CVC" className=" rounded-t-none rounded-l-none basis-2/4 bg-white w-1/2 " />
                        </div>


                      </div>

                    </div>
                    <div className="flex   justify-center">
                      <Button variant="primaryDark" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Delete</Button> </div>


                  </div>

                </SweetAlert >
              </Dialog>

            </div>
            <div className="flex justify-between items-center">
              <div className="font-normal text-[15px] flex">

                <span className="mr-2">

                <svg width={37} height={24} viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_199_4866)">
    <path d="M1.89744 0H35.1026C36.1509 0 37 0.8592 37 1.92V22.08C37 23.1408 36.1509 24 35.1026 24H1.89744C0.849103 24 0 23.1408 0 22.08V1.92C0 0.8592 0.849103 0 1.89744 0Z" fill="#0A4693" />
    <path d="M13.9081 16.7376L15.4925 7.34398H18.0256L16.4364 16.7376H13.9081ZM25.5821 7.54558C25.0793 7.35358 24.2966 7.15198 23.3147 7.15198C20.8148 7.15198 19.0502 8.42878 19.0359 10.2528C19.0217 11.6016 20.293 12.3552 21.2559 12.8064C22.2379 13.2672 22.5699 13.56 22.5652 13.968C22.5604 14.5968 21.7777 14.8848 21.052 14.8848C20.0368 14.8848 19.5008 14.7408 18.6707 14.3904L18.3434 14.2416L17.9876 16.344C18.5806 16.608 19.6716 16.8336 20.8053 16.8432C23.4664 16.8432 25.1931 15.5856 25.2121 13.632C25.2216 12.5616 24.548 11.7504 23.087 11.0784C22.2047 10.6416 21.6591 10.3536 21.6639 9.91198C21.6639 9.52318 22.124 9.10558 23.1154 9.10558C23.9408 9.09118 24.5432 9.27358 25.0081 9.46558L25.2358 9.57598L25.5821 7.54558ZM32.095 7.34398H30.1407C29.5335 7.34398 29.0829 7.51198 28.8172 8.12158L25.0556 16.7328H27.712C27.712 16.7328 28.1484 15.576 28.2432 15.3216C28.5326 15.3216 31.1179 15.3264 31.4831 15.3264C31.559 15.6576 31.7914 16.7328 31.7914 16.7328H34.1395L32.095 7.34398ZM28.9927 13.4112C29.2014 12.8688 30.0031 10.7856 30.0031 10.7856C29.9889 10.8096 30.2118 10.2432 30.3399 9.88798L30.5107 10.6992C30.5107 10.6992 30.9945 12.9408 31.0989 13.4112H28.9927ZM11.7593 7.34398L9.28312 13.752L9.01748 12.4512C8.55735 10.9488 7.12004 9.32158 5.51196 8.51038L7.7794 16.7232L10.4595 16.7184L14.4441 7.33918L11.7593 7.34398Z" fill="white" />
    <path d="M6.9684 7.34399H2.88892L2.85571 7.54079C6.02917 8.31839 8.13058 10.2 9.0034 12.456L8.11635 8.13599C7.96456 7.54079 7.51866 7.36319 6.9684 7.34399Z" fill="#F2AE13" />
  </g>
  <defs>
    <clipPath id="clip0_199_4866">
      <rect width={37} height={24} fill="white" />
    </clipPath>
  </defs>
</svg>


                </span>
                <span>        Visa ending in 8744</span>

              </div>
              <div className="flex ">




                <Dialog>
                  <DialogTrigger asChild>
                    <div className=" cursor-pointer text-[15px] font-bold   text-customDarkGreen p-[22px] mr-2 border-r-[0.5px] border-grey-300">
                      Edit
                    </div>
                  </DialogTrigger>
                  <SweetAlert pageName={"market-single"}>

                    <div className="flex justify-between ">
                      <h3 className="font-bold text-xl">
                        Edit Visa ending in 8744
                      </h3>
                      <div>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-transparent hover:bg-transparent"
                          >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="40" height="40" rx="20" fill="#EBEBEB" />
                              <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#5F5F5F" />
                            </svg>
                          </Button>
                        </DialogTrigger>
                      </div>

                    </div>


                    <div >
                      <div className="row flex justify-between  ">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Name</label>
                          <Input placeholder="John Doe" className="bg-white mt-[2px]" />

                        </div>

                      </div>
                      <div className="row flex justify-between pt-6">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Address</label>
                          <Input placeholder="Sample Address, 21233" className="bg-white mt-[2px]" />

                        </div>

                      </div>
                      <div className="row flex justify-between pt-6">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Country</label>
                          <Input placeholder="Egypt" className="bg-white mt-[2px]" />

                        </div>

                      </div>

                      <div className="row flex justify-between pt-6">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">City</label>
                          <Input placeholder="Cairo" className="bg-white mt-[6px]" />

                        </div>

                      </div>
                      <div className="row flex justify-between pt-6">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Card Infomation</label>
                          <div className="flex flex-wrap">
                            <Input placeholder="1234 1234 1234 1234" className="w-full rounded-b-none bg-white  mt-[2px]  border-b-0" />

                            <Input placeholder="MM/YY" className=" rounded-t-none basis-2/4 rounded-r-none border-r-0 bg-white w-1/2 " />
                            <Input placeholder="CVC" className=" rounded-t-none rounded-l-none basis-2/4 bg-white w-1/2 " />
                          </div>


                        </div>

                      </div>
                      <div className="flex   justify-center">
                        <Button variant="primaryDark" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Delete</Button> </div>


                    </div>

                  </SweetAlert >
                </Dialog>

                <div>


                  <Dialog>
                    <DialogTrigger asChild>
                      <p className=" cursor-pointer text-[15px] font-bold   text-customDarkGreen p-[22px] text-[#d53333]">
                        Remove
                      </p>
                    </DialogTrigger>
                    <SweetAlert pageName={"market-single"}>

                      <div className="flex justify-between ">
                        <h3 className="font-bold text-xl">
                          Remove Visa ending in 8744
                        </h3>
                        <div>
                          <DialogTrigger asChild>
                            <Button
                              className="bg-transparent hover:bg-transparent"
                            >
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#EBEBEB" />
                                <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#5F5F5F" />
                              </svg>
                            </Button>
                          </DialogTrigger>
                        </div>

                      </div>

                      <div>
                        <p className="text-[17px] font-normal text-[#475467] ">Are you sure you want to delete this payment method?</p>
                      </div>
                      <div >

                        <div className="flex   justify-center">
                          <Button variant="danger" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Delete</Button> </div>
                        <div className="flex justify-center">
                          <Button variant="link" className="w-full  lg:w-[90%]   " style={{ fontFamily: "sans-serif" }}>Cancel</Button> </div>

                      </div>

                    </SweetAlert >
                  </Dialog>



                </div>

              </div>

            </div>


            <div id="setting_section" className=" mt-5">
              <div className="mt-3">
                <TaskPage pageName="billing" columns={columnsNames} Data={values} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
