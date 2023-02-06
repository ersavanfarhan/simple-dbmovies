import Categories from "@/components/categories";
import IndoCard from "@/components/indo_card";

export default function Indo() {
  return (
    <div>
      <section id="header">
        <img src="../indo-banner.jpg" className="w-full" />
      </section>

      <section
        id="categories"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 py-3 bg-gray-900"
      >
        <Categories />
      </section>

      <section
        id="genres_label"
        className="grid gap-5 xs:p-3 sm:p-3 md:p-5 px-28 pb-10 bg-gray-900"
      >
        <label className="font-bold xs:text-xl sm:text-4xl md:text-5xl text-6xl text-white">
          INDO POPULAR
        </label>
        <div className="label">
          <IndoCard />
        </div>
      </section>
    </div>
  )
}
