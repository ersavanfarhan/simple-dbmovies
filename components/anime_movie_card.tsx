import axios from "axios";
import { useEffect, useState } from "react";
import { ANIME_MOVIES_URL } from "@/pages/api/public_api";
import Link from "next/link";

export default function AnimeMovieCard() {
  const [animovies, setAnimovie] = useState<any[]>([]);

  useEffect(() => {
    axios.get(ANIME_MOVIES_URL).then((response) => {
      setAnimovie(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {animovies
        .filter((animovie, index) => index < 5)
        .map((animovie, index) => {
          return (
            <Link
              href={"/anime/detail/" + animovie.animeId}
              key={index}
              className="bg-gray-700 rounded-2xl text-white lg:hover:scale-110 xl:hover:scale-110 hover:transition"
            >
              <img
                src={animovie.animeImg}
                className="w-full aspect-[3/4] rounded-t-2xl"
              />
              <div id="poster_text" className="grid mt-2 px-3 pb-2">
                <label className="xs:text-xs text-sm font-bold">
                  {animovie.animeTitle}
                </label>
                <label className="xs:text-xs text-sm font-bold">
                  {animovie.releasedDate}
                </label>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
