export default function HeaderHome() {

  const autoScroll = () => {
    document.getElementById("trendings")!.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div id="header" className="w-full relative">
        <img src="../fury-movie.jpg" className="w-full" />
        <div id="banner-text" className="absolute grid xs:w-full w-1/2 xs:p-2 sm:p-2 p-5 top-0">
          <label className="xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white font-bold drop-shadow-lg">
            WATCH YOUR FAVORITE MOVIES ANYWHERE
          </label>
          <div id="browse-btn">
            <button className="xs:mt-2 mt-5 xs:p-2 px-5 py-2 text-xs bg-orange-400 text-white font-bold rounded-3xl"
            onClick={autoScroll}>
              BROWSE MOVIES
            </button>
          </div>
        </div>
      </div>
  )
}
