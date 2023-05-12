import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input-field"
import { Textarea } from "@/components/ui/textarea"


import { buttonVariants } from "@/components/ui/button"
import Vector from "@/public/images/Image.png";

import { Separator } from "@/components/ui/separator"


const inter = Poppins({
  subsets: ['latin'],
  weight: "100"
})



export default async function opportunitiesPage() {

  return (
    // <div className="h-[100vh] bg-grey-600 flex"  style={{ backgroundImage: "url('/images/Image.png  ')", minHeight: "100vh"  , minWidth:"50vw" , backgroundRepeat:"no-repeat"}}>
    //   <div className="w-1/2  "  >First Tolo lala</div>
    //   <div className="w-1/2">Second O Maa Goo</div>
    //   {/* <header className="container  border-t-pink-0 border-l-pink-0 border-t-pink-0   top-0 z-40">

    //     NavLogo
    //   </header>
    //   <section className="container my-12">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos repellat quaerat rerum officia aliquam nisi odit impedit dolorum! Optio unde quod nam. Debitis sint vel recusandae rem maiores quidem.


    //   </section> */}

    // </div>
   <> <div className="h-screen w-screen flex">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/Image.png')" }}>
        {/* Content for the left half */}
      </div>
      <div className="w-1/2 bg-red-500">
        {/* Content for the right half */}

      </div>
    
    </div>  <div className="container ">
        <div className="flex">
          <div className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minima voluptatibus distinctio ducimus quia dolorem autem exercitationem, maxime mollitia officiis suscipit doloremque in unde omnis? Libero doloremque consectetur similique, alias quae expedita debitis? Asperiores vitae cumque totam illum voluptatem, aliquam earum eaque architecto quam. Ad, ullam tenetur. Amet repellat laudantium quo, sed ullam asperiores quia distinctio a! Rerum ipsa provident eveniet, reiciendis consequatur ipsum quasi odit voluptatem libero nihil quibusdam voluptatibus aliquid? Eos quas praesentium, voluptate illo explicabo perferendis laboriosam nesciunt excepturi quo architecto consequatur unde itaque, repellendus, eveniet consequuntur quam? Expedita adipisci molestias a impedit omnis consequatur vel, ea iusto eum maiores officiis corrupti inventore sint nostrum magni veniam obcaecati! Nulla doloremque enim voluptatem! Et ipsum optio pariatur minus! Exercitationem distinctio vitae voluptate hic ipsa? Nihil officia rem sint! Quod facere quibusdam mollitia tempora sed fugiat voluptas dolorum laudantium aut, iure cumque id tibus fugit, animi exercitationem beatae non sunt officiis dolor ab. Cumque molestiae totam mollitia at sint eum delectus ipsum.</div>
          <div className="w-1/2">sit tenetur, ducimus hic quis quo placeat dolore quos. Nemo, labore corporis porro laboriosam autem sequi, molestias cum modi maiores quam reiciendis aperiam ipsum dicta illum libero sit temporibus. Ipsam doloremque quae ullam voluptatum ducimus dignissimos cupiditate cumque neque suscipit? Velit, excepturi ratione. Ipsam aliquid necessitatibus provident distinctio voluptas, sit quas ad laborum, tenetur eveniet illo placeat suscipit ut soluta quibusdam velit. Nisi numquam eius corporis nulla illum laboriosam at explicabo, excepturi, consectetur, vitae debitis consequatur quae totam aliquam molestiae atque vero sit fugiat adipisci quam dolores eum? Molestias fugiat maiores qui tempora! Quae sit natus voluptates delectus! Officiis fuga, est eos porro adipisci expedita corporis odit quam, exercitationem cum ipsa vel voluptatum repudiandae dolores libero officia error facilis atque excepturi illo. Quidem illo expedita incidunt aut facilis vel accusantium suscipit, temporibus repellendus molestias quae qui impedit. Necessita</div>
        </div>
      </div></>
  )
}
