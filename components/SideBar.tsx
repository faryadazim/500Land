"use client"


import * as React from "react"
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../public/sideLogo.png";
import Dashboard from "../public/dashboard.png";
import opportunity from "../public/opportunity.png";
import market from "../public/market.png";
import billing from "../public/billing.png";
import setting from "../public/setting.png";
import reffer from "../public/reffer.png";
import logout from "../public/logout.png";
import crossIcon from "../public/Icons/crossIcon.png";
import iconsSlider from "../public/icons8-slider-50.png";
import fiveLogo from "../public/500 Land — Dashboard/fiveLogo.png";
import zeroLogo from "../public/500 Land — Dashboard/zeroLogo.png";
import nextZero from "../public/500 Land — Dashboard/nextZero.png";
import dot from "../public/500 Land — Dashboard/dot.png";
import capitalL from "../public/500 Land — Dashboard/capitalL.png";
import capitalA from "../public/500 Land — Dashboard/a.png";
import capitalN from "../public/500 Land — Dashboard/n.png";
import capitalD from "../public/500 Land — Dashboard/d.png";
import bellIcon from "../public/bellIcon.png";
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,

} from "@/components/ui/popover"
import JLogo from "../public/JLogo.png";

export default function SideBar() {
    const [collapseShow, setCollapseShow] = React.useState<String>("hidden")
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6" style={{ backgroundColor: '#FBFBFB' }}>
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <Image src={iconsSlider} alt="Image Not Found" height={20} width={20} />
                    </button>
                    {/* Brand */}
                    <div className="flex justify-between" style={{ alignItems: 'center' }}>
                        <Link
                            href={'#'}
                            className={"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap sm:text-sm uppercase font-bold xl:text-xl p-4 px-0"}
                            style={{ color: '#1B4638' }}
                        >
                            <div className="flex">
                                <Image src={fiveLogo} alt="Image Not Found" />
                                <Image src={zeroLogo} alt="Image Not Found" />
                                <Image src={nextZero} alt="Image Not Found" />
                                <Image src={dot} alt="Image Not Found" style={{ height: '5px', width: '5px', marginTop: '6px' }} />
                            </div>
                            <div className="flex">
                                <Image src={capitalL} alt="Image Not Found" />
                                <Image src={capitalA} alt="Image Not Found" />
                                <Image src={capitalN} alt="Image Not Found" />
                                <Image src={capitalD} alt="Image Not Found" />
                            </div>
                        </Link>
                        <Image src={Logo} alt="Image Not Found" className="hidden md:block" style={{ height: '15px', width: '15px', marginTop: '15px' }} />
                    </div>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-10 rounded-full p-0">
                                        <Image src={bellIcon} alt='Image Not Found' />
                                        <span className="sr-only">Open popover</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 mt-4 mr-4">
                                    <div className="grid gap-4">
                                        <div className="space-y-2 flex justify-between">
                                            <h4 className="font-bold leading-none mt-1 text-lg">Notifications</h4>
                                            <Image src={crossIcon} alt="Image Not Found" />
                                        </div>
                                        {
                                            [1, 2, 3, 4].map((items, index) => (
                                                <>
                                                    <div className='mt-5' key={index}>
                                                        <h5 className='font-medium'>
                                                            Withdrawel Initiated
                                                            <span className='font-light text-sm ml-2'>
                                                                Just now
                                                            </span>
                                                        </h5>
                                                        <p className='text-sm'>
                                                            A withdrawal of <span className='font-bold'>$12,312</span> has been successfully initiated.
                                                        </p>
                                                    </div>
                                                    {
                                                        index === 3 ?
                                                            <></>
                                                            :
                                                            <>
                                                                <hr className="mt-4 md:min-w-full" />
                                                            </>
                                                    }
                                                </>
                                            ))
                                        }
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded "
                            +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        href={'#'}
                                        className={"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"}
                                    >
                                        <div className="flex">
                                            <Image src={fiveLogo} alt="Image Not Found" />
                                            <Image src={zeroLogo} alt="Image Not Found" />
                                            <Image src={nextZero} alt="Image Not Found" />
                                            <Image src={dot} alt="Image Not Found" style={{ height: '5px', width: '5px', marginTop: '6px' }} />
                                        </div>
                                        <div className="flex">
                                            <Image src={capitalL} alt="Image Not Found" />
                                            <Image src={capitalA} alt="Image Not Found" />
                                            <Image src={capitalN} alt="Image Not Found" />
                                            <Image src={capitalD} alt="Image Not Found" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <Image src={crossIcon} alt="Image Not Found" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>


                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-3 pb-2 no-underline">
                            Overview
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-3 rounded-md font-medium block text-blueGray-700 flex align-middle hover:bg-slate-200"
                                    }
                                >
                                    <Image
                                        src={Dashboard}
                                        alt='Image Not Found'
                                        className={
                                            "mr-2 text-sm text-blueGray-300"
                                        }
                                    />{" "}
                                    Dashboard
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-2 rounded-md font-medium block text-blueGray-700 flex align-middle hover:bg-slate-200"
                                    }
                                >
                                    <Image
                                        src={opportunity}
                                        alt='Image Not Found'
                                        className={
                                            "fas fa-tools mr-2 text-sm text-blueGray-300"
                                        }
                                    />{" "}
                                    Opportunities
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-2 rounded-md font-medium block text-blueGray-700 flex align-middle hover:bg-slate-200"
                                    }
                                >
                                    <Image
                                        src={market}
                                        alt='Image Not Found'
                                        className={
                                            "fas fa-table mr-2 text-sm text-blueGray-300"
                                        }
                                    />{" "}
                                    Marketplace
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-2 rounded-md font-medium block text-blueGray-700 flex align-middle hover:bg-slate-200"
                                    }
                                >
                                    <Image
                                        src={billing}
                                        alt='Image Not Found'
                                        className={
                                            "fas fa-map-marked mr-2 text-sm text-blueGray-300"
                                        }
                                    />{" "}
                                    Billing
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-2 rounded-md font-medium block text-blueGray-700 flex align-middle hover:bg-slate-200"
                                    }
                                >
                                    <Image
                                        src={setting}
                                        alt='Image Not Found'
                                        className={
                                            "fas fa-map-marked mr-2 text-sm text-blueGray-300"
                                        }
                                    />{" "}
                                    Settings
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-2 rounded-md font-medium block text-blueGray-700 flex align-middle hover:bg-slate-200"
                                    }
                                >
                                    <Image
                                        src={reffer}
                                        alt='Image Not Found'
                                        className={
                                            "fas fa-map-marked mr-2 text-sm text-blueGray-300"
                                        }
                                    />{" "}
                                    Referrals
                                </Link>
                            </li>
                        </ul>

                        <Link
                            href={"#"}
                            className="text-xs uppercase py-3 px-2 rounded-md font-bold block text-red-500 text-sm flex align-middle hover:bg-red-100"
                            style={{ marginTop: '14rem' }}
                        >
                            <Image
                                src={logout}
                                alt='Image Not Found'
                                className={
                                    "fas fa-map-marked mr-2 text-sm text-blueGray-300"
                                }
                            />{" "}
                            Log out
                        </Link>

                        <hr className="my-4 md:min-w-full" />

                        <div className="flex">
                            <div className="h-12 rounded-2xl p-3 w-12 flex justify-center" style={{ backgroundColor: '#E99E0D', alignItems: 'center' }}>
                                <Image src={JLogo} alt="Image Not Found" />
                            </div>
                            <div className="ml-3">
                                <h1 className="font-bold text-lg">
                                    John Doe
                                </h1>
                                <p className="text-sm">
                                    johndoe@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
