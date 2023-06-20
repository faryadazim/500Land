"use client";
import { Button } from "@/components/ui/button"
import { cn, formatDate } from "@/lib/utils"
import { PortableText, toPlainText } from "@portabletext/react";

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
import background from "@/public/background.png";
import balti from "@/public/balti.png";
import camera from "@/public/camera.png";
import capsule from "@/public/capsule.png";
import message from "@/public/message.png";
import paint from "@/public/paint.png";
import Sun from "@/public/Sun.png";
import tablet from "@/public/tablet.png";
import thumb from "@/public/thumb.png";
import Box from "@/public/Box.png";


import project from "@/sanity/schemas/project-schema";
import { getProjects } from "@/sanity/schemas/sanity-utils"

import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer"
import { Project } from "@/sanity/types/Project";

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function BlogsPage() {
  const projects = await getProjects();
  console.log(projects);
 
  // return (
  //   <div className="">
  //     <h1 className="text-7xl font-extrabold">Hello I am
  //       <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Muhammad Hamza</span></h1>
  //     <p className="mt-3 text-xl text-gray-600">Hello everyone! check out my projects</p>
  //     <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
  //   <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //     {projects.map((project) => (
  //       <Link 
  //       href={`/projects/${project.slug}`}
  //       key={project._id} 
  //       className="border-2 border-gray-500 rounded-lg p-3 hover:border-blue-500 hover:scale-105 transition shadow-lg hover:shadow-slate-800">
  //         {project.image && (
  //           <Image
  //             src={project.image}
  //             alt={project.name}
  //             width={300}
  //             height={355}
  //             className="object-cover rounded-lg border border-gray-500"
  //           />
  //         )}
  //         <div className="mt-2 font-extrabold  bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>
  //       </Link>

  //     ))}
  //     </div>
  //   </div>
  // )

  return (
    <div className=" ">
      <section className={`hero-section relative   bg-white   ${inter.className} z-30`}>
        <div className={`flex   flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-48">
            <div className="flex h-16 items-center justify-between py-5" >
              <MainNav items={marketingConfig.mainNav} isDarkNav={true} />
              <nav className="flex">
                <Link href="/contact-us" className={cn("  items-center text-lg   sm:text-sm text-black tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  ")} style={{ fontFamily: "Basier Square Regular" }}>Contact Us</Link>
                <Link href="/account/create-account" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-black w-100 px-10 rounded-full font-normal border-black")} style={{ fontFamily: "Basier Square Regular" }}>Login</Link>
              </nav>
            </div>
          </header>
        </div>
      </section>
      <section className="container my-12">
        <div className=" container flex lg:flex-row md:flex-col sm:flex-col items-center justify-between px-6 pt-6 text-sm">
          <span className="">
            <h1 className="font-bold text-[72px] leading-[80px]">Blog</h1>
          </span>
          <span className="">
            <form className="md:flex hidden flex-row flex-wrap items-center mr-3">
              <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="voice-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            
                              border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                            
                            " placeholder="Search..." required />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {/* <span className='flex rounded-md' style={{ backgroundColor: 'rgba(150, 150, 150, 0.2)', padding: '5px 8px 5px 8px' }}> */}

                  <svg width={30} height={18} viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width={30} height={17} rx={4} fill="#969696" fillOpacity="0.2" />
                    <path d="M7.125 13.625C6.65 13.625 6.23958 13.4542 5.89375 13.1125C5.54792 12.7708 5.375 12.3583 5.375 11.875C5.375 11.3833 5.54792 10.9688 5.89375 10.6312C6.23958 10.2937 6.65 10.125 7.125 10.125H7.875V7.875H7.125C6.65 7.875 6.23958 7.70417 5.89375 7.3625C5.54792 7.02083 5.375 6.60833 5.375 6.125C5.375 5.63333 5.54583 5.21875 5.8875 4.88125C6.22917 4.54375 6.64167 4.375 7.125 4.375C7.61667 4.375 8.03125 4.54583 8.36875 4.8875C8.70625 5.22917 8.875 5.64167 8.875 6.125V6.875H11.125V6.125C11.125 5.64167 11.2958 5.22917 11.6375 4.8875C11.9792 4.54583 12.3917 4.375 12.875 4.375C13.3667 4.375 13.7812 4.54583 14.1187 4.8875C14.4562 5.22917 14.625 5.64167 14.625 6.125C14.625 6.6 14.4542 7.01042 14.1125 7.35625C13.7708 7.70208 13.3583 7.875 12.875 7.875H12.125V10.125H12.875C13.3583 10.125 13.7708 10.2958 14.1125 10.6375C14.4542 10.9792 14.625 11.3917 14.625 11.875C14.625 12.35 14.4542 12.7604 14.1125 13.1062C13.7708 13.4521 13.3583 13.625 12.875 13.625C12.4 13.625 11.9896 13.4521 11.6438 13.1062C11.2979 12.7604 11.125 12.35 11.125 11.875V11.125H8.875V11.875C8.875 12.35 8.70417 12.7604 8.3625 13.1062C8.02083 13.4521 7.60833 13.625 7.125 13.625ZM7.125 12.625C7.34167 12.625 7.52083 12.5521 7.6625 12.4062C7.80417 12.2604 7.875 12.0833 7.875 11.875V11.125H7.125C6.91667 11.125 6.73958 11.1979 6.59375 11.3438C6.44792 11.4896 6.375 11.6667 6.375 11.875C6.375 12.075 6.44792 12.25 6.59375 12.4C6.73958 12.55 6.91667 12.625 7.125 12.625ZM12.875 12.625C13.0917 12.625 13.2708 12.5521 13.4125 12.4062C13.5542 12.2604 13.625 12.0833 13.625 11.875C13.625 11.6583 13.5521 11.4792 13.4062 11.3375C13.2604 11.1958 13.0833 11.125 12.875 11.125H12.125V11.875C12.125 12.0833 12.1979 12.2604 12.3438 12.4062C12.4896 12.5521 12.6667 12.625 12.875 12.625ZM8.875 10.125H11.125V7.875H8.875V10.125ZM7.125 6.875H7.875V6.125C7.875 5.91667 7.80208 5.73958 7.65625 5.59375C7.51042 5.44792 7.33333 5.375 7.125 5.375C6.925 5.375 6.75 5.44792 6.6 5.59375C6.45 5.73958 6.375 5.91667 6.375 6.125C6.375 6.325 6.44792 6.5 6.59375 6.65C6.73958 6.8 6.91667 6.875 7.125 6.875ZM12.125 6.875H12.875C13.0833 6.875 13.2604 6.80208 13.4062 6.65625C13.5521 6.51042 13.625 6.33333 13.625 6.125C13.625 5.90833 13.5521 5.72917 13.4062 5.5875C13.2604 5.44583 13.0833 5.375 12.875 5.375C12.675 5.375 12.5 5.44792 12.35 5.59375C12.2 5.73958 12.125 5.91667 12.125 6.125V6.875Z" fill="#656565" />
                    <path d="M18.9688 13.5V5.5H19.9375V9.46875H20.0313L23.625 5.5H24.8906L21.5313 9.10937L24.8906 13.5H23.7188L20.9375 9.78125L19.9375 10.9062V13.5H18.9688Z" fill="#656565" />
                  </svg>

                  {/* </span> */}
                </button>
              </div>
            </form>
          </span>
        </div>
        {/* Flex box */}

        <div className="flex lg:flex-row md:flex-row flex-col  mx-auto py-10">
          <div className="basis-[45%] pb-5 rounded-3xl bg-[#FFB24B]">
            <Image src={background} alt="500Land Logo" width={701} height={500}
              className="w-full" />
          </div>
          <div className="basis-[55%] px-10 pt-[120px] mx-auto">
            <h3 className="font-normal text-[16px] leading-5 text-[#3C3C43]">2 October 2023</h3>
            <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px]" style={{ fontFamily: "Inter,sans-serif" }}>How to speed up your ui design<br />
              with nayzak</h2>
            <p className="font-normal text-[20px] leading-[25px] pt-4 pr-14">Everyone in my team works towards the samegoal. This
              enabled our teams to ship new ideas and feel more capable. Podcasting
              operational — change management inside of workflo...</p>

            <button className="mt-[32px] px-[77px] py-[14px] rounded-[50px] bg-[#70F09C] font-bold text-[15px] leading-[20px] text-center" style={{ fontFamily: "Inter,sans-serif" }}> <Link href="/blogs/blog-single"> Read more</Link></button>
          </div>
        </div>

        {/* Card Layout */}

        <div className="container grid lg:grid-cols-3 rounded-xl mx-auto pb-[95px] pt-[80px] gap-x-8 gap-y-20 sm:grid-cols-1 md:grid-cols-2">
          {
            projects.map((i: Project) => {
              return <>
                <div className="md:items-center ">
                  <Link
                    href={`/projects/${i.slug}`}
                    key={i._id}
                  >
                    <div className="rounded-2xl overflow-hidden">
                      {i.image && (
                        <Image
                          src={i.image}
                          alt={i.name}
                          width={300}
                          height={355}
                          className="hover:scale-125 duration-1000"
                        />
                      )}

                      {/* <Image src={message} alt="500Land Logo" className="hover:scale-125 duration-1000" /> */}
                    </div>
                    <h3 className="font-normal pt-4 text-[16px] leading-5 text-[#3C3C43]">{formatDate(i._createdAt)}</h3>
                    <h3 className="font-bold text-[28px] leading-[34px] pt-2" style={{ fontFamily: "Inter,sans-serif" }}>
                      <Link href="/blogs/blog-single"> {i.name} </Link></h3>

                    <p className="font-normal text-[19px] leading-[25px] pt-3 mx-auto ">
                      {/* <PortableText   value={i.content}/> */}
                      {toPlainText(i.content).slice(0, 100)}...

                      </p>
                  </Link>
                </div>

                {/* <div className="md:items-center ">
                  <div className="rounded-2xl overflow-hidden">
                    <Image src={camera} alt="500Land Logo" className="hover:scale-125 duration-1000" />
                  </div>
                  <h3 className="font-normal pt-4 text-[16px] leading-5 text-[#3C3C43]">2 October 2023</h3>
                  <h3 className="font-bold text-[28px] leading-[34px] pt-2" style={{ fontFamily: "Inter,sans-serif" }}>   <Link href="/blogs/blog-single"> Tips how to become a better designer </Link></h3>

                  <p className="font-normal text-[19px] leading-[25px] pt-3 mx-auto ">Everyone in
                    my team works towards the samegoal. This enabled our team…</p>
                </div>

                <div className="md:items-center ">
                  <div className="rounded-2xl overflow-hidden">
                    <Image src={balti} alt="500Land Logo" className="hover:scale-125 duration-1000" />
                  </div>
                  <h3 className="font-normal pt-4 text-[16px] leading-5 text-[#3C3C43]">2 October 2023</h3>
                  <h3 className="font-bold text-[28px] leading-[34px] pt-2" style={{ fontFamily: "Inter,sans-serif" }}>   <Link href="/blogs/blog-single"> 8 proven ways to conquer design fatigue </Link></h3>

                  <p className="font-normal text-[19px] leading-[25px] pt-3 mx-auto ">Everyone in
                    my team works towards the samegoal. This enabled our team…</p>
                </div> */}
              </>
            })
          }



        </div>

      </section>

      <Footer />

    </div>
  )
}
