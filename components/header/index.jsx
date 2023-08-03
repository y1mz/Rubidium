import React from "react";
import Link from "next/link"

function Header() {
    return (
        <div className="sticky top-0 mt-5 bg-gray-900">
            <div className="flex justify-between text-xl">
                <Link href="/" className="">TBN Blog</Link>
                <nav className="flex gap-2">
                    <Link className="hover:underline" href="/blog">Blog.</Link>
                    <Link className="hover:underline" href="/about">About.</Link>
                </nav>
            </div>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        </div>
    )
}

export default Header;