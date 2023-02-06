import Categories from "@/components/categories";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ANIME_MOVIES_URL } from "../api/public_api";

export default function AnimeAllPopular() {
  const [animeAllPopulars, setAnimePopular] = useState<any[]>([]);

  useEffect(() => {
    axios.get(ANIME_MOVIES_URL).then((response) => {
      setAnimePopular(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <div>
      <section id="header">
        <img src="../one_piece.jpg" className="w-full" />
      </section>

      <section
        id="categories"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900"
      >
        <Categories />
      </section>

      <section
        id="movies_anime"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-900"
      >
        <label className="font-bold xs:text-2xl sm:text-4xl md:text-5xl text-6xl text-white">
          POPULAR COLLECTION
        </label>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
          {animeAllPopulars.map((animeAllPopular, index) => {
            return (
              <Link
                href={"/anime/detail/" + animeAllPopular.animeId}
                key={index}
                className="mb-3 bg-gray-700 rounded-2xl text-white hover:scale-110 hover:transition"
              >
                <img
                  src={animeAllPopular.animeImg}
                  className="w-full aspect-[3/4] rounded-t-2xl"
                />
                <div id="poster_text" className="grid mt-2 px-3 pb-2">
                  <label className="text-md font-bold">
                    {animeAllPopular.animeTitle}
                  </label>
                  <label className="text-md font-bold">
                    {animeAllPopular.releasedDate}
                  </label>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
