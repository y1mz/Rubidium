"use client"

import { CiLink } from "react-icons/ci"
import Link from "next/link"
function AboutLinks({ title, link }) {
    return (
        <div className="rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20">
            <Link href={link} className="flex items-center gap-1 text-sm p-2"><CiLink /> {title} </Link>
        </div>
    )
}

export default AboutLinks