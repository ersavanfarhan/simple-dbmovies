import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  API_TMDB_KEY,
  BASE_TMDB_URL,
  IMAGE_TMDB_URL,
} from "@/pages/api/public_api";
import Link from "next/link";

export default function TvCard() {
  const [tvs, setTV] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        BASE_TMDB_URL +
          "/tv/top_rated?api_key=" +
          API_TMDB_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        setTV(response.data.results);
        // console.log(response.data.results);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {tvs
        .filter((tv, index) => index < 10)
        .map((tv, index) => {
          return (
            <Link
              href={"/tv/" + tv.id}
              key={index}
              className="mb-3 bg-gray-700 rounded-2xl text-white hover:scale-110 hover:transition"
            >
              <img
                src={IMAGE_TMDB_URL + tv.poster_path}
                className="rounded-t-2xl"
              />
              <div id="poster_text" className="grid mt-2 px-3 pb-2">
                <label className="text-md font-bold">{tv.name}</label>
                <div id="rate" className="flex items-center gap-1">
                  <div>
                    <span className="material-symbols-outlined">grade</span>
                  </div>
                  <div>
                    <label className="text-sm">{tv.vote_average}</label>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
