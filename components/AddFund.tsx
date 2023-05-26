"use client"
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import redClock from "../public/500 Land — Dashboard/red-clock.png";
import sqft from "../public/500 Land — Dashboard/sqft.png";
import bigFarm from "../public/500 Land — Dashboard/Rectangle 22.png";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"; 

// export const metadata = {
//   title: "Add Fund",
// };

export default  function AddFundPage() {
  return (
     
        <DialogContent className="min-w-full min-h-screen p-0">
          <DialogHeader
            className="flex-row"
          >
            <div className={`flex flex-col sticky top-0 z-50 container`}> 
              <header className="    top-0 z-48">
                <div className="flex h-16 items-center justify-between py-5" >
                  <MainNav items={[]} isDarkNav={true} />
                  <span className="text-black font-bold text-[17px]">
                    Add Fund
                  </span>
                  <nav className="flex">
                    <span>
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

                    </span>
                  </nav>
                </div>
              </header> 
            </div> 
          </DialogHeader> 
        
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-2 w-full sm:w-4/5 xl:w-full "> 
              <div className="">
                <div className="row flex justify-between pt-6  ">
                  <div className="w-1/2 ">
                    <label htmlFor="Chad" className=" my-8 font-normal  text-[13px]">Share Amount</label>
                    <Input placeholder="First Name" className="bg-white mt-[6px]" /> 
                  </div>
                  <div className="w-1/2 pl-3">
                    <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Fund Amount</label>
                    <Input placeholder="Last Name" className="bg-white mt-[6px]" />

                  </div>
                </div>
                <div className="row flex justify-between pt-6">
                  <div className="w-full ">
                    <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Email</label>
                    <div className="flex flex-wrap">
                      <Input placeholder="1234 1234 1234 1234" className="w-full rounded-b-none bg-white mt-[6px]  border-b-0" />

                      <Input placeholder="MM/YY" className=" rounded-t-none basis-2/4 rounded-r-none border-r-0 bg-white w-1/2 " />
                      <Input placeholder="CVC" className=" rounded-t-none rounded-l-none basis-2/4 bg-white w-1/2 " />
                    </div>


                  </div>

                </div>
                <div className="font-normal text-[13px] mt-4">
                  I also agree to the updated <span className="underline text-customDarkGreen">  Terms of Service</span>, Payments Terms of Service, and I acknowledge the Privacy Policy.
                </div>
                <div className="font-normal text-[13px] mt-4">
                  <Button variant="primaryDark" className="w-44 p-5  mr-2    text-center     rounded-full font-bold lg:font-semibold md:font-normal  md:my-1   "
                    style={{ fontFamily: "Basier Square Regular" }}


                  > <Link href="/dashboard/dashboard-main"> Confirm and Pay</Link></Button>
                </div>

              </div>
              {/* Right container starts here */}
              <div>
                <div style={{ backgroundColor: "#F8F8F8", borderRadius: "20px" }}>
                  <div className="pt-4 pb-3 px-4">
                    <div className="flex flex-row items-center">
                      <Image
                        src={bigFarm}
                        alt="Image Not Found"
                        height={84}
                        width={84}
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ps-3">
                        <div
                          className="line-clamp-2"
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "#101010",
                          }}
                        >
                          Big farm in the heart of the city and have everything
                        </div>
                        <div className="flex flex-row items-center mt-2">
                          <div className="flex flex-row items-center">
                            <Image
                              src={sqft}
                              alt="Image Not Found"
                              height={14}
                              width={14}
                            />
                            <div
                              className="ps-2"
                              style={{
                                fontSize: "12px",
                                fontWeight: "400",
                                color: "#626262",
                              }}
                            >
                              2000 SQFT
                            </div>
                          </div>
                          <div className="flex flex-row items-center ms-4">
                            <Image
                              src={sqft}
                              alt="Image Not Found"
                              width={11}
                            />
                            <div
                              className="ps-2"
                              style={{
                                fontSize: "12px",
                                fontWeight: "400",
                                color: "#626262",
                              }}
                            >
                              Egypt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                      <Image
                        src={redClock}
                        alt="Image Not Found"
                        height={16}
                        width={16}
                      />
                      <div
                        style={{
                          color: "#EA4335",
                          fontWeight: "400",
                          fontSize: "12px",
                        }}
                        className="ps-2"
                      >
                        Fund close at 12 March
                      </div>
                    </div>
                  </div>
                  <div
                    className="py-3 px-4"
                    style={{
                      borderTop: "1px solid #E1E1E1",
                      borderBottom: "1px solid #E1E1E1",
                    }}
                  >
                    <div
                      className="mb-1 text-lg md:text-xl xl:text-2xl"
                      style={{
                        fontWeight: "400",
                        color: "#101010",
                      }}
                    >
                      Price details
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#626262",
                        }}
                      >
                        Fund Amount
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#101010",
                        }}
                      >
                        $100
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#626262",
                        }}
                      >
                        Taxes
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#101010",
                        }}
                      >
                        $2
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#626262",
                        }}
                      >
                        500 Land Fees
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#101010",
                        }}
                      >
                        $1
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between pb-4 pt-3 px-4">
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#101010",
                      }}
                    >
                      Total
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#101010",
                      }}
                    >
                      $103
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
        </DialogContent>
      
    
  );
}
