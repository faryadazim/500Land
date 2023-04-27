import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <div className={`hero-section relative min-h-screen   ${inter.className}`}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')", minHeight: "713px" }}></div>
        <div className={`flex min-h-screen flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-40">
            <div className="flex h-16 items-center justify-between pt-7" >
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link href="/blogs" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3 hidden md:flex")}>Blogs</Link>
                <Link href="/contactus" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3 hidden  md:flex ")}>CONTACT US</Link>
                <Link href="/dashboard" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-white w-100 px-10 rounded-full font-bold")}>LOGIN</Link>
              </nav>
            </div>
          </header>
          {/* overlay on div  */}
          <div className="absolute inset-0 z-0" style={{ minHeight: "713px" }}>
            <div className="bg-black opacity-50 h-full w-full absolute z-0"></div>
          </div>

          <div className="  absolute bottom-0 left-0 container" style={{ width: "60%", left: "142px", top: "40%" }}>
            <h1 className=" font-boldest text-white text-7xl leading-tight container " style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)", fontFamily: "sans-serif" }}>Invest in land,
              <br />
              invest in your future.</h1>

            <p className=" font-normal text-white text-xl leading-10 container mb-14">
              We specializes in investing in land by purchasing undervalued properties and developing them into profitable investments.</p>

            <div className="flex container">

              <Link href="/login" className={cn(buttonVariants({ variant: "primary" }), "  mr-2   w-100 px-6 rounded-full font-bold  py-6 ")} style={{ fontFamily: "sans-serif" }}>Check Available Opportunity</Link>
              <Link href="/login" className={cn(buttonVariants({ variant: "primaryLight" }), "    w-100 px-6 rounded-full font-bold py-6 ")} style={{ fontFamily: "sans-serif" }}> How it works</Link>
            </div>


          </div>


        </div>
      </div>
      {/* section 2 */}
      <section className="container my-14">
        <h1 className="  py-6  text-center font-medium leading-tight tracking-normal text-4xl">
          We select land based on its investment potential by evaluating factors such as location, potential for development, and market conditions.
        </h1>
        <div className=" bg-cover bg-center h-72" style={{ backgroundImage: "url('/images/rectangular.png')" }}></div>
        <p className="  py-6  text-center  font-normal leading-tight tracking-normal text-xl">
          We then work with local officials to develop the land into profitable properties, constantly monitoring market trends to maximize returns and provide valuable investments for our clients.
        </p>
        <p className="    text-center  font-normal leading-tight tracking-normal text-xl">


          By following this process, we aim to provide valuable investment opportunities that offer strong returns on investment and diversification to the investors portfolios.
        </p>

      </section>

      {/* section 3 */}

      <section className="  my-14 bg-customGreen">
        <div className="container py-14">
          <h1 className="px-28    mb-6 text-center font-medium leading-tight tracking-normal text-4xl">
            Investing in land offers numerous benefits
          </h1>
          <div className="flex flex-wrap   md:flex-nowrap ">

            <div className="w-100 md:w-1/2  md:mr-3  h-[587px]    bg-white flex flex-col justify-end mb-5 rounded-2xl  p-5">
              <div className="relative h-100 text-center flex justify-center  ">
                <Image
                  src="/images/Long-term-stability.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Long-term stability</h1>
              <p className="mt-4  text-center ">Land is a tangible asset that can be held for long periods of time, providing a stable foundation for an investment portfolio.</p>
            </div>
            <div className="w-100 md:w-1/2  md:ml-3 h-[587px]    bg-white flex flex-col justify-end mb-5 rounded-2xl p-5">
              <div className="relative h-100  justify-center flex">
                <Image
                  src="/images/Returns.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Returns</h1>
              <p className="mt-4  text-center   ">As land values increase over time, investors can potentially see significant returns on their investments.</p>
            </div>
          </div>
          <div className="flex flex-wrap   md:flex-nowrap ">

            <div className="w-100 md:w-1/2  md:mr-3  h-[587px]    bg-white flex flex-col justify-end mb-5 rounded-2xl  p-5">
              <div className="relative h-100 text-center flex justify-center  ">
                <Image
                  src="/images/Long-term-stability.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Long-term stability</h1>
              <p className="mt-4  text-center ">Land is a tangible asset that can be held for long periods of time, providing a stable foundation for an investment portfolio.</p>
            </div>
            <div className="w-100 md:w-1/2  md:ml-3 h-[587px]    bg-white flex flex-col justify-end mb-5 rounded-2xl p-5">
              <div className="relative h-100  justify-center flex">
                <Image
                  src="/images/Returns.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Returns</h1>
              <p className="mt-4  text-center   ">As land values increase over time, investors can potentially see significant returns on their investments.</p>
            </div>
          </div>
        </div>



      </section>


      <section className="my-14 container" id="info-section">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-3/5 ">

            <h1 className="  font-semibold text-2xl text-black flex-none order-none self-stretch flex-grow-0  text-center md:text-left md:font-bold md:text-4xl">
              We select land based on its investment potential by evaluating factors such as location, potential for development, and market conditions.
            </h1>
            <p className="  font-normal text-base leading-5 text-black flex-none order-1 self-stretch flex-grow-0 py-5 text-center md:text-left md:pb-0">
              We believe that investing in land should be simple, secure, and easy. With 500Land, you can purchase a fractional of land with just a few simple steps
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <div className="relative h-56  flex justify-end">
              <Image
                src="/images/blockchaindetail.png"
                alt="Image"

                // quality={100}
                width={200}
                height={400}
                // style={{ height: '100%' }}
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                style={{ height: '100%', width: 'auto' }} //The point is right there!

              />
            </div>
          </div>
        </div>
      </section>

      <section className="container my-6">
        <h1 className="font-bold text-customBlack text-4xl mb-6 py-3">
          Available Opportunities
        </h1>
        <div className="flex flex-wrap ">
          {[1, 2, 3].map((x: any): any => {
            return (

              <div className="md:w-4/12 " key={x}>
                <div className="bg-white shadow-lg   rounded-2xl  h-100  mx-2 ">
                  {/* <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div> */}

                  <div className="relative h-[179px] text-center flex justify-center  ">
                    <Image
                      src="/images/Img.png"
                      alt="Image"
                      // fill

                      width={384}
                      height={179}
                      className="rounded-t-2xl"
                    // style={{ objectFit: "cover", objectPosition: "center" }}

                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <span>Bradley,CA</span>
                      <span>2000 SQFT</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Lynch Canyon Road</h2>
                    <div className="flex justify-between">
                      <span className="title">Requested Fund</span>
                      <span className="price   font-semibold text-base leading-5 text-black">USD,1,023,550</span>

                    </div>

                    <div className="my-4 ">
                      <Progress value={75} />
                    </div>
                    <div className="flex justify-center">

                      <Link href="/login" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2   w-full px-6 rounded-full font-bold  py-6 my-2")} style={{ fontFamily: "sans-serif" }}>Fund start from $100</Link>
                    </div>
                    <div className="flex justify-center">


                      <p className="h-5 font-semibold text-sm leading-5 flex items-center text-center text-green-900">
                        102 Investors
                      </p> </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>


      <section className="bg-customStrongtDark py-10">
        <div className="container  ">

          <h1 className="font-semibold text-white text-4xl  ">
            Common Questions
          </h1>
          <Accordion type="single" collapsible className="w-full py-5">
            {[{ index: 1, question: "What is 500Land?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 2, question: "What is the company’s mission??", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 3, question: "What are the benefits of investing in land?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 4, question: "How does 500Land select land for investment?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 5, question: "What services does 500Land offer?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 6, question: "Does 500Land provide ongoing management and monitoring of investments?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." }


            ].map((x: any , index:number): any => {
              return <AccordionItem value={`item-${x.index}`} className="bg-customLightDark rounded-2xl my-2 px-5" key={x.index}>
                <AccordionTrigger className="text-white">{x.question}</AccordionTrigger>
                <AccordionContent className="text-customLightTQuestions">
                  {x.answer}
                </AccordionContent>
              </AccordionItem>
            })}


          </Accordion>
        </div>
      </section>


      <footer className="p-6 bg-customGreen py-10 ">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {[1, 2, 3, 4, , 5].map((x) => {
            return <div className="flex flex-col space-y-4" key={x}>
              <h2 className="font-bold">Getting started</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                <a rel="noopener noreferrer" href="#" className="font-semibold">Installation</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Release Notes</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Upgrade Guide</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Using with Preprocessors</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Optimizing for Production</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">Browser Support</a>
                <a rel="noopener noreferrer" href="#" className="font-semibold">IntelliSense</a>
              </div>
            </div>
          })}



        </div>
<div className="container mt-8  ">

        <Separator />
</div>
        <div className=" container flex items-center justify-between px-6  pt-6 text-sm">
          <span className="dark:text-gray-400">logo</span>
          <span className="dark:text-gray-400">© Copyright 1986. All Rights Reserved.</span>
        </div>
      </footer>
    </>



  )
}
