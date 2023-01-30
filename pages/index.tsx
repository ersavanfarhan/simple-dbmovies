import Moviescard from "@/components/moviescard";

export default function Home() {
  return (
    <div>
      <section id="header" className="w-full relative">
        <img src="../fury-movie.jpg" className="w-full" />
        <div id="banner-text" className="absolute grid xs:w-full w-1/2 xs:p-2 sm:p-2 p-5 top-0">
          <label className="xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white font-bold drop-shadow-lg">
            WATCH YOUR FAVORITE MOVIES ANYWHERE
          </label>
          <div id="browse-btn">
            <button className="xs:mt-2 mt-5 xs:p-2 px-5 py-2 text-xs bg-orange-400 text-white font-bold rounded-3xl">
              BROWSE MOVIES
            </button>
          </div>
        </div>
      </section>

      <section id="trendings" className="xs:p-3 sm:p-3 md:p-5 px-28 py-10">
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl">TRENDINGS</label>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-5 gap-5 mt-3">
          <Moviescard />
          <Moviescard />
          <Moviescard />
          <Moviescard />
          <Moviescard />
          <Moviescard />
          <Moviescard />
        </div>
      </section>
    </div>
  );
}
