"use client";

import React from "react";
import Link from "next/link"

import { readConfig } from "@/libs/readConfig"; 


function Header() {
    var config = readConfig();
    const SiteName = config.siteName;

    return (
        <div className="sticky top-1 bg-gray-900">
            <div className="flex justify-between text-xl mt-5">
                <Link href="/" className="">{SiteName}</Link>
                <nav className="flex gap-2">
                    <Link className="hover:underline" href="/blog">Blog.</Link>
                    <Link className="hover:underline" href="/feed.xml">RSS.</Link>
                    <Link className="hover:underline" href="/about">About.</Link>
                </nav>
            </div>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        </div>
    )
}

export default Header;