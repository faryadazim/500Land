"use client";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"

import { buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function MarketplacePage() {

  return (
    <div className="bg-customlightGrey">
      <section className={`hero-section relative  bg-customDarkGreen pb-10  ${inter.className} z-30`}>
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
                Marketplace
              </h3>



            </div>

          </div>


        </div>
      </section>


      <section className="container my-6">
        <div className="header flex  mt-20">

          <div className="w-1/3">    <Input placeholder="Search for Lands" className="" /></div>
          <div className="w-1/3 text-right">Showing 10 out of 1,234 results</div>
          <div className="w-1/3 text-right  flex justify-end">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="grapes">Pakistan</SelectItem>
                  <SelectLabel>UAE</SelectLabel>
                  <SelectItem value="apple">Oman</SelectItem>
                  <SelectItem value="banana">Egypt</SelectItem>
                  <SelectItem value="blueberry">India</SelectItem>
                  <SelectItem value="pineapple">USA</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

        </div>

        <div className="flex flex-wrap  mt-6">
          {[1, 2, 3, 5, 6, 7, 8, 9, 4].map((x: any): any => {
            return (
              <div className="md:w-4/12  my-2 md:my-2" key={x}>
                <div className="bg-white shadow-lg   rounded-2xl  h-100  mx-2 ">
                  {/* <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div> */}
                  <div className="relative h-[179px] text-center flex justify-center  ">
                    <Image
                      src="/images/Img.png"
                      alt="Image"
                      // fill
                      width={384}
                      height={179}
                      className="rounded-t-2xl"
                    // style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <span>Bradley,CA</span>
                      <span>2000 SQFT</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Lynch Canyon Road</h2>
                    <div className="flex justify-start">
                      <span className="price   font-semibold text-base leading-5 text-black">USD,1,023,550</span>
                    </div>
                    <div className="flex justify-center">
                      <Link href="/opportunities" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2   w-full px-6 rounded-full font-bold  py-6 my-2")} style={{ fontFamily: "sans-serif" }}>Contact Seller</Link>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end my-5">

          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white">

                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
                <span className="text-black px-2">Previous</span>
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-customDarkGreen text-white px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">1</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">2</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">3</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">4</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">5</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">6</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">7</a>
              <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white">
                <span className="text-black px-3">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>

      </section>
      <div className="mb-10">.</div>
    </div>
  )
}
