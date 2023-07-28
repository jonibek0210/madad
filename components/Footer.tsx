import Image from "next/image";
import Link from "next/link";

import { BsTelephone, BsInstagram } from "react-icons/bs";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer>
         <div className="relative container m-auto px-5 py-6">
            <div className="max-w-[1200px] flex items-center justify-between">
               <div className="max-sm:w-48 absolute top-20 left-1/4 max-lg:left-[11%] max-sm:left-1/2 max-sm:top-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max z-[-1]">
                  <svg
                     className="max-sm:hidden w-[700px] max-2xl:w-[650px] max-lg:w-[500px] max-sm:w-[360px] max-[420px]:w-[270px]"
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
                  <Image
                     className="hidden max-sm:block w-full h-full"
                     src={"/images/vector-footer.PNG"}
                     width={1000}
                     height={1000}
                     alt="vector"
                  />
               </div>
               <div className="">
                  <ul className="flex flex-col gap-7 max-md:gap-5">
                     <li className="text-xl max-md:text-base max-sm:text-xs">
                        Главная
                     </li>
                     <li className="text-xl max-md:text-base max-sm:text-xs">
                        Кейсы
                     </li>
                     <li className="text-xl max-md:text-base max-sm:text-xs">
                        Услуги
                     </li>
                     <li className="text-xl max-md:text-base max-sm:text-xs">
                        Отзывы
                     </li>
                     <li className="text-xl max-md:text-base max-sm:text-xs">
                        Контакты
                     </li>
                  </ul>
               </div>

               <div className="flex flex-col gap-5">
                  <div className="flex gap-6 max-md:gap-2">
                     <BsTelephone />
                     <p className="text-xl max-md:text-base max-sm:text-xs">
                        +998 (90) 4566949
                     </p>
                  </div>
                  <div className="flex gap-6 max-md:gap-2">
                     <BsInstagram />
                     <Link
                        href={"#"}
                        className="text-xl max-md:text-base max-sm:text-xs"
                     >
                        @madad_agency
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
