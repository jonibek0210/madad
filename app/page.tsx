import Image from "next/image";

import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Tasks from "@/components/Tasks";
import Cases from "@/components/Cases";

export default function Home() {
   return (
      <>
         <section className="py-8 mb-10 bg-[url('/images/black-bg.svg')]">
            <Hero />
         </section>
         <section>
            <Cases />
         </section>
         <section className="relative mb-10 overflow-hidden bg-[url('/images/black-bg.svg')]">
            <div className="w-[1619px] max-lg:w-[1000px] h-[1600px] max-lg:h-[1000px] absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[url('/images/vector.png')] bg-center"></div>
            <Services />
         </section>
         <section className="py-8 mb-10">
            <Reviews />
         </section>
         <section className="py-8 mb-10">
            <CTA />
         </section>
         <section className="relative py-8 overflow-hidden bg-[url('/images/black-bg.svg')]">
            <Tasks />
            <div className="w-[1618px] h-[1618px] absolute z-20 top-1/2 left-1/2 -translate-y-1/2 max-lg:-translate-x-[15%] max-sm:-translate-x-[35%] bg-[url('/images/vector.png')]"></div>
            <Contacts />
         </section>
      </>
   );
}
