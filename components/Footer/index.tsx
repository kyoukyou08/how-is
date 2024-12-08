import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="h-fit bottom-0 w-full py-10 flex flex-col bg-gray-800 gap-8">
            <div className="px-8">
            <Image
            alt=""
            src="/logo-footer.svg"
            width={90}
            height={30}
            className="py-2"
            />   
            <ul className="flex flex-col gap-1 text-slate-50 font-bold"> 
                <Link href="/#" className="hover:scale-105 duration-500"><li>Playlist</li></Link>
                <Link href="/#" className="hover:scale-105 duration-500"><li>About</li></Link>
                <Link href="/#" className="hover:scale-105 duration-500"><li>Contact</li></Link>
            </ul>
            </div>

            <div className="px-8">
                <Image
                alt=""
                src="/logo-sns.svg"
                className="py-1"
                width={50}
                height={20}
                />
                <ul className="gap-10 flex flex-row py-4">
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