interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
   return (
      <div className="container m-auto px-5">
         <div className="max-w-[1200px] pt-8 pb-24">
            <div className="mb-9 max-md:mb-7">
               <h2 className="text-3xl leading-[109.9%]">Отзывы</h2>
            </div>
            <div className="relative flex max-lg:flex-col gap-14 max-xl:gap-10 max-lg:gap-6 px-10 max-xl:px-5 max-lg:px-0">
               <div className="w-3/4 max-lg:w-full h-[500px] max-lg:h-[600px] rounded-3xl bg-black">
                  <div className=""></div>
               </div>
               <div className="max-w-1/4 w-[350px] max-lg:w-full">
                  <p className="text-3xl leading-[109.9%] mb-2 ">
                     Хамидов Шахзод
                  </p>
                  <p className="text-lg leading-[109.9%] mb-5 max-lg:mt-6 max-lg:mb-4">
                     Основатель компании Wepro:
                  </p>
                  <p className="leading-[109.9%]">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industrys
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum
                  </p>
               </div>
               <div className="absolute z-[-1] left-1/2 max-2xl:left-1/3 max-lg:left-1/4 max-md:left-[10%] -bottom-40 max-lg:-bottom-36">
                  <svg
                     className="w-[850px] max-2xl:w-[650px] max-lg:w-[500px] max-sm:w-[360px] max-[420px]:w-[270px]"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 850 146"
                     fill="none"
                  >
                     <path
                        d="M0 146V0H28.4271L91.6457 103.034H76.5836L138.741 0H166.956L167.381 146H135.135L134.923 48.5971H140.863L91.2214 130.566H75.735L25.0329 48.5971H32.2457V146H0Z"
                        fill="#191919"
                        fillOpacity="0.05"
                     />
                     <path
                        d="M183.096 146L249.284 0H283.227L349.628 146H313.564L259.255 17.1029H272.832L218.312 146H183.096ZM216.19 114.714L225.312 89.06H301.684L311.018 114.714H216.19Z"
                        fill="#191919"
                        fillOpacity="0.05"
                     />
                     <path
                        d="M365.035 146V0H432.496C448.619 0 462.833 3.05905 475.137 9.17715C487.441 15.1562 497.058 23.5686 503.988 34.4143C510.918 45.26 514.383 58.1219 514.383 73C514.383 87.7391 510.918 100.601 503.988 111.586C497.058 122.431 487.441 130.913 475.137 137.031C462.833 143.01 448.619 146 432.496 146H365.035ZM399.402 118.26H430.799C440.699 118.26 449.256 116.452 456.468 112.837C463.823 109.083 469.48 103.799 473.44 96.9857C477.541 90.1724 479.592 82.1771 479.592 73C479.592 63.6838 477.541 55.6886 473.44 49.0143C469.48 42.201 463.823 36.9867 456.468 33.3714C449.256 29.6171 440.699 27.74 430.799 27.74H399.402V118.26Z"
                        fill="#191919"
                        fillOpacity="0.05"
                     />
                     <path
                        d="M518.712 146L584.901 0H618.844L685.245 146H649.18L594.872 17.1029H608.449L553.928 146H518.712ZM551.807 114.714L560.929 89.06H637.3L646.635 114.714H551.807Z"
                        fill="#191919"
                        fillOpacity="0.05"
                     />
                     <path
                        d="M700.651 146V0H768.113C784.236 0 798.449 3.05905 810.754 9.17715C823.058 15.1562 832.675 23.5686 839.605 34.4143C846.535 45.26 850 58.1219 850 73C850 87.7391 846.535 100.601 839.605 111.586C832.675 122.431 823.058 130.913 810.754 137.031C798.449 143.01 784.236 146 768.113 146H700.651ZM735.019 118.26H766.416C776.316 118.26 784.872 116.452 792.085 112.837C799.439 109.083 805.096 103.799 809.056 96.9857C813.158 90.1724 815.209 82.1771 815.209 73C815.209 63.6838 813.158 55.6886 809.056 49.0143C805.096 42.201 799.439 36.9867 792.085 33.3714C784.872 29.6171 776.316 27.74 766.416 27.74H735.019V118.26Z"
                        fill="#191919"
                        fillOpacity="0.05"
                     />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Reviews;
