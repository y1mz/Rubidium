"use client";

import HeaderButton from "@/components/header/header-button"
import Link from "next/link"

import { readConfig, readHeaderLinks } from "@/libs/readConfig";


function Header() {
    const config = readConfig();
    const links = readHeaderLinks()

    return (
        <div className="sticky top-0 bg-gray-900">
            <div className="flex justify-between text-xl pb-1">
                <HeaderButton
                    title={config.siteName}
                    link={"/"}
                    type="header"
                />
                <nav className="flex gap-2">
                    {links.map((link) => (
                        <HeaderButton
                            title={link.title}
                            link={link.link}
                            type="button"
                            key={link.link}
                        />
                    ))}
                </nav>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        </div>
    )
}

export default Header;