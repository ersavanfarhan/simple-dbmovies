import Categories from "@/components/categories";
import { ANIME_DETAIL_URL } from "@/pages/api/public_api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AnimeMovieDetail() {
  const router = useRouter();
  const [anime_movie_details, setAnimeMovieDetail] = useState<{
    animeImg: string;
    animeTitle: string;
    genres : any,
    type: string;
    synopsis: string;
    releasedDate: string
  }>({
    animeImg: "",
    animeTitle: "",
    genres: [],
    type: "",
    synopsis: "",
    releasedDate: ""
  });

  useEffect(() => {
    var ID = router.query.anime_detail_ID;

    axios
      .get(ANIME_DETAIL_URL + ID)
      .then((response) => {
        setAnimeMovieDetail(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <section
        id="categories"
        className="w-full grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900 z-20 relative"
      >
        <Categories />
      </section>

      <section className="bg-gray-800 relative">

        <div className="xs:grid xs:gap-2 xs:relative sm:relative
        flex gap-10 w-full items-center xs:p-3 sm:p-3 md:p-5 px-28 py-5 z-10">
          <img
            src={anime_movie_details.animeImg}
            className="xs:w-80 xs:mx-auto w-1/3 rounded-2xl"
          />

          <div className="text-white w-full">
            <div id="title">
              <label className="xs:text-3xl text-4xl">{anime_movie_details.animeTitle}</label>
            </div>
            <div id="genres">
              <label className="italic xs:text-sm">
                {/* {anime_movie_details.genres[0]} */}
              </label>
            </div>
            <div id="type" className="grid xs:py-2 py-4">
              <label className="xs:text-sm text-xl">Type : {anime_movie_details.type}</label>
            </div>
            <div id="overview">
              <label className="xs:text-sm text-xl">Overview :</label>
              <p className="xs:text-sm italic text-justify">{anime_movie_details.synopsis}</p>
            </div>
            <div id="released" className="xs:pt-2 pt-4">
              <label className="xs:text-sm">Released : {anime_movie_details.releasedDate}</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
