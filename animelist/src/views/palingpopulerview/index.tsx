"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Iapi {
  mal_id: number;
  images: {
    jpg: {
      large_image_url: string;
      small_image_url: string;
    };
  };
  title: string;
}
const TopAnimeSemua = () => {
  const [api, setApi] = useState<Iapi[]>([]);
  useEffect(() => {
    async function getApi() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/top/anime`,
      );
      const result = await response.json();
      setApi(result.data);
    }
    getApi();
  }, []);

  return (
    <div className="py-25 lg:py-23">
        <h1 className="px-4 font-semibold text-sm md:text-lg lg:text-xl text-center">
          Paling Populer
        </h1>
      <div className="grid grid-cols-2 text-sm md:grid-cols-3 md:text-lg md:m-3 lg:grid-cols-4 lg:gap-4 lg:text-xl lg:m-4 text-center m-2 gap-2 bg-white">
        {api.map((anime) => (
          <div
            key={anime.mal_id}
            className="place-items-center bg-gray-300 rounded-md overflow-hidden shadow-3xl text-black transition-all duration-300 hover:scale-102 "
          >
            <Link href={`/anime/${anime.mal_id}`}>
              <Image
                src={anime.images.jpg.large_image_url}
                alt="anime"
                width={280}
                height={180}
                className="h-70 lg:h-100 object-cover w-full"
              />
              <p className="line-clamp-1">{anime.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnimeSemua;