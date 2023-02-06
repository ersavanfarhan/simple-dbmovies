import axios from "axios";
import { useEffect, useState } from "react";
import { ANIME_POPULAR_URL } from "@/pages/api/public_api";
import Link from "next/link";

export default function AnimePopularCard() {
  const [animepopulars, setAnime] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(ANIME_POPULAR_URL)
      .then((response) => {
        setAnime(response.data);
        // console.log(response.data);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">

      {animepopulars.filter((animepopular, index) => index < 5)
      .map((animepopular, index) => {
        return (
          <Link href={"/anime/detail/" + animepopular.animeId} key={index} 
          className="mb-3 bg-gray-700 rounded-2xl text-white hover:scale-110 hover:transition">
            <img src={animepopular.animeImg} className="w-full aspect-[3/4] rounded-t-2xl"/>
            <div id="poster_text" className="grid mt-2 px-3 pb-2">
              <label className="text-md font-bold">{animepopular.animeTitle}</label>
              <label className="text-md font-bold">{animepopular.releasedDate}</label>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
