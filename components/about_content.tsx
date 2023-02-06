import { GITHUB_URL } from "@/pages/api/public_api";
import Link from "next/link";

export default function About_Content() {
  return (
    <div className="grid gap-2 bg-sky-200 xs:p-3 sm:p-5 px-20 py-10 rounded-2xl">
      <div id="sub-title">
        <label className="text-2xl font-bold">About this app</label>
      </div>

      <div id="about-text" className="grid gap-1 text-justify">
        <p>
          Welcome to moviedatabase, where you can be able to follow the latest
          movie, trending movies, most popular, or whatever it is. All databases
          in this app was provided by{" "}
          <Link href="https://ww4.gogoanimes.org/" className="text-red-500" 
          target="_blank">
            Gogoanime
          </Link>{" "}
          for anime section and{" "}
          <Link href="https://www.themoviedb.org/" className="text-red-500" 
          target="_blank">
            themoviedb.org
          </Link>{" "}
          for the rest of all. This app was built for non-commercial use.
          Otherwise, it was built only for personal portfolio and private
          learning about public API. Any suggestions to improve this app are
          meaningful for me. So, please let me know by reaching me out via
          contact section. You are very welcome to see the source code and other
          repositories in my{" "}
          <Link href={GITHUB_URL} target="_blank" className="text-red-500">
            github
          </Link>{" "}
          account.
        </p>
      </div>
    </div>
  );
}
