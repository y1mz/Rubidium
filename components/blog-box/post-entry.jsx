"use client"

import Link from "next/link"

function PostEntry({ title, date, link }) {
    const postDate = new Date(date).toDateString()
    const postDateStripped = postDate.split(" ").slice(1, 5).toString()
    const finalDate = postDateStripped.replace(/[.,!?]/, " ")

    return (
        <div className="rounded-xl hover:bg-gray-800">
            <Link href={link}>
                <div className="py-2 px-2">
                    <p className="flex gap-2"><b className="font-bold">{finalDate}</b><p>{title}</p></p>
                </div>
            </Link>
        </div>
    )
}

export default PostEntry