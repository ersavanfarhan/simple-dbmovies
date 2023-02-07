import {
  API_TMDB_KEY,
  BASE_TMDB_URL,
  IMAGE_TMDB_URL,
} from "@/pages/api/public_api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PopuplarCard() {
  const [populars, setPopular] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        BASE_TMDB_URL +
          "/movie/popular?api_key=" +
          API_TMDB_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        setPopular(response.data.results);
        // console.log(response.data.results);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {populars
        .filter((popular, index) => index < 10)
        .map((popular, index) => {
          return (
            <Link
              href={"/movies/" + popular.id}
              key={index}
              className="bg-black rounded-2xl text-white lg:hover:scale-110 xl:hover:scale-110 hover:transition"
            >
              <img
                src={IMAGE_TMDB_URL + popular.poster_path}
                className="rounded-t-2xl"
              />
              <div id="poster_text" className="grid mt-2 px-3 pb-2">
                <label className="xs:text-xs text-sm font-bold">{popular.title}</label>
                <div id="rate" className="flex items-center gap-1">
                  <div><span className="material-symbols-outlined">grade</span></div>
                  <div><label className="text-sm">{popular.vote_average}</label></div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
