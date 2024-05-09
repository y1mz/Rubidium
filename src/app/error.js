"use client";

import React from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
    useEffect(() => {
        // Log the error
        console.error(error)
    }, [error])

    return (
        <div>
        <div className="flex place-content-center px-10 py-20 w-full text-3xl">
            <h1>Error</h1>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        <div className="mx-auto max-w-prose text-xl">
            The page you're looking for doesn't exists or server had a problem with it.
            <Link className="underline" href="/">Go back to HomePage</Link>
        </div>
    </div>
    )
}
