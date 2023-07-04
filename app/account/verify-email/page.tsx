"use client";
import React, { useRef, ChangeEvent, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input-field";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { buttonVariants } from "@/components/ui/button";
import Vector from "@/public/images/Image.png";

import { Separator } from "@/components/ui/separator";
import { authUrls } from "@/services/apiUrls";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { getUserInfo, uploadDocuments } from "./actions";
import DocumentUploader from "./uploadDocument";
import withAuth from "./withAuth";

const inter = Poppins({
  subsets: ["latin"],
  weight: "100",
});

function VerifyEmailPage() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [userData, setUserData] = useState({
    userId: "",
    created_at: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    phone: "",
    verified: "",
  });
  useEffect(() => {
    const email = sessionStorage.getItem("email") || "";
    const phone = sessionStorage.getItem("phone") || "";
    if (!email && !phone) {
      router.push("/account/login");
    }
    getUserInfo(email, phone, setIsEmailVerified, setUserData);
    setUserInfo((userInfo: any) => ({
      ...userInfo,
      email,
      phone,
    }));
  }, []);

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const nextIndex = index + 1;
    if (inputRefs.current[index]) {
      inputRefs.current[index]!.value = value; // Non-null assertion here
    }
    if (value && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex]!.focus(); // Non-null assertion here
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const { key } = event;

    if (
      (key === "Backspace" || key === "Delete") &&
      index > 0 &&
      !event.currentTarget.value
    ) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData.getData("text");
    const otpNumbers = pastedText.replace(/\D/g, ""); // Remove non-digit characters

    for (
      let i = 0;
      i < otpNumbers.length && i < inputRefs.current.length;
      i++
    ) {
      if (inputRefs.current[index + i]) {
        inputRefs.current[index + i]!.value = otpNumbers[i]; // Non-null assertion here
      }
    }

    if (inputRefs.current[index + otpNumbers.length]) {
      inputRefs.current[index + otpNumbers.length]!.focus(); // Non-null assertion here
    }
  };

  const handleRefUpdate = (index: number, ref: HTMLInputElement | null) => {
    inputRefs.current[index] = ref;
  };
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    let otp = "";
    for (let index = 0; index < inputRefs.current.length; index++) {
      const item = inputRefs.current[index];
      const value = item?.value;
      otp = otp + value;
    }

    await axios
      .post(`${authUrls.verifyOTP}`, {
        otpCode: otp.replace(/\s/g, ""),
        email: userInfo.email,
        phone: userInfo.phone,
      })
      .then((res) => {
        setLoading(false);
        toast({
          title: res?.data?.message,
        });
        setIsEmailVerified(true);
      })
      .catch(({ response }) => {
        setLoading(false);
        toast({
          variant: "destructive",
          title: response?.data?.message,
        });
      });
  };
  const handleFileUpload = (files: any) => {
    setLoading(true);
    uploadDocuments(userData?.userId, selectedFiles, router, setLoading);
  };

  return (
    <>
      <div
        className="h-screen w-screen   bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/bg.jpg')", position: "fixed" }}
      >
        <div className="h-screen" style={{}}>
          <div className="flex justify-center h-screen relative top-0 right-0">
            <div className="w-1/2 h-screen hidden md:flex  i  py-24"></div>
            <div className="w-full md:w-1/2 bg-white h-screen flex   py-24"></div>

            <div className="container flex absolute top-0 z-20 ">
              <div className="w-full md:w-1/2 h-screen hidden md:flex  items-end justify-start font-bold py-24">
                <h1 className="  pl-4 text-6xl font-bold text-white ">
                  Invest in land, <br />
                  invest in your future.
                </h1>
              </div>
              <div className="w-full md:w-1/2 bg-blue h-screen md:pl-10 lg:pl-0 flex items-center justify-center py-24">
                {!isEmailVerified ? (
                  <div className="">
                    <h1 className="font-bold text-3xl pt-8 pb-2 text-center">
                      Verify your email
                    </h1>
                    <p className="text-center">
                      We have sent an activation code to{" "}
                      {userInfo.email ? "email" : "phone"}
                    </p>
                    <p className="text-center">
                      <b>{userInfo.email ? userInfo.email : userInfo.phone}</b>
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col space-y-16 mt-6">
                        <div className="flex flex-row items-center justify-between mx-auto  w-[380px]">
                          {Array.from({ length: 5 }, (_, index) => (
                            <div className="w-12 h-12" key={index}>
                              <input
                                className="w-full h-full flex flex-col items-center justify-center text-center px-1 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                type="text"
                                required
                                maxLength={1}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                                onKeyDown={(event) =>
                                  handleKeyDown(index, event)
                                }
                                onPaste={(event) => handlePaste(index, event)}
                                ref={(ref) => handleRefUpdate(index, ref)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center mt-5">
                        <Button
                          // href="/opportunities"
                          type="submit"
                          className={cn(
                            buttonVariants({ variant: "primaryDark" }),
                            "  mr-2   w-[380px] px-6 rounded-full font-bold  py-6 my-2"
                          )}
                          style={{ fontFamily: "sans-serif" }}
                        >
                          Verify and Continue
                        </Button>
                      </div>
                    </form>
                    <div className="flex justify-center mt-5">
                      <p>Resend code in 00:31 </p>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <h1 className="font-bold text-3xl pt-8 pb-2 text-center">
                      Upload you ID
                    </h1>
                    <p className="text-center">
                      Upload both the front and back of your ID.
                    </p>
                    <DocumentUploader
                      selectedFiles={selectedFiles}
                      setSelectedFiles={setSelectedFiles}
                    />

                    <div className="flex justify-center mt-5">
                      <Button
                        // href="/account/login"
                        onClick={(e) => handleFileUpload(e)}
                        className={cn(
                          buttonVariants({ variant: "primaryDark" }),
                          "  mr-2  w-[380px] px-6 rounded-full font-bold  py-6 my-2"
                        )}
                        style={{ fontFamily: "sans-serif" }}
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
                        Continue Registration
                      </Button>
                    </div>
                    <div className="flex justify-center mt-5"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0   w-screen">
          <header className="container  border-t-pink-0 border-l-pink-0 border-t-pink-0   top-0 z-90">
            {/* navigation  */}
            <div className="flex h-16 items-center justify-start pt-7">
              <MainNav />
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
export default VerifyEmailPage;

///////////////this is code for screen above the verification but nee to mention how should be it look like

{
  /* <div className="w-full border-b-2 ">
<div className="header relative top-0 right-0  mr-[250px] ml-[124px] pr-4 ">

  <div className="flex py-3" >
    <div className="w-1/2  flex justify-end items-center">
      <div className="number-filled text-white bg-customDarkGreenHeading px-2 py-[2px] mr-2 h-[20px] rounded-full text-xs">
        1
      </div>
      <p className="heading">
        Verify Email
      </p>
      <p className='px-2'>&gt;

      </p>
    </div>
    <div className="w-1/2  flex justify-start items-center">
      <div className="number-filled bg-slate-500 text-white px-2 py-[2px] mr-2 h-[20px] rounded-full text-xs">
        2
      </div>
      <button className="heading" onClick={() => {
        console.log("false")
        setIsEmailVerified(true)
      }}>
        Upload Documents
      </button>

    </div>
  </div>

  <div className="w-1/2 bg-slate-200"></div>
</div>
</div> */
}
