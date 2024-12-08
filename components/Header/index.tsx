"use client"

import Image from "next/image";
import Link from "next/link";


export default function Header(){
    return(
        <div className="top-0 fixed bg-orange-500 w-full flex justify-between p-4">
            <Link href="/#">
                <Image 
                className="w-24 bg-orange-500"
                src="/top-logo.svg"
                alt=""
                width={150}
                height={30}
                />
            </Link> 
        </div>
    )
}