"use client";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Input = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router= useRouter();
  const handleSearch = (event: React.MouseEvent) => {
    event.preventDefault();
    const keyword: string = searchRef.current?.value || "";

    router.push(`/search/${keyword}`);
  };
  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-md outline-none text-black bg-white w-50 h-6 lg:h-7 lg:w-70 placeholder:text-center"
        placeholder="Search Anime"
        ref={searchRef}
      />
      <button className="absolute inset-e-2 lg:top-0.5">
        <MagnifyingGlassIcon size={24} onClick={handleSearch} />
      </button>
    </div>
  );
};

export default Input;
