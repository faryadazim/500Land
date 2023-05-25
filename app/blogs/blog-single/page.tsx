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
import Vector from "@/public/Vector.png";
import share from "@/public/share.png";
import blogsingle from "@/public/blog-single.png";


import { Separator } from "@/components/ui/separator"

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function BlogSinglePage() {

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
        <h3 className="font-normal text-[20px] leading-6">Design Tips</h3>
        <h1 className="font-bold text-[34px] leading-10">How to speed up your ui design <br/>
          with nayzak</h1>
        <div className="container flex flex-row mx-auto md:pl-[5px] md:pt-[15px] sm:pl-[5px] sm:pt-[15px]">
          <span className="md:pr-2 sm:pr-2">
            <Image src={Vector} alt="500Land Logo" width={20} height={20} />
            
          </span>
          <span className="font-normal text-[16px] text-[#3C3C43] leading-5">
          Today 11:43pm
          </span>
          <span className="md:pl-6 sm:pl-6">
          <Image src={share} alt="500Land Logo"  />
          </span>
          <span className="font-normal text-[16px] md:pl-2 text-[#3C3C43] leading-5">
          Share
          </span>

       </div>

      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-[25px] mx-auto leading-8">About the position</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]"> On the 
        other hand, we denounce with righteous indignation and dislike men who are 
        so beguiled and demoralized by the charms of pleasure of the moment, so 
        blinded by desire, that they cannot foresee the pain and trouble that are 
        bound to ensue; and equal blame belongs to those who fail in their duty 
        through weakness of will, which is the same as saying through shrinking from 
        toil and pain. These cases are perfectly simple and easy to distinguish. In a 
        free hour, when our power of choice is untrammelled and when nothing prevents 
        our being able to do what we like best, every pleasure is to be welcomed and 
        every pain avoided.</p>
      </div>

      <div className="flex flex-col items-start py-14 px-[71px] gap-2.5 bg-[#FAFAFB] rounded-xl">
      <p className="font-normal text-[20px] lg:px-[120px] leading-[25px] text-center">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational</p>
        <h4 className="font-normal text-[20px] leading-[25px]">— Carl Sagan</h4>
      </div>


      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-[25px] mx-auto leading-8">1. Learning the basics</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        
      </div>


      <div className="rounded-xl mx-auto px-28">
          
            <Image src={blogsingle} alt="500Land Logo" width={912} height={597} />

            </div>

      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-[25px] mx-auto leading-8">2. Learning the basics</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        
      </div>

      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-[25px] mx-auto leading-8">3. Learning the basics</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-[20px]  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        
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
