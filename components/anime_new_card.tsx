import axios from "axios";
import { useEffect, useState } from "react";
import { ANIME_LATEST_URL } from "@/pages/api/public_api";
import Link from "next/link";

export default function AnimeNewCard() {
  const [animenews, setAnimeNew] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(ANIME_LATEST_URL)
      .then((response) => {
        setAnimeNew(response.data);
        // console.log(response.data);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">

      {animenews.filter((animenew, index) => index < 5)
      .map((animenew, index) => {
        return (
          <Link href={"/anime/detail/" + animenew.animeId} key={index} 
          className="bg-black rounded-2xl text-white lg:hover:scale-110 xl:hover:scale-110 hover:transition">
            <img src={animenew.animeImg} className="w-full aspect-[3/4] rounded-t-2xl"/>
            <div id="poster_text" className="grid mt-2 px-3 pb-2">
              <label className="xs:text-xs text-sm font-bold">{animenew.animeTitle}</label>
              <label className="xs:text-xs text-sm font-bold">Episode - {animenew.episodeNum}</label>
            </div>
          </Link>
        );
      })}
    </div>
  )
}
