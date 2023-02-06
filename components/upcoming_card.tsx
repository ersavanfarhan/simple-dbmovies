import axios from "axios";
import { API_TMDB_KEY, BASE_TMDB_URL, IMAGE_TMDB_URL } from "@/pages/api/public_api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UpcomingCard() {
  const [upcomings, setUpcoming] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(BASE_TMDB_URL + "/movie/upcoming?api_key=" + API_TMDB_KEY + "&language=en-US&page=1")
      .then((response) => {
        setUpcoming(response.data.results);
        // console.log(response.data.results);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5">

      {upcomings.map((upcoming, index) => {
        return (
          <Link 
          href={"/movies/" + upcoming.id}
          key={index} className="text-white hover:scale-110 hover:transition">
            <img src={IMAGE_TMDB_URL + upcoming.poster_path} className="w-full aspect-[3/4.5] rounded-2xl"/>
            <div id="poster_text" className="grid mt-2">
              <label className="text-md font-bold">{upcoming.title}</label>
              <label className="text-sm">{upcoming.release_date}</label>

            </div>
          </Link>
        );
      })}
    </div>
  );
}
