import Categories from "@/components/categories";
import ResultCard from "@/components/result_card";

export default function Result() {
  return (
    <div className="min-h-screen bg-gray-900">
      <section id="header">
        <img src="../result-banner.jpg" className="w-full" />
      </section>

      <section id="search_bar" className="xs:p-3 sm:p-3 md:p-5 px-28 py-3">
        <Categories />
      </section>

      <section>
        <ResultCard />
      </section>
      
    </div>
  );
}
