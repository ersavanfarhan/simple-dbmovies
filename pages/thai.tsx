import Categories from "@/components/categories";
import ThaiCard from "@/components/thai_card";

export default function Thai() {
  return (
    <div>
      <section id="header">
        <img src="../thai-banner.jpg" className="w-full" />
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
          THAI POPULAR
        </label>
        <div className="label">
          <ThaiCard />
        </div>
      </section>
    </div>
  )
}
