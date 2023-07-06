"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input-field";
import { Button, buttonVariants } from "@/components/ui/button";
import axios from "axios";
import { authUrls } from "@/services/apiUrls";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import withAuth from "./withAuth";
import { countries } from "country-data-list"

function CreateAccountPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber: any) => {
    console.log(phoneNumber);

    const phoneRegex = /^\+[0-9]{1,3}[0-9]{10,14}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Invalid Phone Number",
      });
      return true;
    } else {
      return false;
    }
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const error = validatePhoneNumber(formState.phone);
    if (!error) {
      setLoading(true);
      await axios
        .post(`${authUrls.signUp}`, formState)
        .then((res) => {
          router.push("/account/verify-email");
          setLoading(false);
          toast({
            title: res?.data?.message,
          });
          sessionStorage.setItem("email", formState?.email);
          sessionStorage.setItem("phone", formState?.phone);
        })
        .catch(({ response }) => {
          setLoading(false);
          sessionStorage.setItem("email", "");
          sessionStorage.setItem("phone", "");
          toast({
            variant: "destructive",
            title: response?.data?.message,
          });
        });
    }
  };


const phoneNumberHandler = (e:any)=>{
 
  let countryData = 
  countries.all.find((country: any) => country.name === e);
  const code =countryData?.countryCallingCodes[0] || ""
  setFormState((formState) => ({
    ...formState,
    phone:code
  }));
}

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard/dashboard-main");
    }
  }, []);
  return (
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
              <div className="  ">
                <div className="">
                  <h1 className="font-bold text-3xl pt-8 pb-2">
                    Create Account
                  </h1>
                  <form onSubmit={submitHandler}>
                    <div className="row flex justify-between pt-5  ">
                      <div className="w-1/2 ">
                        <label htmlFor="Chad" className=" my-8   text-sm">
                          First Name
                        </label>
                        <Input
                          name="firstName"
                          value={formState.firstName}
                          onChange={(e) => changeHandler(e)}
                          required
                          placeholder="First Name"
                          className=""
                        />
                      </div>
                      <div className="w-1/2 pl-3">
                        <label htmlFor="Chad" className=" my-8   text-sm">
                          Last Name
                        </label>
                        <Input
                          name="lastName"
                          value={formState.lastName}
                          onChange={(e) => changeHandler(e)}
                          required
                          placeholder="Last Name"
                          className=""
                        />
                      </div>
                    </div>
                    <div className="row flex justify-between pt-5">
                      <div className="w-full ">
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
                      <div className="w-full ">
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
                    <div className="row flex justify-between pt-5">
                      <div className="w-full ">
                        <label
                          htmlFor="Chad"
                          className=" my-8    font-normal  text-[13px]"
                        >
                          Phone{" "}
                        </label>
                        <PhoneInput
                          placeholder="+20 123 456 789"
                          className="bg-white mt-[6px]"
                          name="phone"
                          type="tel"
                          required
                          phoneNumberHandler={phoneNumberHandler}
                          onChange={(e) => changeHandler(e)}
                          value={formState.phone}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-5">
                      <Button
                        // href="/account/verify-email"
                        type="submit"
                        className={cn(
                          buttonVariants({ variant: "primaryDark" }),
                          "  mr-2   w-full px-6 rounded-full font-bold  py-6 my-2"
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
                        Create Account
                      </Button>
                    </div>
                  </form>

                  <div className="flex justify-center mt-5">
                    <p>
                      Already Have an account?{" "}
                      <span className="text-customDarkGreen font-bold">
                        {" "}
                        <Link href="/account/login">Login</Link>{" "}
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
  );
}

export default withAuth(CreateAccountPage);
