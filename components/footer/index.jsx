"use client";

import React from "react";
import Link from "next/link"

import { readConfig, readFooterLinks } from "@/libs/readConfig";

function Footer() {
    const config = readConfig()
    const links = readFooterLinks()

    return (
        <footer className="flex flex-col items-center justify-center text-15 mb-10">
            <div className="flex gap-4 text-sm">
                {links.map((link) => (
                    <Link className="hover:underline" href={link.link} key={link.link}>{link.title}</Link>
                ))}
                <> © {new Date().getFullYear()}</>
            </div>
            <div className="text-xs text-gray-400">Made by <Link className="underline" href="https://github.com/B4tuhanY1lmaz">Batuhan Y. Yilmaz</Link> using NextJS by Vercel.</div>
        </footer>
    )
}

export default Footer;