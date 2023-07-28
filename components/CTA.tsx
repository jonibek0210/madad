interface CTAProps {}

const CTA: React.FC<CTAProps> = () => {
   return (
      <div className="container m-auto px-5 py-8 ">
         <div className="max-w-[1200px] flex flex-col items-center">
            <div className="mb-40 max-xl:mb-28 max-lg:mb-20 max-md:mb-14">
               <h2 className="text-3xl text-center max-md:text-2xl leading-[32.97px]">
                  Получите бесплатный аудит вашего проекта
               </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
               <button className="w-fit mb-6 max-md:mb-14 py-12 max-xl:py-9 max-lg:py-6 max-sm:py-4 px-11 max-xl:px-8 max-md:px-5 max-sm:px-3 text-3xl max-lg:text-xl max-sm:text-sm leading-[32.97px] rounded-full bg-[#599F60] text-white">
                  Хочу персональный план продвижения
               </button>
               <p className="max-sm:text-sm text-center leading-[17.58px]">
                  Оставляйте заявку на сайте сейчас и менеджер свяжется с вами в
                  течении 30 минут.
               </p>
            </div>
         </div>
      </div>
   );
};

export default CTA;
