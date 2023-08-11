"use client";
import { useState } from "react";

import Image from "next/image";

interface CasesProps {}

const Cases: React.FC<CasesProps> = () => {
   const [hide, setHide] = useState<boolean>(false);
   const bodyHidden = () => {
      setHide(!hide);
      const body = document.body;
      if (hide == false) {
         body.classList.add("overflow");
         body.classList.remove("overflowY");
      } else {
         body.classList.remove("overflow");
         body.classList.add("overflowY");
      }
   };

   return (
      <>
         <div className="container m-auto">
            <div className="max-w-[1200px] mb-10 px-5">
               <h2 className="text-3xl leading-[109.9%]">Кейсы</h2>
            </div>
         </div>
         <div className="">
            <div className="bg-[#906F67]">
               <div className="container m-auto px-5">
                  <div className="max-w-[1200px] pt-4 pb-16 max-md:pb-10 max-sm:pb-4 max-lg:pb-11 mb-[200px] max-lg:mb-0">
                     <div className="mb-5 flex justify-around">
                        <div className=""></div>
                        <div className="text-white">
                           <h3 className="text-3xl leading-[109.9%] text-center max-sm:text-start">
                              Lewor Man
                           </h3>
                           <p className="hidden max-sm:block text-sm text-start leading-[120%]">
                              Магазин мужских аксессуаров и кожаных изделий.
                           </p>
                        </div>
                     </div>
                     <div className="flex max-sm:flex-col items-center justify-between max-sm:items-center max-lg:gap-10 text-white">
                        <div className="w-3/5 max-sm:w-fit h-full relative max-sm:mb-10 ">
                           <div className="max-w-[465px] max-sm:w-[233px] w-full absolute z-10 -top-52 max-xl:-top-56 right-5 max-xl:right-5 max-lg:left-5 max-md: max-lg:top-5 max-sm:top-16 max-sm:left-5">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                           <div className="max-w-[492px] max-sm:w-[246px] w-full absolute max-lg:relative -bottom-[330px] left-14 max-xl:left-0 max-lg:-top-10 max-sm:top-0 max-sm:-left-5">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor2.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                        </div>
                        <div className="w-[40%] max-xl:w-[45%] max-sm:w-4/5 max-[500px]:w-full">
                           <div className="mb-6 max-sm:hidden">
                              <p className="text-sm text-right leading-[120%]">
                                 Магазин мужских аксессуаров и кожаных изделий.
                              </p>
                              <p className="text-[8px] text-right leading-[120%]">
                                 *Акуальные цифры скрыты, по просьбе заказчика
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-1">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 **7
                              </p>
                              <p className="text-sm leading-[120%]">
                                 продаж в месяц, в среднем
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-start gap-4 mb-1">
                              <p className="text-sm leading-[120%]">
                                 Средний чек
                              </p>
                              <p className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-[35px] leading-[120%]">
                                 *.***.000
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-11">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 1.3$
                              </p>
                              <p className="text-sm leading-[120%]">
                                 Стоимость клиента
                              </p>
                           </div>
                           <div className="flex gap-6 max-lg:gap-5 max-sm:gap-3 items-center justify-between mb-14 maxsm:mb-11">
                              <button
                                 onClick={() => bodyHidden()}
                                 className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full bg-white text-[#906F67]"
                              >
                                 Узнать подробнее
                              </button>
                              <button className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full border border-white text-white">
                                 Посмотреть проект в IG
                              </button>
                           </div>
                           <div className="max-sm:block hidden">
                              <p className="text-[8px] text-right leading-[120%]">
                                 *Акуальные цифры скрыты, по просьбе заказчика
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#171717]">
               <div className="container m-auto px-5">
                  <div className="max-w-[1200px] pt-4 pb-16 max-md:pb-10 max-sm:pb-4 max-lg:pb-11 mb-[150px] max-lg:mb-0 pl-24 max-xl:pl-10 max-lg:pl-0">
                     <div className="mb-5">
                        <div className="text-white">
                           <h3 className="text-3xl leading-[109.9%] max-sm:text-start">
                              Pepperronis
                           </h3>
                           <p className="hidden max-sm:block text-sm text-start leading-[120%]">
                              Первая Лаундж-пиццерия в Самарканде
                           </p>
                        </div>
                     </div>
                     <div className="flex max-sm:flex-col-reverse items-center justify-between max-lg:gap-10 text-white">
                        <div className="max-sm:w-4/5 max-[500px]:w-full">
                           <div className="mb-6 max-sm:hidden">
                              <p className="text-sm text-right leading-[120%]">
                                 Первая Лаундж-пиццерия в Самарканде
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-1">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 365$
                              </p>
                              <p className="text-sm leading-[120%]">
                                 На таргетинг за ГОД
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-start gap-4 mb-1">
                              <p className="text-sm leading-[120%]">
                                 Средний чек
                              </p>
                              <p className="text-7xl max-lg:text-5xl max-sm:text-[35px] leading-[120%]">
                                 200.000
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-11">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 +40
                              </p>
                              <p className="text-sm leading-[120%]">
                                 Гостей в день
                              </p>
                           </div>
                           <div className="flex gap-6 max-lg:gap-5 max-sm:gap-3 items-center justify-between mb-14 maxsm:mb-11">
                              <button
                                 onClick={() => bodyHidden()}
                                 className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full bg-white text-[#906F67]"
                              >
                                 Узнать подробнее
                              </button>
                              <button className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full border border-white text-white">
                                 Посмотреть проект в IG
                              </button>
                           </div>
                        </div>
                        <div className="w-3/5 max-sm:w-full h-full relative max-sm:flex justify-center">
                           <div className="max-w-[527.302px] lg:h-[702.682px] max-sm:w-[246px] w-full absolute max-lg:relative -bottom-[370px] right-0 max-lg:-top-10 max-sm:top-0">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor2.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#F55302]">
               <div className="container m-auto px-5">
                  <div className="max-w-[1200px] pt-4 pb-16 max-md:pb-10 max-sm:pb-4 max-lg:pb-11 mb-[200px] max-lg:mb-0">
                     <div className="mb-5 flex justify-around">
                        <div className=""></div>
                        <div className="text-white">
                           <h3 className="text-3xl leading-[109.9%] text-center max-sm:text-start">
                              Wepro
                           </h3>
                           <p className="hidden max-sm:block text-sm text-start leading-[120%]">
                              Первая оффлайн DIGITAL-школа в Самарканде
                           </p>
                        </div>
                     </div>
                     <div className="flex max-sm:flex-col items-center justify-between max-lg:gap-10 text-white">
                        <div className="w-3/5 max-sm:w-fit h-full relative max-sm:mb-10">
                           <div className="max-w-[545.288px] max-xl:max-w-[450px] max-lg:max-w-[350px] w-full absolute z-10 right-0 max-xl:right-5 max-lg:-right-5 max-xl:-bottom-96 max-lg:bottom-0 max-sm:-bottom-10">
                              <Image
                                 className="w-full max-lg:min-h-72 max-md:min-h-52"
                                 src={"/images/cases/case-wepro.svg"}
                                 width={545.288}
                                 height={409.546}
                                 alt="case"
                              />
                           </div>
                           <div className="max-w-[492px] max-md:max-w-[251px] w-full absolute max-lg:relative -bottom-[330px] left-20 max-xl:left-0 max-lg:left-0 max-lg:-top-10 max-sm:top-0 max-sm:-left-5">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor2.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                        </div>
                        <div className="max-sm:w-4/5 max-[500px]:w-full">
                           <div className="mb-6 max-sm:hidden">
                              <p className="text-sm text-right leading-[120%]">
                                 Первая оффлайн DIGITAL-школа в Самарканде
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-1">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 350
                              </p>
                              <p className="text-sm leading-[120%]">
                                 Студентов в месяц, в среднем
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-start gap-4 mb-1">
                              <p className="text-sm leading-[120%]">
                                 Средний чек
                              </p>
                              <p className="text-7xl max-lg:text-5xl max-sm:text-[35px] leading-[120%]">
                                 62$
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-11">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 2.3$
                              </p>
                              <p className="text-sm leading-[120%]">
                                 Стоимость клиента
                              </p>
                           </div>
                           <div className="flex gap-6 max-lg:gap-5 max-sm:gap-3 items-center justify-between mb-14 maxsm:mb-11">
                              <button
                                 onClick={() => bodyHidden()}
                                 className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full bg-white text-[#906F67]"
                              >
                                 Узнать подробнее
                              </button>
                              <button className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full border border-white text-white">
                                 Посмотреть проект в IG
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#01A0B6]">
               <div className="container m-auto px-5">
                  <div className="max-w-[1200px] pt-4 pb-16 max-md:pb-10 max-sm:pb-4 max-lg:pb-11 mb-[150px] max-lg:mb-0 pl-24 max-xl:pl-10 max-lg:pl-0">
                     <div className="mb-5 ">
                        <div className="text-white">
                           <h3 className="text-3xl leading-[109.9%]  max-sm:text-start">
                              Doctor M
                           </h3>
                           <p className="hidden max-sm:block text-sm text-start leading-[120%]">
                              Центр репродуктивного здоровья
                           </p>
                        </div>
                     </div>
                     <div className="flex max-sm:flex-col-reverse items-center justify-between max-lg:gap-10 text-white">
                        <div className="max-sm:w-4/5 max-[500px]:w-full">
                           <div className="mb-6 max-sm:hidden">
                              <p className="text-sm text-right leading-[120%]">
                                 Центр репродуктивного здоровья
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-1">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 82,39$
                              </p>
                              <p className="text-sm leading-[120%]">
                                 На таргетинг за 2 месяца
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-start gap-4 mb-1">
                              <p className="text-sm leading-[120%]">
                                 Средний чек
                              </p>
                              <p className="text-6xl max-xl:text-4xl max-sm:text-[35px] leading-[120%]">
                                 от 500.000
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-11">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 +12.000
                              </p>
                              <p className="text-sm leading-[120%]">
                                 Чистой прибыли
                              </p>
                           </div>
                           <div className="flex gap-6 max-lg:gap-5 max-sm:gap-3 items-center justify-between mb-14 maxsm:mb-11">
                              <button
                                 onClick={() => bodyHidden()}
                                 className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full bg-white text-[#906F67]"
                              >
                                 Узнать подробнее
                              </button>
                              <button className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full border border-white text-white">
                                 Посмотреть проект в IG
                              </button>
                           </div>
                        </div>
                        <div className="w-3/5 max-sm:w-full h-full relative max-sm:flex justify-center">
                           <div className="max-w-[527.302px]  max-sm:w-[246px] w-full absolute max-lg:relative -bottom-[350px] right-0 max-lg:-top-10 max-sm:top-0">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor2.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#003A12]">
               <div className="container m-auto px-5">
                  <div className="max-w-[1200px] pt-4 pb-16 max-md:pb-10 max-sm:pb-4 max-lg:pb-11 mb-[200px] max-lg:mb-0">
                     <div className="mb-5 flex justify-around">
                        <div className=""></div>
                        <div className="text-white">
                           <h3 className="text-3xl leading-[109.9%] text-center max-sm:text-start">
                              SamYak
                           </h3>
                           <p className="hidden max-sm:block text-sm text-start leading-[120%]">
                              Зарубежная продукция со всего мира, которой нет ни
                              в одном магазине и супермаркете.
                           </p>
                        </div>
                     </div>
                     <div className="flex max-sm:flex-col items-center justify-between max-lg:gap-10 text-white">
                        <div className="w-3/5 max-sm:w-fit h-full relative max-sm:mb-10">
                           <div className="max-w-[545.288px] max-xl:max-w-[450px] max-lg:max-w-[350px] w-full absolute z-10 right-5 max-xl:right-5 max-lg:-right-5 max-xl:-bottom-96 max-lg:bottom-0 max-sm:-bottom-10">
                              <Image
                                 className="w-full max-lg:min-h-72 max-md:min-h-52"
                                 src={"/images/cases/case-wepro.svg"}
                                 width={545.288}
                                 height={409.546}
                                 alt="case"
                              />
                           </div>
                           <div className="max-w-[492px] max-md:max-w-[251px] w-full absolute max-lg:relative -bottom-[330px] left-20 max-xl:left-0 max-lg:left-0 max-lg:-top-10 max-sm:top-0 max-sm:-left-5">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor2.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                        </div>
                        <div className="max-sm:w-4/5 max-[500px]:w-full">
                           <div className="mb-6 max-sm:hidden">
                              <p className="text-sm text-right leading-[120%]">
                                 Первая оффлайн DIGITAL-школа в Самарканде
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-1">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 +700
                              </p>
                              <p className="text-sm leading-[120%]">
                                 Продаж с ноября по декабрь
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-start gap-4 mb-1">
                              <p className="text-sm leading-[120%]">
                                 Средний чек
                              </p>
                              <p className="text-5xl max-lg:text-4xl max-sm:text-[35px] leading-[120%]">
                                 от 700.000
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-11">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 553$
                              </p>
                              <p className="text-sm leading-[120%]">
                                 На таргет
                              </p>
                           </div>
                           <div className="flex gap-6 max-lg:gap-5 max-sm:gap-3 items-center justify-between mb-14 maxsm:mb-11">
                              <button
                                 onClick={() => bodyHidden()}
                                 className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full bg-white text-[#906F67]"
                              >
                                 Узнать подробнее
                              </button>
                              <button className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full border border-white text-white">
                                 Посмотреть проект в IG
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#984C31]">
               <div className="container m-auto px-5">
                  <div className="max-w-[1200px] pt-4 pb-16 max-md:pb-10 max-sm:pb-4 max-lg:pb-11 mb-[150px] max-lg:mb-0 pl-24 max-xl:pl-10 max-lg:pl-0">
                     <div className="mb-5 ">
                        <div className="text-white">
                           <h3 className="text-3xl leading-[109.9%]  max-sm:text-start">
                              Marmara
                           </h3>
                           <p className="hidden max-sm:block text-sm text-start leading-[120%]">
                              Рыбный ресторан для всей семьи
                           </p>
                        </div>
                     </div>
                     <div className="flex max-sm:flex-col-reverse items-center justify-between max-lg:gap-10 text-white">
                        <div className="max-sm:w-4/5 max-[500px]:w-full">
                           <div className="mb-6 max-sm:hidden">
                              <p className="text-sm text-right leading-[120%]">
                                 Рыбный ресторан для всей семьи
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-1">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 +450
                              </p>
                              <p className="text-sm leading-[120%]">
                                 продаж в среднем. Только через IG\FB
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-start gap-4 mb-1">
                              <p className="text-sm leading-[120%]">
                                 Средний чек
                              </p>
                              <p className="text-6xl max-xl:text-4xl max-sm:text-[35px] leading-[120%]">
                                 от 150.000
                              </p>
                           </div>
                           <div className="flex items-center max-sm:justify-end gap-4 mb-11">
                              <p className="text-7xl max-lg:text-5xl leading-[120%]">
                                 343,59$
                              </p>
                              <p className="text-sm leading-[120%]">
                                 За 2.5 месяца работы
                              </p>
                           </div>
                           <div className="flex gap-6 max-lg:gap-5 max-sm:gap-3 items-center justify-between mb-14 maxsm:mb-11">
                              <button
                                 onClick={() => bodyHidden()}
                                 className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full bg-white text-[#906F67]"
                              >
                                 Узнать подробнее
                              </button>
                              <button className="py-5 max-lg:py-3 px-14 max-lg:px-9 max-md:px-6 max-sm:px-4 text-[8px] leading-[109.9%] rounded-full border border-white text-white">
                                 Посмотреть проект в IG
                              </button>
                           </div>
                        </div>
                        <div className="w-3/5 max-sm:w-full h-full relative max-sm:flex justify-center">
                           <div className="max-w-[527.302px] max-xl:max-w-[500px] max-sm:w-[246px] w-full absolute max-lg:relative -bottom-[350px] right-0 max-xl:-top-80 max-lg:-top-10 max-sm:top-0">
                              <Image
                                 className="w-full h-full"
                                 src={"/images/cases/case-lewor2.png"}
                                 width={492.458}
                                 height={658}
                                 alt="case"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            onClick={() => bodyHidden()}
            className={`w-screen h-screen fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-white/30 ${
               hide ? "block" : "hidden"
            }`}
         >
            <div
               className={`max-w-[782px] w-full h-[850px] max-md:h-[70vh] px-16 max-lg:px-12 max-md:px-5 py-7 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50px] max-md:rounded-[20px] overflow-auto shadow-xl ease-in duration-300 bg-white text-[#003A12] ${
                  hide
                     ? "block opacity-100 scale-100"
                     : "hidden opacity-0 scale-50"
               }`}
            >
               <h3 className="text-xl max-sm:text-base leading-[150%]">
                  Более 600 продаж со средним чеком в 700.000. За 1 месяц...
               </h3>

               <p className="text-sm max-sm:text-xs leading-[150%] my-7 max-sm:my-4">
                  До начала работы:
               </p>
               <ul>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Накрученный аккаунт.
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Большие проблемы с доверием из-за недобросовестных
                     специалистов .
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Отсутствие узнаваемости: работали только через знакомых .
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Забаненно все что только можно + без фирменного стиля .
                  </li>
               </ul>

               <p className="text-sm max-sm:text-xs leading-[150%] my-7 max-sm:my-4">
                  Задачи:
               </p>
               <ul>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Повысить узнаваемость .
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Выявить целевую аудиторию .
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Проработать фирменный стиль .
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Разобраться с банами и прочими ограничениями.
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Стратегирование.
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     — Воронка продаж.
                  </li>
               </ul>

               <p className="text-sm max-sm:text-xs leading-[150%] my-7 max-sm:my-4">
                  Сложность:
               </p>
               <ul>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     - Отсутствие осведомлённости и низкий спрос.
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     - Отсутствие понимания ценности продукта целевой
                     аудиторией.
                  </li>
               </ul>

               <p className="text-sm max-sm:text-xs leading-[150%] my-7 max-sm:my-4">
                  Итог:
               </p>
               <ul>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     - Проработан фирменный стиль.
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     -Сформирована ценность и узнаваемость у ЦА.
                  </li>
                  <li className="text-lg max-sm:text-sm leading-[170%]">
                     -При сумме вложений на таргет в 112$, свыше 600 продаж за
                     месяц со средним чеком в 130.000 сум
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};

export default Cases;
