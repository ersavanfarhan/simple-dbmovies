import Categories from "@/components/categories";
import GenreCard from "@/components/genres_card";

export default function GenreDetail() {
  
  return (
    <div>

      <section
        id="categories"
        className="w-full grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900 z-20 relative"
      >
        <Categories />
      </section>

      <section
        id="genres_detail_list"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-10 bg-gray-900"
      >
        {/* <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          UPCOMINGS
        </label> */}
        <div className="label">
          <GenreCard />
        </div>
      </section>
    </div>
  );
}
