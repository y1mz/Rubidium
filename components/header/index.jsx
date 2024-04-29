"use client"

import Link from "next/link"

function Header() {
    return (
        <div className="sticky top-0 rounded-md backdrop-blur-md">
            <div className="flex justify-between text-lg py-1">
                <Link href={"/"}>{"< Go back to homepage"}</Link>
            </div>
        </div>
    )
}

export default Header;