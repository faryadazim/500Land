"use client";
import React, { useState, useEffect } from "react";
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

import { buttonVariants } from "@/components/ui/button";
import Vector from "@/public/images/Image.png";

import { Separator } from "@/components/ui/separator";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import AddFundPage from "@/components/AddFund";
import axios from "axios";
import { authUrls } from "@/services/apiUrls";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const inter = Poppins({
  subsets: ["latin"],
  weight: "100",
});

export default function LoginAccountPage() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    password: "",
    phone: "",
    email: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };
  const submitHandler = (e: any) => {
    setLoading(true);
    e.preventDefault();
    axios({
      method: "POST",
      url: authUrls.signIn,
      data: {
        email: formState?.email,
        password: formState?.password,
      },
    })
      .then((res) => {
        router.push("/dashboard/dashboard-main");
        localStorage.setItem("token", res?.data?.res?.access_token);
        localStorage.setItem("userId", res?.data?.userId);
        setLoading(false);
        toast({
          title: "Login successfully",
        });
      })
      .catch(({ response }) => {
        setLoading(false);
        toast({
          variant: "destructive",
          title: response?.data?.message,
        });
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard/dashboard-main");
    }
  }, []);

  return (
    // <div className="h-[100vh] bg-grey-600 flex"  style={{ backgroundImage: "url('/images/Image.png  ')", minHeight: "100vh"  , minWidth:"50vw" , backgroundRepeat:"no-repeat"}}>
    //   <div className="w-1/2  "  >First Tolo lala</div>
    //   <div className="w-1/2">Second O Maa Goo</div>
    //   {/* <header className="container  border-t-pink-0 border-l-pink-0 border-t-pink-0   top-0 z-40">

    //     NavLogo
    //   </header>
    //   <section className="container my-12">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.

    //   </section> */}

    // </div>
    <>
      <div
        className="h-screen w-screen   bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/bg.jpg')", position: "fixed" }}
      >
        <div className="h-screen" style={{}}>
          <div className="flex justify-center h-screen relative top-0 right-0">
            <div className="w-1/2 h-screen hidden md:flex  i  py-24"></div>
            <div className="w-full md:w-1/2 bg-white h-screen flex   py-24">
              <div className="  "></div>
            </div>

            <div className="container flex absolute top-0 z-20 ">
              <div className="w-full md:w-1/2 h-screen hidden md:flex  items-end justify-start font-bold py-24">
                <h1 className="  pl-4 text-6xl font-bold text-white ">
                  Invest in land, <br />
                  invest in your future.
                </h1>
              </div>
              <div className="w-full md:w-1/2 bg-blue h-screen md:pl-10 lg:pl-0 flex items-center justify-center py-24">
                <div className=" ml-[80px] ">
                  <div className="">
                    <h1 className="font-bold text-3xl pt-8 pb-2">
                      Sign In Account
                    </h1>
                    <form onSubmit={submitHandler}>
                      <div className="row flex justify-between pt-5">
                        <div className="w-[380px] ">
                          <label htmlFor="Chad" className=" my-8   text-sm">
                            Email
                          </label>
                          <Input
                            name="email"
                            value={formState.email}
                            onChange={(e) => changeHandler(e)}
                            required
                            placeholder="you@company.com"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="row flex justify-between pt-5">
                        <div className="w-[380px] ">
                          <label htmlFor="Chad" className=" my-8   text-sm">
                            Password
                          </label>
                          <Input
                            name="password"
                            value={formState.password}
                            onChange={(e) => changeHandler(e)}
                            required
                            placeholder=""
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mt-5">
                        <Button
                          type="submit"
                          className={cn(
                            buttonVariants({ variant: "primaryDark" }),
                            "  mr-2   w-[380px] px-6 rounded-full font-bold  py-6 my-2"
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
                          Login
                        </Button>
                      </div>
                    </form>

                    {/* <div className="flex justify-center mt-5">

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className={cn(
                              buttonVariants({ variant: "primaryDark" }),
                              "  mr-2   w-[380px] px-6 rounded-full font-bold  py-6 my-2"
                            )}
                            style={{ fontFamily: "sans-serif" }}
                          >
                            Login
                          </Button>
                        </DialogTrigger>
                        <AddFundPage />
                      </Dialog>
                    </div> */}
                    <div className="flex justify-center mt-5">
                      <p>
                        Have not Registered yet?{" "}
                        <span className="text-customDarkGreen font-bold">
                          <Link href="/account/create-account">Login</Link>{" "}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
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
