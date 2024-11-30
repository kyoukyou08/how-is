import Image from "next/image";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="bg-orange-500 w-full py-36 flex flex-col items-center" >
        <Image
        className=""
        src="/main-title.svg"
        alt="title"
        width={400}
        height={300}
        />
      <div className="w-full">
      <Search />
      </div>
    </div>
  );
}
