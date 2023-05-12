"use client"


import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { Poppins } from 'next/font/google'
// import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"
// import Image from "next/image"

interface MainNavProps {
  items?: any[]
  children?: React.ReactNode
}

const inter = Poppins({
  subsets: ['latin'],
  weight: "400" 
})
export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10 ">
      <Link href="/" className="hidden items-center space-x-2 md:flex ">
        {/**/}

        <svg width="52" height="52" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.7397 27.8903C10.9409 27.8903 11.0196 28.0242 10.9802 28.2921C10.9125 28.8432 10.8556 29.3723 10.8097 29.8838C10.7638 30.3932 10.7201 30.9245 10.6785 31.4756C10.6523 31.7302 10.4971 31.8444 10.2173 31.818C10.0161 31.7917 9.71227 31.7719 9.30565 31.7588C8.89684 31.7456 8.33938 31.739 7.63108 31.739H1.01369C0.760096 31.739 0.633301 31.6512 0.633301 31.4777C0.633301 31.3833 0.670465 31.3131 0.742607 31.267C0.816935 31.2209 0.906566 31.177 1.01369 31.1352C1.24104 31.0672 1.37877 30.9201 1.42468 30.6918C1.47059 30.4634 1.49463 30.1539 1.49463 29.7653V19.1106C1.49463 18.7088 1.47059 18.3948 1.42468 18.1731C1.37877 17.9513 1.24104 17.8064 1.01369 17.7406C0.82568 17.6725 0.712001 17.6132 0.672651 17.5583C0.646418 17.5057 0.633301 17.4574 0.633301 17.4178V17.3981C0.633301 17.2093 0.766654 17.1236 1.03336 17.1368C1.26072 17.1632 1.57771 17.1829 1.98651 17.1983C2.39313 17.2115 2.91124 17.218 3.54084 17.218C4.17045 17.218 4.69074 17.2115 5.10611 17.1983C5.52147 17.1851 5.84065 17.1654 6.068 17.1368C6.33471 17.1236 6.46806 17.2115 6.46806 17.3981C6.46806 17.5452 6.34127 17.6593 6.08768 17.7406C5.87344 17.8086 5.74008 17.9448 5.68762 18.1533C5.63296 18.3619 5.60673 18.6539 5.60673 19.0293V30.0265C5.60673 30.5359 5.84065 30.7928 6.30848 30.7928H7.63108C8.01802 30.7928 8.35032 30.7291 8.62358 30.6017C8.89685 30.4744 9.13513 30.2922 9.33626 30.0573C9.53738 29.8223 9.71008 29.5479 9.85874 29.2318C10.0052 28.9156 10.1451 28.5709 10.2807 28.1955C10.3615 27.9672 10.5146 27.8662 10.7419 27.8925L10.7397 27.8903Z" fill="white" />
          <path d="M22.3266 31.0515C22.4075 31.1327 22.4906 31.192 22.578 31.2337C22.6655 31.2732 22.7092 31.3413 22.7092 31.4357C22.7092 31.6377 22.5627 31.7387 22.2676 31.7387H21.9659C21.6992 31.7387 21.391 31.7365 21.0434 31.7277C20.6958 31.7211 20.3526 31.664 20.0115 31.5564C19.6705 31.4489 19.3557 31.2754 19.0693 31.0317C18.7807 30.7902 18.5643 30.428 18.4178 29.945C18.2583 30.294 18.0528 30.597 17.8057 30.8517C17.5587 31.1064 17.2767 31.3215 16.9641 31.4972C16.6493 31.6728 16.3214 31.8001 15.9803 31.8792C15.6393 31.9604 15.2961 31.9999 14.9485 31.9999C13.851 31.9999 13.0028 31.7409 12.4016 31.2249C11.8005 30.709 11.4857 30.0459 11.4594 29.2402C11.4463 28.542 11.5731 27.9536 11.8398 27.4772C12.1065 27.0008 12.4585 26.6012 12.8935 26.2785C13.3286 25.9557 13.8117 25.6989 14.3473 25.5035C14.8829 25.3081 15.4032 25.1412 15.9126 25.0007C16.4197 24.8602 16.881 24.7329 17.2964 24.6187C17.7117 24.5045 18.0178 24.3596 18.2189 24.1862V23.8832C18.2189 23.3585 18.208 22.893 18.1883 22.4825C18.1686 22.0741 18.1183 21.7272 18.0375 21.4462C17.9566 21.1652 17.8363 20.95 17.6768 20.8007C17.5172 20.6536 17.2964 20.579 17.0144 20.579C16.6274 20.579 16.3454 20.669 16.1727 20.8512C15.9978 21.0335 15.8776 21.253 15.812 21.5165C15.7442 21.7777 15.7027 22.0631 15.6808 22.3727C15.6611 22.6823 15.5999 22.9633 15.4994 23.218C15.3988 23.4727 15.2327 23.679 14.9988 23.8327C14.7648 23.9864 14.3998 24.0501 13.9057 24.0237C13.545 23.9974 13.2477 23.8832 13.0138 23.6812C12.7798 23.4792 12.6268 23.229 12.5525 22.926C12.4782 22.623 12.5022 22.3025 12.6224 21.96C12.7427 21.6175 12.9766 21.3013 13.3242 21.0137C13.6718 20.7261 14.1505 20.4824 14.7583 20.2892C15.366 20.0938 16.118 19.9972 17.0144 19.9972C18.6846 19.9972 19.9328 20.3397 20.7548 21.0247C21.5768 21.7097 21.9878 22.7899 21.9878 24.2674V24.6494C21.9878 24.8778 21.99 25.1588 21.9987 25.4947C22.0053 25.8306 22.0118 26.1973 22.0184 26.5924C22.0249 26.9876 22.0315 27.374 22.0381 27.7495C22.0446 28.1249 22.049 28.4652 22.049 28.766V29.8835C22.049 30.0437 22.0599 30.1996 22.0796 30.3467C22.0993 30.4938 22.1299 30.6321 22.1692 30.7595C22.2086 30.8868 22.2632 30.9834 22.3288 31.0515H22.3266ZM16.2339 29.822C16.6624 29.822 17.0253 29.6705 17.327 29.3697C17.6287 29.0689 17.7773 28.6738 17.7773 28.1908V25.352C17.5762 25.4859 17.3029 25.644 16.9553 25.8262C16.6077 26.0084 16.2733 26.228 15.9519 26.4914C15.6305 26.7549 15.3595 27.0623 15.1387 27.4179C14.9179 27.7736 14.8348 28.1864 14.8873 28.6562C14.9266 29.0448 15.0775 29.3368 15.3376 29.5322C15.5977 29.7276 15.8951 29.8242 16.2295 29.8242L16.2339 29.822Z" fill="white" />
          <path d="M35.8999 31.1326C36.1535 31.2138 36.2803 31.328 36.2803 31.4751C36.2803 31.6771 36.1404 31.7627 35.8584 31.7363C35.6573 31.71 35.3643 31.6902 34.9752 31.6749C34.5883 31.6617 34.092 31.6551 33.4908 31.6551C32.8896 31.6551 32.3934 31.6617 32.0064 31.6749C31.6195 31.688 31.3244 31.7078 31.1232 31.7363C30.8434 31.7627 30.7013 31.6749 30.7013 31.4751C30.7013 31.328 30.8281 31.2138 31.0817 31.1326C31.3091 31.0645 31.4468 30.9284 31.4927 30.7198C31.5386 30.5113 31.5627 30.2193 31.5627 29.8438V24.7679C31.5627 24.3793 31.5386 24.006 31.4927 23.6504C31.4468 23.2947 31.355 22.9829 31.2216 22.7129C31.0883 22.445 30.9068 22.2299 30.6795 22.0674C30.4521 21.9071 30.1657 21.8259 29.8181 21.8259C29.4705 21.8259 29.1535 21.9071 28.9065 22.0674C28.6595 22.2277 28.4584 22.4428 28.3053 22.7129C28.1523 22.9807 28.0408 23.2859 27.9752 23.6284C27.9075 23.9709 27.8747 24.3156 27.8747 24.6647V29.8416C27.8747 30.2171 27.9009 30.5091 27.9556 30.7176C28.008 30.9262 28.1501 31.0645 28.3775 31.1304C28.6179 31.2116 28.7382 31.3258 28.7382 31.4729C28.7382 31.6749 28.6048 31.7605 28.3381 31.7341C28.137 31.7078 27.8441 31.688 27.4549 31.6727C27.068 31.6595 26.5717 31.6529 25.9706 31.6529C25.3694 31.6529 24.8731 31.6595 24.4862 31.6727C24.0992 31.6858 23.7975 31.7056 23.5833 31.7341C23.3166 31.7605 23.1832 31.6727 23.1832 31.4729C23.1832 31.3785 23.216 31.3082 23.2838 31.2621C23.3516 31.216 23.4368 31.1721 23.544 31.1304C23.7713 31.0623 23.9112 30.9262 23.9659 30.7176C24.0183 30.5091 24.0468 30.2171 24.0468 29.8416V23.4967C24.0468 23.1081 24.0205 22.8095 23.9659 22.6009C23.9112 22.3923 23.7713 22.2562 23.544 22.1882C23.2904 22.1201 23.1636 22.0059 23.1636 21.8457C23.1636 21.6569 23.2773 21.5427 23.5046 21.5032C23.8522 21.4351 24.3594 21.3078 25.0283 21.1212C25.6973 20.9323 26.4187 20.6447 27.1948 20.2561C27.3281 20.1881 27.4309 20.1793 27.5052 20.2254C27.5795 20.2715 27.6276 20.3703 27.6561 20.5174L27.8375 22.0674C27.9709 21.7996 28.1392 21.5405 28.3381 21.2924C28.5392 21.0443 28.7797 20.8226 29.0595 20.6272C29.3394 20.4318 29.6673 20.2781 30.0433 20.1639C30.4171 20.0498 30.8456 19.9927 31.3266 19.9927C32.7694 19.9927 33.8144 20.3923 34.4549 21.1914C35.0976 21.9906 35.4168 23.1827 35.4168 24.7657V29.8416C35.4168 30.2171 35.4408 30.5091 35.4867 30.7176C35.5327 30.9262 35.6704 31.0645 35.8977 31.1304L35.8999 31.1326Z" fill="white" />
          <path d="M48.9529 30.9506C49.0732 30.9901 49.1672 31.0318 49.2328 31.0713C49.3005 31.1109 49.3333 31.1855 49.3333 31.2931C49.3333 31.4687 49.1934 31.5543 48.9114 31.5543C48.6841 31.5543 48.3933 31.5609 48.0391 31.5741C47.685 31.5873 47.3199 31.6048 46.9461 31.6246C46.5723 31.6444 46.2115 31.6685 45.864 31.6949C45.5164 31.7212 45.2343 31.7475 45.0223 31.7761C44.7425 31.8156 44.6004 31.6949 44.6004 31.4138V30.2656C44.279 30.7771 43.8505 31.1921 43.3171 31.5148C42.7815 31.8376 42.106 31.9978 41.2906 31.9978C40.4752 31.9978 39.7734 31.8376 39.1438 31.5148C38.5142 31.1921 37.9917 30.7398 37.5698 30.1558C37.1479 29.5718 36.8353 28.8693 36.6276 28.0503C36.4199 27.2314 36.3368 26.3313 36.3762 25.3521C36.4155 24.3861 36.597 23.5474 36.9183 22.8339C37.2397 22.1225 37.6704 21.5385 38.2125 21.0819C38.7547 20.6252 39.3821 20.3134 40.097 20.1444C40.8118 19.9775 41.5704 19.9534 42.3727 20.0741C42.8952 20.1554 43.339 20.3134 43.7062 20.5484C44.0735 20.7833 44.3708 21.0753 44.5982 21.4244V20.1751C44.5982 19.7997 44.5741 19.5077 44.5282 19.2991C44.4823 19.0906 44.3446 18.9544 44.1172 18.8864C43.8636 18.792 43.7369 18.6712 43.7369 18.5241C43.7369 18.3353 43.8571 18.2146 44.0976 18.1619C44.2703 18.1355 44.502 18.0916 44.7906 18.0301C45.0769 17.9709 45.3961 17.8896 45.7437 17.7886C46.0913 17.6876 46.4629 17.5669 46.8564 17.4264C47.25 17.2859 47.6347 17.1212 48.0085 16.9324C48.1288 16.8643 48.2315 16.8555 48.319 16.9017C48.4064 16.9478 48.4501 17.0466 48.4501 17.1937V29.6596C48.4501 30.0482 48.4764 30.3446 48.531 30.5466C48.5835 30.7486 48.7256 30.8825 48.9529 30.9484V30.9506ZM42.6963 30.4061C43.3783 30.3666 43.8899 29.9253 44.2309 29.0866C44.572 28.2479 44.7097 26.9482 44.6419 25.1896C44.5894 23.8065 44.338 22.79 43.8899 22.1379C43.4417 21.4858 42.8843 21.1807 42.2153 21.2224C41.8808 21.2487 41.5901 21.3936 41.343 21.6549C41.096 21.9161 40.8949 22.2696 40.7419 22.7131C40.5888 23.1566 40.4752 23.6725 40.4008 24.2631C40.3265 24.8537 40.2981 25.4926 40.3112 26.1754C40.3243 26.8736 40.3986 27.4905 40.532 28.0284C40.6654 28.5663 40.8402 29.0164 41.0523 29.3786C41.2665 29.7409 41.5136 30.0109 41.7934 30.1844C42.0732 30.36 42.3749 30.4324 42.6963 30.4061Z" fill="white" />
          <path d="M11.6447 10.3263C11.684 11.0794 11.5441 11.7753 11.2227 12.4208C10.9014 13.0663 10.4467 13.6261 9.85861 14.1026C9.27054 14.579 8.57754 14.9522 7.78398 15.2201C6.98823 15.4879 6.1422 15.6218 5.24808 15.6218C4.21841 15.6218 3.35708 15.4945 2.66189 15.2398C1.96671 14.9851 1.41143 14.6624 0.998255 14.2738C0.582892 13.8852 0.303068 13.4615 0.156598 13.0048C0.010128 12.5482 -0.0335941 12.1222 0.0254312 11.7248C0.0866426 11.3297 0.239671 10.9937 0.486703 10.7171C0.733735 10.4427 1.04416 10.2912 1.42018 10.2648C1.99513 10.2253 2.41049 10.3153 2.66408 10.5371C2.91767 10.7588 3.08819 11.0442 3.17563 11.3933C3.26308 11.7424 3.30899 12.131 3.31554 12.5613C3.3221 12.9916 3.37238 13.3868 3.46639 13.7491C3.56039 14.1113 3.73747 14.4165 3.99762 14.6646C4.25776 14.9127 4.67531 15.0378 5.25026 15.0378C5.70498 15.0378 6.08973 14.9105 6.40235 14.6558C6.71715 14.4011 6.97074 14.0696 7.16531 13.6591C7.35987 13.2507 7.48667 12.7831 7.54569 12.2583C7.6069 11.7336 7.60253 11.2111 7.53476 10.6864C7.45388 10.0958 7.32052 9.57766 7.1347 9.13636C6.94669 8.69288 6.71715 8.32403 6.4417 8.02764C6.16844 7.73345 5.86019 7.50512 5.51916 7.34265C5.17812 7.18018 4.81304 7.08139 4.4261 7.03967C3.79649 6.97161 3.23685 7.05065 2.7406 7.27239C2.24653 7.49414 1.83117 7.77955 1.49669 8.12864C1.4158 8.22304 1.34366 8.26915 1.27589 8.26915H1.01574C0.882391 8.26915 0.770899 8.22524 0.68564 8.13742C0.598195 8.0496 0.567589 7.93982 0.596009 7.8059L1.71968 1.05916C1.75903 0.857179 1.8727 0.756186 2.06071 0.756186H8.87923C9.27929 0.756186 9.5613 0.718863 9.72088 0.646412C9.88047 0.571765 10.0291 0.442231 10.1625 0.253419C10.2149 0.185359 10.2718 0.12169 10.333 0.0624121C10.3942 0.00313389 10.4707 -0.0144303 10.5625 0.0119155C10.7505 0.0514343 10.8227 0.213901 10.7833 0.494923C10.6893 0.964758 10.5997 1.42801 10.5123 1.88467C10.4248 2.34133 10.3417 2.80458 10.2609 3.27441C10.2215 3.48957 10.086 3.59715 9.8608 3.59715H2.13941L1.5579 6.9804C1.78526 6.75206 2.07601 6.53691 2.43017 6.33492C2.78432 6.13294 3.18438 5.95949 3.63253 5.8102C4.08069 5.6631 4.56601 5.55113 5.0863 5.47868C5.60879 5.40404 6.1422 5.38867 6.69092 5.42819C7.30522 5.4677 7.89984 5.58846 8.47479 5.79044C9.04974 5.99243 9.5613 6.28662 10.0095 6.67742C10.4576 7.06602 10.8292 7.56 11.1222 8.15718C11.4151 8.75435 11.59 9.47666 11.6447 10.3219V10.3263Z" fill="white" />
          <path d="M18.1008 15.6021C17.0842 15.6021 16.1857 15.4133 15.4031 15.0379C14.6204 14.6625 13.9602 14.1378 13.4181 13.4659C12.8759 12.7941 12.4649 11.995 12.1851 11.0685C11.9053 10.142 11.7632 9.13424 11.7632 8.04747C11.7632 6.96071 11.9031 5.95298 12.1851 5.02648C12.4671 4.09998 12.8781 3.30083 13.4181 2.62901C13.9602 1.95719 14.6204 1.43466 15.4031 1.05704C16.1857 0.68161 17.0842 0.492798 18.1008 0.492798C19.1173 0.492798 19.9961 0.68161 20.7788 1.05704C21.5614 1.43247 22.2194 1.95719 22.755 2.62901C23.2906 3.30083 23.6972 4.09998 23.9792 5.02648C24.2612 5.95298 24.4012 6.96071 24.4012 8.04747C24.4012 9.13424 24.2612 10.142 23.9792 11.0685C23.6972 11.995 23.2906 12.7941 22.755 13.4659C22.2194 14.1378 21.5614 14.6603 20.7788 15.0379C19.9961 15.4133 19.1042 15.6021 18.1008 15.6021ZM19.1632 14.8162C19.5633 14.7481 19.8759 14.5044 20.0967 14.0807C20.3175 13.6569 20.4683 13.1169 20.547 12.4604C20.6279 11.8018 20.6432 11.0465 20.5973 10.1947C20.5492 9.34281 20.4465 8.45144 20.2869 7.52495C20.1404 6.5721 19.959 5.6983 19.7447 4.90573C19.5305 4.11316 19.2856 3.43914 19.0124 2.88149C18.7391 2.32384 18.4265 1.89791 18.0789 1.60152C17.7313 1.30732 17.3575 1.19316 16.9552 1.25902C16.5399 1.32708 16.2207 1.57078 15.9933 1.99451C15.766 2.41824 15.6129 2.96053 15.5321 3.62576C15.4512 4.29099 15.4359 5.04844 15.4818 5.90248C15.5277 6.75433 15.6261 7.6457 15.7725 8.57C15.919 9.50967 16.1005 10.3791 16.3147 11.1782C16.5289 11.9774 16.776 12.658 17.0558 13.2222C17.3356 13.7865 17.6548 14.2102 18.0089 14.4912C18.3631 14.7723 18.7478 14.8798 19.161 14.814L19.1632 14.8162Z" fill="white" />
          <path d="M31.0749 15.602C30.0583 15.602 29.1598 15.4132 28.3772 15.0378C27.5946 14.6624 26.9344 14.1376 26.3922 13.4658C25.85 12.794 25.439 11.9948 25.1592 11.0683C24.8794 10.1418 24.7373 9.13412 24.7373 8.04735C24.7373 6.96058 24.8772 5.95285 25.1592 5.02636C25.4412 4.09986 25.8522 3.3007 26.3922 2.62889C26.9344 1.95707 27.5946 1.43454 28.3772 1.05692C29.1598 0.681488 30.0583 0.492676 31.0749 0.492676C32.0914 0.492676 32.9702 0.681488 33.7529 1.05692C34.5355 1.43234 35.1935 1.95707 35.7291 2.62889C36.2647 3.3007 36.6713 4.09986 36.9534 5.02636C37.2354 5.95285 37.3753 6.96058 37.3753 8.04735C37.3753 9.13412 37.2354 10.1418 36.9534 11.0683C36.6713 11.9948 36.2647 12.794 35.7291 13.4658C35.1935 14.1376 34.5355 14.6602 33.7529 15.0378C32.9702 15.4132 32.0783 15.602 31.0749 15.602ZM32.1373 14.816C32.5374 14.748 32.85 14.5043 33.0708 14.0806C33.2916 13.6568 33.4424 13.1167 33.5211 12.4603C33.602 11.8016 33.6173 11.0464 33.5714 10.1945C33.5233 9.34269 33.4206 8.45132 33.261 7.52482C33.1145 6.57198 32.9331 5.69818 32.7188 4.90561C32.5046 4.11304 32.2598 3.43902 31.9865 2.88137C31.7132 2.32371 31.4006 1.89779 31.053 1.6014C30.7054 1.3072 30.3316 1.19304 29.9293 1.2589C29.514 1.32696 29.1948 1.57066 28.9675 1.99439C28.7401 2.41812 28.5871 2.9604 28.5062 3.62564C28.4253 4.29087 28.41 5.04831 28.4559 5.90236C28.5018 6.75421 28.6002 7.64558 28.7467 8.56988C28.8931 9.50955 29.0746 10.379 29.2888 11.1781C29.5031 11.9773 29.7501 12.6579 30.0299 13.2221C30.3097 13.7864 30.6289 14.2101 30.9831 14.4911C31.3372 14.7721 31.722 14.8797 32.1351 14.8138L32.1373 14.816Z" fill="white" />
          <path d="M39.8806 15.6025C39.5724 15.6025 39.2816 15.5433 39.0084 15.4203C38.7351 15.2996 38.4968 15.1393 38.2957 14.9373C38.0946 14.7353 37.935 14.5004 37.8147 14.2326C37.6945 13.9647 37.6333 13.6749 37.6333 13.3675C37.6333 13.0602 37.6923 12.766 37.8147 12.4915C37.935 12.2171 38.0946 11.9756 38.2957 11.767C38.4968 11.5585 38.7329 11.3938 39.0084 11.273C39.2816 11.1523 39.5724 11.0908 39.8806 11.0908C40.1889 11.0908 40.4796 11.1523 40.7529 11.273C41.0262 11.3938 41.2666 11.5585 41.4743 11.767C41.682 11.9756 41.846 12.2171 41.9662 12.4915C42.0864 12.766 42.1476 13.058 42.1476 13.3675C42.1476 13.6771 42.0864 13.9647 41.9662 14.2326C41.846 14.5004 41.682 14.7353 41.4743 14.9373C41.2666 15.1393 41.0262 15.2996 40.7529 15.4203C40.4796 15.5411 40.1889 15.6025 39.8806 15.6025Z" fill="white" />
        </svg>


        {/* <Image src="/images/Logo.png" alt="500Land Logo" width={50}
          height={50}
          quality={100} /> */}
        {/* <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span> */}
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            item.isMobileOnly === false && <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
               `flex items-center text-[15px]  text-slate-600   text-white tracking-widest`,
                item.href.startsWith(`/${segment}`) && "text-slate-900",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
              style={{fontFamily:"Basier Square Regular"}}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <></> : <> </>}
        <span className="font-bold text-white"> <Icons.logo /> </span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} >{children}</MobileNav>
      )}
    </div>
  )
}
