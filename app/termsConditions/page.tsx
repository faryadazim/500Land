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


import { Separator } from "@/components/ui/separator"

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function TermsConditionsPage() {

  return (
    <div className=" ">
     <section className={`hero-section relative   bg-white   ${inter.className} z-30`}>
        <div className={`flex   flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-48">
            <div className="flex h-16 items-center justify-between py-5" >
              <MainNav items={marketingConfig.mainNav} isDarkNav={true}/>
              <nav className="flex">
                <Link href="/contact-us" className={cn("  items-center text-lg   sm:text-sm text-black tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  ")} style={{ fontFamily: "Basier Square Regular" }}>Contact Us</Link>
                <Link href="/account/create-account" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-black w-100 px-10 rounded-full font-normal border-black")} style={{ fontFamily: "Basier Square Regular" }}>Login</Link>
              </nav>
            </div>
          </header>
        </div>
      </section>
      <section className="container my-12">
        <h1 className="font-bold text-[34px] leading-10">TERMS & CONDITIONS</h1>
        <div className="container flex flex-row mx-auto md:pl-[5px] md:pt-[15px] sm:pl-0 sm:pt-0 sm:mx-0">
          <span className="md:pr-2 sm:pr-0">
          <Image src={Vector} alt="500Land Logo" width={20} height={20} />
            
          </span>
          <span className="font-normal text-[16px] text-[#3C3C43] leading-5">
          Last update 12/9/2023
          </span>
       </div>

      <div className="gap-[10px] md:pl-[125px] md:pr-[161px] md:pt-20 md:pb-6 sm:p-0">
        <p className="font-bold text-[22px]  mx-auto leading-7 sm:mx-0">
          500Land (hereafter “we”, “us”, “our”, or “500Land”) is committed to protecting the 
          privacy and security of our users’ personal information. This Privacy Policy outlines 
          our practices and procedures regarding the collection, use, 
          and disclosure of personal information we receive from users of
           our website and services.</p>
      </div>

    <div className="mx-auto font-normal text-[18px] md:pl-[146px] md:pr-[145px] md:pb-14  sm:mx-0 sm:pl-0 sm:pr-0 sm:pb-0 leading-[1.625rem] tracking-[-0.408px]">
      <ol className="list-decimal">
    <li>Introduction Welcome to 500Land, a company specializing in land investments. 
      These Terms and Conditions govern your access to and use of our website, services, 
      and products (collectively, the  Services). By accessing or using our Services, 
      you agree to be bound by these Terms and Conditions.</li>

  <li>Eligibility Our Services are available only to individuals who are
   at least 18 years old and are legally able to enter into a binding contract. 
   If you do not meet these requirements, you may not use our Services.</li>

<li>Investment Risks Investing in land involves risks, and you should carefully 
  consider these risks before making an investment. There is no guarantee of 
  liquidity or return on investment, and you may lose all or a portion of your 
  investment. You should consult with your own advisors before investing in land.</li>

<li>Investment Amounts We may set minimum investment amounts for our Services, 
  and you may not be able to invest in a particular property if you do not meet 
  the minimum investment amount.</li>

<li>Payments We may use third-party payment processors to process payments made 
  through our Services. By using our Services, you agree to the terms and conditions 
  of these third-party payment processors.</li>

<li>Withdrawals We may set minimum withdrawal amounts and minimum investment periods 
  for our Services. You may not be able to withdraw your investment until the minimum 
  investment period has elapsed and the minimum withdrawal amount has been met.</li>

<li>Termination We reserve the right to terminate or suspend your access to our 
  Services at any time and for any reason, including if you breach these Terms and 
  Conditions.</li>

<li>Intellectual Property Our Services and all content and materials contained in our 
  Services, including without limitation, text, graphics, logos, button icons, images, 
  audio clips, video clips, data compilations, and software, are the property of 500Land
   or its licensors and are protected by United States and international 
   copyright laws.</li>

<li>Disclaimer of Warranties Our Services are provided on an as is and as available
   basis without warranties of any kind, whether express or implied, including but not 
   limited to, implied warranties of merchantability, fitness for a particular purpose, 
   and non-infringement.</li>

<li>Limitation of Liability To the extent permitted by law, 500Land will not be liable 
  for any direct, indirect, incidental, special, or consequential damages arising out 
  of or in connection with your use of our Services, even if we have been advised of 
  the possibility of such damages.</li>

<li>Governing Law These Terms and Conditions shall be governed by and construed in 
  accordance with the laws of the United States.</li>

<li>Entire Agreement These Terms and Conditions constitute the entire agreement 
  between you and 500Land with respect to your use of our Services and supersede all 
  prior or contemporaneous communications and proposals, whether oral or written, 
  between you and 500Land.</li>

<li>Amendments We may modify these Terms and Conditions at any time, and any such
   modifications will be effective immediately upon posting on our website. Your 
   continued use of our Services after such modifications have been posted constitutes 
   your acceptance of the modified Terms and Conditions.</li>

<li>Contact Us If you have any questions about these Terms and Conditions or 
  our Services, please contact us at info@500.land</li>

      </ol>
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
