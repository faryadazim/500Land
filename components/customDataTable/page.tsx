"use client"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { UserNav } from "./user-nav"
import { taskSchema } from "./schema"
import tasksList from "./tasks"
import { Button } from "../ui/button"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { SweetAlert } from "../SweetAlert"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

// Simulate a database read for tasks.
async function getTasks() {
  // const data = await fs.readFile(
  //   path.join(process.cwd(), "app/examples/tasks/data/tasks.json")
  // )
  const data = tasksList;
  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default function TaskPage({ pageName, columns, Data }: any) {
  const tasks = getTasks()

  const columnsNames = [
    "Date", "Invoice Detail", "Total Charged", "Invoices"
  ]

  const values = [
    {
      text: "March 5, 2023",
      color: "#1B4638",
      style: "normal",
      weight: "normal",
    },
    {
      text: "Egypt Land Fund",
      color: "#1B4638",
      style: "underline",
      weight: "bold"
    },
    {
      text: "$103",
      color: "#000000",
      weight: "normal"
    }, {
      text: "Download Invoice",
      color: "#1B4638",
      style: "underline",
      weight: "bold"
    }
  ]

  return (
    <>
      <div className="md:hidden">
        {/* <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        /> */}
      </div>
      <div className=" h-full flex-1 flex-col space-y-4 py-8 pt-5 md:flex border rounded-md">



        {
          pageName === "referrals" ? <><div className="flex items-center justify-between space-y-2  px-5" >
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Referred</h2>
              <p className="text-muted-foreground">
                A list of people you have referred and your current earned status.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              Total amount earned: $2000
              {/* <UserNav /> */}
            </div>
          </div></> : pageName === "marketplace" ? <><div className="   px-5" >
            <div className="flex justify-between">
              <div className="text-2xl font-bold tracking-tight  ">Current Listings</div>
              <div className="">



                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primaryDark" className="  text-white text-base font-medium  "   >
                      + View Analytics
                    </Button>
                  </DialogTrigger>
                  <SweetAlert pageName={"market-single"}>

                    <div className="flex justify-between ">
                      <h3 className="font-bold text-xl">
                        Analytics
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
                    <div className="">
                      <Image
                        src="/down-1.png"
                        alt="Image"

                        width={484}
                        height={179}
                        className="rounded-t-2xl"
                      // style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/down-2.png"
                        alt="Image"

                        width={484}
                        height={179}
                        className="rounded-t-2xl"
                      // style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>

                    <div >

                      <div className="flex   justify-center">
                        <Button variant="primaryDark" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Close</Button> </div>

                    </div>

                  </SweetAlert >
                </Dialog>




              </div>

            </div>

          </div></> : pageName === "marketplace2" ? <><div className="   px-5" >
            <div className="flex justify-between">
              <div className="text-2xl font-bold tracking-tight  ">My Listings</div>
              <div className="">


                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primaryDark" className="  text-white text-base font-medium  "   >
                      +  Add Listing
                    </Button>

                  </DialogTrigger>
                  <SweetAlert pageName={"market-single"}>

                    <div className="flex justify-between ">
                      <h3 className="font-bold text-xl">
                        Add Listing
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


                    <div >
                      <div className="row flex justify-between  ">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Property</label>
                          <Input placeholder="John Doe" className="bg-white mt-[2px]" />

                        </div>

                      </div>
                      <div className="row flex justify-between pt-[4px]">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8    font-normal  text-[13px]">Property Decription </label>
                          <Textarea placeholder="Leave us a message" className="bg-white mt-[6px]" />


                        </div>

                      </div>
                      <div className="row flex justify-between pt-[4px]  ">
                        <div className="w-1/2 ">
                          <label htmlFor="Chad" className=" my-8 font-normal  text-[13px]">Country</label>
                          <Input placeholder="Egypt" className="bg-white mt-[6px]" />

                        </div>
                        <div className="w-1/2 pl-3">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">City</label>
                          <Input placeholder="Ciaro" className="bg-white mt-[6px]" />

                        </div>
                      </div>
                      <div className="row flex justify-between pt-[4px]  ">
                        <div className="w-1/2 ">
                          <label htmlFor="Chad" className=" my-8 font-normal  text-[13px]">Land Size</label>
                          <Input placeholder="1300 sqft" className="bg-white mt-[6px]" />

                        </div>
                        <div className="w-1/2 pl-3">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Piece ($)</label>
                          <Input placeholder="00" className="bg-white mt-[6px]" />

                        </div>
                      </div>
                      <div className="row flex justify-between pt-[4px]  ">
                        <div className="w-1/2 ">
                          <label htmlFor="Chad" className=" my-8 font-normal  text-[13px]">Phone number</label>
                          <Input placeholder="+201123123123" className="bg-white mt-[6px]" />

                        </div>
                        <div className="w-1/2 pl-3">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Email</label>
                          <Input placeholder="johndoe@gmail.com" className="bg-white mt-[6px]" />

                        </div>
                      </div>

                      <div className="row flex justify-between pt-[4px]">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Posting duration</label>
                          <Input placeholder="1/Month" className="bg-white mt-[6px]" />
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">We will bill you $5/ monthly </label>

                        </div>

                      </div>
                      <div className="row flex justify-between pt-[4px]">
                        <div className="w-full ">
                          <label htmlFor="Chad" className=" my-8   font-normal  text-[13px]">Card Infomation</label>
                          <div className="flex flex-wrap">
                            <Input placeholder="1234 1234 1234 1234" className="w-full rounded-b-none bg-white  mt-[2px]  border-b-0" />

                            <Input placeholder="MM/YY" className=" rounded-t-none basis-2/4 rounded-r-none border-r-0 bg-white w-1/2 " />
                            <Input placeholder="CVC" className=" rounded-t-none rounded-l-none basis-2/4 bg-white w-1/2 " />
                          </div>


                        </div>

                      </div>
                      <div className="flex   justify-center">
                        <Button variant="primaryDark" className="w-full text-center lg:w-[90%]  px-6 rounded-full font-bold lg:font-semibold md:font-normal    py-6  md:my-1 lg:my-2  " style={{ fontFamily: "sans-serif" }}>Post and Pay $5.00</Button> </div>


                    </div>

                  </SweetAlert >
                </Dialog>
              </div>

            </div>

          </div></> : pageName === "billing" ? <><div className="flex items-center justify-between space-y-2  px-5" >
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Invoices</h2>

            </div>

          </div></> : <>Undefined</>
        }




        <DataTable data={tasks} columns={columns} columsName={columns} columnsData={Data} pageName={pageName} />
      </div>
    </>
  )
}
