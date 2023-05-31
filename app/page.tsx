"use client"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
// import supabase from '../supabase'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const inter = Inter({
  subsets: ['latin'],
  weight: "700"
})
const inter400 = Inter({
  subsets: ['latin'],
  weight: "400"
})

import { buttonVariants } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Carousel from "@/components/Carousel"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { SweetAlert } from "@/components/SweetAlert"
import { useEffect } from "react" 

export default function Home() {

const fetchCityRecord =async ()=>{
  // console.log(supabase)
  
// let { data: city, error } = await supabase
// .from('city')
// .select('county_name')
// console.log(city)


}

useEffect(() => {
  fetchCityRecord()
}, [])




  return (
    <>





      {/* hero section  */}
      <section className={`hero-section relative min-h-screen`}>
        <div className="absolute inset-0" style={{ minHeight: "auto" }}>
          <video autoPlay muted loop className="w-full h-full object-cover object-center">
            <source src="background_video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* overlay on div  */}
        <div className="absolute inset-0 z-0" style={{ minHeight: "auto" }}>
          <div className="bg-black opacity-30 h-full w-full absolute z-0"></div>
        </div>
        <div className={`flex min-h-screen flex-col sticky top-0 z-50 container`}>


          <header className="    top-0 z-48">
            <div className="flex h-16 items-center justify-between py-5" >
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link href="/blogs" className={cn(" items-center text-lg   sm:text-sm text-white tracking-widest mx-3 hidden lg:flex text-[15px]  font-normal    ")} style={{ fontFamily: "Basier Square Regular" }}>Blogs</Link>
                <Link href="/contact-us" className={cn("  items-center text-lg   sm:text-sm text-white tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  ")} style={{ fontFamily: "Basier Square Regular" }}>Contact Us</Link>
                <Link href="/account/create-account" className={cn(buttonVariants({ size: "sm", variant: "outline" }), " text-white w-100 px-10 rounded-full font-normal")} style={{ fontFamily: "Basier Square Regular" }}>Login</Link>
              </nav>
            </div>
          </header>


          <div className=" pb-5 relative md:absolute bottom-0  w-full mt-28 md:m-auto mv-12 md:mb-auto md:w-3/5  left-auto     top-1/3" style={{ minHeight: "auto" }}>
            <div className=" ">
              <h1 className={`font-bold text-white text-7xl leading-tight     ${inter.className} `}
                style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)" }}>Invest in land.
              </h1>
              <p className=" font-normal text-white text-xl leading-8   mb-6 " style={{ fontFamily: "Basier Square Regular" }}>
                Invest in your future, starting at $100. We specialize in land investments that offer stability, returns, and diversification for your portfolio.</p>
              <div className="flex  ">
                <Link href="/account/login" className={cn(buttonVariants({ variant: "primaryDark" }), " text-center mr-2   w-100 px-4 md:px-6 rounded-full md:font-bold font-normal  py-6 ")} style={{ fontFamily: "sans-serif" }}>Get Started</Link>
                {/* <Link href="/login" className={cn(buttonVariants({ variant: "primaryLight" }), "    w-100 px-4 md:px-6 rounded-full font-normal md:font-bold py-6 text-center ")} style={{ fontFamily: "sans-serif" }}> How it works</Link> */}
              </div>
            </div>


          </div>


        </div>
      </section>


























      <section className="my-14 container" id="info-section">
        <div className="flex flex-wrap ">
          <div className="w-full  ">   {/* md:w-3/5 */}
            <h3 className={` ${inter400.className}  font-normal  leading-tight text-lg md:text-[34px]  text-black flex-none order-none self-stretch flex-grow-0  text-center   `} >
              We select land based on its investment potential by evaluating factors such as location, potential for development, and market conditions.
            </h3>
          </div>

        </div>
      </section>

      {/* section 3 */}

      <section className="  my-14 bg-customGreen">
        <div className="container py-14">
          <h1 className="    mb-6 text-left leading-tight tracking-normal text-[34px] font-bold">
            Investing in land offers numerous benefits
          </h1>
          <div className="flex flex-wrap   md:flex-nowrap ">
            <div className="w-100 md:w-1/2  md:mr-3  h-auto    bg-white flex flex-col justify-start mb-5 rounded-2xl  p-5">
              <div className="relative h-100 text-center flex justify-start   py-6">
                <svg width="48" height="48" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="82" height="82" rx="41" fill="#ECFDF3" />
                  <path d="M53.5943 46.6869H56.8949V32.8252C56.8949 32.284 56.7735 31.7797 56.5307 31.3121C56.2879 30.8445 55.947 30.4545 55.5078 30.142L46.9309 23.9827C46.3449 23.5569 45.6915 23.344 44.9708 23.344C44.25 23.344 43.6045 23.5569 43.0342 23.9827L34.4359 30.142C34.0009 30.4471 33.6685 30.8363 33.4388 31.3097C33.2091 31.7831 33.0943 32.2883 33.0943 32.8252V38.0171H36.3949V32.7612L44.9719 26.7514L53.5943 32.7612V46.6869ZM46.6871 35.5382C46.4225 35.5382 46.1887 35.4418 45.9857 35.2492C45.7827 35.0565 45.6812 34.825 45.6812 34.5547C45.6812 34.2844 45.7807 34.0517 45.9798 33.8567C46.179 33.6618 46.4113 33.5643 46.6768 33.5643C46.9487 33.5643 47.1837 33.6621 47.3819 33.8578C47.5801 34.0535 47.6792 34.2817 47.6792 34.5426C47.6792 34.8163 47.58 35.0507 47.3816 35.2457C47.1832 35.4407 46.9517 35.5382 46.6871 35.5382ZM43.2704 35.5382C43.0059 35.5382 42.7721 35.4418 42.5691 35.2492C42.366 35.0565 42.2645 34.825 42.2645 34.5547C42.2645 34.2844 42.3641 34.0517 42.5632 33.8567C42.7623 33.6618 42.9946 33.5643 43.2601 33.5643C43.532 33.5643 43.7671 33.6621 43.9653 33.8578C44.1635 34.0535 44.2625 34.2817 44.2625 34.5426C44.2625 34.8163 44.1633 35.0507 43.9649 35.2457C43.7665 35.4407 43.535 35.5382 43.2704 35.5382ZM46.6871 38.9548C46.4225 38.9548 46.1887 38.8585 45.9857 38.6658C45.7827 38.4731 45.6812 38.2417 45.6812 37.9713C45.6812 37.701 45.7807 37.4684 45.9798 37.2734C46.179 37.0784 46.4113 36.9809 46.6768 36.9809C46.9487 36.9809 47.1837 37.0788 47.3819 37.2745C47.5801 37.4701 47.6792 37.6984 47.6792 37.9593C47.6792 38.233 47.58 38.4674 47.3816 38.6624C47.1832 38.8573 46.9517 38.9548 46.6871 38.9548ZM43.2704 38.9548C43.0059 38.9548 42.7721 38.8585 42.5691 38.6658C42.366 38.4731 42.2645 38.2417 42.2645 37.9713C42.2645 37.701 42.3641 37.4684 42.5632 37.2734C42.7623 37.0784 42.9946 36.9809 43.2601 36.9809C43.532 36.9809 43.7671 37.0788 43.9653 37.2745C44.1635 37.4701 44.2625 37.6984 44.2625 37.9593C44.2625 38.233 44.1633 38.4674 43.9649 38.6624C43.7665 38.8573 43.535 38.9548 43.2704 38.9548ZM44.1724 56.339L54.7 53.0291C54.5434 52.7728 54.3449 52.4703 54.1046 52.1215C53.8641 51.7727 53.5572 51.5983 53.1839 51.5983H42.9116C42.937 51.5983 42.73 51.577 42.2905 51.5343C41.851 51.4916 41.4249 51.371 41.012 51.1727L38.1933 50.323C37.8668 50.2321 37.6215 50.0235 37.4573 49.6973C37.2931 49.3711 37.264 49.0385 37.3702 48.6995C37.4763 48.3661 37.6822 48.1262 37.9879 47.9798C38.2936 47.8334 38.6254 47.8162 38.9834 47.9282L43.2366 49.3218C43.1193 49.3057 43.2709 49.2759 43.6913 49.2322C44.1117 49.1886 44.7435 49.1587 45.5868 49.1426H45.9662C45.9662 48.789 45.9021 48.4484 45.774 48.1207C45.6459 47.7931 45.4252 47.5572 45.112 47.4129L34.7125 43.4837H31.3692V52.5676L44.1724 56.339ZM43.4176 59.1734L31.3692 55.7309C31.2139 56.4854 30.7955 57.0565 30.114 57.4443C29.4326 57.8321 28.7588 58.026 28.0927 58.026H24.8776C23.9765 58.026 23.2052 57.705 22.5635 57.0629C21.9219 56.4209 21.6011 55.6417 21.6011 54.7253V43.7734C21.6011 42.8658 21.9219 42.0888 22.5635 41.4424C23.2052 40.796 23.9765 40.4728 24.8776 40.4728H34.6319C34.8203 40.4728 35.0086 40.4875 35.1969 40.5169C35.3853 40.5463 35.5807 40.5971 35.7831 40.6691L46.0925 44.5784C46.9597 44.8811 47.6817 45.3756 48.2586 46.062C48.8354 46.7485 49.1239 47.7753 49.1239 49.1426H53.5256C54.8333 49.1426 55.925 49.5237 56.8006 50.286C57.6762 51.0483 58.114 52.2189 58.114 53.7978C58.114 54.1989 58.0315 54.5616 57.8665 54.886C57.7015 55.2103 57.4498 55.4233 57.1112 55.5248L45.2894 59.1734C44.9832 59.2625 44.6669 59.3071 44.3402 59.3071C44.0136 59.3071 43.7061 59.2625 43.4176 59.1734ZM24.612 55.015H28.3156V43.4837H24.612V55.015Z" fill="#039855" />
                </svg>

              </div>
              <h1 className="text-[28px] font-bold text-left">Long-term stability</h1>
              <p className="mt-4  text-left text-xl font-normal">Land is a tangible asset that can be held for long periods of time, providing a stable foundation for an investment portfolio.</p>
            </div>
            <div className="w-100 md:w-1/2  md:ml-3 h-auto    bg-white flex flex-col justify-start mb-5 rounded-2xl p-5">
              <div className="relative h-100  justify-start flex py-6">
                <svg width="48" height="48" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="82" height="82" rx="41" fill="#ECFDF3" />
                  <path d="M24.4792 55.9118C23.9946 55.9118 23.5945 55.7542 23.2792 55.4388C22.9638 55.1234 22.8062 54.7315 22.8062 54.2629C22.8062 53.8086 22.9638 53.4237 23.2792 53.1084C23.5945 52.793 23.9946 52.6353 24.4792 52.6353H33.4907C33.0512 50.6317 32.1891 48.7953 30.9045 47.1259C29.6198 45.4566 28.1323 44.0986 26.442 43.0519C25.6744 42.571 25.3923 42.1048 25.5957 41.6532C25.799 41.2017 26.3575 41.0001 27.2711 41.0483C31.1866 41.2538 34.4537 42.7807 37.0722 45.6288C39.6907 48.477 40.9999 51.9047 40.9999 55.9118H24.4792ZM43.4557 55.9118C43.4557 54.7247 43.3413 53.6553 43.1126 52.7036C42.8839 51.7519 42.5746 50.7785 42.1846 49.7832C43.3396 47.1222 45.0681 45.0369 47.37 43.5273C49.6719 42.0176 52.1239 41.1913 54.726 41.0483C55.6879 41.0001 56.2745 41.1977 56.4859 41.6412C56.6973 42.0846 56.4041 42.579 55.6062 43.1244C53.875 44.1853 52.359 45.5566 51.0583 47.2383C49.7575 48.92 48.9159 50.719 48.5334 52.6353H57.5662C58.0205 52.6353 58.4053 52.793 58.7207 53.1084C59.0361 53.4237 59.1937 53.8086 59.1937 54.2629C59.1937 54.7315 59.0361 55.1234 58.7207 55.4388C58.4053 55.7542 58.0205 55.9118 57.5662 55.9118H43.4557ZM41.1763 47.5893C40.5351 43.7375 41.1384 40.3042 42.9864 37.2896C44.8343 34.2749 47.37 32.187 50.5935 31.0258C51.4341 30.7175 52.0192 30.7589 52.3488 31.1497C52.6784 31.5406 52.5547 32.0425 51.9779 32.6552C50.8371 33.7892 49.8356 35.0605 48.9734 36.4693C48.1112 37.878 47.5591 39.2951 47.3171 40.7206C45.9838 41.381 44.7493 42.3429 43.6135 43.6062C42.4777 44.8695 41.6653 46.1972 41.1763 47.5893ZM38.5414 44.011C38.0234 43.5053 37.4394 42.9885 36.7895 42.4605C36.1396 41.9325 35.6215 41.5546 35.2352 41.3269C35.351 40.9227 35.4342 40.4481 35.485 39.9031C35.5357 39.3581 35.5611 38.9352 35.5611 38.6344C35.5611 37.0523 35.3801 35.5232 35.018 34.0469C34.6559 32.5707 34.1412 31.1697 33.474 29.8439C33.0252 28.9996 33.0195 28.4702 33.4568 28.2558C33.8941 28.0413 34.4742 28.2101 35.1972 28.7622C36.4927 29.8231 37.6182 31.0691 38.5739 32.5002C39.5296 33.9312 40.221 35.5127 40.6481 37.2445C40.0873 38.2342 39.6129 39.33 39.2248 40.5317C38.8367 41.7334 38.6089 42.8932 38.5414 44.011Z" fill="#039855" />
                </svg>

              </div>
              <h1 className="text-[28px] font-bold text-left">Returns</h1>
              <p className="mt-4  text-left   text-xl font-normal ">As land values increase over time, investors can potentially see significant returns on their investments.</p>
            </div>
          </div>
          <div className="flex flex-wrap   md:flex-nowrap ">
            <div className="w-100 md:w-1/2  md:mr-3 h-auto    bg-white flex flex-col justify-start mb-5 rounded-2xl  p-5">
              <div className="relative h-100 text-left flex justify-start   py-6">
                <svg width="48" height="48" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="82" height="82" rx="41" fill="#ECFDF3" />
                  <path d="M41.2878 48.8204C42.4356 48.8204 43.3622 48.5553 44.0675 48.0251C44.7728 47.495 45.1255 46.7937 45.1255 45.9213C45.1255 45.0235 44.7933 44.2699 44.1288 43.6605C43.4644 43.0512 42.2659 42.38 40.5334 41.6472C38.6802 40.9032 37.3095 40.1058 36.4213 39.2549C35.5331 38.4041 35.089 37.2632 35.089 35.8324C35.089 34.5796 35.4965 33.5069 36.3113 32.6144C37.1262 31.7218 38.2705 31.1669 39.7442 30.9497V30.1689C39.7442 29.8042 39.8619 29.5038 40.0973 29.2677C40.3327 29.0316 40.6323 28.9136 40.996 28.9136H41.0387C41.4025 28.9136 41.7033 29.0316 41.9409 29.2677C42.1786 29.5038 42.2974 29.8042 42.2974 30.1689V30.9412C43.1943 31.0644 43.9911 31.3249 44.6877 31.7226C45.3844 32.1203 45.9818 32.6911 46.4801 33.4351C46.6528 33.7014 46.6777 33.9918 46.5548 34.3065C46.432 34.6212 46.2153 34.8507 45.9049 34.9949C45.61 35.1373 45.3076 35.1653 44.9978 35.0789C44.688 34.9926 44.4245 34.8275 44.2073 34.5836C43.7783 34.0711 43.2974 33.6948 42.7644 33.4546C42.2315 33.2145 41.6395 33.0944 40.9883 33.0944C39.9584 33.0944 39.1432 33.3325 38.5428 33.8087C37.9424 34.2849 37.6422 34.9273 37.6422 35.7358C37.6422 36.6147 37.9932 37.3247 38.6951 37.8657C39.397 38.4066 40.5629 39.0188 42.1928 39.7021C44.1993 40.5136 45.6152 41.3879 46.4406 42.325C47.266 43.2621 47.6787 44.4576 47.6787 45.9115C47.6787 46.6716 47.5541 47.3475 47.305 47.9392C47.0559 48.531 46.6941 49.0444 46.2197 49.4796C45.7453 49.9147 45.1723 50.2599 44.5007 50.5152C43.8291 50.7705 43.0662 50.9409 42.212 51.0263V51.874C42.212 52.2387 42.0943 52.5391 41.8589 52.7751C41.6236 53.0112 41.324 53.1292 40.9602 53.1292C40.5964 53.1292 40.2886 53.0041 40.0367 52.7538C39.7848 52.5035 39.6588 52.196 39.6588 51.8313V50.9409C38.6251 50.6599 37.7057 50.2164 36.9004 49.6105C36.0951 49.0045 35.3917 48.172 34.7901 47.1129C34.6316 46.853 34.6254 46.5854 34.7715 46.3103C34.9176 46.0352 35.1488 45.8397 35.4651 45.724C35.7807 45.6243 36.0787 45.6319 36.3591 45.7467C36.6395 45.8615 36.867 46.0703 37.0415 46.373C37.4649 47.1541 38.0494 47.7573 38.7949 48.1825C39.5404 48.6077 40.3714 48.8204 41.2878 48.8204ZM40.9754 60.1334C37.8292 60.1334 34.7933 59.2322 31.8678 57.4298C28.9423 55.6274 26.5941 53.5412 24.8232 51.1712V55.4049C24.8232 55.83 24.6793 56.1834 24.3915 56.4651C24.1036 56.7468 23.755 56.8876 23.3456 56.8876C22.9219 56.8876 22.5645 56.7468 22.2732 56.4651C21.982 56.1834 21.8364 55.83 21.8364 55.4049V47.5725C21.8364 47.104 21.9941 46.712 22.3095 46.3967C22.6248 46.0813 23.0168 45.9236 23.4854 45.9236H31.3177C31.7286 45.9236 32.0784 46.0675 32.3672 46.3554C32.656 46.6432 32.8004 46.9989 32.8004 47.4226C32.8004 47.8463 32.656 48.2001 32.3672 48.4842C32.0784 48.7684 31.7286 48.9104 31.3177 48.9104H26.9067C28.3588 51.0081 30.4029 52.9011 33.039 54.5897C35.6752 56.2782 38.3174 57.1225 40.9657 57.1225C45.1037 57.1225 48.7066 55.7507 51.7745 53.0071C54.8424 50.2636 56.6026 46.8446 57.055 42.7502C57.0835 42.3299 57.2434 41.968 57.5347 41.6644C57.826 41.3608 58.1937 41.209 58.6378 41.209C59.0075 41.209 59.3415 41.3431 59.6398 41.6112C59.9382 41.8794 60.0802 42.2074 60.066 42.5951C59.8368 45.084 59.1845 47.3969 58.1092 49.5338C57.0338 51.6708 55.6377 53.5283 53.9208 55.1062C52.2038 56.6841 50.2372 57.9164 48.0209 58.8032C45.8047 59.69 43.4561 60.1334 40.9754 60.1334ZM40.9995 24.8777C36.8679 24.8777 33.2682 26.253 30.2003 29.0037C27.1324 31.7543 25.3803 35.1769 24.9439 39.2713C24.9021 39.6856 24.7353 40.0425 24.4434 40.3419C24.1515 40.6414 23.7902 40.7912 23.3596 40.7912C22.9588 40.7912 22.6172 40.6469 22.335 40.3583C22.0528 40.0698 21.9259 39.7118 21.9543 39.2843C22.1574 36.8623 22.7955 34.5898 23.8688 32.4667C24.9421 30.3437 26.3316 28.4987 28.0375 26.9318C29.7434 25.3649 31.7063 24.129 33.9263 23.2241C36.1463 22.3192 38.504 21.8667 40.9995 21.8667C44.1457 21.8667 47.1896 22.7755 50.1312 24.5931C53.0728 26.4107 55.4129 28.4964 57.1516 30.8503V26.6166C57.1516 26.1803 57.2972 25.8205 57.5884 25.5373C57.8796 25.2541 58.2434 25.1125 58.6798 25.1125C59.102 25.1125 59.4546 25.2541 59.7378 25.5373C60.021 25.8205 60.1625 26.1803 60.1625 26.6166V34.449C60.1625 34.9175 60.0049 35.3059 59.6895 35.6142C59.3741 35.9224 58.9893 36.0766 58.535 36.0766H50.7026C50.2775 36.0766 49.9206 35.9362 49.6318 35.6555C49.343 35.3748 49.1985 35.0226 49.1985 34.5989C49.1985 34.1752 49.343 33.8178 49.6318 33.5266C49.9206 33.2353 50.2775 33.0897 50.7026 33.0897H55.0923C53.6062 30.958 51.5365 29.0564 48.8834 27.3849C46.2302 25.7134 43.6022 24.8777 40.9995 24.8777Z" fill="#039855" />
                </svg>

              </div>
              <h1 className="text-[28px] font-bold text-left">Hedge against inflation</h1>
              <p className="mt-4  text-left  text-xl font-normal">The value of land generally increases with inflation, providing a hedge against the declining purchasing power of cash and other fixed-income investments.</p>
            </div>
            <div className="w-100 md:w-1/2  md:ml-3 h-auto    bg-white flex flex-col justify-start mb-5 rounded-2xl p-5">
              <div className="relative h-100  justify-start flex  py-6">
                <svg width="48" height="48" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="82" height="82" rx="41" fill="#ECFDF3" />
                  <path d="M50.3456 34.9138H52.8014V32.4581H50.3456V34.9138ZM50.3456 42.1529H52.8014V39.6972H50.3456V42.1529ZM50.3456 49.3493H52.8014V46.8935H50.3456V49.3493ZM47.954 56.4481V53.4613H56.9775V28.5596H40.727V33.3021L37.8126 31.2316V28.0498C37.9253 27.3654 38.2542 26.7814 38.7995 26.298C39.3448 25.8145 39.9873 25.5728 40.727 25.5728H56.6878C57.5955 25.5728 58.3725 25.8936 59.0189 26.5352C59.6653 27.1769 59.9885 27.9482 59.9885 28.8493V53.1716C59.9885 54.0727 59.6653 54.844 59.0189 55.4857C58.3725 56.1273 57.5955 56.4481 56.6878 56.4481H47.954ZM21.9873 54.7992V41.3108C21.9873 40.7681 22.1044 40.2622 22.3387 39.7933C22.573 39.3244 22.9102 38.9278 23.3503 38.6034L31.7666 32.6531C32.3388 32.2415 32.9767 32.0357 33.6803 32.0357C34.3839 32.0357 35.0288 32.2415 35.615 32.6531L43.9645 38.6034C44.3843 38.9182 44.7129 39.3158 44.9502 39.7963C45.1874 40.2767 45.3061 40.7816 45.3061 41.3108V54.7992C45.3061 55.2606 45.1454 55.6508 44.824 55.9697C44.5027 56.2887 44.1184 56.4481 43.6713 56.4481H36.0718V47.4394H31.2885V56.4481H23.6362C23.1748 56.4481 22.7846 56.2887 22.4657 55.9697C22.1468 55.6508 21.9873 55.2606 21.9873 54.7992ZM24.9982 53.4613H28.8327V44.9837H38.5275V53.4613H42.2951V41.1873L33.6801 35.0197L24.9982 41.2114V53.4613Z" fill="#039855" />
                </svg>

              </div>
              <h1 className="text-[28px] font-bold text-left">Diversification</h1>
              <p className="mt-4  text-left  text-xl font-normal    ">Land investments can provide diversification in an investment portfolio, since they are not directly linked to the performance of the stock market or other financial markets.</p>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="container my-14">
        <h3 className="customDarkGreenHeading font-bold text-[17px] text-customDarkGreen">
          How To Buy
        </h3>
        <h1 className="  pb-6  text-left font-bold leading-tight tracking-normal text-lg md:text-[34px] text-[#101010]">
          Our team of experts at 500Land follows a process to carefully select land based on its investment potential, including:
        </h1>
        <div className=" bg-cover bg-center h-72"
        //  style={{ backgroundImage: "url('/images/blockchaindetail.png')" }}
        >
          <Carousel />


        </div>

      </section>
      <section className="container my-14">
        <h3 className="customDarkGreenHeading font-bold text-[17px] text-customDarkGreen">
          Simple, Secure, and Easy.
        </h3>
        <h1 className="  pb-6  text-left font-bold leading-tight tracking-normal text-lg md:text-[34px] text-[#101010]">
          Our platform allows you to purchase a fractional of a land without the need for extensive knowledge or high cost of entry. </h1>

        <div className=" flex flex-wrap justify-between items-stretch gap-y-3 md:gap-0">
          <div className="md:w-[49%]  bg-customDarkGreen rounded-2xl  flex flex-col  overflow-hidden">
            <div className="lg:p-[52px]  md:p-12 p-5b  p-5 flex-grow   "   >
              <div id="step1 " className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ECFDF3] text-[#039855] ">
                1
              </div>
              <h3 className="text-[28px]  font-bold text-white my-1">
                Create an account
              </h3>
              <p className="text-[17px]  font-normal text-white">
                Visit our website and create an account by providing your personal information, payment information, email address, and set a password.  </p>
            </div>
            {/* //process image  */}
            <div className="flex justify-center">
              <Image
                src="/images/MaskGroup.png"
                alt="Image"
                // fill
                width={547}
                height={337}
                className=" "
              // style={{ objectFit: "cover", objectPosition: "center" }}
              />

            </div>

          </div>
          <div className="md:w-[49%]  bg-customDarkGreen rounded-2xl  flex flex-col  overflow-hidden">
            <div className="lg:p-[52px]  md:p-12 p-5   p-5 flex-grow   "   >
              <div id="step1 " className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ECFDF3] text-[#039855]  ">
                2
              </div>
              <h3 className="text-[28px]  font-bold text-white my-1">
                Browse our offerings
              </h3>
              <p className="text-[17px]  font-normal text-white">
                Once you’re logged in, choose our current hedge offerings for a land investment, checking the location and investment potential.  </p>
            </div>
            {/* //process image  */}
            <div className="flex justify-center">
              <Image
                src="/images/portifolio.png"
                alt="Image"
                // fill
                width={547}
                height={337}
                className=" "
              // style={{ objectFit: "cover", objectPosition: "center" }}
              />

            </div>

          </div>

        </div>
        <div className=" flex flex-wrap justify-between items-stretch gap-y-3 md:gap-0 mt-5">
          <div className="md:w-[49%]  bg-customDarkGreen rounded-2xl  flex flex-col  overflow-hidden">
            <div className="lg:p-[52px]  md:p-12 p-5b  p-5 flex-grow   "   >
              <div id="step1 " className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ECFDF3] text-[#039855] ">
                3
              </div>
              <h3 className="text-[28px]  font-bold text-white my-1">
                Make a Selection
              </h3>
              <p className="text-[17px]  font-normal text-white">
                Select the land fund that best fits your investment goals and needs.  </p>
            </div>
            {/* //process image  */}
            <div className="flex justify-center">
              <Image
                src="/images/addfund.png"
                alt="Image"
                // fill
                width={547}
                height={337}
                className=" "
              // style={{ objectFit: "cover", objectPosition: "center" }}
              />

            </div>

          </div>
          <div className="md:w-[49%]  bg-customDarkGreen rounded-2xl  flex flex-col overflow-hidden">
            <div className="lg:p-[52px]  md:p-12   p-5 flex-grow   "   >
              <div id="step1 " className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ECFDF3] text-[#039855]  ">
                4
              </div>
              <h3 className="text-[28px]  font-bold text-white my-1">
                Complete the purchase
              </h3>
              <p className="text-[17px]  font-normal text-white">
                Once you’ve selected the land you want to invest in, complete the purchase through our secure online payment.  </p>
            </div>
            {/* //process image  */}
            <div className="flex justify-center">
              <Image
                src="/images/purchase.png"
                alt="Image"
                // fill
                width={547}
                height={337}
                className=" "
              // style={{ objectFit: "cover", objectPosition: "center" }}
              />

            </div>

          </div>

        </div>
      </section>




      <section className="container my-6">
        <div className="header flex justify-between mt-20 items-center">
          <h1 className="font-bold text-customBlack text-[34px] ">
            Available Opportunities
          </h1>

          <Button variant="secondary" className="bg-white text-customDarkGreen  text-base font-normal  "   >
            <Link href="/opportunities" className="w-full flex items-center ">
              <span className="mr-2 "> View All</span>
              <svg width={18} height={18} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16675 9.99984H15.8334M15.8334 9.99984L10.0001 4.1665M15.8334 9.99984L10.0001 15.8332" stroke="#1B4638" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Link>

          </Button>
        </div>

        <div className="flex flex-wrap  mt-6 justify-between">
          {[1, 2, 3].map((x: any, index: number): any => {
            return (
              <div className="md:w-[32%]  w-full my-2 md:my-0" key={x}>
                <div className="bg-white  shadow-md  rounded-2xl  h-100    ">
                  {/* <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div> */}
                  <div className="relative h-[179px] text-center flex justify-center  ">
                    <Image
                      src="/images/Img.png"
                      alt="Image"
                      fill
                      // width={384}
                      // height={179}
                      className="rounded-t-2xl"
                    // style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="lg:p-6 p-4 ">
                    <div className="flex justify-between">
                      <span className="font-normal text-[13px]">Bradley,CA</span>
                      <span className="font-normal text-[13px]">2000 SQFT</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">
                      <Link href="/opportunities/opportunities-single"  >
                        Lynch Canyon Road</Link></h2>
                    <div className="flex justify-between">
                      <span className="title">Requested Fund</span>
                      <span className="price  md:mb-0 mb-1  f  font-semibold text-base leading-5 text-black">USD 1,023,550</span>
                    </div>
                    <div className="my-4 ">
                      <Progress value={75} />
                    </div>
                    <div className="flex justify-center">
                      <Link href="/opportunities" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2  w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  ")} style={{ fontFamily: "sans-serif" }}>Funds start from $100 / Share</Link>
                    </div>
                    <div className="flex justify-center">
                      <p className="h-5 font-normal text-[15px] leading-5 flex items-center text-center text-green-900 md:mt-0 mt-2 ">
                        102 Investors - 3 Share Left
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="container my-6 ">
        <div className="header flex justify-between mt-20 items-center">
          <h1 className="font-bold text-customBlack text-[34px] ">
            Marketplace
          </h1>

          <Button variant="secondary" className="bg-white text-customDarkGreen  text-base font-normal  "   >
            <Link href="/marketplace" className="w-full flex items-center ">
              <span className="mr-2 "> View All</span>
              <svg width={18} height={18} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16675 9.99984H15.8334M15.8334 9.99984L10.0001 4.1665M15.8334 9.99984L10.0001 15.8332" stroke="#1B4638" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Link>

          </Button>
        </div>
        <div id="marketplace-para " className="text-base font-normal">
          Our user-friendly platform simplifies the process of creating and managing your land listings. Just provide the essential details, upload high-quality images, and set the price. Whether you have a vacant lot, or commercial land for sale, the 500Land Marketplace connects you with interested buyers.
        </div>

        <div className="flex flex-wrap  mt-6 justify-between">
          {[1, 2, 3].map((x: any, index: number): any => {
            return (
              <div className="md:w-[32%] w-full  my-2 md:my-1" key={x}>
                <div className="bg-white  shadow-md  rounded-2xl  h-100    ">
                  {/* <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/Diversification.png')" }}></div> */}
                  <div className="relative h-[179px] text-center flex justify-center  ">
                    <Image
                      src="/images/Img.png"
                      alt="Image"
                      fill
                      // width={384}
                      // height={179}
                      className="rounded-t-2xl"
                    // style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div className="lg:p-6 p-4">
                    <div className="flex justify-between">
                      <span className="font-normal text-[13px]">Bradley,CA</span>
                      <span className="font-normal text-[13px]">2000 SQFT</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 ">

                      <Link href="/marketplace/marketplace-single"  >Contact Seller

                        Lynch Canyon Road</Link></h2>
                    <div className="flex justify-between">

                      <span className="price  md:mb-0 mb-1  font-bold text-base leading-5 text-black">$ 1,023,550</span>
                    </div>


                    <div className="flex justify-center">




                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="primaryDark" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Contact Seller</Button>
                        </DialogTrigger>
                        <SweetAlert pageName={"market-single"}>

                          <div className="flex justify-between ">
                            <h3 className="font-bold text-xl">
                              Contact Seller
                            </h3>
                            <div>
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
                            </div>

                          </div>

                          <div>
                            <p className="text-sm font-medium text-[#475467] ">Email</p>
                            <p className="text-base font-medium text-[#344054]">johndoe@gmail.com</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#475467] ">Phone number  </p>
                            <p className="text-base font-medium text-[#344054]">+201123123123</p>
                          </div>

                        </SweetAlert >
                      </Dialog>



                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>


      <section className="bg-customStrongtDark mt-16 py-16 ">
        <div className="container  ">

          <h1 className="font-bold text-white text-[34px]  ">
            Common Questions
          </h1>
          <Accordion type="single" collapsible className="w-full py-5">
            {[{ index: 1, question: "What is 500Land?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 2, question: "What is the company’s mission??", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 3, question: "What are the benefits of investing in land?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 4, question: "How does 500Land select land for investment?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 5, question: "What services does 500Land offer?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." },
            { index: 6, question: "Does 500Land provide ongoing management and monitoring of investments?", answer: "500Lands mission is to make land investment accessible and easy for everyone by providing exceptional investment opportunities in the land market. We identify and acquire undervalued land with the goal of maximizing returns for our clients." }
            ].map((x: any, index: number): any => {
              return <AccordionItem value={`item-${x.index}`} className="bg-customLightDark rounded-3xl my-3 px-5" key={x.index}>
                <AccordionTrigger className="text-white text-left font-medium text-[17px]">{x.question}</AccordionTrigger>
                <AccordionContent className="text-customLightTQuestions font-normal text-[17px]">
                  {x.answer}
                </AccordionContent>
              </AccordionItem>
            })}
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  )
}
