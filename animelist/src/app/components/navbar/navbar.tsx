import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed bg-gray-400 top-0 w-full pb-2 z-50">
      <div className="flex justify-between items-center px-6 flex-col sm:flex-row gap-1">
        <Link href="/" className="flex items-center">
          <Image src="/beny.logo.png" alt="logo" width={180} height={120} className="w-auto sm:h-12 md:h-15 lg:h-20"/>
        </Link>
        <input type="text" className="rounded-md outline-none bg-black w-50 h-4 lg:h-7 lg:w-70 placeholder:text-center text-white" placeholder="Search Anime"/>
      </div>
    </div>
  );
};

export default Navbar;
