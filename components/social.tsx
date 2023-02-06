import { GITHUB_URL } from "@/pages/api/public_api";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex gap-5 xs:w-48 w-64 mx-auto">
        <section className="w-full xs:p-2 p-3 bg-white rounded-2xl flex items-center hover:bg-sky-500">
            <Link href={GITHUB_URL} target="_blank">
            <img src="../github.png" className="w-full"/>
            </Link>
        </section>

        <section className="w-full xs:p-2 p-3 bg-white rounded-2xl flex items-center hover:bg-sky-500">
            <Link href="https://instagram.com/ersavanfarhan" target="_blank">
            <img src="../instagram.png" className="w-full"/>
            </Link>
        </section>
    </div>
  )
}
