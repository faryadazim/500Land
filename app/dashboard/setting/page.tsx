"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

import { Button, buttonVariants } from "@/components/ui/button";

import { PhoneInput } from "@/components/ui/phone-input-field";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { settingUrls } from "@/services/apiUrls";
import jwt from "jsonwebtoken";
import { useToast } from "@/components/ui/use-toast";
import { getDocuments, getUserInfo } from "./actions";
import UploadDocument from "./uploadDocument";
import supabase from "@/supabase";

export default function SettingPage() {
  // const isOpen=(false);
  const { toast } = useToast();
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    created_at: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    phone: "",
    verified: "",
  });
  const [userId, setUserId] = useState("");
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let Token = localStorage.getItem("token") || "";
    let user: any = jwt.decode(Token) || "";
    supabase.auth.getSession().then(({ error, data }: any) => {
      if (data?.session?.user?.id) {
        setUserId(data?.session?.user?.id);
        getUserInfo(data?.session?.user?.id, setFormState);
        getDocuments(data?.session?.user?.id, setDocuments);
      }
    });
  }, []);

  const refetchDoc = () => {
    supabase.auth.getSession().then(({ error, data }: any) => {
      if (data?.session?.user?.id) {
        getDocuments(data?.session?.user?.id, setDocuments);
      }
    });
  };
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "POST",
      url: settingUrls.updateUserProfile,
      data: {
        userId: userId,
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        phone: formState.phone,
      },
    })
      .then((res) => {
        setIsEditMode(false);
        setLoading(false);
        toast({
          title: res?.data?.message,
        });
      })
      .catch(({ response }) => {
        toast({
          variant: "destructive",
          title: response?.data?.message,
        });
      });
  };
  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-8 lg:px-36 mx-auto w-full">
            <div className=" flex justify-between mt-4">
              <h1 className="w-1/2 font-bold text-[28px] mb-3">Settings</h1>
            </div>
            {isEditMode ? (
              <>
                <div
                  id="setting_section"
                  className="border border-[#E7E7E7] rounded-md p-6"
                >
                  <h3 id="heading" className="font-bold text-[17px]">
                    Personal Info
                  </h3>
                  <form onSubmit={submitHandler}>
                    <div className="row flex justify-between pt-6">
                      <div className="w-4/6">
                        <label
                          htmlFor="Chad"
                          className=" my-8   font-normal  text-[13px]"
                        >
                          First Name
                        </label>
                        <Input
                          placeholder="John Doe"
                          className="bg-white mt-[6px] "
                          name="firstName"
                          value={formState.firstName}
                          onChange={(e) => changeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="row flex justify-between pt-6">
                      <div className="w-4/6">
                        <label
                          htmlFor="Chad"
                          className=" my-8   font-normal  text-[13px]"
                        >
                          Last Name
                        </label>
                        <Input
                          placeholder="John Doe"
                          className="bg-white mt-[6px] "
                          name="lastName"
                          value={formState.lastName}
                          onChange={(e) => changeHandler(e)}
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
                          name="email"
                          required
                          value={formState.email}
                          onChange={(e) => changeHandler(e)}
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
                          name="phone"
                          value={formState.phone}
                          onChange={(e) => changeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="row flex pt-6 items-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className=" border-customDarkGreen p-5 text-customDarkgreen w-100 px-10 rounded-full font-normal w-32 mr-3"
                        style={{ fontFamily: "Basier Square Regular" }}
                        onClick={() => {
                          setIsEditMode(false);
                        }}
                        disabled={loading}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primaryDark"
                        type="submit"
                        className="w-44 p-5  mr-2    text-center     rounded-full font-bold lg:font-semibold md:font-normal  md:my-1   "
                        style={{ fontFamily: "Basier Square Regular" }}
                        // onClick={() => {
                        //   setIsEditMode(false);
                        // }}
                        disabled={loading}
                      >
                        {loading ? (
                          <svg
                            className="animate-spin text-white h-5 w-5 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          ""
                        )}
                        Update
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <>
                <div
                  id="setting_section"
                  className="border border-[#E7E7E7] rounded-md p-6"
                >
                  <div className=" container flex lg:flex-row md:flex-col sm:flex-col items-center justify-between px-0">
                    <span className="">
                      <h3 className="font-bold text-[17px] leading-[22px] tracking-[-0.408px] ">
                        Personal Information
                      </h3>
                    </span>
                    <span
                      className=""
                      onClick={() => {
                        setIsEditMode(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_di_228_7445)">
                          <circle cx="20" cy="19" r="18" fill="white" />
                          <circle
                            cx="20"
                            cy="19"
                            r="17.5"
                            stroke="#838383"
                            stroke-opacity="0.2"
                          />
                        </g>
                        <path
                          d="M13.8949 25.1889H14.6286L23.7844 16.0095L23.0507 15.2758L13.8949 24.4552V25.1889ZM26.504 15.1775L23.9049 12.5679L24.5013 11.9597C24.8168 11.6442 25.1925 11.4845 25.6284 11.4805C26.0642 11.4766 26.4399 11.6285 26.7554 11.9361L27.3346 12.5154C27.604 12.7838 27.7271 13.1004 27.704 13.4651C27.6809 13.8299 27.5464 14.1351 27.3007 14.3809L26.504 15.1775ZM25.6929 15.9887L15.1549 26.5163H12.5557V23.9171L23.0819 13.4013L25.6929 15.9887ZM23.4293 15.6427L23.0507 15.2758L23.7844 16.0095L23.4293 15.6427Z"
                          fill="#1B4638"
                        />
                        <defs>
                          <filter
                            id="filter0_di_228_7445"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.741667 0 0 0 0 0.741667 0 0 0 0 0.741667 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_228_7445"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_228_7445"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect2_innerShadow_228_7445"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <div className="row flex justify-between pt-6">
                    <div className="w-4/6">
                      <h2 className=" pb-2  font-bold  text-[16px] leading-[21px]">
                        First Name
                      </h2>
                      <h2 className="pb-2  font-normal  text-[16px] leading-[21px]">
                        {formState.firstName}
                      </h2>
                    </div>
                  </div>
                  <div className="row flex justify-between pt-6">
                    <div className="w-4/6">
                      <h2 className=" pb-2  font-bold  text-[16px] leading-[21px]">
                        Last Name
                      </h2>
                      <h2 className="pb-2  font-normal  text-[16px] leading-[21px]">
                        {formState.lastName}
                      </h2>
                    </div>
                  </div>
                  <div className="row flex justify-between pt-6">
                    <div className="w-4/6">
                      <h2 className=" pb-2  font-bold  text-[16px] leading-[21px]">
                        Email
                      </h2>
                      <h2 className="pb-2  font-normal  text-[16px] leading-[21px]">
                        {formState.email}
                      </h2>
                    </div>
                  </div>
                  {formState.phone ? (
                    <div className="row flex justify-between pt-6">
                      <div className="w-4/6">
                        <h2 className=" pb-2  font-bold  text-[16px] leading-[21px]">
                          Phone
                        </h2>
                        <h2 className="pb-2  font-normal  text-[16px] leading-[21px]">
                          {formState.phone}
                        </h2>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}

            {/* Personal Documents */}

            <div
              id="personal_documents"
              className="border border-[#E7E7E7] mt-6 rounded-md p-6"
            >
              <UploadDocument
                selectedFiles={documents}
                setSelectedFiles={setDocuments}
                userId={userId}
                refetchDoc={refetchDoc}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
