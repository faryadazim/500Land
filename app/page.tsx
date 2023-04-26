import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"
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
      <div className={`hero-section relative min-h-screen   ${inter.className}`}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" ,minHeight:"713px"}}></div>
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

          <div className="absolute inset-0 z-0" style={{minHeight:"713px"}}>
            <div className="bg-black opacity-50 h-full w-full absolute z-0"></div>
          </div>

          <div className="absolute bottom-0 left-0 container" style={{ width: "60%", left: "120px", top: "55%" }}>
            <h1 className=" font-boldest text-white text-7xl leading-tight container" style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)" }}>Invest in land,
              <br />
              invest in your future.</h1>

            <p className=" font-normal text-white text-xl leading-10 container">
              We specializes in investing in land by purchasing undervalued properties and developing them into profitable investments.</p>

            <div className="flex container">

              <Link href="/login" className={cn(buttonVariants({ variant: "primary" }), "px-3 mr-2   w-100 px-10 rounded-full font-bold  ")}>Check Available Opportunity</Link>
              <Link href="/login" className={cn(buttonVariants({ variant: "primary" }), "px-3    w-100 px-10 rounded-full font-bold")}> How it works</Link>
            </div>


          </div>


        </div>
      </div>
      {/* section 2 */}
      <section className="container my-14">
        <h1 className="px-28 py-6  text-center font-medium leading-tight tracking-normal text-4xl">
          We select land based on its investment potential by evaluating factors such as location, potential for development, and market conditions.
        </h1>
        <div className=" bg-cover bg-center h-72" style={{ backgroundImage: "url('/images/rectangular.png')" }}></div>
        <p className="px-28 py-6  text-center  font-normal leading-tight tracking-normal text-xl">
          We then work with local officials to develop the land into profitable properties, constantly monitoring market trends to maximize returns and provide valuable investments for our clients.
        </p>
        <p className="px-28   text-center  font-normal leading-tight tracking-normal text-xl">


          By following this process, we aim to provide valuable investment opportunities that offer strong returns on investment and diversification to the investors portfolios.
        </p>

      </section>

      {/* section 3 */}

      <section className="  my-14 bg-customGreen">
        <div className="container ">
          <h1 className="px-28 py-6  text-center font-medium leading-tight tracking-normal text-4xl">
            Investing in land offers numerous benefits
          </h1>


          <div className="flex flex-wrap justify-center">
            <div className="w-[584px] h-[687px] mx-4   bg-white flex flex-col justify-end mb-5 rounded-2xl">
              <div className="relative h-100  ">
                <Image
                  src="/images/Long-term-stability.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Long-term stability</h1>
              <p className="my-4  text-center px-2">Land is a tangible asset that can be held for long periods of time, providing a stable foundation for an investment portfolio.</p>
            </div>
            <div className="w-[584px] h-[687px] mx-4   bg-white flex flex-col justify-end mb-5 rounded-2xl">
              <div className="relative h-100">
                <Image
                  src="/images/Returns.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Returns</h1>
              <p className="my-4  text-center r px-2">As land values increase over time, investors can potentially see significant returns on their investments.</p>
            </div>
            <div className="w-[584px] h-[687px] mx-4   bg-white flex flex-col justify-end mb-5 rounded-2xl">
              <div className="relative h-100">
                <Image
                  src="/images/Hedgeagainstinflation.png"
                  alt="Image"
                  // fill

                  width={500}
                  height={500}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Hedge against inflation</h1>
              <p className="my-4  text-center r px-2">The value of land generally increases with inflation, providing a hedge against the declining purchasing power of cash and other fixed-income investments.</p>
            </div>
            <div className="w-[584px] h-[687px] mx-4   bg-white flex flex-col justify-end mb-5 rounded-2xl">
              <div className="relative h-100">
                <Image
                  src="/images/Diversification.png"
                  alt="Image"
                  // fill 
                  width={500}
                  height={500}
                // quality={100}
                />
              </div>

              <h1 className="text-3xl font-bold text-center">Diversification</h1>
              <p className="my-4  text-center r px-2">Land investments can provide diversification in an investment portfolio, since they are not directly linked to the performance of the stock market or other financial markets.</p>
            </div>

          </div>
        </div>



      </section>


      <section className="my-14 container" id="info-section">
        <div className="flex flex-wrap px-4 md:px-14">
          <div className="w-full md:w-3/5 ">

            <h1 className="  font-semibold text-4xl text-black flex-none order-none self-stretch flex-grow-0">
              We select land based on its investment potential by evaluating factors such as location, potential for development, and market conditions.
            </h1>
            <p className="  font-normal text-base leading-5 text-black flex-none order-1 self-stretch flex-grow-0">
              We believe that investing in land should be simple, secure, and easy. With 500Land, you can purchase a fractional of land with just a few simple steps
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <div className="relative h-100  flex justify-end">
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

      <section>
        <div className="flex flex-wrap justify-center py-4">
          {[1, 2, 3].map((x: any): any => {
            return <> <div className="bg-white shadow-lg rounded-lg w-80 h-100 m-4  ">
              <div className=" bg-cover bg-center  h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div>


              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Card 1 Heading</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="mt-4">
                  <h3 className="text-md font-bold mb-2">Progress</h3>
                  <Progress value={75} />

                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-9/12">Button</button>
              </div>
            </div></>
          })}

          {/* Card 1 */}

          {/* Card 1 */}

        </div>

      </section>

      <section className="bg-black">
<div className="container ">


        <Accordion type="single" collapsible className="w-full py-5">
          <AccordionItem value="item-1" className="bg-customLightDark rounded-lg my-2 px-5">
            <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-customLightDark rounded-lg my-2 px-5">
            <AccordionTrigger className="text-white">Is it styled?</AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. It comes with default styles that matches the other components
              aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-customLightDark rounded-lg  my-2 px-5">
            <AccordionTrigger className="text-white">Is it animated?</AccordionTrigger>
            <AccordionContent className="text-white">
              Yes. Its animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion></div>
      </section>


      <section className=" ">
        <footer className="p-6 bg-customGreen ">
          <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Getting started</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                <a rel="noopener noreferrer" href="#">Installation</a>
                <a rel="noopener noreferrer" href="#">Release Notes</a>
                <a rel="noopener noreferrer" href="#">Upgrade Guide</a>
                <a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
                <a rel="noopener noreferrer" href="#">Optimizing for Production</a>
                <a rel="noopener noreferrer" href="#">Browser Support</a>
                <a rel="noopener noreferrer" href="#">IntelliSense</a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Core Concepts</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                <a rel="noopener noreferrer" href="#">Utility-First</a>
                <a rel="noopener noreferrer" href="#">Responsive Design</a>
                <a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
                <a rel="noopener noreferrer" href="#">Dark Mode</a>
                <a rel="noopener noreferrer" href="#">Adding Base Styles</a>
                <a rel="noopener noreferrer" href="#">Extracting Components</a>
                <a rel="noopener noreferrer" href="#">Adding New Utilities</a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Customization</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                <a rel="noopener noreferrer" href="#">Configuration</a>
                <a rel="noopener noreferrer" href="#">Theme Configuration</a>
                <a rel="noopener noreferrer" href="#">Breakpoints</a>
                <a rel="noopener noreferrer" href="#">Customizing Colors</a>
                <a rel="noopener noreferrer" href="#">Customizing Spacing</a>
                <a rel="noopener noreferrer" href="#">Configuring Variants</a>
                <a rel="noopener noreferrer" href="#">Plugins</a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Community</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                <a rel="noopener noreferrer" href="#">GitHub</a>
                <a rel="noopener noreferrer" href="#">Discord</a>
                <a rel="noopener noreferrer" href="#">Twitter</a>
                <a rel="noopener noreferrer" href="#">YouTube</a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Community</h2>
              <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                <a rel="noopener noreferrer" href="#">GitHub</a>
                <a rel="noopener noreferrer" href="#">Discord</a>
                <a rel="noopener noreferrer" href="#">Twitter</a>
                <a rel="noopener noreferrer" href="#">YouTube</a>
              </div>
            </div>
          </div>
          <div className=" container flex items-center justify-between px-6 pt-12 text-sm">
            <span className="dark:text-gray-400">logo</span>
            <span className="dark:text-gray-400">© Copyright 1986. All Rights Reserved.</span>
          </div>
        </footer>
      </section>
    </>



  )
}
