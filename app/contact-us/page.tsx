"use client";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input-field"
import { Textarea } from "@/components/ui/textarea"


import { buttonVariants } from "@/components/ui/button"
import Vector from "@/public/images/Image.png";

import { Separator } from "@/components/ui/separator"

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function opportunitiesPage() {

  return (
    <div className="bg-customlightGrey">
      <section className={`hero-section relative  bg-customDarkGreen pb-5  ${inter.className} z-30`}>
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


        </div>
      </section>

      <section className="container my-12">


        <div className="flex justify-between">
          <div id="contactform" className="w-1/2    mr-12 py-16">

            <h1 className="font-bold text-4xl pt-8 pb-2">Get in touch</h1>
            <p className="pt-6">Our friendly team would love to hear from you.</p>

            <div className="row flex justify-between pt-5  ">
              <div className="w-1/2 pr-3">
                <label htmlFor="Chad" className=" my-8   text-sm">First Name</label>
                <Input placeholder="First Name" className="" />

              </div>
              <div className="w-1/2 pl-3">
                <label htmlFor="Chad" className=" my-8   text-sm">Last Name</label>
                <Input placeholder="Last Name" className="" />

              </div>
            </div>
            <div className="row flex justify-between pt-5">
              <div className="w-full pr-3">
                <label htmlFor="Chad" className=" my-8   text-sm">Email</label>
                <Input placeholder="you@company.com" />

              </div>
          
            </div>
            <div className="row flex justify-between pt-5">
              <div className="w-full pr-3">
                <label htmlFor="Chad" className=" my-8   text-sm">Phone </label>
                <PhoneInput placeholder="you@company.com" />

              </div>
          
            </div>
            <div className="row flex justify-between pt-5">
              <div className="w-full pr-3">
                <label htmlFor="Chad" className=" my-8   text-sm">Phone </label>
                <Textarea   placeholder="Leave us a message" />


              </div>
          
            </div>
            <div className="flex justify-center mt-5">
                      <Link href="/opportunities" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2   w-full px-6 rounded-full font-bold  py-6 my-2")} style={{ fontFamily: "sans-serif" }}>Send Message</Link>
                    </div>


          </div>
          <div id="bgImage" className="w-1/2  border  ml-12" >
            <Image src={Vector} alt='Image Not Found' width={576} height={800} />

          </div>
        </div>


      </section>


      <footer className="p-6 bg-customGreen py-10 ">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {[1, 2, 3, 4, , 5].map((x) => {
            return <div className="flex flex-col space-y-4" key={x}>
              <h2 className="font-bold">Website</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-480">
                <a rel="noopener noreferrer" href="#" className="font-semibold">Overview</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Features</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Solutions</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Tutorials</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Pricing</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Releases</a>
                {/* <a rel="noopener noreferrer" href="#" className="font-semibold">IntelliSense</a> */}
              </div>
            </div>
          })}
        </div>
        <div className="container mt-8  ">
          <Separator />
        </div>
        <div className=" container flex items-center justify-between px-6  pt-6 text-sm">
          <span className="dark:text-gray-480">  <Image src="/images/logoDark.png" alt="500Land Logo" width={48}
            height={48}
            quality={100} /></span>
          <span className="dark:text-gray-480">© Copyright 2023 500 Land. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
