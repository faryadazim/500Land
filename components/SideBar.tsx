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
                        <Image src={Logo} alt="Image Not Found" height={20} width={20} />
                    </button>
                    {/* Brand */}
                    <Link
                        href={'#'}
                        className={"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap sm:text-sm uppercase font-bold xl:text-xl p-4 px-0"}
                        style={{ color: '#1B4638' }}
                    >
                        500. <br />
                        Land
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            honey
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
                                        500. <br />
                                        Land
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <Image src={crossIcon} alt="Image Not Found"/>
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

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Overview
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    href={"#"}
                                    className={
                                        "text-xs uppercase py-3 px-2 rounded-md font-bold block text-blueGray-700 flex align-middle hover:bg-slate-200"
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
                                        "text-xs uppercase py-3 px-2 rounded-md font-bold block text-blueGray-700 flex align-middle hover:bg-slate-200"
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
                                        "text-xs uppercase py-3 px-2 rounded-md font-bold block text-blueGray-700 flex align-middle hover:bg-slate-200"
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
                                        "text-xs uppercase py-3 px-2 rounded-md font-bold block text-blueGray-700 flex align-middle hover:bg-slate-200"
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
                                        "text-xs uppercase py-3 px-2 rounded-md font-bold block text-blueGray-700 flex align-middle hover:bg-slate-200"
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
                                        "text-xs uppercase py-3 px-2 rounded-md font-bold block text-blueGray-700 flex align-middle hover:bg-slate-200"
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
                            style={{ marginTop: '16rem' }}
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
                    </div>
                </div>
            </nav>
        </>
    )
}
