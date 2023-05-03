 import './globals.css'
// import { Inter } from 'next/font/google'
// import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '500 Land',
  description: '500 Land ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}
      
      {/* <Toaster/> */}
      </body>
    </html>
  )
}
