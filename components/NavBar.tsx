import React from 'react'
import bellIcon from "../public/bellIcon.png";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,

} from "@/components/ui/popover"
import crossIcon from "../public/Icons/crossIcon.png";
import cizer from "../public/cizer.png";
import Klogo from "../public/Klogo.png";

export default function NavBar() {
    return (
        <>
            <nav className="border-b-[1px] border-[#E7E7E7] absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center md:p-4" style={{ backgroundColor: '#FBFBFB' }}>
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center mr-3">
                        <div className="relative w-96">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            
                              border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                            
                            " placeholder="Search..." required />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <span className='flex rounded-md' style={{ backgroundColor: 'rgba(150, 150, 150, 0.2)', padding: '5px 8px 5px 8px' }}>
                                    <Image src={cizer} alt='Image Not Found' />
                                    <Image src={Klogo} alt='Image Not Found' className='ml-1' />
                                </span>
                            </button>
                        </div>
                    </form>

                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <Popover>
                            <PopoverTrigger asChild>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_di_187_3037)">
                                            <circle cx="20" cy="19" r="18" fill="white" />
                                            <circle cx="20" cy="19" r="17.5" stroke="#838383" stroke-opacity="0.2" />
                                        </g>
                                        <path d="M13.6667 25.0833C13.4306 25.0833 13.2327 25.0034 13.073 24.8437C12.9132 24.6839 12.8334 24.486 12.8334 24.2499C12.8334 24.0138 12.9132 23.8194 13.073 23.6666C13.2327 23.5138 13.4306 23.4374 13.6667 23.4374H14.6875V17.3749C14.6875 16.1666 15.0452 15.0659 15.7605 14.0728C16.4757 13.0798 17.4306 12.4513 18.625 12.1874V11.6458C18.625 11.2708 18.7605 10.9583 19.0313 10.7083C19.3021 10.4583 19.625 10.3333 20 10.3333C20.375 10.3333 20.698 10.4583 20.9688 10.7083C21.2396 10.9583 21.375 11.2708 21.375 11.6458V12.1874C22.5695 12.4513 23.5313 13.0798 24.2605 14.0728C24.9896 15.0659 25.3542 16.1666 25.3542 17.3749V23.4374H26.3542C26.5764 23.4374 26.7709 23.5173 26.9375 23.677C27.1042 23.8367 27.1875 24.0346 27.1875 24.2708C27.1875 24.5069 27.1042 24.7013 26.9375 24.8541C26.7709 25.0069 26.5764 25.0833 26.3542 25.0833H13.6667ZM20 27.6249C19.5278 27.6249 19.1146 27.4513 18.7605 27.1041C18.4063 26.7569 18.2292 26.3471 18.2292 25.8749H21.7709C21.7709 26.361 21.5973 26.7742 21.25 27.1145C20.9028 27.4548 20.4862 27.6249 20 27.6249ZM16.3334 23.4374H23.6875V17.3749C23.6875 16.3333 23.3368 15.4548 22.6355 14.7395C21.9341 14.0242 21.0695 13.6666 20.0417 13.6666C19 13.6666 18.1216 14.0242 17.4063 14.7395C16.691 15.4548 16.3334 16.3333 16.3334 17.3749V23.4374Z" fill="#707070" />
                                        <circle cx="26" cy="24.5" r="4" fill="#F24923" />
                                        <defs>
                                            <filter id="filter0_di_187_3037" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="1" />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.741667 0 0 0 0 0.741667 0 0 0 0 0.741667 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_3037" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_3037" result="shape" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="1" />
                                                <feGaussianBlur stdDeviation="0.5" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_187_3037" />
                                            </filter>
                                        </defs>
                                    </svg>

                            </PopoverTrigger>
                            <PopoverContent className="mt-2 lg:mr-14 md:mr-6" style={{ width: '355px' }}>
                                <div className="grid gap-4">
                                    <div className="space-y-2 flex justify-between">
                                        <h4 className="font-bold leading-none mt-1 text-lg">Notifications</h4>
                                        <Image src={crossIcon} alt="Image Not Found" />
                                    </div>
                                    {
                                        [1, 2, 3, 4].map((items, index) => (
                                            <>
                                                <div key={index}>
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
                                                            <hr className="md:min-w-full" />
                                                        </>
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </PopoverContent>
                        </Popover>
                    </ul>
                </div>
            </nav>
        </>
    )
}
