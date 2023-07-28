import Image from "next/image";

import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
   return (
      <div className="relative z-20 container m-auto px-5 py-8">
         <div className="max-w-[1200px]">
            <div className="">
               <div className="mb-14 max-md:mb-7">
                  <h2 className="text-3xl leading-[32.97px] text-white">
                     Контакты
                  </h2>
               </div>
               <div className="flex justify-between">
                  <div className="max-w-[585px] max-2xl:max-w-[500px] max-xl:max-w-[400px] max-sm:max-w-full mx-20 max-xl:mx-10 max-lg:mx-0">
                     <div className="">
                        <h3 className="mb-10 text-center font-normal text-white">
                           Ответьте на 4 вопроса о вашем бизнесе, чтобы мы могли
                           рассчитать экономику бизнеса и предложить стратегию
                           продвижения
                        </h3>
                     </div>
                     <form className="w-full flex flex-col items-center gap-4">
                        <input
                           type="text"
                           className="w-full px-4 max-sm:px-3 py-4 max-md:text-sm max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full bg-white placeholder:text-gray-400"
                           placeholder="Как вас зовут?"
                        />
                        <input
                           type="text"
                           className="w-full px-4 max-sm:px-3 py-4 max-md:text-sm max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full bg-white placeholder:text-gray-400"
                           placeholder="Ваш телефон"
                        />
                        <input
                           type="text"
                           className="w-full px-4 max-sm:px-3 py-4 max-md:text-sm max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full bg-white placeholder:text-gray-400"
                           placeholder="Сфера вашей деятельности"
                        />
                        <input
                           type="text"
                           className="w-full px-4 max-sm:px-3 py-4 max-md:text-sm max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full bg-white placeholder:text-gray-400"
                           placeholder="Цели и задачи"
                        />
                        <button className="w-fit px-20 max-md:px-11 py-5 rounded-full mt-10 max-md:mt-20 text-[10px] bg-[#89D290] text-white">
                           Отправить заявку
                        </button>
                     </form>
                  </div>

                  <div className="max-sm:hidden flex flex-col items-end justify-end text-white">
                     <div className="flex gap-3 mb-2">
                        <div className="flex items-center justify-center p-1 rounded-full bg-white">
                           <BsFillTelephoneFill size={13} color="black" />
                        </div>
                        <p>+998 (90) 4566949</p>
                     </div>
                     <div className="flex gap-3 mb-2">
                        <div className="flex items-center justify-center p-1 rounded-full bg-white">
                           <BsInstagram size={13} color="black" />
                        </div>
                        <p>+998 (90) 4566949</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="flex items-center justify-center p-1 rounded-full bg-white">
                           <AiOutlineMail size={15} color="black" />
                        </div>
                        <p>+998 (90) 4566949</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contacts;
