import Categories from "@/components/categories";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API_TMDB_KEY, BASE_TMDB_URL, BACKDROP_TMDB_URL, IMAGE_TMDB_URL,
} from "../api/public_api";

export default function MovieDetail() {
  const router = useRouter();
  const [moviedetails, setMovieDetail] = useState<{
    backdrop_path: string;
    poster_path: string;
    title: string;
    genres: any;
    vote_average: number;
    overview: string;
    release_date: string
  }>({
    backdrop_path: "",
    poster_path: "",
    title: "",
    genres: {
      0: {}
    },
    vote_average: 0,
    overview: "",
    release_date: ""
  });

  useEffect(() => {
    var ID = router.query.movies_ID;

    axios
      .get(
        BASE_TMDB_URL +
          "/movie/" +
          ID +
          "?api_key=" +
          API_TMDB_KEY +
          "&language=en-US"
      )
      .then((response) => {
        setMovieDetail(response.data);
        // console.log(response.data);
      });
  }, [router.isReady]);

  return (
    <div>
      <section
        id="categories"
        className="w-full grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900 z-20 relative"
      >
        <Categories />
      </section>

      <section className="xs:bg-gray-800 sm:bg-gray-800 relative">
        <img
          src={BACKDROP_TMDB_URL + moviedetails.backdrop_path}
          className="xs:hidden sm:hidden w-full brightness-50 -z-10"
        />
        <div className="xs:grid xs:gap-2 xs:relative sm:relative
        flex gap-10 w-full items-center xs:p-3 sm:p-3 md:p-5 px-28 py-5 z-10 absolute top-0">
          <img
            src={IMAGE_TMDB_URL + moviedetails.poster_path}
            className="xs:w-80 xs:mx-auto w-1/3 rounded-2xl"
          />

          <div className="text-white w-full">
            <div id="title">
              <label className="xs:text-3xl text-4xl">{moviedetails.title}</label>
            </div>
            <div id="genres">
              <label className="italic xs:text-sm">
                {moviedetails.genres[0].name}
              </label>
            </div>
            <div id="vote" className="grid xs:py-2 py-4">
              <label className="xs:text-sm text-xl">Vote Average : </label>
              <label className="xs:text-xl text-3xl">{moviedetails.vote_average}</label>
            </div>
            <div id="overview">
              <label className="xs:text-sm text-xl">Overview :</label>
              <p className="xs:text-sm italic text-justify">{moviedetails.overview}</p>
            </div>
            <div id="released" className="xs:pt-2 pt-4">
              <label className="xs:text-sm">Released date : {moviedetails.release_date}</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
