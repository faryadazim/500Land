"use client";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
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

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function opportunitiesPage() {

  return (
    <div className="bg-customlightGrey">
      <section className={`hero-section relative  bg-customDarkGreen pb-16  ${inter.className} z-30`}>
        <div className={`flex   flex-col sticky top-0 z-50`}>
          <header className="container  border-t-pink-0 border-l-pink-0 border-t-pink-0   top-0 z-40">

            {/* navigation  */}
            <div className="flex h-16 items-center justify-between pt-7" >
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link href="/blogs" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3 hidden md:flex")}>Blogs</Link>
                <Link href="/contactus" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3 hidden  md:flex ")}>CONTACT US</Link>
                <Link href="/dashboard" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "  text-white w-100 px-10 rounded-full font-bold")}>LOGIN</Link>
              </nav>
            </div>
          </header>
          <div className=" my-5 ">
            <Separator className=" bg-white" />
          </div>

          <div className="container flex justify-between ">
            <div className="opertunityInfo">
              <h3 className="not-italic font-semibold text-4xl flex items-center text-white" style={{ fontFamily: "sans-serif" }} id="oppertunityTitle">
                Big land in Sokhna with Perfect Location
              </h3>

              <div className=" flex my-2 text-white ">
                <div className="  flex flex-row items-center">




                  <span>  <Image src={VectorLocation} alt='Image Not Found' width={14} height={14} />

                  </span>  <span className="px-4 text-med font-normal">2000 SQFT</span>
                </div>
                <div className="flex flex-row items-center ">
                  <span> <Image src={Vector} alt='Image Not Found' width={12} height={12} />
                  </span>  <span className="px-4">Bradley, CA</span>
                </div>
              </div>


            </div>
            <div className="shareButton">


              <Link href="/dashboard" className={cn(buttonVariants({ size: "sm", variant: "primary" }), "px-4     w-100 px-10 rounded-full font-bold")} style={{ fontFamily: "sans-serif" }}>Share <span>
                <Image src={Share} alt='Image Not Found' width={18} height={18} /></span></Link>

            </div>

          </div>


        </div>
      </section>

      <section className="container relative -mt-14 z-50 mb-14">

        <div className="flex">
          <div className="w-3/5 bg-black text-white w-[696px] h-[446px] rounded-l-2xl mr-2">
            <Image src={three} alt="opertunity" className="w-full h-full rounded-l-2xl" />
          </div>
          {/* 60/40 ratio  */}
          <div className="w-2/5  ">
            <div className="flex  h-1/2 ">
              <div className="w-3/6 ml-4 mb-2">
                <Image src={one} alt="opertunity" className="w-full h-full  " />

              </div>
              <div className="w-3/6  ml-4 mb-2 ">
                <Image src={two} alt="opertunity" className="w-full h-full rounded-tr-2xl" />
              </div>


            </div>
            <div className="flex  h-1/2 ">
              <div className="w-3/6  ml-4 mt-2">
                <Image src={one} alt="opertunity" className="w-full h-full  " />

              </div>
              <div className="w-3/6  ml-4 mt-2 ">
                <Image src={two} alt="opertunity" className="w-full h-full rounded-br-2xl" />
              </div>


            </div>

          </div>

        </div>


      </section>

      <section className="container">
        <div className="flex">
          <div className="w-8/12 mr-2">


            {/* opertunity info  */}
            <div className="rounded-2xl p-5  bg-white border  ">


              <div className="flex justify-between pb-2">
                <span className="  font-normal text-base leading-5 text-black">Requested Fund</span>
                <span className=" font-semibold text-base leading-5 text-black">USD 1,023,550</span>
              </div>

              <div className=" flex py-1 items-center justify-between">

                <Progress value={75} className="mr-2" />

                <div className="  text-right">
                  70%
                </div>
              </div>
              <div className="  font-normal text-xl leading-6 text-black">
                Amazing apartment with stunning skyline views to Manhattan and the Empire State. don t look further if you need a quick access to to Hudson Yards, Time Square, Hells Kitchen, Javits Center, the Summit Vanderbilt , Bryant Park, The Vessel and many more
              </div>

            </div>

            {/* map location card  */}
            <div className="rounded-2xl p-5  bg-white border   mt-6">
              <h3 className=" font-bold text-xl leading-7 text-black pt-3 pb-5" > Location </h3>
              <div className="w-full h-full rounded-2xl  ">
                <Map />

              </div>
            </div>

            {/* other oppertunity  card  */}
            <div className="rounded-2xl p-5  bg-white border   mt-6 pb-9">
              <h3 className=" font-bold text-xl leading-7 text-black pt-3 pb-5" > Other Oppartunity </h3>
              {[1, 2, 3].map((x: any): any => {
                return <>
                  <div className="w-full flex">

                    <div className="w-2/5">
                      <Image src={map} alt="opertunity" className="w-full h-full rounded-2xl  " />

                    </div>
                    <div className="w-3/5 py-1 px-3">

                      <h1 className="font-bold">North Wilkesboro, Wilkes County</h1>

                      <div className="location flex items-center py-1">
                        <span> <Image src={dolar} alt='Image Not Found' width={16} height={16} />
                        </span>  <span className="px-4  text-sm">30% chance (high confidence)</span>
                      </div>
                      <div className="location flex items-center  py-1">
                        <span> <Image src={details} alt='Image Not Found' width={12} height={12} />
                        </span>  <span className="px-4  text-sm">2000 SQFT</span>
                      </div>
                      <div className="location flex  items-center py-1">
                        <span> <Image src={location} alt='Image Not Found' width={12} height={12} />
                        </span>  <span className="px-4 text-xs"> Wilkesboro, Wilkes County</span>
                      </div>
                      <div className="flex justify-between pb-2 text-base mt-2">
                        <span className="  font-normal text-base leading-5 text-black">Requested Fund</span>
                        <span className=" font-semibold text-base leading-5 text-black">USD 1,023,550</span>
                      </div>

                      <div className=" flex pb-1 items-center justify-between">

                        <Progress value={75} className="mr-2" />

                        <div className="  text-right">
                          70%
                        </div>
                      </div>
                    </div>
                  </div>

                {x!==3 &&   <Separator className=" bg-gray-200 my-3" />}
                </>
              })}

            </div>

          </div>
          <div className="ml-2 w-4/12">
            {/* opertunity info  */}
            <div className="p-5 bg-white border rounded-2xl">
              <h3 className="pt-3 pb-7 text-xl font-bold leading-7 text-black">Count Your Achievements</h3>
              <Slider className="mt-5 mb-2" defaultValue={[33]} max={100} step={1} />
              <div className="my-4 w-full flex">
                <Link href="/dashboard" className={cn(buttonVariants({ size: "sm", variant: "primary" }), "w-full px-10 py-5 font-bold rounded-full")} style={{ fontFamily: "sans-serif" }}>
                  Fund $1200
                </Link>
              </div>
              <div className="justify-center flex">
                <p className="flex items-center h-5 text-sm font-semibold leading-5 text-center text-green-900">
                 You wont be charged yet.
                </p>
              </div>
            </div>
            <div className="p-5 bg-customGreen customBlack border rounded-2xl mt-6">
              <p className="pt-3 pb-5 text-xl font-bold leading-7 text-black">Share your referral link and earn $100 in Share value for every friend that signs up and invests. Plus, your friend will also receive $100 in Share value. Start referring today and grow your rewards</p>
              <Button  onClick={async()=>{await navigator.clipboard.writeText("asd")}} className={cn(buttonVariants({ size: "sm", variant: "primary" }), "w-full px-10  font-bold rounded-full bg-black text-white py-6 border-2 border-white")} style={{ fontFamily: "sans-serif"   }}>
            <span><Image src={copy} alt='Image Not Found' width={18} height={18} /></span>      Copy Link
                </Button>
             
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
