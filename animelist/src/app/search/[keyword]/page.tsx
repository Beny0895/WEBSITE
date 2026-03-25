"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Iapi {
  mal_id: number;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  title: string;
}

export default function SearchPage() {
  const { keyword } = useParams<{ keyword: string }>();
  const [results, setResults] = useState<Iapi[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`);
      const json = await res.json();
      setResults(json.data);
    }
    getData();
  }, [keyword]);

  return (
    <div className="py-25 lg:py-23">
      <h1 className="px-4 font-semibold text-sm md:text-lg lg:text-xl">
        Hasil Pencarian {keyword}
      </h1>
      <div className="grid grid-cols-2 text-sm md:grid-cols-3 md:text-lg md:m-3 lg:grid-cols-4 lg:gap-4 lg:text-xl lg:m-4 text-center m-2 gap-2 bg-white">
        {results.map((anime) => (
          <div
            key={anime.mal_id}
            className="place-items-center bg-gray-300 rounded-md overflow-hidden shadow-3xl text-black transition-all duration-300 hover:scale-102"
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
}
