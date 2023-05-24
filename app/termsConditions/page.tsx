"use client";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
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



export default async function TermsConditionsPage() {

  return (
    <div className=" ">
      <section className={`hero-section relative  bg-customDarkGreen   ${inter.className} z-30`}>
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
        </div>
      </section>
      <section className="container my-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati odio quos nulla, placeat adipisci consequatur officia quisquam natus illum expedita itaque delectus magni doloremque, libero, animi provident sint inventore!

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
