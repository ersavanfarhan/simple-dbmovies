import Link from "next/link";

export default function Navbar() {

  const menuShow = () => {
    document.getElementById("hamburger_content")!.style.display = "grid";
  }

  const menuHidden = () => {
    document.getElementById('hamburger_content')!.style.display = "none"
  }

  return (
    <div className="flex items-center xs:p-3 sm:p-3 px-10 py-5 justify-between bg-black">
      <section id="logo">
        <Link href="/" className="container">
          <img src="../moviedb-logo.png" className="xs:w-12 sm:w-24 w-28" />
        </Link>
      </section>

      <section id="dropdown_hamburger" className="text-white xs:block hidden" 
      onMouseLeave={menuHidden}>
          <button className="dropbtn flex items-center" onMouseOver={menuShow} >
            <span className="material-symbols-outlined">menu</span>
          </button>

          <div
            id="hamburger_content"
            className="absolute right-1 bg-gray-600 rounded-xl z-30 hidden"
          >
            <Link
              href="/"
              className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-t-xl"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="pl-3 pr-20 py-3 hover:bg-orange-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="pl-3 pr-20 py-3 hover:bg-orange-400 rounded-b-xl"
            >
              Contact
            </Link>
          </div>
      </section>

      <section id="nav-button" className="xs:hidden">
        <div className="flex xs:gap-2 gap-5 xs:text-xs text-white">
          <Link href="/" className="font-black hover:text-sky-500">
            Home
          </Link>
          <Link href="/about" className="font-black hover:text-sky-500">
            About
          </Link>
          <Link href="/contact" className="font-black hover:text-sky-500">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
