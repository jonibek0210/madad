import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="relative container m-auto px-5 max-sm:py-40 flex items-center justify-center gap-5">
         <div className="w-2/5 max-md:w-full">
            <div className="mb-5">
               <h1 className="text-4xl max-xl:text-3xl max-lg:text-xl text-regular text-white">
                  Комплексная реклама и продвижение.
               </h1>
            </div>

            <div className="">
               <ul>
                  <li className="mb-1 max-lg:mb-0 text-xs max-lg:text-[10px] text-white">
                     &bull; Снимаем ролики.
                  </li>
                  <li className="mb-1 max-lg:mb-0 text-xs max-lg:text-[10px] text-white">
                     &bull; Настраиваем рекламу в Instagram, Facebook, Youtube и
                     т.д.
                  </li>
                  <li className="mb-1 max-lg:mb-0 text-xs max-lg:text-[10px] text-white">
                     &bull; Приводим клиентов.
                  </li>
                  <li className="mb-1 max-lg:mb-0 text-xs max-lg:text-[10px] text-white">
                     &bull; Масштабируем бизнес.
                  </li>
               </ul>
            </div>

            <div className="mt-20 max-xl:mt-14">
               <button className="text-[10px] py-3 px-10 rounded-full bg-white">
                  Хочу персональный план продвижения
               </button>
            </div>
            <div className="absolute bottom-0 md:right-1/3 right-5">
               <p className="text-[10px] leading-[109.9%] md:text-[#191919] text-white">
                  Маркетинг. Дизайн. Web разработка.
               </p>
            </div>
         </div>

         <div className="w-3/4 max-xl:w-3/5 max-md:hidden">
            <div className="rounded-[90px] max-xl:rounded-[70px] max-lg:rounded-[50px] md:rounded-bl-none overflow-hidden">
               <Image
                  src={"/images/teachers.svg"}
                  width={1000}
                  height={1000}
                  alt="teachers"
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
