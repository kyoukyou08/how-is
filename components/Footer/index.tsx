import Image from "next/image";
import Search from "@/components/Search";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="w-full px-64 py-10 flex flex-col flex-wrap bg-gray-800 gap-8">
            <div className="w-1/2">
            <Image
            alt=""
            src="/logo-footer.svg"
            width={90}
            height={30}
            className="py-2"
            />
            <div className="w-1/2">
                <Search />
            </div>
            <ul className="flex flex-row flex-wrap my-5 gap-2">
                <li className="rounded-full px-3 bg-orange-200">選挙</li>
                <li className="rounded-full px-3 bg-orange-200">大阪公立大学</li>
                <li className="rounded-full px-3 bg-orange-200">選挙</li>
                <li className="rounded-full px-3 bg-orange-200">猫の種類</li>
                <li className="rounded-full px-3 bg-orange-200">選挙</li>
                <li className="rounded-full px-3 bg-orange-200">CSSおすすめ</li>    
            </ul>    
            <ul className="flex flex-col gap-1 text-slate-50 font-bold"> 
                <Link href="/#" className="hover:scale-105 duration-500"><li>Category</li></Link>
                <Link href="/#" className="hover:scale-105 duration-500"><li>About</li></Link>
                <Link href="/#" className="hover:scale-105 duration-500"><li>Contact</li></Link>
            </ul>
            </div>

            <div>
                <Image
                alt=""
                src="/something.svg"
                width={400}
                height={200}
                className=""
                />
            </div>

            <div className="">
                <Image
                alt=""
                src="/logo-sns.svg"
                className="py-1"
                width={70}
                height={20}
                />
                <span className="bg-orange-200 w-full h-1 my-3"></span>
                <ul className="gap-10 flex flex-row">
                    <li>
                        <Image
                        alt=""
                        src="/Instagram_Glyph_Gradient.png"
                        width={34}
                        height={34}
                        className=""
                        />
                    </li>
                    <li>
                        <Image
                        alt=""
                        src="/Instagram_Glyph_Gradient.png"
                        width={34}
                        height={34}
                        className=""
                        />
                    </li>
                    <li>
                        <Image
                        alt=""
                        src="/Instagram_Glyph_Gradient.png"
                        width={34}
                        height={34}
                        className=""
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}