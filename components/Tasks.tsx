interface TasksProps {}

const Tasks: React.FC<TasksProps> = () => {
   return (
      <div className="relative z-20 container m-auto px-5 py-8 mb-10">
         <div className="max-w-[1200px]">
            <div className="mb-24 max-md:mb-7">
               <h2 className="text-3xl leading-[32.97px] text-white">
                  Какие задачи мы решаем
               </h2>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-40 max-xl:gap-x-24 max-lg:gap-x-10 gap-y-14 text-white">
               {[1, 2, 3, 4, 5].map((item: number) => {
                  return (
                     <div key={item} className="">
                        <div className="mb-6 border-b-4 border-white">
                           <p className="text-3xl">01.</p>
                        </div>
                        <div className="">
                           <p className="leading-[19.2px] mb-5">
                              Продумываем кому, как, какую и где показывать
                              рекламу так, чтобы максимально быстро получить
                              клиентов.
                           </p>
                           <p className="leading-[19.2px]">
                              Проведем воронку продаж от упаковки до клиентов
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Tasks;
