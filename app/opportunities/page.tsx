
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
                <Link href="/dashboard" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-white w-100 px-10 rounded-full font-bold")}>LOGIN</Link>
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
                <div className="area flex">




                  <span>  <Image src={VectorLocation} alt='Image Not Found' width={12} height={12} />

                  </span>  <span className="px-4">2000 SQFT</span>
                </div>
                <div className="location flex  ">
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
          <div className="w-8/12">

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
            <div className="rounded-2xl p-5  bg-white border   mt-6">
              <h3 className=" font-semibold text-xl leading-7 text-black"> Location </h3>
              <Image src={map} alt="opertunity" className="w-full h-full rounded-2xl  " />



            </div>

          </div>
          <div className="w-4/12 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quasi neque vero magnam, dolorum minus?
          </div>

        </div>
      </section>

      <div className="pb-16">
        .
      </div>
    </div>
  )
}
