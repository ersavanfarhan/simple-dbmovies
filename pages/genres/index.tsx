import Categories from "@/components/categories";
import GenresLabel from "@/components/genres_label";
import {API_TMDB_KEY,BASE_TMDB_URL} from "@/pages/api/public_api";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Genres() {
  const [genres, setGenre] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        BASE_TMDB_URL +
          "/genre/movie/list?api_key=" +
          API_TMDB_KEY +
          "&language=en-US"
      )
      .then((response) => {
        setGenre(response.data.genres);
        // console.log(response.data.genres);
      });
  }, []);

  return (
    <div>
      <section id="header">
        <img src="../genre-banner.jpg" className="w-full" />
      </section>

      <section
        id="categories"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900"
      >
        <Categories />
      </section>

      <section
        id="genres_label"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-900"
      >
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          GENRES
        </label>
        <div className="label">
          <GenresLabel />
        </div>
      </section>
    </div>
  );
}
