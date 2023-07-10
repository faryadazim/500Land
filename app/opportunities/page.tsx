"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";

import { Progress } from "@/components/ui/progress";

import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { getOpportunities } from "@/sanity/schemas/sanity-utils";

const inter = Poppins({
  subsets: ["latin"],
  weight: "100",
});

export default async function OpportunituesPage() {
  const opportunities = await getOpportunities();
  console.log("opportunities", opportunities);

  return (
    <div className="bg-customlightGrey">
      <section
        className={`hero-section relative  bg-customDarkGreen   ${inter.className} z-30`}
      >
        <div className={`flex   flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-48">
            <div className="flex h-16 items-center justify-between py-5">
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link
                  href="/contact-us"
                  className={cn(
                    "  items-center text-lg   sm:text-sm text-white tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  "
                  )}
                  style={{ fontFamily: "Basier Square Regular" }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/account/create-account"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "outline" }),
                    "px-4 text-white w-100 px-10 rounded-full font-normal"
                  )}
                  style={{ fontFamily: "Basier Square Regular" }}
                >
                  Login
                </Link>
              </nav>
            </div>
          </header>

          <div className="container flex justify-between my-10 ">
            <div className="opertunityInfo">
              <h3
                className=" font-bold  sm:text-2xl text-3xl md:text-[34px] flex items-center text-white"
                style={{ fontFamily: "sans-serif" }}
                id="oppertunityTitle"
              >
                Opportunites
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-6">
        <div className="header flex  mt-20">
          <div className="w-1/2 md:w-1/3  h-9  flex items-center">
            {" "}
            <Input placeholder="Search for Lands" className="  bg-white w-80" />
          </div>
          <div className="w-1/3  flex h-9   justify-end items-center  text-right font-normal text-[17px] text-black ">
            <span className="hidden lg:flex">
              Showing 10 out of 1,234 results
            </span>
          </div>
          <div className="w-1/2 md:w-1/3 text-right  flex justify-end items-center h-9 ">
            <Select>
              <SelectTrigger className="w-[180px] bg-white rounded-lg  ">
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
          </div>
        </div>

        <div className="flex flex-wrap   mt-6 justify-between">
          {opportunities.map((x: any): any => {
            return (
              <div className="md:w-[32%] w-full  my-2 mb-3" key={x.name}>
                <div className="bg-white  shadow-md  rounded-2xl  h-100">
                  {/* <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div> */}
                  <div className="relative h-[179px] text-center flex justify-center  ">
                    <Image
                      src={x.image[0]}
                      alt="Image"
                      fill
                      // width={384}
                      // height={179}
                      className="rounded-t-2xl"
                      // style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="lg:p-6 p-4 ">
                    <div className="flex justify-between">
                      <span className="font-normal text-[13px]">
                        {x.location}
                      </span>
                      <span className="font-normal text-[13px]">{x.area}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">
                      <Link href={"/opportunities/" + x.slug}> {x.name}</Link>
                    </h2>
                    <div className="flex justify-between">
                      <span className="title">Requested Fund</span>
                      <span className="price  md:mb-0 mb-1  f  font-semibold text-base leading-5 text-black">
                        {x.currency} {x.requestedFund}
                      </span>
                    </div>
                    <div className="my-4 ">
                      <Progress value={75} />
                    </div>
                    <div className="flex justify-center">
                      <Link
                        href={"/opportunities/" + x.slug}
                        className={cn(
                          buttonVariants({ variant: "primaryDark" }),
                          "  mr-2  w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  "
                        )}
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Funds start from $100 / Share
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <p className="h-5 font-normal text-[15px] leading-5 flex items-center text-center text-green-900 md:mt-0 mt-2 ">
                        102 Investors - 3 Share Left
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="  flex  justify-center items-center md:justify-end my-5">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm  "
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 pl-4 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8327 9.99996H4.16602M4.16602 9.99996L9.99935 15.8333M4.16602 9.99996L9.99935 4.16663"
                  stroke="#344054"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-black px-2 hidden md:flex">Previous</span>
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-customDarkGreen text-white px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white"
            >
              3
            </a>
            <a
              href="#"
              className="relative md:hidden inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white"
            >
              ...
            </a>
            <a
              href="#"
              className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white "
            >
              4
            </a>
            <a
              href="#"
              className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white "
            >
              5
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white"
            >
              6
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white"
            >
              7
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2  pr-4  text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  bg-white"
            >
              <span className="text-black px-3 hidden md:flex">Next</span>

              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16602 9.99996H15.8327M15.8327 9.99996L9.99935 4.16663M15.8327 9.99996L9.99935 15.8333"
                  stroke="#344054"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
      </section>
      <div className="mb-10">.</div>
    </div>
  );
}
