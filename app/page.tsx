import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Inter } from 'next/font/google'
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

const inter = Inter({
  subsets: ['latin'],
  weight: "700"
})
const inter400 = Inter({
  subsets: ['latin'],
  weight: "400"
})

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section className={`hero-section relative min-h-screen `}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')", minHeight: "auto" }}></div>
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
                <Link href="/account/create-account" className={cn(buttonVariants({ size: "sm", variant: "outline" }), "px-4 text-white w-100 px-10 rounded-full font-normal")} style={{ fontFamily: "Basier Square Regular" }}>Login</Link>
              </nav>
            </div>
          </header>


          <div className=" pb-5 relative md:absolute bottom-0 left-0  w-full mt-28 md:m-auto mv-12 md:mb-auto md:w-3/5  left-auto     top-1/3" style={{ minHeight: "auto" }}>
            <div className=" ">
              <h1 className={`font-bold text-white text-7xl leading-tight     ${inter.className} `}
                style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)" }}>Invest in land.
              </h1>
              <p className=" font-normal text-white text-xl leading-8   mb-6 " style={{ fontFamily: "Basier Square Regular" }}>
                Invest in your future, starting at $100. We specialize in land investments that offer stability, returns, and diversification for your portfolio.</p>
              <div className="flex  ">
                <Link href="/login" className={cn(buttonVariants({ variant: "primary" }), " text-center mr-2   w-100 px-4 md:px-6 rounded-full md:font-bold font-normal  py-6 ")} style={{ fontFamily: "sans-serif" }}>Check Available Opportunity</Link>
                <Link href="/login" className={cn(buttonVariants({ variant: "primaryLight" }), "    w-100 px-4 md:px-6 rounded-full font-normal md:font-bold py-6 text-center ")} style={{ fontFamily: "sans-serif" }}> How it works</Link>
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
            {/* <p className="  font-normal text-base leading-5 text-black flex-none order-1 self-stretch flex-grow-0 py-5 text-center md:text-left md:pb-0">
              We believe that investing in land should be simple, secure, and easy. With 500Land, you can purchase a fractional of land with just a few simple steps
            </p> */}
          </div>
          {/* <div className="w-full md:w-2/5">
            <div className="relative h-56  flex justify-end">
              <Image
                src="/images/home1.png"
                alt="Image"
                // quality={100}
                width={200}
                height={480}
                // style={{ height: '100%' }}
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                style={{ height: '100%', width: 'auto' }} //The point is right there!
              />
            </div>
          </div> */}
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
        <div className=" bg-cover bg-center h-72" style={{ backgroundImage: "url('/images/blockchaindetail.png')" }}></div>

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

          <Button variant="secondary" className="bg-white text-customDarkGreen  text-base font-normal " >View All
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16675 9.99984H15.8334M15.8334 9.99984L10.0001 4.1665M15.8334 9.99984L10.0001 15.8332" stroke="#1B4638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


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
                    <h2 className="text-xl font-bold mb-3">Lynch Canyon Road</h2>
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

          <Button variant="secondary" className="bg-white text-customDarkGreen  text-base font-normal " >View All
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16675 9.99984H15.8334M15.8334 9.99984L10.0001 4.1665M15.8334 9.99984L10.0001 15.8332" stroke="#1B4638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


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
                    <h2 className="text-xl font-bold mb-3 ">Lynch Canyon Road</h2>
                    <div className="flex justify-between">

                      <span className="price  md:mb-0 mb-1  font-bold text-base leading-5 text-black">$ 1,023,550</span>
                    </div>

              
                    <div className="flex justify-center">
                      <Link href="/opportunities" className={cn(buttonVariants({ variant: "primaryDark" }), "  mr-2  w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  ")} style={{ fontFamily: "sans-serif" }}>Contact Seller</Link>
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
          <span className="dark:text-gray-480">

            <svg width="48" height="48" viewBox="0 0 377 244" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81.9262 211.849C83.4605 211.849 84.0609 212.867 83.7607 214.901C83.2437 219.087 82.8101 223.106 82.4599 226.992C82.1097 230.861 81.7762 234.896 81.4593 239.082C81.2592 241.017 80.0751 241.884 77.9406 241.684C76.4063 241.484 74.0883 241.334 70.9864 241.234C67.8679 241.133 63.6154 241.083 58.2122 241.083H7.73229C5.79781 241.083 4.83057 240.416 4.83057 239.099C4.83057 238.382 5.11407 237.848 5.66439 237.498C6.2314 237.148 6.91513 236.814 7.73229 236.497C9.46665 235.98 10.5173 234.863 10.8675 233.129C11.2177 231.394 11.4011 229.043 11.4011 226.091V145.16C11.4011 142.108 11.2177 139.723 10.8675 138.039C10.5173 136.355 9.46665 135.254 7.73229 134.754C6.2981 134.237 5.43092 133.787 5.13074 133.37C4.93063 132.969 4.83057 132.602 4.83057 132.302V132.152C4.83057 130.718 5.84784 130.068 7.88237 130.168C9.61674 130.368 12.0348 130.518 15.1534 130.635C18.2552 130.735 22.2075 130.785 27.0104 130.785C31.8132 130.785 35.7822 130.735 38.9508 130.635C42.1193 130.535 44.5541 130.385 46.2885 130.168C48.323 130.068 49.3403 130.735 49.3403 132.152C49.3403 133.27 48.373 134.137 46.4386 134.754C44.8043 135.271 43.787 136.305 43.3867 137.889C42.9698 139.473 42.7697 141.691 42.7697 144.543V228.076C42.7697 231.945 44.5541 233.896 48.1229 233.896H58.2122C61.164 233.896 63.6988 233.412 65.7834 232.445C67.8679 231.478 69.6857 230.094 71.2199 228.309C72.7541 226.525 74.0716 224.44 75.2056 222.039C76.3229 219.637 77.3902 217.019 78.4242 214.167C79.0412 212.433 80.2086 211.666 81.9429 211.866L81.9262 211.849Z" fill="#114737" />
              <path d="M170.312 235.864C170.929 236.481 171.563 236.931 172.23 237.248C172.897 237.548 173.231 238.065 173.231 238.782C173.231 240.316 172.113 241.083 169.862 241.083H167.561C165.526 241.083 163.175 241.067 160.523 241C157.872 240.95 155.253 240.516 152.652 239.699C150.05 238.882 147.649 237.565 145.464 235.714C143.263 233.879 141.612 231.127 140.495 227.459C139.277 230.11 137.71 232.412 135.825 234.346C133.941 236.28 131.79 237.915 129.405 239.249C127.003 240.583 124.502 241.55 121.9 242.151C119.299 242.768 116.681 243.068 114.029 243.068C105.657 243.068 99.1869 241.1 94.6009 237.181C90.0148 233.262 87.6134 228.226 87.4133 222.105C87.3132 216.802 88.2805 212.333 90.315 208.714C92.3496 205.095 95.0345 202.06 98.3531 199.609C101.672 197.157 105.357 195.206 109.443 193.722C113.529 192.238 117.498 190.97 121.383 189.903C125.252 188.836 128.771 187.868 131.94 187.001C135.108 186.134 137.443 185.033 138.977 183.716V181.415C138.977 177.429 138.894 173.894 138.744 170.775C138.594 167.673 138.21 165.038 137.593 162.904C136.976 160.769 136.059 159.135 134.841 158.001C133.624 156.883 131.94 156.316 129.788 156.316C126.837 156.316 124.685 157 123.368 158.384C122.034 159.768 121.117 161.436 120.616 163.437C120.099 165.422 119.782 167.59 119.616 169.941C119.466 172.293 118.999 174.427 118.232 176.362C117.464 178.296 116.197 179.864 114.413 181.031C112.628 182.198 109.843 182.682 106.074 182.482C103.323 182.282 101.055 181.415 99.2703 179.88C97.4859 178.346 96.3186 176.445 95.7516 174.144C95.1846 171.842 95.368 169.408 96.2852 166.806C97.2024 164.204 98.9868 161.803 101.638 159.618C104.29 157.434 107.942 155.583 112.578 154.115C117.214 152.631 122.951 151.897 129.788 151.897C142.529 151.897 152.052 154.499 158.322 159.702C164.592 164.905 167.728 173.11 167.728 184.333V187.235C167.728 188.969 167.744 191.104 167.811 193.655C167.861 196.207 167.911 198.992 167.961 201.994C168.011 204.995 168.061 207.93 168.111 210.782C168.161 213.634 168.194 216.219 168.194 218.503V226.992C168.194 228.209 168.278 229.393 168.428 230.51C168.578 231.628 168.812 232.678 169.112 233.646C169.412 234.613 169.829 235.347 170.329 235.864H170.312ZM123.835 226.525C127.103 226.525 129.872 225.374 132.173 223.089C134.475 220.805 135.609 217.803 135.609 214.134V192.571C134.074 193.589 131.99 194.789 129.338 196.173C126.687 197.558 124.135 199.225 121.684 201.226C119.232 203.228 117.164 205.562 115.48 208.264C113.796 210.965 113.162 214.101 113.562 217.669C113.862 220.621 115.013 222.839 116.997 224.323C118.982 225.808 121.25 226.541 123.802 226.541L123.835 226.525Z" fill="#114737" />
              <path d="M273.857 236.481C275.791 237.098 276.759 237.965 276.759 239.082C276.759 240.616 275.691 241.267 273.54 241.067C272.006 240.867 269.771 240.717 266.803 240.6C263.851 240.5 260.065 240.45 255.479 240.45C250.893 240.45 247.108 240.5 244.156 240.6C241.204 240.7 238.953 240.85 237.419 241.067C235.284 241.267 234.2 240.6 234.2 239.082C234.2 237.965 235.167 237.098 237.102 236.481C238.836 235.964 239.887 234.93 240.237 233.346C240.587 231.761 240.771 229.543 240.771 226.692V188.135C240.771 185.184 240.587 182.349 240.237 179.647C239.887 176.945 239.186 174.577 238.169 172.526C237.152 170.492 235.768 168.857 234.033 167.623C232.299 166.406 230.114 165.789 227.463 165.789C224.811 165.789 222.393 166.406 220.508 167.623C218.624 168.841 217.09 170.475 215.922 172.526C214.755 174.561 213.905 176.879 213.404 179.48C212.887 182.082 212.637 184.7 212.637 187.352V226.675C212.637 229.527 212.837 231.745 213.254 233.329C213.654 234.913 214.738 235.964 216.473 236.464C218.307 237.081 219.224 237.948 219.224 239.066C219.224 240.6 218.207 241.25 216.173 241.05C214.638 240.85 212.404 240.7 209.435 240.583C206.484 240.483 202.698 240.433 198.112 240.433C193.526 240.433 189.74 240.483 186.789 240.583C183.837 240.683 181.535 240.833 179.901 241.05C177.867 241.25 176.849 240.583 176.849 239.066C176.849 238.348 177.099 237.815 177.616 237.465C178.133 237.114 178.784 236.781 179.601 236.464C181.335 235.947 182.403 234.913 182.82 233.329C183.22 231.745 183.437 229.527 183.437 226.675V178.48C183.437 175.528 183.236 173.26 182.82 171.676C182.403 170.091 181.335 169.057 179.601 168.54C177.666 168.023 176.699 167.156 176.699 165.939C176.699 164.505 177.566 163.638 179.301 163.337C181.952 162.82 185.821 161.853 190.924 160.436C196.027 159.001 201.531 156.817 207.451 153.865C208.468 153.348 209.252 153.281 209.819 153.632C210.386 153.982 210.753 154.732 210.97 155.85L212.354 167.623C213.371 165.589 214.655 163.621 216.173 161.736C217.707 159.852 219.541 158.168 221.676 156.683C223.81 155.199 226.312 154.032 229.18 153.165C232.032 152.297 235.301 151.864 238.969 151.864C249.976 151.864 257.947 154.899 262.834 160.969C267.736 167.04 270.171 176.095 270.171 188.119V226.675C270.171 229.527 270.355 231.745 270.705 233.329C271.055 234.913 272.106 235.964 273.84 236.464L273.857 236.481Z" fill="#114737" />
              <path d="M373.432 235.097C374.35 235.397 375.067 235.714 375.567 236.014C376.084 236.314 376.334 236.881 376.334 237.698C376.334 239.032 375.267 239.683 373.116 239.683C371.381 239.683 369.163 239.733 366.462 239.833C363.76 239.933 360.975 240.066 358.123 240.216C355.272 240.366 352.52 240.55 349.868 240.75C347.217 240.95 345.066 241.15 343.448 241.367C341.313 241.667 340.229 240.75 340.229 238.615V229.893C337.778 233.779 334.509 236.931 330.44 239.382C326.355 241.834 321.201 243.051 314.981 243.051C308.761 243.051 303.408 241.834 298.605 239.382C293.802 236.931 289.816 233.496 286.598 229.06C283.379 224.624 280.994 219.287 279.41 213.067C277.826 206.846 277.192 200.009 277.492 192.571C277.792 185.234 279.177 178.863 281.628 173.443C284.079 168.04 287.365 163.604 291.501 160.135C295.636 156.667 300.422 154.299 305.876 153.015C311.329 151.747 317.116 151.564 323.236 152.481C327.222 153.098 330.607 154.299 333.409 156.083C336.21 157.867 338.478 160.085 340.213 162.737V153.248C340.213 150.396 340.029 148.178 339.679 146.594C339.329 145.01 338.278 143.976 336.544 143.459C334.609 142.742 333.642 141.825 333.642 140.707C333.642 139.273 334.559 138.356 336.394 137.956C337.711 137.755 339.479 137.422 341.68 136.955C343.865 136.505 346.3 135.888 348.951 135.121C351.603 134.353 354.438 133.436 357.44 132.369C360.441 131.302 363.376 130.051 366.228 128.617C367.145 128.1 367.929 128.033 368.596 128.383C369.263 128.733 369.597 129.484 369.597 130.601V225.291C369.597 228.242 369.797 230.494 370.214 232.028C370.614 233.562 371.698 234.58 373.432 235.08V235.097ZM325.704 230.961C330.907 230.661 334.81 227.309 337.411 220.938C340.013 214.568 341.063 204.695 340.546 191.337C340.146 180.831 338.228 173.11 334.81 168.157C331.391 163.204 327.138 160.886 322.035 161.203C319.484 161.403 317.266 162.503 315.381 164.488C313.497 166.472 311.963 169.157 310.795 172.526C309.628 175.895 308.761 179.814 308.194 184.3C307.627 188.786 307.41 193.639 307.51 198.825C307.61 204.128 308.177 208.814 309.194 212.9C310.212 216.986 311.546 220.404 313.163 223.156C314.798 225.908 316.682 227.959 318.817 229.276C320.951 230.611 323.253 231.161 325.704 230.961Z" fill="#114737" />
              <path d="M88.8298 78.4369C89.13 84.157 88.0627 89.4435 85.6113 94.3464C83.1598 99.2493 79.6911 103.502 75.2051 107.121C70.7191 110.739 65.4327 113.574 59.3791 115.609C53.3088 117.644 46.855 118.661 40.0343 118.661C32.1796 118.661 25.6091 117.694 20.3059 115.759C15.0028 113.825 10.7669 111.373 7.61506 108.421C4.44652 105.47 2.31192 102.251 1.19459 98.7823C0.07726 95.3136 -0.256268 92.0783 0.193998 89.0599C0.660942 86.0581 1.8283 83.5066 3.71275 81.4054C5.5972 79.3208 7.96527 78.1701 10.8336 77.97C15.2196 77.6698 18.3881 78.3536 20.3226 80.0379C22.2571 81.7222 23.5578 83.8902 24.2249 86.5417C24.892 89.1933 25.2422 92.1451 25.2922 95.4137C25.3422 98.6823 25.7258 101.684 26.4429 104.436C27.16 107.187 28.5108 109.505 30.4953 111.39C32.4798 113.274 35.665 114.225 40.0509 114.225C43.5197 114.225 46.4547 113.258 48.8395 111.323C51.2409 109.389 53.1754 106.87 54.6596 103.752C56.1438 100.65 57.1111 97.098 57.5613 93.1123C58.0283 89.1266 57.9949 85.1576 57.4779 81.1719C56.8609 76.6859 55.8436 72.7502 54.4261 69.3982C52.992 66.0296 51.2409 63.2279 49.1397 60.9766C47.0551 58.7419 44.7037 57.0076 42.1022 55.7735C39.5006 54.5394 36.7156 53.789 33.7639 53.4721C28.961 52.9552 24.6918 53.5555 20.9063 55.2399C17.1374 56.9242 13.9688 59.0921 11.4173 61.7437C10.8003 62.4608 10.25 62.811 9.73298 62.811H7.74847C6.7312 62.811 5.8807 62.4775 5.23031 61.8104C4.56325 61.1434 4.32978 60.3095 4.54658 59.2923L13.1183 8.04522C13.4185 6.51098 14.2857 5.74386 15.7199 5.74386H67.734C70.7858 5.74386 72.9371 5.46036 74.1545 4.91003C75.3719 4.34303 76.5059 3.35911 77.5232 1.92493C77.9234 1.40796 78.357 0.924338 78.8239 0.474071C79.2909 0.0238045 79.8745 -0.10961 80.575 0.0905082C82.0091 0.390686 82.5595 1.62475 82.2593 3.75935C81.5422 7.32813 80.8585 10.8469 80.1914 14.3156C79.5243 17.7843 78.8906 21.3031 78.2736 24.8719C77.9734 26.5062 76.9395 27.3233 75.2218 27.3233H16.3202L11.8843 53.0219C13.6186 51.2875 15.8366 49.6532 18.5382 48.119C21.2398 46.5847 24.2916 45.2673 27.7103 44.1333C31.129 43.0159 34.8312 42.1654 38.8002 41.6151C42.7859 41.0481 46.855 40.9314 51.0408 41.2316C55.7269 41.5317 60.2629 42.4489 64.6489 43.9832C69.0348 45.5174 72.9371 47.7521 76.3558 50.7205C79.7745 53.6723 82.6095 57.4245 84.8442 61.9605C87.0788 66.4965 88.4129 71.9831 88.8298 78.4036V78.4369Z" fill="#114737" />
              <path d="M138.076 118.511C130.321 118.511 123.467 117.077 117.497 114.225C111.527 111.373 106.49 107.387 102.355 102.284C98.2188 97.1814 95.0836 91.1111 92.949 84.0736C90.8144 77.0361 89.7305 69.3816 89.7305 61.1267C89.7305 52.8718 90.7978 45.2173 92.949 38.1798C95.1003 31.1422 98.2355 25.072 102.355 19.969C106.49 14.8659 111.527 10.8969 117.497 8.02855C123.467 5.17686 130.321 3.74268 138.076 3.74268C145.83 3.74268 152.534 5.17686 158.505 8.02855C164.475 10.8802 169.494 14.8659 173.58 19.969C177.666 25.072 180.768 31.1422 182.919 38.1798C185.07 45.2173 186.138 52.8718 186.138 61.1267C186.138 69.3816 185.07 77.0361 182.919 84.0736C180.768 91.1111 177.666 97.1814 173.58 102.284C169.494 107.387 164.475 111.356 158.505 114.225C152.534 117.077 145.73 118.511 138.076 118.511ZM146.181 112.54C149.232 112.024 151.617 110.172 153.301 106.954C154.986 103.735 156.136 99.6328 156.737 94.6466C157.354 89.6436 157.471 83.9069 157.12 77.4364C156.754 70.9659 155.97 64.1952 154.752 57.1577C153.635 49.92 152.251 43.2828 150.617 37.2625C148.982 31.2423 147.114 26.1226 145.03 21.8868C142.945 17.6509 140.561 14.4157 137.909 12.1643C135.257 9.92968 132.406 9.06249 129.337 9.56279C126.169 10.0798 123.734 11.9309 122 15.1494C120.265 18.368 119.098 22.4871 118.481 27.5401C117.864 32.5931 117.747 38.3465 118.097 44.8337C118.447 51.3042 119.198 58.0749 120.315 65.0957C121.433 72.2333 122.817 78.8372 124.451 84.9074C126.085 90.9777 127.97 96.1474 130.104 100.433C132.239 104.719 134.674 107.938 137.375 110.072C140.077 112.207 143.012 113.024 146.164 112.524L146.181 112.54Z" fill="#114737" />
              <path d="M237.051 118.511C229.296 118.511 222.442 117.077 216.472 114.225C210.502 111.373 205.465 107.387 201.33 102.284C197.194 97.1814 194.059 91.1111 191.924 84.0736C189.79 77.0361 188.706 69.3816 188.706 61.1267C188.706 52.8718 189.773 45.2173 191.924 38.1798C194.075 31.1422 197.211 25.072 201.33 19.969C205.465 14.8659 210.502 10.8969 216.472 8.02855C222.442 5.17686 229.296 3.74268 237.051 3.74268C244.805 3.74268 251.509 5.17686 257.48 8.02855C263.45 10.8802 268.469 14.8659 272.555 19.969C276.641 25.072 279.743 31.1422 281.894 38.1798C284.045 45.2173 285.113 52.8718 285.113 61.1267C285.113 69.3816 284.045 77.0361 281.894 84.0736C279.743 91.1111 276.641 97.1814 272.555 102.284C268.469 107.387 263.45 111.356 257.48 114.225C251.509 117.077 244.705 118.511 237.051 118.511ZM245.156 112.54C248.207 112.024 250.592 110.172 252.277 106.954C253.961 103.735 255.112 99.6328 255.712 94.6466C256.329 89.6436 256.446 83.9069 256.096 77.4364C255.729 70.9659 254.945 64.1952 253.727 57.1577C252.61 49.92 251.226 43.2828 249.592 37.2625C247.957 31.2423 246.09 26.1226 244.005 21.8868C241.92 17.6509 239.536 14.4157 236.884 12.1643C234.233 9.92968 231.381 9.06249 228.312 9.56279C225.144 10.0798 222.709 11.9309 220.975 15.1494C219.24 18.368 218.073 22.4871 217.456 27.5401C216.839 32.5931 216.722 38.3465 217.072 44.8337C217.423 51.3042 218.173 58.0749 219.29 65.0957C220.408 72.2333 221.792 78.8372 223.426 84.9074C225.06 90.9777 226.945 96.1474 229.079 100.433C231.214 104.719 233.649 107.938 236.35 110.072C239.052 112.207 241.987 113.024 245.139 112.524L245.156 112.54Z" fill="#114737" />
              <path d="M304.224 118.511C301.873 118.511 299.655 118.06 297.57 117.127C295.486 116.209 293.668 114.992 292.134 113.458C290.599 111.923 289.382 110.139 288.465 108.105C287.548 106.07 287.081 103.869 287.081 101.534C287.081 99.1993 287.531 96.9646 288.465 94.8801C289.382 92.7955 290.599 90.9611 292.134 89.3768C293.668 87.7925 295.469 86.5418 297.57 85.6246C299.655 84.7074 301.873 84.2404 304.224 84.2404C306.575 84.2404 308.793 84.7074 310.878 85.6246C312.963 86.5418 314.797 87.7925 316.381 89.3768C317.966 90.9611 319.216 92.7955 320.133 94.8801C321.051 96.9646 321.518 99.1826 321.518 101.534C321.518 103.885 321.051 106.07 320.133 108.105C319.216 110.139 317.966 111.923 316.381 113.458C314.797 114.992 312.963 116.209 310.878 117.127C308.793 118.044 306.575 118.511 304.224 118.511Z" fill="#114737" />
            </svg>


          </span>
          <span className="dark:text-gray-480 text-right  pl-3">© Copyright 2023 500 Land. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}
