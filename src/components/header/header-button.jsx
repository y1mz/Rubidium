import Link from "next/link"
import { cn } from "@/libs/utils"
import { usePathname } from "next/navigation"

function HeaderButton({ title, link, type }) {
    const path = usePathname()

    return (
        <div className={cn("rounded-xl hover:bg-gray-800 transition delay-200", type === "button" && link === path && "bg-gray-800")}>
            <div className="px-2 py-1 text-center text-md">
                <Link href={link} className={cn(type === "header" && "font-bold")}>{title}</Link>
            </div>
        </div>
    )
}

export default HeaderButton