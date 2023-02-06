import Categories from "@/components/categories";
import HeaderHome from "@/components/header";
import PopuplarCard from "@/components/popular_card";
import TrendingCard from "@/components/trending_card";
import TvCard from "@/components/tv_card";

export default function Home() {
  return (
    <div>
      <section id="header" className="w-full relative">
        <HeaderHome />
      </section>

      <section
        id="categories"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900"
      >
        <Categories />
      </section>

      <section
        id="trendings"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 pb-10 bg-gray-900"
      >
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          TRENDINGS
        </label>
        <div className="">
          <TrendingCard />
        </div>
      </section>

      <section
        id="popular"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-800"
      >
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          MOST POPULAR
        </label>
        <div className="">
          <PopuplarCard />
        </div>
      </section>

      <section
        id="television"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-900"
      >
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          TV TOP RATED
        </label>
        <div className="">
          <TvCard />
        </div>
      </section>
    </div>
  );
}
