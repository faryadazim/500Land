"use client";
import { Button } from "@/components/ui/button"
import { cn, getTimeAgo } from "@/lib/utils"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
// import { Progress } from "@/components/ui/progress"
// import { Input } from "@/components/ui/input"
// import { PhoneInput } from "@/components/ui/phone-input-field"
// import { Textarea } from "@/components/ui/textarea"
import { PortableText } from "@portabletext/react";


import { buttonVariants } from "@/components/ui/button"
import Vector from "@/public/Vector.png";
import share from "@/public/share.png";
// import blogsingle from "@/public/blog-single.png";
// import background from "@/public/background.png";
import { useRouter, withRouter } from 'next/router'

import {
    FacebookIcon,
    LineShareButton,
    LineIcon,
    FacebookShareCount,
} from 'next-share'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    EmailShareButton,
} from 'react-share';
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/Footer";
import { getBlogslug } from "@/sanity/schemas/sanity-utils";
type props = {
    params: { slug: string };
}
const inter = Poppins({
    subsets: ['latin'],
    weight: "100"
})

import clientConfig from "@/config/client-config";

import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value }: any) => {
    const { width, height } = getImageDimensions(value)
    return (
        <img
            src={urlBuilder(clientConfig).image(value).width(800).fit('max').auto('format').url()}
            alt={value.alt || ' '}
            loading="lazy"
            style={{
                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,
            }}
        />
    )
}
export default async function BlogSinglePage({ params }: props) {
    // console.log(params);
    
    // const slug = params.slug;
    const blog = await getBlogslug(params.slug);
    // const blog = await getBlogslug(params.slug);
    // { console.log(blog.content) }
    return (
        <div className=" ">
            <section className={`hero-section relative   bg-white   ${inter.className} z-30`}>
                <div className={`flex   flex-col sticky top-0 z-50`}>
                    <header className="container   top-0 z-48">
                        <div className="flex h-16 items-center justify-between py-5" >
                            <MainNav items={marketingConfig.mainNav} isDarkNav={true} />
                            <nav className="flex">
                                <Link href="/contact-us" className={cn("  items-center text-lg   sm:text-sm text-black tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  ")} style={{ fontFamily: "Basier Square Regular" }}>Contact Us</Link>
                                <Link href="/account/create-account" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-black w-100 px-10 rounded-full font-normal border-black")} style={{ fontFamily: "Basier Square Regular" }}>Login</Link>
                            </nav>
                        </div>
                    </header>
                </div>
            </section>
            <section className="container my-12">
                {/* <h3 className="font-normal text-[20px] leading-6">Design Tips</h3> */}
                <h1 className="font-bold text-[34px] leading-10">{blog.name} </h1>
                <div className="container flex flex-row mx-auto md:pl-[5px] md:pt-[15px] sm:pl-0 sm:pt-0">
                    <span className="md:pr-2 sm:pr-0">
                        <Image src={Vector} alt="500Land Logo" width={20} height={20} />

                    </span>
                    <span className="font-normal text-[16px] text-[#3C3C43] leading-5">
                        {getTimeAgo(blog._createdAt)}
                    </span>
                    <span className="md:pl-6 sm:pl-0">
                        <FacebookShareButton url={"/blogs/"+params.slug}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </FacebookShareButton>

                    </span>


                </div>

                <div className="pt-20 pb-6" >
                    {/* <Image src={background} alt="500Land Logo"  width={1288} height={668} /> */}
                    {blog.image && (
                        <Image
                            src={blog.image}
                            alt={blog.name}
                            width={480}
                            height={480}
                            className="object-cover rounded-lg"
                        />
                    )}

                </div>
                <div className="pt-20 pb-6">

                    <PortableText value={blog.content} components={{
                        block: {
                            // Customize block types with ease
                            h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-1xl">{children}</h2>,

                            // Same applies to custom styles
                            customHeading: ({ children }) => (
                                <h2 className="text-lg text-primary text-purple-700">{children}</h2>
                            ),
                        },
                        types: {
                            image: SampleImageComponent,
                        },
                    }} />

                </div>
                {/* 

      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:p-0 sm:m-0 mx-auto leading-8">About the position</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:p-0 sm:m-0 mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]"> On the 
        other hand, we denounce with righteous indignation and dislike men who are 
        so beguiled and demoralized by the charms of pleasure of the moment, so 
        blinded by desire, that they cannot foresee the pain and trouble that are 
        bound to ensue; and equal blame belongs to those who fail in their duty 
        through weakness of will, which is the same as saying through shrinking from 
        toil and pain. These cases are perfectly simple and easy to distinguish. In a 
        free hour, when our power of choice is untrammelled and when nothing prevents 
        our being able to do what we like best, every pleasure is to be welcomed and 
        every pain avoided.</p>
      </div>

      <div className="container items-start py-14 px-[71px] gap-2.5 bg-[#FAFAFB] rounded-xl">
      <p className="font-normal text-[20px] lg:px-[120px] leading-[25px] text-center">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational</p>
        <h4 className="font-normal text-[20px] leading-[25px] mx-auto text-center">— Carl Sagan</h4>
      </div>


      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-0 sm:m-0 mx-auto leading-8">1. Learning the basics</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0 sm:m-0 mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        
      </div>


      <div className="rounded-xl mx-auto px-28">
          
            <Image src={blogsingle} alt="500Land Logo" width={912} height={597} />

            </div>

      <div className="gap-[10px] pl-[125px] pr-[161px] pt-20 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-0 mx-auto leading-8">2. Learning the basics</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        
      </div>

      <div className="gap-[10px] pl-[125px] pr-[161px] pt-10 pb-6">
        <h1 className="font-bold text-[28px] md:pb-[25px] sm:pb-0 mx-auto leading-8">3. Learning the basics</h1>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]">
        Nayzak, everyone in my team works towards the samegoal. This enabled our 
        teams to ship new ideas and feel more capable. Podcasting operational — 
        change management inside of workflows. Completely synergize. </p>
        <p className="font-normal text-[17px] md:pb-[20px] sm:pb-0  mx-auto leading-[22px] tracking-[-0.408px]">
        But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was 
        born and I will give you a complete account of the system, and expound the 
        actual teachings of the great explorer of the truth, the master-builder of 
        human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
        
      </div> */}


            </section>




            <Footer />
        </div>
    )
}
