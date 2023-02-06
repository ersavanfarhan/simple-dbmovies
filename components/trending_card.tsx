import axios from "axios";
import {
  API_TMDB_KEY,
  BASE_TMDB_URL,
  IMAGE_TMDB_URL,
} from "@/pages/api/public_api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TrendingCard() {
  const [trendings, setTrending] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        BASE_TMDB_URL +
          "/trending/movie/day?api_key=" +
          API_TMDB_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        setTrending(response.data.results);
        // console.log(response.data.results);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {trendings
        .filter((trending, index) => index < 10)
        .map((trending, index) => {
          return (
            <Link
              href={"/movies/" + trending.id}
              key={index}
              className="mb-3 bg-gray-700 rounded-2xl text-white hover:scale-110 hover:transition"
            >
              <img
                src={IMAGE_TMDB_URL + trending.poster_path}
                className="w-full aspect-[3/4.5] rounded-t-2xl"
              />
              <div id="poster_text" className="grid mt-2 px-3 pb-2">
                <label className="font-bold">{trending.title}</label>
                <div id="rate" className="flex items-center gap-1">
                  <div><span className="material-symbols-outlined">grade</span></div>
                  <div><label className="text-sm">{trending.vote_average}</label></div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
