"use client";
import { useState } from "react";
import Image from "next/image";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
   const [active, setActive] = useState<number>(1);
   const [state, setState] = useState<string>(
      "Web-разработка сайтов Разработка телеграмм ботов Мобильные приложения"
   );
   const services = [
      {
         id: 1,
         title: "WEB-РАЗРАБОТКА",
         servic:
            "Web-разработка сайтов Разработка телеграмм ботов Мобильные приложения",
      },
      {
         id: 2,
         title: "МАРКЕТИНГ",
         servic:
            "Поисковая реклама Контекстная реклама Таргетинговая рекламаSMM",
      },
      {
         id: 3,
         title: "КОНТЕНТ МАРКЕТИНГ",
         servic:
            "Фото съемка Видео съемка Моушн дизайн Рекламные ролики Медийные ролики",
      },
      {
         id: 4,
         title: "ДИЗАЙН",
         servic: "Графический дизайн Брендинг Web дизайн",
      },
   ];

   return (
      <div className="relative z-20 container m-auto px-5 py-8">
         <div className="max-w-[1200px] pb-24 text-white">
            <div className="mb-9 max-md:mb-8">
               <h2 className="text-3xl leading-[109.9%]">Услуги</h2>
            </div>
            <div className="flex max-lg:flex-col items-center">
               <div className="w-[30%] max-lg:w-full max-lg:flex items-center justify-center">
                  <ul>
                     {services.map(
                        (item: {
                           id: number;
                           title: string;
                           servic: string;
                        }) => {
                           return (
                              <li
                                 key={item.id}
                                 onClick={() => {
                                    setActive(item.id), setState(item.servic);
                                 }}
                                 className={`text-2xl max-xl:text-xl leading-[109.9%] mb-6 cursor-pointer underline-offset-4 ${
                                    active === item.id ? "underline" : ""
                                 }`}
                              >
                                 &bull; {item.title}
                              </li>
                           );
                        }
                     )}
                  </ul>
               </div>
               <div className="w-[70%] max-lg:w-full h-[500px] max-md:h-[420px] py-6 px-8 backdrop-blur-lg bg-[#1b1b1b40] shadow-[5px_5px_7px_5px_#00000040]">
                  <div className="w-2/5 max-xl:w-1/2 max-sm:w-[90%]">
                     <p className="text-xl max-xl:text-lg max-md:text-base max-sm:text-sm">
                        {state}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
