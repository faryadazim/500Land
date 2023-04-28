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
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center md:p-4" style={{ backgroundColor: '#FBFBFB' }}>
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center mr-3">
                        <div className="relative w-96">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span className='flex rounded-md' style={{backgroundColor: 'rgba(150, 150, 150, 0.2)',padding: '5px 8px 5px 8px'}}>
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
                                <Button variant="outline" className="w-10 rounded-full p-0">
                                    <Image src={bellIcon} alt='Image Not Found' />
                                    <span className="sr-only">Open popover</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 mt-2 lg:mr-14 md:mr-6">
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
                    </ul>
                </div>
            </nav>
        </>
    )
}
