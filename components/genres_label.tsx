import { API_TMDB_KEY, BASE_TMDB_URL } from "@/pages/api/public_api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GenresLabel() {
    const [genres, setGenre] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(BASE_TMDB_URL + "/genre/movie/list?api_key=" + API_TMDB_KEY + "&language=en-US")
      .then((response) => {
        setGenre(response.data.genres);
        // console.log(response.data.genres);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">

      {genres.map((genre, index) => {
        return (
          <Link href={"/genres/" + genre.id} key={index} className="text-center text-white p-2 bg-orange-400 rounded-2xl">
            <button className="text-md font-bold">{genre.name}</button>
          </Link>
        );
      })}
    </div>
  )
}
