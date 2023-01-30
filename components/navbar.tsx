export default function Navbar() {
  return (
    <div className="flex items-center xs:p-3 sm:p-3 px-10 py-5 justify-between bg-gray-200">
      <section id="logo">
        <div className="container">
          <img src="../next.svg" className="xs:w-12 sm:w-24 w-32"/>
        </div>
      </section>

      <section id="nav-button">
        <div className="container flex xs:gap-2 gap-5 xs:text-xs">
            <button className="font-black hover:text-sky-500">Home</button>
            <button className="font-black hover:text-sky-500">Contact</button>
            <button className="font-black hover:text-sky-500">About</button>
        </div>
      </section>
    </div>
  );
}
