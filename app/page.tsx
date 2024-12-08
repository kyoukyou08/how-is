import Link from "next/link";
import Image from "next/image";
import accessToken from "@/app/Recommend/api/spotify_auth"

export default function Home() {
  console.log(accessToken)
  console.log()
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-28">
        <Image
        alt=""
        src="/main-title.svg"
        width={300}
        height={50}
        className="p-auto "
        />
        <div className="p-auto m-4 bg-zinc-900 w-fit px-8 py-4 rounded-xl text-slate-100 hover:scale-105 duration-500 ">
          <Link href="/Recommend">
          Let's find favorite songs!　＞
          </Link>
        </div>
      </div>
    </div>
  );
}