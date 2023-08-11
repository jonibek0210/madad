"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
   firstName: string;
   phone: number;
   sphere: string | "";
   tasks: string | "";
};

const CTA: React.FC = () => {
   const [hide, setHide] = useState<boolean>(false);
   const [success, setSuccess] = useState<boolean>(false);
   const { register, handleSubmit } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log(data);
      data ? setSuccess(true) : setSuccess(false);
   };
   return (
      <>
         <div className="container m-auto px-5 py-8 ">
            <div className="max-w-[1200px] flex flex-col items-center">
               <div className="mb-40 max-xl:mb-28 max-lg:mb-20 max-md:mb-14">
                  <h2 className="text-3xl text-center max-md:text-2xl leading-[32.97px]">
                     Получите бесплатный аудит вашего проекта
                  </h2>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <button
                     onClick={() => setHide(true)}
                     className="w-fit mb-6 max-md:mb-14 py-12 max-xl:py-9 max-lg:py-6 max-sm:py-4 px-11 max-xl:px-8 max-md:px-5 max-sm:px-3 text-3xl max-lg:text-xl max-sm:text-sm leading-[32.97px] rounded-full bg-[#599F60] text-white"
                  >
                     Хочу персональный план продвижения
                  </button>
                  <p className="max-sm:text-sm text-center leading-[17.58px]">
                     Оставляйте заявку на сайте сейчас и менеджер свяжется с
                     вами в течении 30 минут.
                  </p>
               </div>
            </div>
         </div>

         <div
            onClick={() => setHide(false)}
            className={`w-screen h-screen fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ${
               hide ? "block" : "hidden"
            }`}
         ></div>
         <div
            className={`max-w-[823px] w-full min-h-[600px] flex flex-col items-center justify-center fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-28 py-24 pb-16 border border-black rounded-[105px] max-md:rounded-[20px] overflow-auto ease-in duration-300 ${
               hide
                  ? "block opacity-100 scale-100"
                  : "hidden opacity-0 scale-50"
            }`}
         >
            {!success ? (
               <>
                  <div className="mb-12 text-center leading-[109.9%] text-[#2C2C2C]">
                     <h2 className="text-lg mb-3">
                        КАЛЬКУЛЯТОР КОМПЛЕКСНОЙ РЕКЛАМЫz
                     </h2>
                     <p className="text-[10px] leading-[109.9%]">
                        Ответьте на 4 вопроса о вашем бизнесе чтобы мы могли
                        рассчитать экономику бизнеса и предложить стратегию
                        продвижения
                     </p>
                  </div>
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="w-full flex flex-col items-center gap-4"
                  >
                     <input
                        type="text"
                        {...register("firstName", { required: true })}
                        className="w-full px-4 max-sm:px-3 py-4 max-md:text-[10px] max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full text-[#171616] bg-white placeholder:text-gray-400"
                        placeholder="Как вас зовут?"
                     />
                     <input
                        type="text"
                        {...register("phone", { required: true })}
                        className="w-full px-4 max-sm:px-3 py-4 max-md:text-[10px] max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full text-[#171616] bg-white placeholder:text-gray-400"
                        placeholder="Ваш телефон"
                     />
                     <input
                        type="text"
                        {...register("sphere")}
                        className="w-full px-4 max-sm:px-3 py-4 max-md:text-[10px] max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full text-[#171616] bg-white placeholder:text-gray-400"
                        placeholder="Сфера вашей деятельности"
                     />
                     <input
                        type="text"
                        {...register("tasks")}
                        className="w-full px-4 max-sm:px-3 py-4 max-md:text-[10px] max-sm:text-[10px] max-md:placeholder:text-sm max-md:placeholder:text-[10px] rounded-full text-[#171616] bg-white placeholder:text-gray-400"
                        placeholder="Цели и задачи"
                     />
                     <button className="w-fit px-20 max-md:px-11 py-5 rounded-full mt-10 max-md:mt-20 text-[10px] bg-[#89D290] text-white">
                        Отправить заявку
                     </button>
                  </form>
               </>
            ) : (
               <div className="">
                  <div className="">
                     <p className="mb-5 text-2xl text-center text-[#599F60] leading-[109.9%]">
                        Ваша заявка принята!
                     </p>
                     <p className="text-[10px] text-center text-[#2C2C2C] leading-[109.9%]">
                        Менеджер свяжется с вами ближайшие 30 минут
                     </p>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default CTA;
