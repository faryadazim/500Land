import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className={`hero-section relative min-h-screen ${inter.className}`}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}></div>
        <div className={`flex min-h-screen flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-40">
            <div className="flex h-16 items-center justify-between pt-7">
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link href="/contactus" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3")}>CONTACT US</Link>
                <Link href="/login" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-white w-100 px-10 rounded-full font-bold")}>LOGIN</Link>
              </nav>
            </div>
          </header>

          <div className="absolute inset-0 z-0">
            <div className="bg-gray-700 opacity-20 h-full w-full absolute z-0"></div>
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


          By following this process, we aim to provide valuable investment opportunities that offer strong returns on investment and diversification to the investors' portfolios.
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




    </>



  )
}
