"use client"

import { CiLink } from "react-icons/ci"
import Link from "next/link"
function AboutLinks({ title, link }) {
    return (
        <div className="rounded-xl bg-gray-800 hover:bg-gray-800/50">
            <Link href={link} className="flex items-center gap-1 text-sm font-light p-2 max-w-[100px] overflow-hidden"><CiLink /> {title} </Link>
        </div>
    )
}

export default AboutLinks