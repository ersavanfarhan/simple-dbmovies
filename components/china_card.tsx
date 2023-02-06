import { COUNTRY_TMDB_URL, IMAGE_TMDB_URL } from "@/pages/api/public_api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ChinaCard() {
  const [chinas, setChina] = useState<any[]>([]);

  useEffect(() => {
    axios.get(COUNTRY_TMDB_URL + "zh").then((response) => {
        setChina(response.data.results);
    });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">
      {chinas.map((china, index) => {
        return (
          <Link
            href={"/movies/" + china.id}
            key={index}
            className="mb-3 bg-black rounded-2xl text-white hover:scale-110 hover:transition"
          >
            <img
              src={IMAGE_TMDB_URL + china.poster_path}
              className="rounded-t-2xl"
            />
            <div id="poster_text" className="grid mt-2 px-3 pb-2">
              <label className="text-md font-bold">{china.title}</label>
              <div id="rate" className="flex items-center gap-1">
                <div>
                  <span className="material-symbols-outlined">grade</span>
                </div>
                <div>
                  <label className="text-sm">{china.vote_average}</label>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
