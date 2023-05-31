import React, { useRef, useEffect } from 'react';

const Carousel = () => {

    const slidesContainerRef = useRef<HTMLDivElement>(null);
    const slideWidth = useRef<number | null>(null);
    const totalSlides = useRef<number | null>(null);

      useEffect(() => {
        const scrollInterval = setInterval(() => {
          if (slidesContainerRef.current && slideWidth.current && totalSlides.current) {
            const { scrollLeft, clientWidth } = slidesContainerRef.current;
            const maxScrollLeft = totalSlides.current * slideWidth.current - clientWidth;

            if (scrollLeft < maxScrollLeft) {
              slidesContainerRef.current.scrollBy({
                left: slideWidth.current,
                behavior: 'smooth',
              });
            } else {
              slidesContainerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
              });
            }
          }
        }, 5000); // Scroll every 5 seconds

        return () => {
          clearInterval(scrollInterval); // Cleanup the interval on component unmount
        };
      }, []);

      useEffect(() => {
        if (slidesContainerRef.current) {
          slideWidth.current = slidesContainerRef.current.offsetWidth;
          totalSlides.current = slidesContainerRef.current.querySelectorAll('.slide').length;
        }
      }, []);

    return (
        <div className="   transition-all duration-500  ">
            <div className="relative">
                <div
                    className=" slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-8 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
                    ref={slidesContainerRef}
                >
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center   p-8 w-[25.125em]       border   border-[#E7E7E7]   rounded-lg ">
                        <div className="">

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#ECFDF3" />
                                <path d="M15.5679 24.4321L21.6304 21.6513L24.4112 15.5888L18.3487 18.3696L15.5679 24.4321ZM20 20.8333C19.7638 20.8333 19.5659 20.7535 19.4062 20.5938C19.2465 20.434 19.1666 20.2361 19.1666 20C19.1666 19.7639 19.2465 19.566 19.4062 19.4063C19.5659 19.2465 19.7638 19.1667 20 19.1667C20.2361 19.1667 20.434 19.2465 20.5937 19.4063C20.7534 19.566 20.8333 19.7639 20.8333 20C20.8333 20.2361 20.7534 20.434 20.5937 20.5938C20.434 20.7535 20.2361 20.8333 20 20.8333ZM19.992 28.7255C18.8 28.7255 17.6715 28.4979 16.6065 28.0425C15.5415 27.5872 14.6142 26.9648 13.8247 26.1753C13.0352 25.3857 12.4128 24.4581 11.9574 23.3924C11.5021 22.3266 11.2744 21.1964 11.2744 20.0016C11.2744 18.7945 11.5025 17.6601 11.9586 16.5985C12.4148 15.5369 13.0397 14.6093 13.8332 13.8158C14.6267 13.0223 15.5535 12.3984 16.6135 11.9441C17.6736 11.4898 18.7984 11.2627 19.9881 11.2627C21.1967 11.2627 22.3346 11.4895 23.4017 11.943C24.4689 12.3966 25.3973 13.0196 26.1869 13.812C26.9766 14.6044 27.5991 15.5329 28.0544 16.5975C28.5096 17.662 28.7373 18.8 28.7373 20.0113C28.7373 21.2082 28.5101 22.335 28.0558 23.3917C27.6015 24.4483 26.9776 25.3734 26.1841 26.1669C25.3906 26.9603 24.4626 27.5852 23.4 28.0413C22.3375 28.4975 21.2015 28.7255 19.992 28.7255ZM19.9973 26.9928C21.9313 26.9928 23.5807 26.3103 24.9455 24.9452C26.3103 23.5802 26.9927 21.9327 26.9927 20.0027C26.9927 18.0687 26.3112 16.4193 24.9482 15.0545C23.5852 13.6897 21.9347 13.0073 19.9968 13.0073C18.0727 13.0073 16.4268 13.6888 15.0589 15.0518C13.6911 16.4148 13.0072 18.0652 13.0072 20.0032C13.0072 21.9273 13.6897 23.5732 15.0547 24.941C16.4197 26.3088 18.0673 26.9928 19.9973 26.9928Z" fill="#039855" />
                            </svg>

                        </div>
                        <h3 className='font-bold text-[22px] mt-4'>
                            Location
                        </h3>
                        <p className='font-normal text-[17px] mt-1'>
                            Land in prime locations, such as urban areas with growing populations or near amenities and infrastructure, is more likely to see appreciation in value over time.
                        </p>
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center   p-8 w-[25.125em]       border   border-[#E7E7E7]   rounded-lg ">
                        <div className="">

                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.200195" width="40" height="40" rx="20" fill="#ECFDF3" />
                                <path d="M26.4602 29.0308C26.3425 29.0308 26.2304 29.008 26.1238 28.9625C26.0171 28.9168 25.9252 28.8484 25.8479 28.7573L20.7084 23.5969C20.6147 23.5285 20.5472 23.441 20.5059 23.3346C20.4646 23.2282 20.4439 23.1184 20.4439 23.0054C20.4439 22.8924 20.4646 22.7807 20.5059 22.6704C20.5472 22.56 20.6147 22.4597 20.7084 22.3695L22.558 20.5199C22.6343 20.4401 22.7257 20.3741 22.8321 20.3219C22.9386 20.2697 23.0522 20.2437 23.1731 20.2437C23.2861 20.2437 23.3958 20.2697 23.5022 20.3219C23.6087 20.3741 23.7031 20.4401 23.7854 20.5199L28.9457 25.692C29.023 25.7693 29.0864 25.8595 29.1359 25.9624C29.1855 26.0654 29.2102 26.1799 29.2102 26.3058C29.2102 26.4238 29.1822 26.5369 29.1261 26.6452C29.07 26.7535 29.0098 26.841 28.9457 26.9076L27.0961 28.7781C27.0059 28.85 26.9076 28.9102 26.8012 28.9585C26.6947 29.0067 26.5811 29.0308 26.4602 29.0308ZM26.472 27.1386L27.3062 26.3044L23.1613 22.1386L22.3388 22.961L26.472 27.1386ZM13.9312 29.01C13.8122 29.01 13.6968 28.9907 13.5849 28.9521C13.473 28.9133 13.3804 28.8484 13.3071 28.7573L11.4783 26.9285C11.3871 26.863 11.3222 26.7763 11.2836 26.6683C11.2449 26.5603 11.2256 26.4429 11.2256 26.3161C11.2256 26.1972 11.2449 26.0836 11.2836 25.9753C11.3222 25.867 11.3871 25.7726 11.4783 25.692L16.3633 20.8188H18.2953L19.058 20.0562L15.3225 16.2998H14.0643L11.0942 13.3505L13.4856 10.9592L16.4557 13.9085V15.1666L20.1912 18.923L22.9104 16.2038L21.4557 14.7491L22.5916 13.625H20.3198L19.7872 13.1014L22.818 10.0588L23.3624 10.5942V12.8541L24.4774 11.7391L28.2776 15.542C28.5026 15.7887 28.685 16.0598 28.8248 16.3553C28.9646 16.6508 29.0345 16.9632 29.0345 17.2925C29.0345 17.6306 28.9661 17.9566 28.8293 18.2703C28.6926 18.5841 28.523 18.8629 28.3207 19.1069L26.4439 17.23L25.2066 18.4674L24.0644 17.3252L19.4285 21.961V23.884L14.5435 28.7573C14.4612 28.8484 14.3688 28.9133 14.2662 28.9521C14.1637 28.9907 14.0521 29.01 13.9312 29.01ZM13.9312 27.1386L18.0997 22.9819V22.1476H17.2654L13.097 26.3044L13.9312 27.1386ZM13.9312 27.1386L13.097 26.3044L13.5297 26.7058L13.9312 27.1386Z" fill="#039855" />
                            </svg>


                        </div>
                        <h3 className='font-bold text-[22px] mt-4'>
                            Potential for Development
                        </h3>
                        <p className='font-normal text-[17px] mt-1'>
                            We evaluate the land&#39;s zoning and development potential, such as whether it can be rezoned for higher-density use or if there is potential for commercial or residential development.     </p>
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center   p-8 w-[25.125em]       border   border-[#E7E7E7]   rounded-lg ">
                        <div className="">

                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.399902" width="40" height="40" rx="20" fill="#ECFDF3" />
                                <path d="M18.0304 22.8579L20.4 21.1224L22.7188 22.8579L21.7632 20.0508L24.1237 18.3452H21.2704L20.4 15.5499L19.5295 18.3452H16.688L18.9951 20.0508L18.0304 22.8579ZM20.4012 28.7257C18.3499 28.2175 16.6599 27.0351 15.3313 25.1785C14.0027 23.3218 13.3384 21.2982 13.3384 19.1077V13.885L20.4 11.2329L27.4734 13.8854V19.0948C27.4734 21.2939 26.8075 23.3218 25.4758 25.1785C24.144 27.0351 22.4525 28.2175 20.4012 28.7257ZM20.4 26.9512C21.9501 26.3781 23.2258 25.3743 24.227 23.9396C25.2282 22.5049 25.7288 20.892 25.7288 19.1006V15.0832L20.4 13.0816L15.0712 15.0889V19.0952C15.0712 20.8901 15.5718 22.5049 16.573 23.9396C17.5742 25.3743 18.8499 26.3781 20.4 26.9512Z" fill="#039855" />
                            </svg>


                        </div>
                        <h3 className='font-bold text-[22px] mt-4'>
                            Work with Local Officials
                        </h3>
                        <p className='font-normal text-[17px] mt-1'>
                            We work closely with local officials and contractors to navigate the development process and ensure that the land is developed in accordance with local regulations and building codes.      </p>
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center   p-8 w-[25.125em]       border   border-[#E7E7E7]   rounded-lg ">
                        <div className="">


                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.600098" width="40" height="40" rx="20" fill="#ECFDF3" />
                                <path d="M22.985 27.8921C21.3522 27.8921 19.8482 27.4315 18.4732 26.5103C17.0982 25.5891 16.1538 24.3025 15.6399 22.6503H12.7368V20.9175H15.3546C15.3147 20.6234 15.2943 20.3349 15.2934 20.052C15.2925 19.7691 15.3129 19.4389 15.3546 19.0615H12.7368V17.3169H15.6399C16.1616 15.7016 17.108 14.4276 18.4791 13.4949C19.8502 12.5623 21.3522 12.0959 22.985 12.0959C24.0381 12.0959 25.023 12.2833 25.9397 12.658C26.8564 13.0327 27.6976 13.5612 28.4633 14.2436L27.2269 15.4709C26.6097 14.9492 25.9424 14.547 25.225 14.2644C24.5077 13.9818 23.761 13.8405 22.985 13.8405C21.79 13.8405 20.6932 14.1592 19.6947 14.7966C18.6962 15.4339 17.9835 16.2741 17.5566 17.3169H23.2984V19.0615H17.0964C17.0487 19.3653 17.0234 19.6523 17.0203 19.9225C17.0173 20.1927 17.0427 20.5244 17.0964 20.9175H23.2984V22.6503H17.5421C17.9708 23.736 18.6864 24.5923 19.6888 25.2191C20.6912 25.8459 21.79 26.1593 22.985 26.1593C23.741 26.1593 24.4808 26.0285 25.2042 25.7667C25.9276 25.5049 26.6049 25.0854 27.2359 24.5081L28.4633 25.7237C27.7809 26.3982 26.964 26.9282 26.0126 27.3138C25.0612 27.6994 24.052 27.8921 22.985 27.8921Z" fill="#039855" />
                            </svg>


                        </div>
                        <h3 className='font-bold text-[22px] mt-4'>
                            Market Conditions
                        </h3>
                        <p className='font-normal text-[17px] mt-1'>
                            We carefully track market trends and conditions, such as supply and demand for land, development costs, and interest rates, to identify opportunities for profitable investments.   </p>
                    </div>
                    <div className="slide aspect-square h-full flex-shrink-0 snap-center  p-8 w-[25.125em]       border   border-[#E7E7E7]   rounded-lg ">
                        <div className="">

<svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.799805" width={40} height={40} rx={20} fill="#ECFDF3" />
  <g clipPath="url(#clip0_927_15484)">
    <path d="M16.71 28.7499V25.6394H9.88477L13.8821 19.913H11.8196L18.1031 11.0081L20.7996 14.8296L23.4962 11.0081L29.7797 19.913H27.7498L31.7263 25.6394H24.9101V28.7499H22.1031V25.6394H19.517V28.7499H16.71ZM25.1475 23.9066H28.3766L24.3793 18.1802H26.3141L23.4962 14.1766L21.9292 16.4111L24.3748 19.913H22.3332L25.1475 23.9066ZM13.2435 23.9066H22.9717L18.9862 18.1802H20.9328L18.1031 14.1766L15.2852 18.1802H17.2616L13.2435 23.9066ZM13.2435 23.9066H17.2616H15.2852H20.9328H18.9862H22.9717H13.2435ZM25.1475 23.9066H22.3332H24.3748H21.9292H26.3141H24.3793H28.3766H25.1475Z" fill="#039855" />
  </g>
  <defs>
    <clipPath id="clip0_927_15484">
      <rect width={20} height={20} fill="white" transform="translate(10.7998 10)" />
    </clipPath>
  </defs>
</svg>


                        </div>
                        <h3 className='font-bold text-[22px] mt-4'>
                            Develop the Land
                        </h3>
                        <p className='font-normal text-[17px] mt-1'>
                            We develop the land into profitable properties, such as residential or commercial buildings, to increase the land&#39;s value    </p>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Carousel;
