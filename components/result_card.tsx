import {
  API_TMDB_KEY,
  BASE_TMDB_URL,
  IMAGE_TMDB_URL,
} from "@/pages/api/public_api";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function ResultCard() {
  const [results, setResult] = useState<any[]>([]);

  const searchMovie = async (q: string) => {
    if (q.length > 3) {
      await axios
        .get(
          BASE_TMDB_URL +
            "/search/movie?api_key=" +
            API_TMDB_KEY +
            "&language=en-US&query=" +
            q +
            "&page=1&include_adult=false"
        )
        .then((response) => {
          setResult(response.data.results);
          //   console.log(response.data.results);
        });
    }
  };
  return (
    <div>

      <section id="search_bar" className="xs:p-3 sm:p-3 md:p-5 px-28 py-3">
        <input
          type="text"
          placeholder="Type the keyword"
          className="w-full p-2 rounded-xl"
          onChange={({ target }) => searchMovie(target.value)}
        />
      </section>

      <section id="result" className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3">
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          RESULTS
        </label>

        <div
        id="result_card"
        className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5 pb-10"
      >
        {results
          .filter((result, index) => index < 10)
          .map((result, index) => {
            return (
              <Link
                href={"/movies/" + result.id}
                key={index}
                className="mb-3 bg-gray-700 rounded-2xl text-white lg:hover:scale-110 xl:hover:scale-110 hover:transition"
              >
                <img
                  src={IMAGE_TMDB_URL + result.poster_path}
                  className="w-full aspect-[3/4] rounded-t-2xl"
                />
                <div id="poster_text" className="grid mt-2 px-3 pb-2">
                  <label className="xs:text-xs text-sm font-bold">{result.title}</label>
                  <div id="rate" className="flex items-center gap-1">
                  <div>
                    <span className="material-symbols-outlined">grade</span>
                  </div>
                  <div>
                    <label className="text-sm">{result.vote_average}</label>
                  </div>
                </div>
                </div>
              </Link>
            );
          })}
      </div>
      </section>
    </div>
  );
}
