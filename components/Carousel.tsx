import React, { useRef } from 'react';

const Carousel = () => {
    const slidesContainerRef = useRef<HTMLDivElement>(null);
    const slideWidth = useRef<number | null>(null);
    const handleNextClick = () => {
        if (slidesContainerRef.current && slideWidth.current) {
            slidesContainerRef.current.scrollLeft += slideWidth.current;
        }
    };

    const handlePrevClick = () => {
        if (slidesContainerRef.current && slideWidth.current) {
            slidesContainerRef.current.scrollLeft -= slideWidth.current;
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
            <h1 className="font-cabinetGrotesk text-3xl lg:text-4xl font-bold mb-12 leading-tight">Tailwind CSS Carousel</h1>
            <div className="relative">
                <div
                    className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
                    ref={slidesContainerRef}
                >
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
                    </div>
                    {/* Add more slides here */}
                </div>

                <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
                    <button role="button" className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="prev" onClick={handlePrevClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
                    <button role="button" className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="next" onClick={handleNextClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
