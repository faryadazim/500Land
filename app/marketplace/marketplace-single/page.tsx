"use client";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"

import { buttonVariants } from "@/components/ui/button"
import VectorLocation from "@/public/Icon/VectorLocation.png";
import Vector from "@/public/Icon/Vector.png";
import Share from "@/public/Icon/share.png";
import one from "@/public/images/RectangleOppartunity(1).png";
import two from "@/public/images/RectangleOppartunity(2).png";
import three from "@/public/images/RectangleOppartunity(3).png";
import map from "@/public/images/map.png";
import location from "@/public/Icon/location.png";
import dolar from "@/public/Icon/dolar.png";
import copy from "@/public/copy.png";
import details from "@/public/Icon/details.png";
import Map from "@/components/Map"
import { Slider } from "@/components/ui/slider"

import { Separator } from "@/components/ui/separator"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { SweetAlert } from "@/components/SweetAlert";
import { Label } from "@radix-ui/react-select";
import { DialogFooter } from "@/components/ui/dialog";

const inter = Inter({
  subsets: ['latin'],
  weight: "700"
})



export default async function MarketplaceSinglePage() {

  return (
    <div className="bg-customlightGrey">
      <section className={`hero-section relative  bg-customDarkGreen pb-16  ${inter.className} z-30`}>
        <div className={`flex   flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-48">
            <div className="flex h-16 items-center justify-between py-5" >
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link href="/contact-us" className={cn("  items-center text-lg   sm:text-sm text-white tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  ")} style={{ fontFamily: "Basier Square Regular" }}>Contact Us</Link>
                <Link href="/account/create-account" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-white w-100 px-10 rounded-full font-normal")} style={{ fontFamily: "Basier Square Regular" }}>Login</Link>
              </nav>
            </div>
          </header>



          <div className="container flex justify-between mt-10 ">
            <div className="opertunityInfo w-9/12">
              <h3 className=" font-bold  sm:text-2xl text-3xl md:text-[34px] flex items-center text-white" style={{ fontFamily: "sans-serif" }} id="oppertunityTitle">
                Lynch Canyon Road
              </h3>

              <div className=" flex my-2 text-white ">
                <div className="  flex flex-row items-center">
                  <span>

                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.57496 13.9375C1.14939 13.9375 0.790924 13.7919 0.499563 13.5005C0.208188 13.2091 0.0625 12.8507 0.0625 12.4251C0.0625 11.9995 0.208188 11.6417 0.499563 11.3517C0.790924 11.0617 1.14939 10.9167 1.57496 10.9167C2.00053 10.9167 2.35832 11.0617 2.64833 11.3517C2.93835 11.6417 3.08335 11.9995 3.08335 12.4251C3.08335 12.8507 2.93835 13.2091 2.64833 13.5005C2.35832 13.7919 2.00053 13.9375 1.57496 13.9375ZM7.0045 13.9375C6.58122 13.9375 6.2239 13.7919 5.93254 13.5005C5.64117 13.2091 5.49548 12.8507 5.49548 12.4251C5.49548 11.9995 5.63967 11.6417 5.92806 11.3517C6.21644 11.0617 6.57226 10.9167 6.99554 10.9167C7.41882 10.9167 7.77614 11.0617 8.0675 11.3517C8.35888 11.6417 8.50456 11.9995 8.50456 12.4251C8.50456 12.8507 8.36037 13.2091 8.07198 13.5005C7.7836 13.7919 7.42778 13.9375 7.0045 13.9375ZM12.4251 13.9375C11.9995 13.9375 11.6417 13.7919 11.3517 13.5005C11.0617 13.2091 10.9167 12.8507 10.9167 12.4251C10.9167 11.9995 11.0617 11.6417 11.3517 11.3517C11.6417 11.0617 11.9995 10.9167 12.4251 10.9167C12.8507 10.9167 13.2091 11.0617 13.5005 11.3517C13.7919 11.6417 13.9375 11.9995 13.9375 12.4251C13.9375 12.8507 13.7919 13.2091 13.5005 13.5005C13.2091 13.7919 12.8507 13.9375 12.4251 13.9375ZM1.57496 8.50456C1.14939 8.50456 0.790924 8.36037 0.499563 8.07198C0.208188 7.7836 0.0625 7.42778 0.0625 7.0045C0.0625 6.58122 0.208188 6.2239 0.499563 5.93254C0.790924 5.64117 1.14939 5.49548 1.57496 5.49548C2.00053 5.49548 2.35832 5.63967 2.64833 5.92806C2.93835 6.21644 3.08335 6.57226 3.08335 6.99554C3.08335 7.41882 2.93835 7.77614 2.64833 8.0675C2.35832 8.35888 2.00053 8.50456 1.57496 8.50456ZM7.0045 8.50456C6.58122 8.50456 6.2239 8.36037 5.93254 8.07198C5.64117 7.7836 5.49548 7.42778 5.49548 7.0045C5.49548 6.58122 5.63967 6.2239 5.92806 5.93254C6.21644 5.64117 6.57226 5.49548 6.99554 5.49548C7.41882 5.49548 7.77614 5.63967 8.0675 5.92806C8.35888 6.21644 8.50456 6.57226 8.50456 6.99554C8.50456 7.41882 8.36037 7.77614 8.07198 8.0675C7.7836 8.35888 7.42778 8.50456 7.0045 8.50456ZM12.4251 8.50456C11.9995 8.50456 11.6417 8.36037 11.3517 8.07198C11.0617 7.7836 10.9167 7.42778 10.9167 7.0045C10.9167 6.58122 11.0617 6.2239 11.3517 5.93254C11.6417 5.64117 11.9995 5.49548 12.4251 5.49548C12.8507 5.49548 13.2091 5.63967 13.5005 5.92806C13.7919 6.21644 13.9375 6.57226 13.9375 6.99554C13.9375 7.41882 13.7919 7.77614 13.5005 8.0675C13.2091 8.35888 12.8507 8.50456 12.4251 8.50456ZM1.57496 3.08335C1.14939 3.08335 0.790924 2.93835 0.499563 2.64833C0.208188 2.35832 0.0625 2.00053 0.0625 1.57496C0.0625 1.14939 0.208188 0.790924 0.499563 0.499563C0.790924 0.208188 1.14939 0.0625 1.57496 0.0625C2.00053 0.0625 2.35832 0.208188 2.64833 0.499563C2.93835 0.790924 3.08335 1.14939 3.08335 1.57496C3.08335 2.00053 2.93835 2.35832 2.64833 2.64833C2.35832 2.93835 2.00053 3.08335 1.57496 3.08335ZM7.0045 3.08335C6.58122 3.08335 6.2239 2.93835 5.93254 2.64833C5.64117 2.35832 5.49548 2.00053 5.49548 1.57496C5.49548 1.14939 5.63967 0.790924 5.92806 0.499563C6.21644 0.208188 6.57226 0.0625 6.99554 0.0625C7.41882 0.0625 7.77614 0.208188 8.0675 0.499563C8.35888 0.790924 8.50456 1.14939 8.50456 1.57496C8.50456 2.00053 8.36037 2.35832 8.07198 2.64833C7.7836 2.93835 7.42778 3.08335 7.0045 3.08335ZM12.4251 3.08335C11.9995 3.08335 11.6417 2.93835 11.3517 2.64833C11.0617 2.35832 10.9167 2.00053 10.9167 1.57496C10.9167 1.14939 11.0617 0.790924 11.3517 0.499563C11.6417 0.208188 11.9995 0.0625 12.4251 0.0625C12.8507 0.0625 13.2091 0.208188 13.5005 0.499563C13.7919 0.790924 13.9375 1.14939 13.9375 1.57496C13.9375 2.00053 13.7919 2.35832 13.5005 2.64833C13.2091 2.93835 12.8507 3.08335 12.4251 3.08335Z" fill="white" fillOpacity="0.6" />
</svg>


                  </span>  <span className="px-4 text-[13px] font-normal" style={{ fontFamily: "sans-serif" }} >2000 SQFT</span>
                </div>
                <div className="flex flex-row items-center ">
                  <span>
                   <svg width={14} height={14} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.99779 8.86226C7.41768 8.86226 7.77783 8.71276 8.07827 8.41376C8.37868 8.11475 8.52889 7.7553 8.52889 7.33541C8.52889 6.91552 8.37939 6.55536 8.08039 6.25493C7.78138 5.95451 7.42192 5.80431 7.00204 5.80431C6.58215 5.80431 6.22199 5.9538 5.92156 6.2528C5.62114 6.55182 5.47093 6.91127 5.47093 7.33116C5.47093 7.75105 5.62043 8.11121 5.91943 8.41164C6.21845 8.71206 6.5779 8.86226 6.99779 8.86226ZM6.99991 15.4166C8.77929 13.7884 10.0935 12.3116 10.9427 10.9863C11.7918 9.66096 12.2164 8.49759 12.2164 7.49616C12.2164 5.91995 11.7131 4.62934 10.7066 3.62433C9.7 2.61931 8.46534 2.11681 7.00258 2.11681C5.53981 2.11681 4.30427 2.61956 3.29593 3.62506C2.2876 4.63054 1.78343 5.92177 1.78343 7.49874C1.78343 8.50196 2.21851 9.66427 3.08868 10.9857C3.95885 12.307 5.26259 13.784 6.99991 15.4166ZM6.99991 17.5923C4.70099 15.6346 2.98179 13.8181 1.84229 12.1429C0.7028 10.4677 0.133057 8.91949 0.133057 7.49841C0.133057 5.35451 0.823209 3.64653 2.20351 2.37449C3.58382 1.10245 5.18226 0.466431 6.99883 0.466431C8.8154 0.466431 10.4142 1.10245 11.7952 2.37449C13.1763 3.64653 13.8668 5.35451 13.8668 7.49841C13.8668 8.91949 13.297 10.4677 12.1575 12.1429C11.018 13.8181 9.29883 15.6346 6.99991 17.5923Z" fill="white" fillOpacity="0.6" />
</svg>


                  </span>  <span className="px-4 text-[13px] font-normal" style={{ fontFamily: "sans-serif" }} >Bradley, CA</span>
                </div>
              </div>


            </div>
            <div className="shareButton w-3/12 text-right">
              <p className={`text-[34px] font-bold text-white ${inter.className}`} >
                $2,000,000
              </p>

              <div>

              </div>

            </div>

          </div>


        </div>
      </section>

      <section className="container relative -mt-14 z-50 mb-14">

        <div className="flex flex-col md:flex-row ">
          <div className="w-full  md:w-3/5  text-white  h-[446px] rounded-l-2xl mr-2">
            <Image src={three} alt="opertunity" className="w-full h-full rounded-t-2xl md:rounded-none md:rounded-l-2xl" />
          </div>
          {/* 60/40 ratio  */}
          <div className="w-full  md:w-2/5 md:mt-0 mt-3 ">
            <div className="flex  h-1/2 ">
              <div className="w-3/6 md:ml-4 mb-2">
                <Image src={one} alt="opertunity" className="w-full h-full " />

              </div>
              <div className="w-3/6  ml-4 mb-2 ">
                <Image src={two} alt="opertunity" className="w-full h-full  md:rounded-tr-2xl" />
              </div>


            </div>
            <div className="flex  h-1/2 ">
              <div className="w-3/6 md:ml-4 mt-2">
                <Image src={one} alt="opertunity" className="w-full h-full  rounded-bl-2xl md:rounded-none" />

              </div>
              <div className="w-3/6  ml-4 mt-2 ">
                <Image src={two} alt="opertunity" className="w-full h-full rounded-br-2xl" />
              </div>


            </div>

          </div>

        </div>


      </section>

      <section className="container">
        <div className="flex md:flex-row flex-col">
          <div className="w-full md:w-8/12 mr-2">


            {/* opertunity info  */}
            <div className="rounded-[14px] p-5  bg-white border  ">



              <div className="  font-normal text-xl leading-6 text-black">
                Amazing apartment with stunning skyline views to Manhattan and the Empire State. dont look further if you need a quick access to to Hudson Yards, Time Square, Hells Kitchen, Javits Center, the Summit Vanderbilt , Bryant Park, The Vessel and many more
              </div>

            </div>

            {/* map location card  */}
            <div className="rounded-[14px] p-5  bg-white border   mt-6">
              <h3 className=" font-bold text-[22px] leading-7 text-black pt-3 pb-5" > Location </h3>
              <div className=" xl:w-full h-full rounded-[14px]  ">
                <Map />

              </div>
            </div>

            {/* other oppertunity  card  */}


          </div>
          <div className="w-full  md:ml-2  md:w-4/12 flex md:flex-col flex-row mt-6 md:mt-0 ">

            <div className="p-5 w-1/2 md:w-full mr-1 md:mr-0  bg-white border rounded-[14px]">
              <h3 className="pt-3 pb-7 text-[22px] font-bold leading-7 text-black md:text-left text-center">Seller information</h3>
              <div className=" w-full  my-2 mb-3"  >
                <div className="bg-white  shadow  p-6  rounded-2xl  h-100    ">
                  {/* <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div> */}


                  <div>
                    <div id="locationHeading" className={`${inter.className} font-medium text-sm text-[#475467] `}>   Location</div>
                    <div id="locationValue" className="flex mt-1">   <span className="mr-2">

                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_534_35685)">
                          <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0" />
                          <path d="M10.0011 -0.000244141C5.70141 -0.000244141 2.03598 2.71351 0.623047 6.52151H19.3791C17.9661 2.71351 14.3007 -0.000244141 10.0011 -0.000244141Z" fill="#D80027" />
                          <path d="M10.0011 20.0003C14.3007 20.0003 17.9661 17.2865 19.3791 13.4785H0.623047C2.03598 17.2865 5.70141 20.0003 10.0011 20.0003Z" fill="black" />
                          <path d="M13.478 8.91303H10.8693C10.8693 8.43279 10.48 8.04346 9.99976 8.04346C9.51953 8.04346 9.13019 8.43279 9.13019 8.91303H6.52148C6.52148 9.3933 6.9398 9.7826 7.42004 9.7826H7.39105C7.39105 10.2629 7.78035 10.6522 8.26062 10.6522C8.26062 11.1324 8.64992 11.5217 9.13019 11.5217H10.8693C11.3496 11.5217 11.7389 11.1324 11.7389 10.6522C12.2192 10.6522 12.6085 10.2629 12.6085 9.7826H12.5795C13.0598 9.7826 13.478 9.3933 13.478 8.91303Z" fill="#FF9811" />
                        </g>
                        <defs>
                          <clipPath id="clip0_534_35685">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </span>  <span className={`${inter.className} font-medium text-base text-[#475467] `}> Cairo, Egypt</span></div>

                  </div>
                  <div className="mt-2">
                    <div id="locationHeading" className={`${inter.className} font-medium text-sm text-[#475467] `}>   Name</div>
                    <div id="locationValue" className="flex mt-1">     <span className={`${inter.className} font-medium text-base text-[#475467] `}> John Doe</span></div>

                  </div>
                  <div className=" mt-2">


                    <div className="flex justify-center">
                      <Link href="/opportunities"></Link>


                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="primaryDark" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Contact Seller</Button>
                        </DialogTrigger>
                        <SweetAlert pageName={"market-single"}>

                          <div className="flex justify-between ">
                            <h3 className="font-bold text-xl">
                              Contact Seller
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
                            <p  className="text-sm font-medium text-[#475467] ">Email</p>
                            <p  className="text-base font-medium text-[#344054]">johndoe@gmail.com</p>
                          </div>
                          <div>
                            <p  className="text-sm font-medium text-[#475467] ">Phone number  </p>
                            <p  className="text-base font-medium text-[#344054]">johndoe@gmail.com</p>
                          </div>

                        </SweetAlert >
                      </Dialog>


                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="pb-16">
        .
      </div>
    </div>
  )
}
