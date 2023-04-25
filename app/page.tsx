import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <>
     <div className={`hero-section relative min-h-screen ${inter.className} `}>
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
  </div>
  <div className={`flex min-h-screen flex-col  sticky top-0 z-50 `}   >
    <header className="container sticky top-0 z-40 ">
      <div className="flex h-16 items-center justify-between  pt-7" >
        <MainNav items={marketingConfig.mainNav} />
        <nav className=" flex">
          <Link
            href="/contactus"
            className={cn("flex items-center text-lg font-bold text-slate-600 sm:text-sm text-white tracking-widest mx-3")}
          >
            CONTACT US
          </Link>
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm" , variant:"outline" }), "px-4 text-white w-100 px-10  rounded-full font-bold")}
          >
            LOGIN
          </Link>
        </nav>
      </div>
    </header>

    <div className="absolute inset-0 z-0">
      <div className="bg-gray-700 opacity-20 h-full w-full absolute z-0"></div>
    </div>


    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore provident harum neque assumenda beatae quia qui accusantium nisi accusamus optio! Ut explicabo rerum fugiat quam enim vitae ipsa vel nulla! */}
    {/* //hero section data here a */}
  </div>
  
</div>
<main className="flex-1">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fugit facere minus in voluptate sequi atque deleniti ut, enim mollitia deserunt alias consequatur nobis. Quod accusamus consequuntur accusantium nemo voluptatibus porro vitae, a hic aperiam earum repellat, velit, laborum commodi saepe ipsum. Autem odit provident ad amet molestiae molestias dignissimos, distinctio laboriosam quibusdam quia nulla a. Earum illum asperiores natus porro quas, molestiae, esse officiis illo expedita tenetur, vitae obcaecati nostrum omnis adipisci qui. Aut vel aliquam consequuntur explicabo nostrum expedita totam, quia itaque inventore laborum rerum officiis placeat aspernatur assumenda velit eveniet sequi dolores error quae corporis, tempore quas iure! Nam, aperiam eius vel corrupti debitis possimus in iusto ipsum, dolor sunt doloribus praesentium repudiandae nulla nihil. Minus animi id ratione amet pariatur voluptate quasi expedita ab, quam impedit placeat similique eius, aspernatur dolorum? Eveniet, ipsa? Incidunt illo provident vero molestias adipisci ipsam ut dicta tenetur, inventore debitis voluptatum animi numquam placeat corrupti molestiae reiciendis accusamus recusandae officiis harum quos iure necessitatibus atque? Velit, quo? Expedita reprehenderit voluptatibus commodi tenetur, maiores beatae eos rem ut nemo unde. Iure voluptatum temporibus illo totam ut maiores expedita ab deserunt aut veniam, eius quis! Laborum ad ducimus delectus nihil eos debitis eaque quos minus, ipsum eveniet magni facere quas asperiores omnis suscipit dolorum, qui totam? Reprehenderit, sit error officia eligendi amet fugit molestiae. In facilis illo nesciunt modi dolores asperiores voluptas blanditiis quaerat vel veritatis, error quibusdam! Excepturi neque nam dolores accusamus explicabo porro doloribus culpa iure blanditiis dicta, numquam assumenda eligendi voluptas qui possimus odio nesciunt quisquam at, animi a deleniti alias. Earum corrupti, id similique porro deleniti maiores laudantium molestias. Quasi, error vel, maiores cupiditate deserunt molestiae doloribus totam, numquam perspiciatis amet dolorum illo repudiandae consequuntur unde provident praesentium nesciunt quos ad accusantium? Quod quidem perspiciatis asperiores harum dicta dolores commodi, libero, consequuntur sit veritatis iure unde. Voluptatem dolores facere magnam aliquam adipisci consequatur eum placeat ratione veritatis eveniet. Obcaecati dolorum voluptatum cupiditate ullam officia. Tenetur nesciunt minus laudantium ducimus adipisci provident corporis molestias eligendi ratione asperiores itaque doloribus enim facere quod et, nam velit corrupti nihil cupiditate. Dolores eos minus fuga architecto beatae reprehenderit recusandae? Sapiente voluptatum harum officia fugit, neque atque ipsam. Provident ipsa iure hic id animi voluptatem eveniet explicabo, autem soluta fugiat rerum rem nisi sed dolor nihil culpa quas, fugit aliquid. Assumenda possimus et iusto, amet ad nihil iure numquam fugit suscipit cumque, aspernatur nobis eos quam quaerat distinctio neque, sunt sint placeat. Dignissimos et vitae est officiis praesentium. Eum reiciendis at adipisci iste tempora quasi repellat dicta, minus distinctio veritatis pariatur fugit consequuntur corrupti est, ea enim dolor beatae reprehenderit doloremque fugiat dolorum cum dolores aut porro. Exercitationem.
    {/* main content here */}
  </main>

      

    </>



  )
}
