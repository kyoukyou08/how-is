import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Header(){
    return(
        <div className="fixed bg-orange-500 w-full flex justify-between p-4">
            <Link href="/#">
                <Image 
                className="w-24 bg-orange-500"
                src="/top-logo.svg"
                alt=""
                width={150}
                height={30}
                />
            </Link>
            <div className="mr-12">
            <NavigationMenu className="gap-3">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-2 p-6 md:w-[200px] lg:w-[300px] flex flex-row flex-wrap">
                                <li className="px-2 bg-orange-200 rounded-full"><NavigationMenuLink>選挙</NavigationMenuLink></li>
                                <li className="row-span-3"><NavigationMenuLink>入試</NavigationMenuLink></li>
                                <li className="row-span-3"><NavigationMenuLink>大阪公立大学</NavigationMenuLink></li>
                                <li className="row-span-3"><NavigationMenuLink>猫の種類</NavigationMenuLink></li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="./index.tsx" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>about</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="./index.tsx">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
        
        </div>
    )
}