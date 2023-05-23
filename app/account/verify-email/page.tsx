
"use client"
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
import React, { useRef, ChangeEvent, useState } from 'react';


import { buttonVariants } from "@/components/ui/button"
import Vector from "@/public/images/Image.png";

import { Separator } from "@/components/ui/separator"


const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function VerifyEmailPage() {

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [isEmailVerified, setIsEmailVerified] = useState(true)
  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const nextIndex = index + 1;

    if (inputRefs.current[index]) {
      inputRefs.current[index]!.value = value; // Non-null assertion here
    }

    if (value && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex]!.focus(); // Non-null assertion here
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if ((key === 'Backspace' || key === 'Delete') && index > 0 && !event.currentTarget.value) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (index: number, event: React.ClipboardEvent<HTMLInputElement>) => {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData.getData('text');
    const otpNumbers = pastedText.replace(/\D/g, ''); // Remove non-digit characters

    for (let i = 0; i < otpNumbers.length && i < inputRefs.current.length; i++) {
      if (inputRefs.current[index + i]) {
        inputRefs.current[index + i]!.value = otpNumbers[i]; // Non-null assertion here
      }
    }

    if (inputRefs.current[index + otpNumbers.length]) {
      inputRefs.current[index + otpNumbers.length]!.focus(); // Non-null assertion here
    }
  };

  const handleRefUpdate = (index: number, ref: HTMLInputElement | null) => {
    inputRefs.current[index] = ref;
  };

  return (
    // <div className="h-[100vh] bg-grey-600 flex"  style={{ backgroundImage: "url('/images/Image.png  ')", minHeight: "100vh"  , minWidth:"50vw" , backgroundRepeat:"no-repeat"}}>
    //   <div className="w-1/2  "  >First Tolo lala</div>
    //   <div className="w-1/2">Second O Maa Goo</div>
    //   {/* <header className="container  border-t-pink-0 border-l-pink-0 border-t-pink-0   top-0 z-40">

    //     NavLogo
    //   </header>
    //   <section className="container my-12">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.


    //   </section> */}

    // </div>
    <>
      <div className="h-screen w-screen   bg-cover bg-center -z-10" style={{ backgroundImage: "url('/images/bg.jpg')", position: "fixed" }}>
        <div className="h-screen"
          style={{}}
        >
          <div className="flex justify-center h-screen relative top-0 right-0">

            <div className="w-1/2 h-screen hidden md:flex  i  py-24">

            </div>
            <div className="w-full md:w-1/2 bg-white h-screen flex   py-24">

             
            </div>

            <div className="container flex absolute top-0 z-20 ">

              <div className="w-full md:w-1/2 h-screen hidden md:flex  items-end justify-start font-bold py-24">
                <h1 className="  pl-4 text-6xl font-bold text-white ">
                  Invest in land, <br />
                  invest in your future.
                </h1>


              </div>
              <div className="w-full md:w-1/2 bg-blue h-screen md:pl-10 lg:pl-0 flex items-center justify-center py-24">

                {
                  !isEmailVerified ? <div className="">

                    <h1 className="font-bold text-3xl pt-8 pb-2 text-center">Verify your email</h1>
                    <p className="text-center">We have sent an activation code to email



                    </p>
                    <div className="flex flex-col space-y-16 mt-6">
                      <div className="flex flex-row items-center justify-between mx-auto  w-[380px]">
                        {Array.from({ length: 5 }, (_, index) => (
                          <div className="w-12 h-12" key={index}>
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-1 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              maxLength={1}
                              onChange={(event) => handleInputChange(index, event)}
                              onKeyDown={(event) => handleKeyDown(index, event)}
                              onPaste={(event) => handlePaste(index, event)}
                              ref={(ref) => handleRefUpdate(index, ref)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center mt-5">
                      <Link href="/opportunities" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2   w-[380px] px-6 rounded-full font-bold  py-6 my-2")} style={{ fontFamily: "sans-serif" }}>Verify and Continue</Link>
                    </div>
                    <div className="flex justify-center mt-5">

                      <p>Resend code in 00:31 </p>
                    </div>
                  </div> : <div className="">

                    <h1 className="font-bold text-3xl pt-8 pb-2 text-center">Upload you ID</h1>
                    <p className="text-center">Upload both the front and back of your ID.


                    </p>
                    <div className="flex flex-col space-y-16 mt-6">
                      <div className="flex flex-row items-center justify-between   ">
                        {Array.from({ length: 5 }, (_, index) => (
                          <div className="w-12 h-12" key={index}>
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-1 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              maxLength={1}
                              onChange={(event) => handleInputChange(index, event)}
                              onKeyDown={(event) => handleKeyDown(index, event)}
                              onPaste={(event) => handlePaste(index, event)}
                              ref={(ref) => handleRefUpdate(index, ref)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center mt-5">
                      <Link href="/account/login" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2  w-[380px] px-6 rounded-full font-bold  py-6 my-2")} style={{ fontFamily: "sans-serif" }}>Verify and Continue</Link>
                    </div>
                    <div className="flex justify-center mt-5">

                      <p>Resend code in 00:31 </p>
                    </div>
                  </div>
                }


              </div>
            </div>
          </div>

        </div>
        <div className="absolute top-0 left-0   w-screen">
          <header className="container  border-t-pink-0 border-l-pink-0 border-t-pink-0   top-0 z-90">

            {/* navigation  */}
            <div className="flex h-16 items-center justify-start pt-7" >
              <MainNav />

            </div>
          </header>


        </div>
      </div>

    </>
  )
}



///////////////this is code for screen above the verification but nee to mention how should be it look like



{/* <div className="w-full border-b-2 ">
<div className="header relative top-0 right-0  mr-[250px] ml-[124px] pr-4 ">

  <div className="flex py-3" >
    <div className="w-1/2  flex justify-end items-center">
      <div className="number-filled text-white bg-customDarkGreenHeading px-2 py-[2px] mr-2 h-[20px] rounded-full text-xs">
        1
      </div>
      <p className="heading">
        Verify Email
      </p>
      <p className='px-2'>&gt;

      </p>
    </div>
    <div className="w-1/2  flex justify-start items-center">
      <div className="number-filled bg-slate-500 text-white px-2 py-[2px] mr-2 h-[20px] rounded-full text-xs">
        2
      </div>
      <button className="heading" onClick={() => {
        console.log("false")
        setIsEmailVerified(true)
      }}>
        Upload Documents
      </button>

    </div>
  </div>

  <div className="w-1/2 bg-slate-200"></div>
</div>
</div> */}