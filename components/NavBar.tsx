import React from 'react'
import magnifyingglass from "../public/Icon/magnifyingglass.png";
import bellIcon from "../public/bellIcon.png";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,

} from "@/components/ui/popover"
import crossIcon from "../public/Icons/crossIcon.png";

export default function NavBar() {
    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center md:p-4" style={{ backgroundColor: '#FBFBFB' }}>
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 pb-3 pt-4">
                                <Image src={magnifyingglass} alt='Image Not Found' />
                            </span>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring md:w-full lg:w-96 pl-10"
                            />
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
                            <PopoverContent className="w-80 mt-4 mr-4">
                                <div className="grid gap-4">
                                    <div className="space-y-2 flex justify-between">
                                        <h4 className="font-bold leading-none mt-1 text-lg">Notifications</h4>
                                        <Image src={crossIcon} alt="Image Not Found" />
                                    </div>
                                    {
                                        [1, 2, 3, 4].map((items,index) => (
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
