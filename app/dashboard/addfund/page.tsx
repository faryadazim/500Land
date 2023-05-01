import DashBoard from "@/components/dashBoard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import logo from "../../../public/images/logoDark.png";
import crossIcon from "../../../public/Icons/crossIcon.png";
import vector from "../../../public/500 Land — Dashboard/Vector.png";
import dollarGreen from "../../../public/500 Land — Dashboard/dollar-green.png";
import dollarOrange from "../../../public/500 Land — Dashboard/dollar-orange.png";
import dollarSilver from "../../../public/500 Land — Dashboard/dollar-silver.png";
import redClock from "../../../public/500 Land — Dashboard/red-clock.png";
import card from "../../../public/500 Land — Dashboard/card.png";
import card1 from "../../../public/500 Land — Dashboard/card1.png";
import card2 from "../../../public/500 Land — Dashboard/card2.png";
import card3 from "../../../public/500 Land — Dashboard/card3.png";
import location from "../../../public/500 Land — Dashboard/location.png";
import sqft from "../../../public/500 Land — Dashboard/sqft.png";
import bigFarm from "../../../public/500 Land — Dashboard/Rectangle 22.png";

export const metadata = {
  title: "Add Fund",
};

export default async function DashboardPage() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="min-w-full min-h-screen">
          <DialogHeader
            className="flex-row justify-between items-center max-h-fit h-fit pt-1 pb-4 px-3 md:px-10 lg:px-20"
            style={{ borderBottom: "2px solid #E2E2E1" }}
          >
            <DialogTitle className="">
              <Image
                src={logo}
                alt="Image Not Found"
                className="w-14 sm:w-16 lg:w-20"
              />
            </DialogTitle>
            <DialogTitle
              className="text-lg md:text-xl xl:text-2xl"
              style={{ fontWeight: "500", color: "#101010" }}
            >
              Confirm and Fund
            </DialogTitle>
            <DialogTrigger asChild>
              <Button
                className="rounded-full w-10 md:w-12 h-10 md:h-12"
                style={{
                  backgroundColor: "#F8F8F8",
                }}
              >
                <Image
                  src={crossIcon}
                  alt="Image Not Found"
                  height={20}
                  width={20}
                />
              </Button>
            </DialogTrigger>
          </DialogHeader>
          <div className="grid gap-14 lg:grid-cols-2 w-11/12 sm:w-4/5 xl:w-2/3 mx-auto">
            {/* Left container starts here */}
            <div className="">
              <div
                className="text-lg md:text-xl xl:text-2xl"
                style={{ color: "#101010" }}
              >
                Your Fund Details
              </div>
              <div className="flex flex-row items-center justify-between mt-5">
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#626262",
                    }}
                  >
                    Fund Amount
                  </div>
                  <div
                    className="text-base md:text-lg"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#101010",
                    }}
                  >
                    $100
                  </div>
                </div>
                <a
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#101010",
                    borderBottom: "1px solid #101010",
                  }}
                  href="#"
                >
                  Edit
                </a>
              </div>
              <div
                className="mt-4 py-2 px-4"
                style={{ backgroundColor: "#F8F8F8", borderRadius: "10px" }}
              >
                <div className="sm:flex sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-row items-center">
                    <Image
                      src={vector}
                      alt="Image Not Found"
                      height={16}
                      width={16}
                    />
                    <div
                      className="ps-1"
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      ROI Probability in 5 years
                    </div>
                  </div>
                  <a
                    href="#"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#626262",
                      borderBottom: "1px solid #626262",
                    }}
                  >
                    How we calculate it?
                  </a>
                </div>
                <div className="flex flex-row items-center justify-between mt-5">
                  <div className="flex flex-row items-center">
                    <Image
                      src={dollarGreen}
                      alt="Image Not Found"
                      height={20}
                      width={20}
                    />
                    <div
                      className="ps-1"
                      style={{
                        color: "#101010",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Highly Confidence
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div
                      style={{
                        color: "#16C683",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      50%
                    </div>
                    <div
                      className="ps-1"
                      style={{
                        color: "#000000",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      $50
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-2">
                  <div className="flex flex-row items-center">
                    <Image
                      src={dollarOrange}
                      alt="Image Not Found"
                      height={20}
                      width={20}
                    />
                    <div
                      className="ps-1"
                      style={{
                        color: "#101010",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Avg
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div
                      style={{
                        color: "#DB894C",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      40%
                    </div>
                    <div
                      className="ps-1"
                      style={{
                        color: "#101010",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      $40
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-2">
                  <div className="flex flex-row items-center">
                    <Image
                      src={dollarSilver}
                      alt="Image Not Found"
                      height={20}
                      width={20}
                    />
                    <div
                      className="ps-1"
                      style={{
                        color: "#101010",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Low
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div
                      style={{
                        color: "#626262",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      30%
                    </div>
                    <div
                      className="ps-1"
                      style={{
                        color: "#101010",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      $30
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-6 text-lg md:text-xl xl:text-2xl">
                <div style={{ fontWeight: "400" }}>Pay With</div>
                <div className="flex flex-row items-center">
                  <Image src={card} alt="Image Not Found" width={28} />
                  <Image
                    src={card1}
                    alt="Image Not Found"
                    width={35}
                    className="ms-3"
                  />
                  <Image
                    src={card2}
                    alt="Image Not Found"
                    width={47}
                    className="ms-3"
                  />
                  <Image
                    src={card3}
                    alt="Image Not Found"
                    width={19}
                    className="ms-3"
                  />
                </div>
              </div>
              <div className="py-2">
                <div
                  className="my-3 p-3"
                  style={{ backgroundColor: "#F8F8F8", borderRadius: "16px" }}
                >
                  <div className="relative">
                    <input
                      type="tel"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:peer-focus:text-primary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#101010",
                        letterSpacing: 1.3,
                      }}
                      id="cardNumberInput"
                      name="cardNumberInput"
                    />
                    <label
                      htmlFor="cardNumberInput"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none  dark:peer-focus:text-primary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#626262",
                      }}
                    >
                      Card Number
                    </label>
                  </div>
                </div>
                <div className="grid gap-2 grid-cols-2">
                <div
                  className="p-3"
                  style={{ backgroundColor: "#F8F8F8", borderRadius: "16px" }}
                >
                  <div className="relative">
                    <input
                      type="tel"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:peer-focus:text-primary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#101010",
                        letterSpacing: 1.3,
                      }}
                      id="cardNumberInput"
                      name="cardNumberInput"
                    />
                    <label
                      htmlFor="cardNumberInput"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none  dark:peer-focus:text-primary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#626262",
                      }}
                    >
                      Expiration Date
                    </label>
                  </div>
                </div>
                <div
                  className="p-3"
                  style={{ backgroundColor: "#F8F8F8", borderRadius: "16px" }}
                >
                  <div className="relative">
                    <input
                      type="tel"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:peer-focus:text-primary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#101010",
                        letterSpacing: 1.3,
                      }}
                      id="cardNumberInput"
                      name="cardNumberInput"
                    />
                    <label
                      htmlFor="cardNumberInput"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none  dark:peer-focus:text-primary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#626262",
                      }}
                    >
                      CVV
                    </label>
                  </div>
                </div>
                </div>
              </div>
              <div
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="my-5"
              >
                I also agree to the updated Terms of Service, Payments Terms of
                Service, and I acknowledge the Privacy Policy.
              </div>
              <div>
                <Button
                  variant="outline"
                  style={{
                    color: "#114737",
                    fontSize: "15px",
                    fontWeight: "600",
                    backgroundColor: "#70F09C",
                    borderRadius: "32px",
                    padding: "18px 32px",
                  }}
                >
                  Confirm and Pay
                </Button>
              </div>
            </div>
            {/* Right container starts here */}
            <div>
              <div style={{ backgroundColor: "#F8F8F8", borderRadius: "20px" }}>
                <div className="pt-4 pb-3 px-4">
                  <div className="flex flex-row items-center">
                    <Image
                      src={bigFarm}
                      alt="Image Not Found"
                      height={84}
                      width={84}
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="ps-3">
                      <div
                        className="line-clamp-2"
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "#101010",
                        }}
                      >
                        Big farm in the heart of the city and have everything
                      </div>
                      <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-row items-center">
                          <Image
                            src={sqft}
                            alt="Image Not Found"
                            height={14}
                            width={14}
                          />
                          <div
                            className="ps-2"
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#626262",
                            }}
                          >
                            2000 SQFT
                          </div>
                        </div>
                        <div className="flex flex-row items-center ms-4">
                          <Image
                            src={location}
                            alt="Image Not Found"
                            width={11}
                          />
                          <div
                            className="ps-2"
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#626262",
                            }}
                          >
                            Egypt
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-3">
                    <Image
                      src={redClock}
                      alt="Image Not Found"
                      height={16}
                      width={16}
                    />
                    <div
                      style={{
                        color: "#EA4335",
                        fontWeight: "400",
                        fontSize: "12px",
                      }}
                      className="ps-2"
                    >
                      Fund close at 12 March
                    </div>
                  </div>
                </div>
                <div
                  className="py-3 px-4"
                  style={{
                    borderTop: "1px solid #E1E1E1",
                    borderBottom: "1px solid #E1E1E1",
                  }}
                >
                  <div
                    className="mb-1 text-lg md:text-xl xl:text-2xl"
                    style={{
                      fontWeight: "400",
                      color: "#101010",
                    }}
                  >
                    Price details
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "#626262",
                      }}
                    >
                      Fund Amount
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#101010",
                      }}
                    >
                      $100
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "#626262",
                      }}
                    >
                      Taxes
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#101010",
                      }}
                    >
                      $2
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "#626262",
                      }}
                    >
                      500 Land Fees
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#101010",
                      }}
                    >
                      $1
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between pb-4 pt-3 px-4">
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#101010",
                    }}
                  >
                    Total
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#101010",
                    }}
                  >
                    $103
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
