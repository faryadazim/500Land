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



export default async function LoginAccountPage() {

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

              <div className="  ">
              </div>
            </div>

            <div className="container flex absolute top-0 z-20 ">

              <div className="w-full md:w-1/2 h-screen hidden md:flex  items-end justify-start font-bold py-24">
                <h1 className="  pl-4 text-6xl font-bold text-white ">
                  Invest in land, <br />
                  invest in your future.
                </h1>


              </div>
              <div className="w-full md:w-1/2 bg-blue h-screen md:pl-10 lg:pl-0 flex items-center justify-center py-24">


                <div className="  ">


                  <div className="">

                    <h1 className="font-bold text-3xl pt-8 pb-2">Sign In Account</h1>


                    <div className="row flex justify-between pt-5">
                      <div className="w-[380px] ">
                        <label htmlFor="Chad" className=" my-8   text-sm">Email</label>
                        <Input placeholder="you@company.com" />

                      </div>

                    </div>
                    <div className="row flex justify-between pt-5">
                      <div className="w-[380px] ">
                        <label htmlFor="Chad" className=" my-8   text-sm">Password</label>
                        <Input placeholder="" type="password" />

                      </div>

                    </div>


                    <div className="flex justify-center mt-5">
                      <Link href="/dashboard" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2   w-[380px] px-6 rounded-full font-bold  py-6 my-2")} style={{ fontFamily: "sans-serif" }}>Login</Link>
                    </div>
                    <div className="flex justify-center mt-5">

                      <p>
                        Have not Registered yet? <span className="text-customDarkGreen font-bold">Sign Up</span> </p>
                    </div>
                  </div>
                </div>


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
