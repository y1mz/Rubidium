import React from "react";

import Link from "next/link"

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center text-15 mb-10">
            <div className="flex gap-4 text-sm">
                <Link href="/ack">ack.</Link>
                <Link href="/links">links</Link>
                <Link href="/blogroll">blogroll</Link>
                <Link href="/">rss</Link>
                <> © 2023</>
            </div>
            <div className="text-xs text-gray-400">Made by Batuhan Y. Yilmaz using NextJS by Vercel.</div>
        </footer>
    )
}

export default Footer;