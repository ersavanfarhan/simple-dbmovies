import Link from "next/link";

export default function Categories() {
  const animeShow = () => {
    document.getElementById("anime_content")!.style.display = "grid";
  };

  const animeHidden = () => {
    document.getElementById("anime_content")!.style.display = "none";
  };

  const movieShow = () => {
    document.getElementById("movie_content")!.style.display = "grid";
  };

  const movieHidden = () => {
    document.getElementById("movie_content")!.style.display = "none";
  };

  const dramaShow = () => {
    document.getElementById("drama_content")!.style.display = "grid";
  };

  const dramaHidden = () => {
    document.getElementById("drama_content")!.style.display = "none";
  };

  return (
    <div className="flex items-center xs:text-sm xs:gap-2 gap-5">
      <section
        id="dropdown_anime"
        className="text-white"
        onMouseLeave={animeHidden}
      >
        <button onMouseOver={animeShow} className="dropbtn">
          Anime
        </button>
        <div
          id="anime_content"
          className="absolute bg-gray-600 rounded-xl hidden"
        >
          <Link
            href="/anime"
            className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-t-xl"
          >
            Recommendation
          </Link>
          <Link
            href="/anime/latest"
            className="pl-3 pr-20 py-3 hover:bg-orange-400"
          >
            Latest
          </Link>
          <Link
            href="/anime/movies"
            className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-b-xl"
          >
            Movies
          </Link>
        </div>
      </section>

      <section
        id="dropdown_movie"
        className="text-white"
        onMouseLeave={movieHidden}
      >
        <button onMouseOver={movieShow} className="dropbtn">
          Movies
        </button>
        <div
          id="movie_content"
          className="grid absolute bg-gray-600 hidden rounded-xl hidden"
        >
          <Link
            href="/genres"
            className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-t-xl"
          >
            By Genre
          </Link>
          <Link
            href="/upcoming"
            className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-b-xl"
          >
            Upcoming
          </Link>
        </div>
      </section>

      <section
        id="dropdown_drama"
        className="text-white"
        onMouseLeave={dramaHidden}
      >
        <button className="dropbtn" onMouseOver={dramaShow}>
          Asia
        </button>
        <div
          id="drama_content"
          className="grid absolute bg-gray-600 hidden rounded-xl hidden"
        >
          <Link
            href="/indo"
            className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-t-xl"
          >
            Indonesia
          </Link>
          <Link href="/thai" className="pl-3 pr-20 py-3 hover:bg-orange-400">
            Thailand
          </Link>
          <Link href="/china" className="pl-3 pr-20 py-3 hover:bg-orange-400">
            China
          </Link>
          <Link
            href="/korea"
            className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-b-xl"
          >
            Korea
          </Link>
        </div>
      </section>

      <section id="search_btn" className="xs:p-1 p-2 text-white bg-orange-400 rounded-3xl">
        <Link href="/result" className="flex items-center">
          <span className="material-symbols-outlined">search</span>
        </Link>
      </section>
    </div>
  );
}
