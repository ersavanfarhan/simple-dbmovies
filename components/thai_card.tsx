import { COUNTRY_TMDB_URL, IMAGE_TMDB_URL } from "@/pages/api/public_api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThaiCard() {
  const [thais, setThai] = useState<any[]>([]);

  useEffect(() => {
    axios.get(COUNTRY_TMDB_URL + "th").then((response) => {
      setThai(response.data.results);
    });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {thais.map((thai, index) => {
        return (
          <Link
            href={"/movies/" + thai.id}
            key={index}
            className="bg-black rounded-2xl text-white lg:hover:scale-110 xl:hover:scale-110 hover:transition"
          >
            <img
              src={IMAGE_TMDB_URL + thai.poster_path}
              className="rounded-t-2xl"
            />
            <div id="poster_text" className="grid mt-2 px-3 pb-2">
              <label className="xs:text-xs text-sm font-bold">{thai.title}</label>
              <div id="rate" className="flex items-center gap-1">
                <div>
                  <span className="material-symbols-outlined">grade</span>
                </div>
                <div>
                  <label className="text-sm">{thai.vote_average}</label>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
