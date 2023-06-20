
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { buttonVariants } from "@/components/ui/button"
import { Terminal } from "lucide-react"

const inter = Poppins({
    subsets: ['latin'],
    weight: "100"
})



export default async function opportunitiesPage() {

    return (
        <>
            <section className={`hero-section relative  bg-customDarkGreen  ${inter.className}`}>
                <div className={`flex   flex-col sticky top-0 z-50`}>
                    <header className="container   top-0 z-40">

                        {/* navigation  */}
                        <div className="flex h-16 items-center justify-between pt-7" >
                            <MainNav items={marketingConfig.mainNav} />
                            <nav className="flex">
                                <Link href="/blogs" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3 hidden md:flex")}>Blogs</Link>
                                <Link href="/contactus" className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3 hidden  md:flex ")}>CONTACT US</Link>
                                <Link href="/dashboard" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-white w-100 px-10 rounded-full font-bold")}>LOGIN</Link>
                            </nav>
                        </div>
                    </header>

                    <div className="container flex ">
                        <div className="opertunityInfo">
                            <h3 className="" id="oppertunityTitle">
                                Big land in Sokhna with Perfect Location
                            </h3>
                            <span className="area">
                                2000 SQFT
                            </span>
                            <span className="location">
                                Bradley, CA
                            </span>

                        </div>
                        <div className="shareButton"></div>

                    </div>


                </div>

                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle className="text-black font-bold">Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components and dependencies to your app using the cli.
                    </AlertDescription>
                </Alert>

            </section>
        </>
    )
}
