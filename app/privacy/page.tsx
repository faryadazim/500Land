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
import Footer from "@/components/Footer";

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function PrivacyPage() {

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
        <h1 className="font-bold text-[34px] leading-10">Privacy</h1>
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

        <div className="mx-auto font-normal text-[18px] md:pl-[146px] md:pr-[144px] md:pb-14 sm:pl-0 sm:pr-0 sm:pb-0 leading-[1.625rem] tracking-[-0.408px]">
          <ol className="list-decimal">
            <li>Information We Collect We may collect personal information such as name,
              email address, phone number, and payment information when users register
              for an account, make a purchase, or contact us for support. We also collect
              non-personal information such as IP address, browser type, and device
              information through cookies and other tracking technologies.</li>

            <li>How We Use Your Information We use your personal information to provide and
              improve our services, to communicate with you, to process payments, and to
              comply with legal obligations. We may also use non-personal information for
              analytics and marketing purposes.</li>

            <li>Sharing of Information We may share your personal information with third-party
              service providers that assist us in providing our services, processing payments,
              or performing other business functions. We may also disclose your personal
              information if required by law or in response to legal process, or if necessary
              to protect our rights or the rights of others.</li>

            <li>Your Choices You may opt-out of receiving marketing communications from us at any
              time by following the unsubscribe link in our emails or by contacting us directly.
              You may also request access, correction, or deletion of your personal information
              by contacting us at info@500.land.</li>

            <li>Security We take reasonable measures to protect
              the personal information we collect and store, including the use of encryption and
              access controls. However, no security system is impenetrable and we cannot guarantee
              the security of your personal information.</li>

            <li>Children’s Privacy Our website and services are not directed to individuals under
              the age of 18, and we do not knowingly collect personal information from children.
              If we become aware that we have collected personal information from a child without
              parental consent, we will take steps to remove the
              information as soon as possible.</li>

            <li>Changes to this Privacy Policy We may update this Privacy Policy from time to
              time by posting a revised version on our website. Your continued use of our website
              and services after any changes to this Privacy Policy constitutes your acceptance
              of the changes.</li>

            <li>Contact Us If you have any questions or concerns about this Privacy Policy,
              please contact us at info@500.land</li>


          </ol>
        </div>

      </section>


    

      <Footer/>
    </div>
  )
}
