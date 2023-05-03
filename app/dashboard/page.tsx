"use client" 
import   React , {useState} from "react"
import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar" 

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import downIcon from "../../public/downIcon.png";
import Image from "next/image"
import Rectangle from "../../public/500 Land — Dashboard/Rectangle 158.png";
import Link from "next/link"
import Slogo from "../../public/500 Land — Dashboard/Slogo.png";
import upLogo from "../../public/upLogo.png";


const CARD_DATA = [
  {
      heading: 'My Balance',
      price: '$2,500',
      increment: '',
  },
  {
      heading: 'Total Profit',
      price: '$2,000',
      increment: '13.32%',
  },
  {
      heading: 'Investment',
      price: '$500',
      increment: '13.32%',
  },
  {
      heading: 'Available to Withdraw',
      price: '$500',
      increment: '',
  },
];

const SMALL_CARD_DATA = [
  {
      heading: 'Fund Amount',
      amount: '$100',
  },
  {
      heading: 'Current Profit',
      amount: '$100',
  },
  {
      heading: 'Available to Withdraw',
      amount: '$100',
  },
];

 

export default   function DashboardPage() {
  
  // const isOpen=(false);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <   div className="relative md:pt-20 lg:pt-16 pb-32 pt-12">
          <div className="px-4 md:px-14 mx-auto w-full">
            <div className='lg:flex justify-between' style={{ alignItems: 'center' }}>
              <h1 className='font-bold text-3xl mb-3'>Overall Portfolio</h1>
              <div className="md:my-4">
                <Button className=' px-6 text-md bg-white border-2 rounded-full hover:bg-white ml-2'
                  style={{ color: '#1B4638', borderColor: '#1B4638' }}
                >
                  Withdraw
                </Button>
                <Button className='rounded-full px-6 text-md md:ml-3 ml-2 my-3'
                  style={{ backgroundColor: '#1B4638' }}
                >
                  Check Opportunities
                </Button>
              </div>
            </div>

            <div
              className="w-full flex rounded-md flex-wrap pb-6"
              style={{ backgroundColor: '#FBFBFB', border: '1px solid #E7E7E7' }}
            >
              {
                CARD_DATA.map((items, index) => (
                  <>
                    <div
                      className="p-4 my-10 w-full lg:w-6/12 xl:w-3/12 px-4 text-center"
                      key={index}
                      style={{ borderRight: index === 3 ? '' : '1px solid #E7E7E7' }}
                    >
                      <h3 className="font-medium text-lg">
                        {items?.heading}
                      </h3>
                      <div className="flex justify-center">
                        <h1 className="font-bold text-2xl">
                          {items?.price}
                        </h1>
                        {
                          items.heading === 'Total Profit' || items.heading === 'Investment' ?
                            <>
                              <div className="flex" style={{ alignItems: 'flex-end' }}>
                                <p
                                  className="ml-2 text-sm font-medium mt-3"
                                  style={{ color: '#0E8C43' }}
                                >
                                  {items?.increment}
                                </p>
                                <div className="rounded-full ml-2" style={{ backgroundColor: '#DAF2E4', padding: '5px' }}>
                                  <Image src={upLogo} alt="Image Not Found" style={{ height: '10px', width: '10px' }} />
                                </div>
                              </div>
                            </>
                            :
                            <></>
                        }
                      </div>
                    </div>
                  </>
                ))
              }

              <Collapsible
                open={isOpen}
                // onOpenChange={setIsOpen}
                className="w-full space-y-2 mx-6"
              >
                <div className="flex items-center justify-center px-4">
                  <CollapsibleTrigger asChild>
                    <Button className="p-0 text-lg font-medium" style={{ backgroundColor: '#FBFBFB', color: '#1B4638' }}>
                      <p>Show more</p>
                      <Image src={downIcon} alt="Image Not Found" className="ml-2" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <h1 className="font-bold text-xl mb-6">
                    Invested Properties
                  </h1>
                  {
                    [1, 2].map((items, index) => (
                      <>
                        <div className="rounded-md flex flex-wrap border px-4 py-3 font-mono text-sm bg-white w-full" key={index}>
                          <div>
                            <Image src={Rectangle} alt="Image Not Found" />
                          </div>
                          <div className="ml-6" style={{ width: '85%' }}>
                            <div style={{ justifyContent: 'space-between', width: '100%' }} className="md:flex mt-1">
                              <p className="font-bold text-xl">Lnych Canyon Road</p>
                              <p>
                                <Link
                                  href={"#"}
                                  className="font-medium"
                                  style={{ color: '#007AFF', textDecoration: 'underline' }}
                                >
                                  Land Details
                                </Link>
                              </p>
                            </div>

                            <div className="flex md:justify-between justify-center flex-wrap">
                              {
                                SMALL_CARD_DATA.map((items, index) => (
                                  <>
                                    <div className="my-2" key={index}>
                                      <div className="flex">
                                        <Image src={Slogo} alt="Image Not Found" />
                                        <p className="ml-2">{items?.heading}</p>
                                      </div>
                                      <p className="font-bold text-lg text-center">{items?.amount}</p>
                                    </div>
                                  </>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  }
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
