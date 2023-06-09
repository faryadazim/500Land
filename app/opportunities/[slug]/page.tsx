"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { Progress } from "@/components/ui/progress";

import { buttonVariants } from "@/components/ui/button";
import VectorLocation from "@/public/Icon/VectorLocation.png";
import Vector from "@/public/Icon/Vector.png";
import Share from "@/public/Icon/share.png";
import one from "@/public/images/RectangleOppartunity(1).png";
import two from "@/public/images/RectangleOppartunity(2).png";
import three from "@/public/images/RectangleOppartunity(3).png";
import map from "@/public/images/map.png";
import location from "@/public/Icon/location.png";
import dolar from "@/public/Icon/dolar.png";
import copy from "@/public/copy.png";
import details from "@/public/Icon/details.png";
import Map from "@/components/Map";
import { Slider } from "@/components/ui/slider";

import { Separator } from "@/components/ui/separator";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  getLast3Opportunities,
  getOpportunityBySlug,
} from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import formatNumber from "@/functions/addZero";

const inter = Poppins({
  subsets: ["latin"],
  weight: "100",
});
type props = {
  params: { slug: string };
};
type portable = {
  _id: string;
  _createdAt: string;
  name: string;
  location: string;
  locationMap: string;
  area: string;
  currency: string;
  requestedFund: string;
  slug: string;
  image: any;
  description: PortableTextBlock[];
};
export default function OpportunitiesPage(props: any) {
  const [opportunity, setOpportunity] = useState<portable>({
    _id: "",
    _createdAt: "",
    name: "",
    location: "",
    locationMap: "",
    area: "",
    currency: "",
    requestedFund: "",
    slug: "",
    image: [],
    description: [],
  });
  const [lastOpportunity, setLastOpportunity] = useState([]);

  const getOpportunity = async () => {
    await getOpportunityBySlug(props?.params?.slug || "").then((res: any) => {
      setOpportunity(res);
    });
    await getLast3Opportunities().then((res: any) => {
      setLastOpportunity(res);
    });
  };
  const getLastOpportunity = async () => {
    await getLast3Opportunities().then((res: any) => {
      setLastOpportunity(res);
    });
  };
  useEffect(() => {
    getOpportunity();
    getLastOpportunity();
  }, []);

  console.log("lastOpportunity", lastOpportunity);

  return (
    <div className="bg-customlightGrey">
      <section
        className={`hero-section relative  bg-customDarkGreen pb-16  ${inter.className} z-30`}
      >
        <div className={`flex   flex-col sticky top-0 z-50`}>
          <header className="container   top-0 z-48">
            <div className="flex h-16 items-center justify-between py-5">
              <MainNav items={marketingConfig.mainNav} />
              <nav className="flex">
                <Link
                  href="/blogs"
                  className={cn(
                    " items-center text-lg   sm:text-sm text-white tracking-widest mx-3 hidden lg:flex text-[15px]  font-normal    "
                  )}
                  style={{ fontFamily: "Basier Square Regular" }}
                >
                  Blogs
                </Link>
                <Link
                  href="/contact-us"
                  className={cn(
                    "  items-center text-lg   sm:text-sm text-white tracking-widest mx-3 hidden  lg:flex text-[15px]  font-normal  "
                  )}
                  style={{ fontFamily: "Basier Square Regular" }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "outline" }),
                    "px-4 text-white w-100 px-10 rounded-full font-normal"
                  )}
                  style={{ fontFamily: "Basier Square Regular" }}
                >
                  Login
                </Link>
              </nav>
            </div>
          </header>

          <div className="container flex justify-between mt-10 ">
            <div className="opertunityInfo">
              <h3
                className=" font-bold  sm:text-2xl text-3xl md:text-[34px] flex items-center text-white"
                style={{ fontFamily: "sans-serif" }}
                id="oppertunityTitle"
              >
                {opportunity?.name}
              </h3>

              <div className=" flex my-2 text-white ">
                <div className="  flex flex-row items-center">
                  <span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.57496 13.9375C1.14939 13.9375 0.790924 13.7919 0.499563 13.5005C0.208188 13.2091 0.0625 12.8507 0.0625 12.4251C0.0625 11.9995 0.208188 11.6417 0.499563 11.3517C0.790924 11.0617 1.14939 10.9167 1.57496 10.9167C2.00053 10.9167 2.35832 11.0617 2.64833 11.3517C2.93835 11.6417 3.08335 11.9995 3.08335 12.4251C3.08335 12.8507 2.93835 13.2091 2.64833 13.5005C2.35832 13.7919 2.00053 13.9375 1.57496 13.9375ZM7.0045 13.9375C6.58122 13.9375 6.2239 13.7919 5.93254 13.5005C5.64117 13.2091 5.49548 12.8507 5.49548 12.4251C5.49548 11.9995 5.63967 11.6417 5.92806 11.3517C6.21644 11.0617 6.57226 10.9167 6.99554 10.9167C7.41882 10.9167 7.77614 11.0617 8.0675 11.3517C8.35888 11.6417 8.50456 11.9995 8.50456 12.4251C8.50456 12.8507 8.36037 13.2091 8.07198 13.5005C7.7836 13.7919 7.42778 13.9375 7.0045 13.9375ZM12.4251 13.9375C11.9995 13.9375 11.6417 13.7919 11.3517 13.5005C11.0617 13.2091 10.9167 12.8507 10.9167 12.4251C10.9167 11.9995 11.0617 11.6417 11.3517 11.3517C11.6417 11.0617 11.9995 10.9167 12.4251 10.9167C12.8507 10.9167 13.2091 11.0617 13.5005 11.3517C13.7919 11.6417 13.9375 11.9995 13.9375 12.4251C13.9375 12.8507 13.7919 13.2091 13.5005 13.5005C13.2091 13.7919 12.8507 13.9375 12.4251 13.9375ZM1.57496 8.50456C1.14939 8.50456 0.790924 8.36037 0.499563 8.07198C0.208188 7.7836 0.0625 7.42778 0.0625 7.0045C0.0625 6.58122 0.208188 6.2239 0.499563 5.93254C0.790924 5.64117 1.14939 5.49548 1.57496 5.49548C2.00053 5.49548 2.35832 5.63967 2.64833 5.92806C2.93835 6.21644 3.08335 6.57226 3.08335 6.99554C3.08335 7.41882 2.93835 7.77614 2.64833 8.0675C2.35832 8.35888 2.00053 8.50456 1.57496 8.50456ZM7.0045 8.50456C6.58122 8.50456 6.2239 8.36037 5.93254 8.07198C5.64117 7.7836 5.49548 7.42778 5.49548 7.0045C5.49548 6.58122 5.63967 6.2239 5.92806 5.93254C6.21644 5.64117 6.57226 5.49548 6.99554 5.49548C7.41882 5.49548 7.77614 5.63967 8.0675 5.92806C8.35888 6.21644 8.50456 6.57226 8.50456 6.99554C8.50456 7.41882 8.36037 7.77614 8.07198 8.0675C7.7836 8.35888 7.42778 8.50456 7.0045 8.50456ZM12.4251 8.50456C11.9995 8.50456 11.6417 8.36037 11.3517 8.07198C11.0617 7.7836 10.9167 7.42778 10.9167 7.0045C10.9167 6.58122 11.0617 6.2239 11.3517 5.93254C11.6417 5.64117 11.9995 5.49548 12.4251 5.49548C12.8507 5.49548 13.2091 5.63967 13.5005 5.92806C13.7919 6.21644 13.9375 6.57226 13.9375 6.99554C13.9375 7.41882 13.7919 7.77614 13.5005 8.0675C13.2091 8.35888 12.8507 8.50456 12.4251 8.50456ZM1.57496 3.08335C1.14939 3.08335 0.790924 2.93835 0.499563 2.64833C0.208188 2.35832 0.0625 2.00053 0.0625 1.57496C0.0625 1.14939 0.208188 0.790924 0.499563 0.499563C0.790924 0.208188 1.14939 0.0625 1.57496 0.0625C2.00053 0.0625 2.35832 0.208188 2.64833 0.499563C2.93835 0.790924 3.08335 1.14939 3.08335 1.57496C3.08335 2.00053 2.93835 2.35832 2.64833 2.64833C2.35832 2.93835 2.00053 3.08335 1.57496 3.08335ZM7.0045 3.08335C6.58122 3.08335 6.2239 2.93835 5.93254 2.64833C5.64117 2.35832 5.49548 2.00053 5.49548 1.57496C5.49548 1.14939 5.63967 0.790924 5.92806 0.499563C6.21644 0.208188 6.57226 0.0625 6.99554 0.0625C7.41882 0.0625 7.77614 0.208188 8.0675 0.499563C8.35888 0.790924 8.50456 1.14939 8.50456 1.57496C8.50456 2.00053 8.36037 2.35832 8.07198 2.64833C7.7836 2.93835 7.42778 3.08335 7.0045 3.08335ZM12.4251 3.08335C11.9995 3.08335 11.6417 2.93835 11.3517 2.64833C11.0617 2.35832 10.9167 2.00053 10.9167 1.57496C10.9167 1.14939 11.0617 0.790924 11.3517 0.499563C11.6417 0.208188 11.9995 0.0625 12.4251 0.0625C12.8507 0.0625 13.2091 0.208188 13.5005 0.499563C13.7919 0.790924 13.9375 1.14939 13.9375 1.57496C13.9375 2.00053 13.7919 2.35832 13.5005 2.64833C13.2091 2.93835 12.8507 3.08335 12.4251 3.08335Z"
                        fill="white"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </span>{" "}
                  <span
                    className="px-4 text-[13px] font-normal"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {opportunity?.area}
                  </span>
                </div>
                <div className="flex flex-row items-center ">
                  <span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99779 8.86226C7.41768 8.86226 7.77783 8.71276 8.07827 8.41376C8.37868 8.11475 8.52889 7.7553 8.52889 7.33541C8.52889 6.91552 8.37939 6.55536 8.08039 6.25493C7.78138 5.95451 7.42192 5.80431 7.00204 5.80431C6.58215 5.80431 6.22199 5.9538 5.92156 6.2528C5.62114 6.55182 5.47093 6.91127 5.47093 7.33116C5.47093 7.75105 5.62043 8.11121 5.91943 8.41164C6.21845 8.71206 6.5779 8.86226 6.99779 8.86226ZM6.99991 15.4166C8.77929 13.7884 10.0935 12.3116 10.9427 10.9863C11.7918 9.66096 12.2164 8.49759 12.2164 7.49616C12.2164 5.91995 11.7131 4.62934 10.7066 3.62433C9.7 2.61931 8.46534 2.11681 7.00258 2.11681C5.53981 2.11681 4.30427 2.61956 3.29593 3.62506C2.2876 4.63054 1.78343 5.92177 1.78343 7.49874C1.78343 8.50196 2.21851 9.66427 3.08868 10.9857C3.95885 12.307 5.26259 13.784 6.99991 15.4166ZM6.99991 17.5923C4.70099 15.6346 2.98179 13.8181 1.84229 12.1429C0.7028 10.4677 0.133057 8.91949 0.133057 7.49841C0.133057 5.35451 0.823209 3.64653 2.20351 2.37449C3.58382 1.10245 5.18226 0.466431 6.99883 0.466431C8.8154 0.466431 10.4142 1.10245 11.7952 2.37449C13.1763 3.64653 13.8668 5.35451 13.8668 7.49841C13.8668 8.91949 13.297 10.4677 12.1575 12.1429C11.018 13.8181 9.29883 15.6346 6.99991 17.5923Z"
                        fill="white"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </span>{" "}
                  <span
                    className="px-4 text-[13px] font-normal"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {opportunity?.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="shareButton md:flex hidden">
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ size: "sm", variant: "primary" }),
                  "    w-100 px-10 rounded-full font-bold "
                )}
                style={{ fontFamily: "sans-serif" }}
              >
                Share
                <span className="ml-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1338 22.2126C17.2765 22.2126 16.542 21.905 15.9302 21.2898C15.3184 20.6747 15.0125 19.9411 15.0125 19.0892C15.0125 18.9747 15.025 18.8322 15.05 18.6617C15.075 18.4912 15.1125 18.3322 15.1625 18.1847L8.12287 14.0903C7.84816 14.4102 7.5133 14.6627 7.1183 14.8476C6.72332 15.0326 6.31966 15.1251 5.90732 15.1251C5.03966 15.1251 4.30069 14.819 3.69042 14.2067C3.08016 13.5945 2.77502 12.8565 2.77502 11.9926C2.77502 11.1357 3.08085 10.4019 3.6925 9.79115C4.30415 9.1804 5.04157 8.87502 5.90475 8.87502C6.32188 8.87502 6.72004 8.95501 7.09923 9.11497C7.47841 9.27494 7.81962 9.51072 8.12287 9.82232L15.1625 5.77975C15.1125 5.65273 15.075 5.50856 15.05 5.34722C15.025 5.18587 15.0125 5.035 15.0125 4.8946C15.0125 4.04202 15.3197 3.30894 15.934 2.69537C16.5483 2.08181 17.2841 1.77502 18.1413 1.77502C18.9986 1.77502 19.7331 2.08067 20.3449 2.69197C20.9567 3.30326 21.2626 4.03736 21.2626 4.89427C21.2626 5.75811 20.9567 6.49587 20.3451 7.10755C19.7334 7.71923 18.9939 8.02507 18.1266 8.02507C17.7046 8.02507 17.3038 7.96245 16.9243 7.8372C16.5447 7.71195 16.2212 7.48907 15.9538 7.16855L8.90007 11.031C8.94282 11.1702 8.97436 11.3376 8.99467 11.5332C9.01499 11.7288 9.02515 11.8865 9.02515 12.0065C9.02515 12.1264 9.01499 12.2557 8.99467 12.3943C8.97436 12.5329 8.94282 12.6782 8.90007 12.8301L15.9538 16.794C16.2177 16.5235 16.5308 16.3173 16.8932 16.1754C17.2556 16.0335 17.6679 15.9625 18.1303 15.9625C18.9979 15.9625 19.7369 16.268 20.3472 16.8789C20.9574 17.4899 21.2626 18.2264 21.2626 19.0884C21.2626 19.9504 20.9554 20.6866 20.3411 21.297C19.7268 21.9074 18.991 22.2126 18.1338 22.2126ZM18.1384 6.26255C18.5176 6.26255 18.8394 6.13013 19.1036 5.86527C19.3679 5.60041 19.5 5.27837 19.5 4.89917C19.5 4.51997 19.3676 4.19823 19.1028 3.93395C18.8379 3.66968 18.5159 3.53755 18.1367 3.53755C17.7575 3.53755 17.4357 3.66997 17.1714 3.93482C16.9072 4.19969 16.775 4.52172 16.775 4.90092C16.775 5.28012 16.9075 5.60187 17.1723 5.86615C17.4372 6.13042 17.7592 6.26255 18.1384 6.26255ZM5.90092 13.3625C6.28014 13.3625 6.60188 13.2301 6.86615 12.9653C7.13042 12.7004 7.26255 12.3784 7.26255 11.9992C7.26255 11.62 7.13013 11.2982 6.86527 11.0339C6.60041 10.7697 6.27837 10.6375 5.89917 10.6375C5.51996 10.6375 5.19822 10.77 4.93395 11.0348C4.66968 11.2997 4.53755 11.6217 4.53755 12.0009C4.53755 12.3801 4.66997 12.7019 4.93482 12.9661C5.19969 13.2304 5.52172 13.3625 5.90092 13.3625ZM18.1384 20.45C18.5176 20.45 18.8394 20.3176 19.1036 20.0528C19.3679 19.7879 19.5 19.4659 19.5 19.0867C19.5 18.7075 19.3676 18.3857 19.1028 18.1215C18.8379 17.8572 18.5159 17.725 18.1367 17.725C17.7575 17.725 17.4357 17.8575 17.1714 18.1223C16.9072 18.3872 16.775 18.7092 16.775 19.0884C16.775 19.4676 16.9075 19.7894 17.1723 20.0536C17.4372 20.3179 17.7592 20.45 18.1384 20.45Z"
                      fill="#1B4638"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container relative -mt-14 z-50 mb-14">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full  md:w-3/5  text-white  h-[446px] rounded-l-2xl mr-2">
            <Image
              src={opportunity?.image[0] || ""}
              // src={one}
              alt="opertunity"
              width={480}
              height={480}
              className="w-full h-full rounded-t-2xl md:rounded-none md:rounded-l-2xl"
            />
          </div>
          {/* 60/40 ratio  */}
          <div className="w-full  md:w-2/5 md:mt-0 mt-3 ">
            <div className="flex  h-1/2 ">
              <div className="w-3/6 md:ml-4 mb-2">
                <Image
                  src={opportunity?.image[1] || ""}
                  width={480}
                  height={480}
                  alt="opertunity"
                  className="w-full h-full "
                />
              </div>
              <div className="w-3/6  ml-4 mb-2 ">
                <Image
                  src={opportunity?.image[2] || ""}
                  width={480}
                  height={480}
                  alt="opertunity"
                  className="w-full h-full  md:rounded-tr-2xl"
                />
              </div>
            </div>

            <div className="flex  h-1/2 ">
              <div className="w-3/6 md:ml-4 mt-2">
                <Image
                  src={opportunity?.image[3] || ""}
                  width={480}
                  height={480}
                  alt="opertunity"
                  className="w-full h-full  rounded-bl-2xl md:rounded-none"
                />
              </div>
              <div className="w-3/6  ml-4 mt-2 ">
                <Image
                  src={opportunity?.image[4] || ""}
                  width={480}
                  height={480}
                  alt="opertunity"
                  className="w-full h-full rounded-br-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex md:flex-row flex-col">
          <div className="w-full md:w-8/12 mr-2">
            {/* opertunity info  */}
            <div className="rounded-[14px] p-5  bg-white border  ">
              <div className="flex justify-between pb-2">
                <span className="  font-normal text-xs leading-5 text-black">
                  Requested Fund
                </span>
                <span className=" font-bold text-base text-[17px] leading-5 text-black">
                  {opportunity?.currency}{" "}
                  {formatNumber(opportunity.requestedFund)}
                </span>
              </div>

              <div className=" flex py-1 items-center justify-between">
                <Progress value={75} className="mr-2" />

                <div className=" font-normal text-[15px ] text-right">70%</div>
              </div>
              <div className="  font-normal text-xl leading-6 text-black">
                <PortableText
                  value={opportunity?.description}
                  components={{
                    block: {
                      // Customize block types with ease
                      h1: ({ children }) => (
                        <h1 className="text-2xl">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-1xl">{children}</h2>
                      ),
                      // Same applies to custom styles
                      customHeading: ({ children }) => (
                        <h2 className="text-lg text-primary text-purple-700">
                          {children}
                        </h2>
                      ),
                    },
                  }}
                />
              </div>
            </div>

            {/* map location card  */}
            <div className="rounded-[14px] p-5 bg-white border   mt-6">
              <h3 className=" font-bold text-[22px] leading-7 text-black pt-3 pb-5">
                {" "}
                Location{" "}
              </h3>

              <div className=" xl:w-full h-full rounded-[14px]  ">
                <Map src={opportunity?.locationMap} />
              </div>
            </div>

            {/* other oppertunity  card  */}
            <div className="rounded-[14px] p-5 bg-white border mt-6 pb-9">
              <h3 className=" font-bold text-[22px] leading-7 text-black pt-3 pb-5">
                {" "}
                Other Opportunity{" "}
              </h3>
              {lastOpportunity.length > 0 &&
                lastOpportunity.map((x: any): any => {
                  return (
                    <>
                      <div className="w-full flex">
                        <div className="w-2/5">
                          <Image
                            src={x.image}
                            alt="opertunity"
                            width={480}
                            height={480}
                            className="w-full h-full rounded-[14px]"
                          />
                        </div>
                        <div className="w-3/5 py-1 px-3">
                          <h1 className="font-bold text-xl">{x.name}</h1>
                          <div className="location flex items-center py-1">
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.97917 14.9792C9.14583 14.9792 9.29167 14.9237 9.41667 14.8126C9.54167 14.7015 9.60417 14.5487 9.60417 14.3542V13.9376C10.4375 13.8542 11.0938 13.5799 11.5729 13.1147C12.0521 12.6494 12.2917 12.0348 12.2917 11.2709C12.2917 10.5348 12.0903 9.94453 11.6875 9.50008C11.2847 9.05564 10.5903 8.67369 9.60417 8.35425C8.74306 8.06258 8.15278 7.77439 7.83333 7.48967C7.51389 7.20494 7.35417 6.84036 7.35417 6.39592C7.35417 5.99314 7.50347 5.68064 7.80208 5.45841C8.1007 5.23619 8.5 5.12508 9 5.12508C9.33333 5.12508 9.62847 5.18758 9.88542 5.31258C10.1424 5.43758 10.3681 5.62508 10.5625 5.87508C10.6875 6.01397 10.8299 6.0973 10.9896 6.12508C11.1493 6.15286 11.2986 6.12508 11.4375 6.04175C11.6042 5.95841 11.7083 5.83341 11.75 5.66675C11.7917 5.50008 11.7569 5.34036 11.6458 5.18758C11.4097 4.85425 11.1285 4.59383 10.8021 4.40633C10.4757 4.21883 10.0903 4.0973 9.64583 4.04175V3.64591C9.64583 3.45147 9.58333 3.30216 9.45833 3.198C9.33333 3.09383 9.1875 3.04175 9.02083 3.04175C8.85417 3.04175 8.70486 3.09383 8.57292 3.198C8.44097 3.30216 8.375 3.45147 8.375 3.64591V4.04175C7.63889 4.15286 7.07292 4.42369 6.67708 4.85425C6.28125 5.2848 6.08333 5.81258 6.08333 6.43758C6.08333 7.14592 6.27083 7.70841 6.64583 8.12508C7.02083 8.54175 7.72222 8.94453 8.75 9.33341C9.65278 9.66675 10.2569 9.96536 10.5625 10.2292C10.8681 10.4931 11.0208 10.8404 11.0208 11.2709C11.0208 11.7015 10.8472 12.0695 10.5 12.3751C10.1528 12.6806 9.70139 12.8334 9.14583 12.8334C8.70139 12.8334 8.29167 12.7258 7.91667 12.5105C7.54167 12.2952 7.25695 11.9931 7.0625 11.6042C6.97917 11.4792 6.86806 11.382 6.72917 11.3126C6.59028 11.2431 6.45139 11.2292 6.3125 11.2709C6.10417 11.3542 5.97222 11.4792 5.91667 11.6459C5.86111 11.8126 5.88889 11.9792 6 12.1459C6.27778 12.6181 6.61111 12.9966 7 13.2813C7.38889 13.5661 7.83333 13.7709 8.33333 13.8959V14.3542C8.33333 14.5348 8.39931 14.6841 8.53125 14.8022C8.6632 14.9202 8.8125 14.9792 8.97917 14.9792ZM9 17.6251C7.77778 17.6251 6.64236 17.4063 5.59375 16.9688C4.54514 16.5313 3.63194 15.9237 2.85417 15.1459C2.07639 14.3681 1.46875 13.4549 1.03125 12.4063C0.59375 11.3577 0.375 10.2223 0.375 9.00008C0.375 7.79175 0.59375 6.6598 1.03125 5.60425C1.46875 4.54869 2.07639 3.6355 2.85417 2.86466C3.63194 2.09383 4.54514 1.48272 5.59375 1.03133C6.64236 0.579942 7.77778 0.354248 9 0.354248C10.2083 0.354248 11.3403 0.57647 12.3958 1.02091C13.4514 1.46536 14.3681 2.07647 15.1458 2.85425C15.9236 3.63203 16.5347 4.54522 16.9792 5.59383C17.4236 6.64244 17.6458 7.77786 17.6458 9.00008C17.6458 10.2223 17.4201 11.3577 16.9688 12.4063C16.5174 13.4549 15.9063 14.3681 15.1354 15.1459C14.3646 15.9237 13.4514 16.5313 12.3958 16.9688C11.3403 17.4063 10.2083 17.6251 9 17.6251ZM9 15.9792C10.9861 15.9792 12.6458 15.3161 13.9792 13.9897C15.3125 12.6633 15.9792 11.0001 15.9792 9.00008C15.9792 7.01397 15.3125 5.35425 13.9792 4.02091C12.6458 2.68758 10.9861 2.02091 9 2.02091C7.01389 2.02091 5.35417 2.68411 4.02083 4.0105C2.6875 5.33689 2.02083 7.00008 2.02083 9.00008C2.02083 10.9862 2.6875 12.6459 4.02083 13.9792C5.35417 15.3126 7.01389 15.9792 9 15.9792Z"
                                  fill="#3C3C43"
                                  fillOpacity="0.6"
                                />
                              </svg>
                            </span>{" "}
                            <span className="px-4 font-normal text-[13px]">
                              30% chance (high confidence)
                            </span>
                          </div>
                          <div className="location flex items-center  py-1">
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.57496 16.9375C4.14939 16.9375 3.79092 16.7919 3.49956 16.5005C3.20819 16.2091 3.0625 15.8507 3.0625 15.4251C3.0625 14.9995 3.20819 14.6417 3.49956 14.3517C3.79092 14.0617 4.14939 13.9167 4.57496 13.9167C5.00053 13.9167 5.35832 14.0617 5.64833 14.3517C5.93835 14.6417 6.08335 14.9995 6.08335 15.4251C6.08335 15.8507 5.93835 16.2091 5.64833 16.5005C5.35832 16.7919 5.00053 16.9375 4.57496 16.9375ZM10.0045 16.9375C9.58122 16.9375 9.2239 16.7919 8.93254 16.5005C8.64117 16.2091 8.49548 15.8507 8.49548 15.4251C8.49548 14.9995 8.63967 14.6417 8.92806 14.3517C9.21644 14.0617 9.57226 13.9167 9.99554 13.9167C10.4188 13.9167 10.7761 14.0617 11.0675 14.3517C11.3589 14.6417 11.5046 14.9995 11.5046 15.4251C11.5046 15.8507 11.3604 16.2091 11.072 16.5005C10.7836 16.7919 10.4278 16.9375 10.0045 16.9375ZM15.4251 16.9375C14.9995 16.9375 14.6417 16.7919 14.3517 16.5005C14.0617 16.2091 13.9167 15.8507 13.9167 15.4251C13.9167 14.9995 14.0617 14.6417 14.3517 14.3517C14.6417 14.0617 14.9995 13.9167 15.4251 13.9167C15.8507 13.9167 16.2091 14.0617 16.5005 14.3517C16.7919 14.6417 16.9375 14.9995 16.9375 15.4251C16.9375 15.8507 16.7919 16.2091 16.5005 16.5005C16.2091 16.7919 15.8507 16.9375 15.4251 16.9375ZM4.57496 11.5046C4.14939 11.5046 3.79092 11.3604 3.49956 11.072C3.20819 10.7836 3.0625 10.4278 3.0625 10.0045C3.0625 9.58122 3.20819 9.2239 3.49956 8.93254C3.79092 8.64117 4.14939 8.49548 4.57496 8.49548C5.00053 8.49548 5.35832 8.63967 5.64833 8.92806C5.93835 9.21644 6.08335 9.57226 6.08335 9.99554C6.08335 10.4188 5.93835 10.7761 5.64833 11.0675C5.35832 11.3589 5.00053 11.5046 4.57496 11.5046ZM10.0045 11.5046C9.58122 11.5046 9.2239 11.3604 8.93254 11.072C8.64117 10.7836 8.49548 10.4278 8.49548 10.0045C8.49548 9.58122 8.63967 9.2239 8.92806 8.93254C9.21644 8.64117 9.57226 8.49548 9.99554 8.49548C10.4188 8.49548 10.7761 8.63967 11.0675 8.92806C11.3589 9.21644 11.5046 9.57226 11.5046 9.99554C11.5046 10.4188 11.3604 10.7761 11.072 11.0675C10.7836 11.3589 10.4278 11.5046 10.0045 11.5046ZM15.4251 11.5046C14.9995 11.5046 14.6417 11.3604 14.3517 11.072C14.0617 10.7836 13.9167 10.4278 13.9167 10.0045C13.9167 9.58122 14.0617 9.2239 14.3517 8.93254C14.6417 8.64117 14.9995 8.49548 15.4251 8.49548C15.8507 8.49548 16.2091 8.63967 16.5005 8.92806C16.7919 9.21644 16.9375 9.57226 16.9375 9.99554C16.9375 10.4188 16.7919 10.7761 16.5005 11.0675C16.2091 11.3589 15.8507 11.5046 15.4251 11.5046ZM4.57496 6.08335C4.14939 6.08335 3.79092 5.93835 3.49956 5.64833C3.20819 5.35832 3.0625 5.00053 3.0625 4.57496C3.0625 4.14939 3.20819 3.79092 3.49956 3.49956C3.79092 3.20819 4.14939 3.0625 4.57496 3.0625C5.00053 3.0625 5.35832 3.20819 5.64833 3.49956C5.93835 3.79092 6.08335 4.14939 6.08335 4.57496C6.08335 5.00053 5.93835 5.35832 5.64833 5.64833C5.35832 5.93835 5.00053 6.08335 4.57496 6.08335ZM10.0045 6.08335C9.58122 6.08335 9.2239 5.93835 8.93254 5.64833C8.64117 5.35832 8.49548 5.00053 8.49548 4.57496C8.49548 4.14939 8.63967 3.79092 8.92806 3.49956C9.21644 3.20819 9.57226 3.0625 9.99554 3.0625C10.4188 3.0625 10.7761 3.20819 11.0675 3.49956C11.3589 3.79092 11.5046 4.14939 11.5046 4.57496C11.5046 5.00053 11.3604 5.35832 11.072 5.64833C10.7836 5.93835 10.4278 6.08335 10.0045 6.08335ZM15.4251 6.08335C14.9995 6.08335 14.6417 5.93835 14.3517 5.64833C14.0617 5.35832 13.9167 5.00053 13.9167 4.57496C13.9167 4.14939 14.0617 3.79092 14.3517 3.49956C14.6417 3.20819 14.9995 3.0625 15.4251 3.0625C15.8507 3.0625 16.2091 3.20819 16.5005 3.49956C16.7919 3.79092 16.9375 4.14939 16.9375 4.57496C16.9375 5.00053 16.7919 5.35832 16.5005 5.64833C16.2091 5.93835 15.8507 6.08335 15.4251 6.08335Z"
                                  fill="#3C3C43"
                                  fillOpacity="0.6"
                                />
                              </svg>
                            </span>{" "}
                            <span className="px-4  font-normal text-[13px]">
                              {x.area}
                            </span>
                          </div>
                          <div className="location flex  items-center py-1">
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.99779 9.86239C10.4177 9.86239 10.7778 9.71288 11.0783 9.41389C11.3787 9.11487 11.5289 8.75542 11.5289 8.33553C11.5289 7.91564 11.3794 7.55548 11.0804 7.25505C10.7814 6.95464 10.4219 6.80443 10.002 6.80443C9.58215 6.80443 9.22199 6.95393 8.92156 7.25293C8.62114 7.55194 8.47093 7.91139 8.47093 8.33128C8.47093 8.75117 8.62043 9.11133 8.91943 9.41176C9.21845 9.71218 9.5779 9.86239 9.99779 9.86239ZM9.99991 16.4167C11.7793 14.7885 13.0935 13.3117 13.9427 11.9864C14.7918 10.6611 15.2164 9.49771 15.2164 8.49628C15.2164 6.92007 14.7131 5.62946 13.7066 4.62445C12.7 3.61943 11.4653 3.11693 10.0026 3.11693C8.53981 3.11693 7.30427 3.61968 6.29593 4.62518C5.2876 5.63066 4.78343 6.92189 4.78343 8.49886C4.78343 9.50209 5.21851 10.6644 6.08868 11.9858C6.95885 13.3072 8.26259 14.7842 9.99991 16.4167ZM9.99991 18.5925C7.70099 16.6347 5.98179 14.8183 4.84229 13.143C3.7028 11.4678 3.13306 9.91961 3.13306 8.49853C3.13306 6.35463 3.82321 4.64666 5.20351 3.37461C6.58382 2.10257 8.18226 1.46655 9.99883 1.46655C11.8154 1.46655 13.4142 2.10257 14.7952 3.37461C16.1763 4.64666 16.8668 6.35463 16.8668 8.49853C16.8668 9.91961 16.297 11.4678 15.1575 13.143C14.018 14.8183 12.2988 16.6347 9.99991 18.5925Z"
                                  fill="#3C3C43"
                                  fillOpacity="0.6"
                                />
                              </svg>
                            </span>{" "}
                            <span className="px-4 font-normal text-[13px]">
                              {" "}
                              {x.location}
                            </span>
                          </div>
                          <div className="flex justify-between pb-2 text-base mt-2">
                            <span className="  font-normal text-[17px] leading-5 text-black">
                              Requested Fund
                            </span>
                            <span className=" font-bold text-[17px] leading-5 text-black">
                              {x.currency} {formatNumber(x.requestedFund)}
                            </span>
                          </div>

                          <div className=" flex pb-1 items-center justify-between">
                            <Progress value={75} className="mr-2" />

                            <div className="  text-right">70%</div>
                          </div>
                        </div>
                      </div>

                      {x !== 3 && <Separator className=" bg-gray-200 my-3" />}
                    </>
                  );
                })}
            </div>
          </div>
          <div className="w-full  md:ml-2  md:w-4/12 flex md:flex-col flex-row mt-6 md:mt-0 ">
            <div className="p-5 w-1/2 md:w-full mr-1 md:mr-0  bg-white border rounded-[14px]">
              <h3 className="pt-3 pb-7 text-[22px] font-bold leading-7 text-black md:text-left text-center">
                Count Your Achievements
              </h3>
              <Slider
                className="mt-5 mb-2"
                defaultValue={[33]}
                max={100}
                step={1}
              />
              <div className="my-4 w-full flex">
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "primary" }),
                    "w-full px-10 py-5 font-bold rounded-full text-[15px]"
                  )}
                  style={{ fontFamily: "sans-serif" }}
                >
                  Fund $1200
                </Link>
              </div>

              {/* ........  */}

              {/* .......  */}

              <div className=""></div>
              <div className="justify-center flex">
                <p className="flex items-center h-5 text-[14px] font-normal leading-5 text-center text-green-900">
                  You wont be charged yet.
                </p>
              </div>
            </div>
            <div className="p-5  w-1/2 md:w-full ml-1 md:ml-0  bg-customGreen customBlack border rounded-[14px] md:mt-6">
              <p className="pt-3 pb-5 text-xl font-bold leading-7 text-black">
                Share your referral link and earn $100 in Share value for every
                friend that signs up and invests. Plus, your friend will also
                receive $100 in Share value. Start referring today and grow your
                rewards
              </p>
              <Button
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    "500Land.com/text-copy-successfully"
                  );
                }}
                className={cn(
                  buttonVariants({ size: "sm", variant: "primary" }),
                  "w-full px-10  font-bold rounded-full bg-black text-white py-6 border-2 border-white"
                )}
                style={{ fontFamily: "sans-serif" }}
              >
                <span className="mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3892 18.1001C9.60973 18.1001 8.95603 17.8458 8.42808 17.3371C7.89943 16.8291 7.63511 16.2001 7.63511 15.4501V3.2501C7.63511 2.5001 7.89943 1.87076 8.42808 1.3621C8.95603 0.854098 9.60973 0.600098 10.3892 0.600098H19.8986C20.678 0.600098 21.3321 0.854098 21.8607 1.3621C22.3887 1.87076 22.6526 2.5001 22.6526 3.2501V15.4501C22.6526 16.2001 22.3887 16.8291 21.8607 17.3371C21.3321 17.8458 20.678 18.1001 19.8986 18.1001H10.3892ZM4.88103 23.4001C4.10158 23.4001 3.44787 23.1458 2.91992 22.6371C2.39128 22.1291 2.12695 21.5001 2.12695 20.7501V6.8251C2.12695 6.45843 2.26137 6.14576 2.53019 5.8871C2.79832 5.6291 3.12292 5.5001 3.50399 5.5001C3.88506 5.5001 4.21001 5.6291 4.47883 5.8871C4.74697 6.14576 4.88103 6.45843 4.88103 6.8251V20.7501H16.1831C16.5642 20.7501 16.8892 20.8791 17.158 21.1371C17.4261 21.3958 17.5602 21.7084 17.5602 22.0751C17.5602 22.4418 17.4261 22.7541 17.158 23.0121C16.8892 23.2708 16.5642 23.4001 16.1831 23.4001H4.88103Z"
                      fill="white"
                    />
                  </svg>
                </span>{" "}
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16">.</div>
    </div>
  );
}
