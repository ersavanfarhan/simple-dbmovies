import AnimePopularCard from "@/components/anime_popular_card";
import AnimeMovieCard from "@/components/anime_movie_card";
import AnimeNewCard from "@/components/anime_new_card";
import Categories from "@/components/categories";
import Link from "next/link";

export default function AnimeAll() {
  return (
    <div>
      <section id="header">
        <img src="../one_piece.jpg" className="w-full" />
      </section>

      <section
        id="categories"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900"
      >
        <Categories />
      </section>

      <section
        id="all_anime"
        className="grid gap-3 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-900"
      >
        <label className="font-bold xs:text-2xl sm:text-4xl md:text-5xl text-6xl text-white">
          MOST POPULAR
        </label>
        <div className="popular_content">
          <AnimePopularCard />
        </div>
        <Link href="anime/popular"> 
          <button className="xs:mt-2 mt-5 xs:p-2 px-5 py-2 text-xs bg-orange-400 text-white font-bold rounded-3xl">
              LOAD ALL POPULAR
          </button>
          </Link>
      </section>

      <section
        id="latest_anime"
        className="grid gap-3 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-800"
      >
        <label className="font-bold xs:text-2xl sm:text-4xl md:text-5xl text-6xl text-white">
          LATEST
        </label>
        <div id="latest_content">
          <AnimeNewCard />
          <Link href="anime/latest"> 
          <button className="xs:mt-2 mt-5 xs:p-2 px-5 py-2 text-xs bg-orange-400 text-white font-bold rounded-3xl">
              LOAD ALL LATEST
          </button>
          </Link>
        </div>
      </section>

      <section
        id="movies_anime"
        className="grid gap-3 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-900"
      >
        <label className="font-bold xs:text-2xl sm:text-4xl md:text-5xl text-6xl text-white">
          MOVIES
        </label>
        <div id="movies_content">
          <AnimeMovieCard />
          <Link href="anime/movies"> 
          <button className="xs:mt-2 mt-5 xs:p-2 px-5 py-2 text-xs bg-orange-400 text-white font-bold rounded-3xl">
              LOAD ALL MOVIES
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
