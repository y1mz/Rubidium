"use client";

import React from "react";
import Link from "next/link"

import { readConfig, readHeaderLinks } from "@/libs/readConfig";


function Header() {
    const config = readConfig();
    const links = readHeaderLinks()

    return (
        <div className="sticky top-0 bg-gray-900">
            <div className="flex justify-between text-xl py-1">
                <Link href="/" className="">{config.siteName}</Link>
                <nav className="flex gap-2">
                    {links.map((link) => (
                        <Link className="hover:underline" href={link.link}>{link.title}</Link>
                    ))}
                </nav>
            </div>
            <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        </div>
    )
}

export default Header;