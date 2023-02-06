import { COUNTRY_TMDB_URL, IMAGE_TMDB_URL } from "@/pages/api/public_api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function KoreaCard() {
  const [koreas, setKorea] = useState<any[]>([]);

  useEffect(() => {
    axios.get(COUNTRY_TMDB_URL + "ko").then((response) => {
        setKorea(response.data.results);
    });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {koreas.map((korea, index) => {
        return (
          <Link
            href={"/movies/" + korea.id}
            key={index}
            className="mb-3 bg-black rounded-2xl text-white hover:scale-110 hover:transition"
          >
            <img
              src={IMAGE_TMDB_URL + korea.poster_path}
              className="rounded-t-2xl"
            />
            <div id="poster_text" className="grid mt-2 px-3 pb-2">
              <label className="text-md font-bold">{korea.title}</label>
              <div id="rate" className="flex items-center gap-1">
                <div>
                  <span className="material-symbols-outlined">grade</span>
                </div>
                <div>
                  <label className="text-sm">{korea.vote_average}</label>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
