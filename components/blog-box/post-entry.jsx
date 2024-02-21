"use client"

import Link from "next/link"

function PostEntry({ title, date, link }) {
    const postDate = new Date(date).toDateString()
    const postDateStripped = postDate.split(" ").slice(1, 5).toString()
    const finalDate = postDateStripped.replace(/[.,!?]/, " ")

    return (
        <div className="rounded-xl hover:bg-gray-800">
            <Link href={link}>
                <div className="flex gap-2 py-2 px-2">
                    <p className="font-bold mr-2">{`${finalDate}`}</p>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default PostEntry