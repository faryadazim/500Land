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

                                    <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="30" height="17" rx="4" fill="#969696" fill-opacity="0.2" />
                                        <path d="M7.125 13.625C6.65 13.625 6.23958 13.4542 5.89375 13.1125C5.54792 12.7708 5.375 12.3583 5.375 11.875C5.375 11.3833 5.54792 10.9688 5.89375 10.6312C6.23958 10.2937 6.65 10.125 7.125 10.125H7.875V7.875H7.125C6.65 7.875 6.23958 7.70417 5.89375 7.3625C5.54792 7.02083 5.375 6.60833 5.375 6.125C5.375 5.63333 5.54583 5.21875 5.8875 4.88125C6.22917 4.54375 6.64167 4.375 7.125 4.375C7.61667 4.375 8.03125 4.54583 8.36875 4.8875C8.70625 5.22917 8.875 5.64167 8.875 6.125V6.875H11.125V6.125C11.125 5.64167 11.2958 5.22917 11.6375 4.8875C11.9792 4.54583 12.3917 4.375 12.875 4.375C13.3667 4.375 13.7812 4.54583 14.1187 4.8875C14.4562 5.22917 14.625 5.64167 14.625 6.125C14.625 6.6 14.4542 7.01042 14.1125 7.35625C13.7708 7.70208 13.3583 7.875 12.875 7.875H12.125V10.125H12.875C13.3583 10.125 13.7708 10.2958 14.1125 10.6375C14.4542 10.9792 14.625 11.3917 14.625 11.875C14.625 12.35 14.4542 12.7604 14.1125 13.1062C13.7708 13.4521 13.3583 13.625 12.875 13.625C12.4 13.625 11.9896 13.4521 11.6438 13.1062C11.2979 12.7604 11.125 12.35 11.125 11.875V11.125H8.875V11.875C8.875 12.35 8.70417 12.7604 8.3625 13.1062C8.02083 13.4521 7.60833 13.625 7.125 13.625ZM7.125 12.625C7.34167 12.625 7.52083 12.5521 7.6625 12.4062C7.80417 12.2604 7.875 12.0833 7.875 11.875V11.125H7.125C6.91667 11.125 6.73958 11.1979 6.59375 11.3438C6.44792 11.4896 6.375 11.6667 6.375 11.875C6.375 12.075 6.44792 12.25 6.59375 12.4C6.73958 12.55 6.91667 12.625 7.125 12.625ZM12.875 12.625C13.0917 12.625 13.2708 12.5521 13.4125 12.4062C13.5542 12.2604 13.625 12.0833 13.625 11.875C13.625 11.6583 13.5521 11.4792 13.4062 11.3375C13.2604 11.1958 13.0833 11.125 12.875 11.125H12.125V11.875C12.125 12.0833 12.1979 12.2604 12.3438 12.4062C12.4896 12.5521 12.6667 12.625 12.875 12.625ZM8.875 10.125H11.125V7.875H8.875V10.125ZM7.125 6.875H7.875V6.125C7.875 5.91667 7.80208 5.73958 7.65625 5.59375C7.51042 5.44792 7.33333 5.375 7.125 5.375C6.925 5.375 6.75 5.44792 6.6 5.59375C6.45 5.73958 6.375 5.91667 6.375 6.125C6.375 6.325 6.44792 6.5 6.59375 6.65C6.73958 6.8 6.91667 6.875 7.125 6.875ZM12.125 6.875H12.875C13.0833 6.875 13.2604 6.80208 13.4062 6.65625C13.5521 6.51042 13.625 6.33333 13.625 6.125C13.625 5.90833 13.5521 5.72917 13.4062 5.5875C13.2604 5.44583 13.0833 5.375 12.875 5.375C12.675 5.375 12.5 5.44792 12.35 5.59375C12.2 5.73958 12.125 5.91667 12.125 6.125V6.875Z" fill="#656565" />
                                        <path d="M18.9688 13.5V5.5H19.9375V9.46875H20.0313L23.625 5.5H24.8906L21.5313 9.10937L24.8906 13.5H23.7188L20.9375 9.78125L19.9375 10.9062V13.5H18.9688Z" fill="#656565" />
                                    </svg>
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
