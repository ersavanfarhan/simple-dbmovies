export default function Footer() {
  return (
      <section className="grid gap-3 bg-black text-white xs:p-3 px-28 p-10">
        <div className="xs:w-24 w-32 mx-auto">
          <img src="../moviedb-logo.png" className="w-full" />
        </div>

        <div className="flex items-center justify-center">
          <div>
            <span className="material-symbols-outlined">
              local_fire_department
            </span>
          </div>

          <div>
            <label className="">ersavanfarhan</label>
          </div>

          <div>
            <span className="material-symbols-outlined">
              local_fire_department
            </span>
          </div>
        </div>
      </section>
  );
}
