"use client";

import React from "react";
import Link from "next/link"
import { readConfig } from "@/libs/readConfig";

function Footer() {

    const config = readConfig();

    return (
        <footer className="flex flex-col items-center justify-center text-15 mb-10">
            <div className="flex gap-4 text-sm">
                <Link href="/ack">ack.</Link>
                <Link href="/links">links</Link>
                <Link href="/blogroll">blogroll</Link>
                <> © {config.year}</>
            </div>
            <div className="text-xs text-gray-400">Made by <Link className="underline" href="https://github.com/B4tuhanY1lmaz">Batuhan Y. Yilmaz</Link> using NextJS by Vercel.</div>
        </footer>
    )
}

export default Footer;