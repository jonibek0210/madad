import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="bg-[url('/images/black-bg.svg')]">
         <div className="container m-auto px-5 py-7 max-lg:py-5 max">
            <Link href={"/"}>
               <Image
                  className="w-auto h-auto"
                  src={"/images/logo.svg"}
                  width={92}
                  height={32}
                  alt="logo"
               />
            </Link>
         </div>
      </header>
   );
};

export default Header;
