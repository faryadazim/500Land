"use client"


import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

// import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"

interface MainNavProps {
  items?: any[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10 ">
      <Link href="/" className="hidden items-center space-x-2 md:flex ">
        {/**/}
        <Image src="/images/Logo.png" alt="500Land Logo" width={80}
          height={80}
          quality={100} />
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
                "flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest ",
                item.href.startsWith(`/${segment}`) && "text-slate-900",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
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
