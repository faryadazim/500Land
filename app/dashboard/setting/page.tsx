"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

import { Button, buttonVariants } from "@/components/ui/button"; 

import { PhoneInput } from "@/components/ui/phone-input-field";
import { Input } from "@/components/ui/input";
export default function SettingPage() {
  // const isOpen=(false);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-36 mx-auto w-full">
            <div className=" flex justify-between mt-4">
              <h1 className="w-1/2 font-bold text-[28px] mb-3">Settings</h1>
            </div>
            {
              isEditMode ? <><div
                id="setting_section"
                className="border border-[#E7E7E7] rounded-md p-6"
              >
                <h3 id="heading" className="font-bold text-[17px]">
                  Personal Info
                </h3>

                <div className="row flex justify-between pt-6">
                  <div className="w-4/6">
                    <label
                      htmlFor="Chad"
                      className=" my-8   font-normal  text-[13px]"
                    >
                      Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="bg-white mt-[6px] "
                    />
                  </div>
                </div>
                <div className="row flex justify-between pt-6">
                  <div className="w-4/6">
                    <label
                      htmlFor=""
                      className=" my-8   font-normal  text-[13px]"
                    >
                      Email
                    </label>
                    <Input
                      placeholder="johndoe@gmail.com"
                      className="bg-white mt-[6px] "
                    />
                  </div>
                </div>
                <div className="row flex justify-between pt-6">
                  <div className="w-4/6">
                    <label
                      htmlFor="Chad"
                      className=" my-8    font-normal  text-[13px]"
                    >
                      Phone{" "}
                    </label>
                    <PhoneInput
                      placeholder="+20 123 456 789"
                      className="bg-white mt-[6px] "
                    />
                  </div>
                </div>
                <div className="row flex pt-6 items-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className=" border-customDarkGreen p-5 text-customDarkgreen w-100 px-10 rounded-full font-normal w-32 mr-3"
                    style={{ fontFamily: "Basier Square Regular" }} onClick={() => { setIsEditMode(false) }}

                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primaryDark"
                    className="w-44 p-5  mr-2    text-center     rounded-full font-bold lg:font-semibold md:font-normal  md:my-1   "
                    style={{ fontFamily: "Basier Square Regular" }}
                    onClick={() => { setIsEditMode(false) }}
                  >
                    Update
                  </Button>
                </div>
              </div></> : <><div
                id="setting_section"
                className="border border-[#E7E7E7] rounded-md p-6"
              >
                <div className=" container flex lg:flex-row md:flex-col sm:flex-col items-center justify-between px-0">
                  <span className="">
                    <h3 className="font-bold text-[17px] leading-[22px] tracking-[-0.408px] " >
                      Personal Information
                    </h3>
                  </span>
                  <span className="" onClick={() => { setIsEditMode(true) }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_di_228_7445)">
                        <circle cx="20" cy="19" r="18" fill="white" />
                        <circle cx="20" cy="19" r="17.5" stroke="#838383" stroke-opacity="0.2" />
                      </g>
                      <path d="M13.8949 25.1889H14.6286L23.7844 16.0095L23.0507 15.2758L13.8949 24.4552V25.1889ZM26.504 15.1775L23.9049 12.5679L24.5013 11.9597C24.8168 11.6442 25.1925 11.4845 25.6284 11.4805C26.0642 11.4766 26.4399 11.6285 26.7554 11.9361L27.3346 12.5154C27.604 12.7838 27.7271 13.1004 27.704 13.4651C27.6809 13.8299 27.5464 14.1351 27.3007 14.3809L26.504 15.1775ZM25.6929 15.9887L15.1549 26.5163H12.5557V23.9171L23.0819 13.4013L25.6929 15.9887ZM23.4293 15.6427L23.0507 15.2758L23.7844 16.0095L23.4293 15.6427Z" fill="#1B4638" />
                      <defs>
                        <filter id="filter0_di_228_7445" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.741667 0 0 0 0 0.741667 0 0 0 0 0.741667 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_7445" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_7445" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="0.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_228_7445" />
                        </filter>
                      </defs>
                    </svg>

                  </span>
                </div>

                <div className="row flex justify-between pt-6">
                  <div className="w-4/6">
                    <h2

                      className=" pb-2  font-bold  text-[16px] leading-[21px]"
                    >
                      Name
                    </h2>
                    <h2

                      className="pb-2  font-normal  text-[16px] leading-[21px]"
                    >
                      John Doe
                    </h2>

                  </div>
                </div>
                <div className="row flex justify-between pt-6">
                  <div className="w-4/6">
                    <h2

                      className=" pb-2  font-bold  text-[16px] leading-[21px]"
                    >
                      Email
                    </h2>
                    <h2

                      className="pb-2  font-normal  text-[16px] leading-[21px]"
                    >
                      johndoe@gmail.com
                    </h2>

                  </div>
                </div>
                <div className="row flex justify-between pt-6">
                  <div className="w-4/6">
                    <h2

                      className=" pb-2  font-bold  text-[16px] leading-[21px]"
                    >
                      Phone
                    </h2>
                    <h2

                      className="pb-2  font-normal  text-[16px] leading-[21px]"
                    >
                      +201123123123
                    </h2>
                  </div>
                </div>
              </div>
              </>
            }


            {/* Personal Documents */}

            <div
              id="personal_documents"
              className="border border-[#E7E7E7] mt-6 rounded-md p-6"
            >
              <div className=" container flex lg:flex-row md:flex-col sm:flex-col items-center justify-between">
                <span className="">
                  <h3 className="font-bold text-[17px] leading-[22px] tracking-[-0.408px] px-0">
                    Personal Documents
                  </h3>
                </span>
                <span className="">
                  <Button
                    variant="primaryDark"
                    className="w-44 p-5  mr-2 tracking-[-0.24px] text-[15px] leading-[20px] text-center 
          rounded-full font-bold  lg:font-semibold md:font-normal  md:my-1  
           "
                    style={{ fontFamily: "Basier Square Regular" }}
                  >
                    Upload Document
                  </Button>
                </span>
              </div>

              <div className="container grid lg:grid-cols-3 rounded-xl gap-x-4 mx-auto  sm:grid-cols-1 md:grid-cols-2">
                <div className="border border-[#E7E7E7] mt-6 rounded-md p-4">
                  <div className="flex items-center">
                    <div className="pr-[10px]">

                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="32" height="32" rx="16" fill="#EBFFF4" />
                        <path d="M18.6665 11.3334H13.9998C13.6462 11.3334 13.3071 11.4738 13.057 11.7239C12.807 11.9739 12.6665 12.3131 12.6665 12.6667V23.3334C12.6665 23.687 12.807 24.0261 13.057 24.2762C13.3071 24.5262 13.6462 24.6667 13.9998 24.6667H21.9998C22.3535 24.6667 22.6926 24.5262 22.9426 24.2762C23.1927 24.0261 23.3332 23.687 23.3332 23.3334V16M18.6665 11.3334L23.3332 16M18.6665 11.3334V16H23.3332" stroke="#1B4638" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="2" y="2" width="32" height="32" rx="16" stroke="#F5FFFA" stroke-width="4" />
                      </svg>

                    </div>
                    <div>
                      <p className="font-bold text-[13px] pr-[8px] leading-[20px] tracking-[-0.24px]">
                        500 Lands Contract.pdf
                      </p>
                      <h5 className="font-normal text-[13px] leading-[18px] tracking-[-0.078px]">
                        200 KB
                      </h5>
                    </div>
                    <div className="pl-[8px]">

                      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1665 13H12.8332M12.8332 13H26.1665M12.8332 13V24.6666C12.8332 25.1087 13.0088 25.5326 13.3213 25.8451C13.6339 26.1577 14.0578 26.3333 14.4998 26.3333H22.8332C23.2752 26.3333 23.6991 26.1577 24.0117 25.8451C24.3242 25.5326 24.4998 25.1087 24.4998 24.6666V13H12.8332ZM15.3332 13V11.3333C15.3332 10.8913 15.5088 10.4673 15.8213 10.1548C16.1339 9.84222 16.5578 9.66663 16.9998 9.66663H20.3332C20.7752 9.66663 21.1991 9.84222 21.5117 10.1548C21.8242 10.4673 21.9998 10.8913 21.9998 11.3333V13M16.9998 17.1666V22.1666M20.3332 17.1666V22.1666" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                  </div>
                </div>

                <div className="border border-[#E7E7E7] mt-6 rounded-md p-4">
                  <div className="flex items-center">
                    <div className="pr-[10px]">

                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="32" height="32" rx="16" fill="#EBFFF4" />
                        <path d="M18.6665 11.3334H13.9998C13.6462 11.3334 13.3071 11.4738 13.057 11.7239C12.807 11.9739 12.6665 12.3131 12.6665 12.6667V23.3334C12.6665 23.687 12.807 24.0261 13.057 24.2762C13.3071 24.5262 13.6462 24.6667 13.9998 24.6667H21.9998C22.3535 24.6667 22.6926 24.5262 22.9426 24.2762C23.1927 24.0261 23.3332 23.687 23.3332 23.3334V16M18.6665 11.3334L23.3332 16M18.6665 11.3334V16H23.3332" stroke="#1B4638" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="2" y="2" width="32" height="32" rx="16" stroke="#F5FFFA" stroke-width="4" />
                      </svg>

                    </div>
                    <div>
                      <p className="font-bold text-[13px] pr-[8px] leading-[20px] tracking-[-0.24px]">
                        500 Lands Contract.pdf
                      </p>
                      <h5 className="font-normal text-[13px] leading-[18px] tracking-[-0.078px]">
                        200 KB
                      </h5>
                    </div>
                    <div className="pl-[8px]">

                      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1665 13H12.8332M12.8332 13H26.1665M12.8332 13V24.6666C12.8332 25.1087 13.0088 25.5326 13.3213 25.8451C13.6339 26.1577 14.0578 26.3333 14.4998 26.3333H22.8332C23.2752 26.3333 23.6991 26.1577 24.0117 25.8451C24.3242 25.5326 24.4998 25.1087 24.4998 24.6666V13H12.8332ZM15.3332 13V11.3333C15.3332 10.8913 15.5088 10.4673 15.8213 10.1548C16.1339 9.84222 16.5578 9.66663 16.9998 9.66663H20.3332C20.7752 9.66663 21.1991 9.84222 21.5117 10.1548C21.8242 10.4673 21.9998 10.8913 21.9998 11.3333V13M16.9998 17.1666V22.1666M20.3332 17.1666V22.1666" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="border border-[#E7E7E7] mt-6 rounded-md p-4">
                  <div className="flex items-center">
                    <div className="pr-[10px]">

                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="32" height="32" rx="16" fill="#EBFFF4" />
                        <path d="M18.6665 11.3334H13.9998C13.6462 11.3334 13.3071 11.4738 13.057 11.7239C12.807 11.9739 12.6665 12.3131 12.6665 12.6667V23.3334C12.6665 23.687 12.807 24.0261 13.057 24.2762C13.3071 24.5262 13.6462 24.6667 13.9998 24.6667H21.9998C22.3535 24.6667 22.6926 24.5262 22.9426 24.2762C23.1927 24.0261 23.3332 23.687 23.3332 23.3334V16M18.6665 11.3334L23.3332 16M18.6665 11.3334V16H23.3332" stroke="#1B4638" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="2" y="2" width="32" height="32" rx="16" stroke="#F5FFFA" stroke-width="4" />
                      </svg>

                    </div>
                    <div>
                      <p className="font-bold text-[13px] pr-[8px] leading-[20px] tracking-[-0.24px]">
                        500 Lands Contract.pdf
                      </p>
                      <h5 className="font-normal text-[13px] leading-[18px] tracking-[-0.078px]">
                        200 KB
                      </h5>
                    </div>
                    <div className="pl-[8px]">

                      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1665 13H12.8332M12.8332 13H26.1665M12.8332 13V24.6666C12.8332 25.1087 13.0088 25.5326 13.3213 25.8451C13.6339 26.1577 14.0578 26.3333 14.4998 26.3333H22.8332C23.2752 26.3333 23.6991 26.1577 24.0117 25.8451C24.3242 25.5326 24.4998 25.1087 24.4998 24.6666V13H12.8332ZM15.3332 13V11.3333C15.3332 10.8913 15.5088 10.4673 15.8213 10.1548C16.1339 9.84222 16.5578 9.66663 16.9998 9.66663H20.3332C20.7752 9.66663 21.1991 9.84222 21.5117 10.1548C21.8242 10.4673 21.9998 10.8913 21.9998 11.3333V13M16.9998 17.1666V22.1666M20.3332 17.1666V22.1666" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 

      </div>
    </>
  );
}
