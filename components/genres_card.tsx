import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GENRE_TMDB_URL, IMAGE_TMDB_URL } from "@/pages/api/public_api";

export default function GenreCard() {
  const router = useRouter();
  const [genrecards, setGenreCard] = useState<any[]>([]);

  useEffect(() => {
    var ID = router.query.genres_ID;

    axios
      .get(GENRE_TMDB_URL + ID)
      .then((response) => {
        setGenreCard(response.data.results);
        // console.log(response.data.results);
      });
  }, [router.isReady]);

  return (
    <div>
      
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {genrecards
        .filter((genrecard, index) => index < 10)
        .map((genrecard, index) => {
          return (
            <Link
              href={"/movies/" + genrecard.id}
              key={index}
              className="mb-3 bg-gray-700 rounded-2xl text-white hover:scale-110 hover:transition"
            >
              <img
                src={IMAGE_TMDB_URL + genrecard.poster_path}
                className="w-full aspect-[3/4.5] rounded-t-2xl"
              />
              <div id="poster_text" className="grid mt-2 px-3 pb-2">
                <label className="font-bold">{genrecard.title}</label>
                <div id="rate" className="flex items-center gap-1">
                  <div><span className="material-symbols-outlined">grade</span></div>
                  <div><label className="text-sm">{genrecard.vote_average}</label></div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
    </div>
  );
}
