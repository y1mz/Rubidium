"use client";

import React from "react";
import Link from "next/link";

function NotFound() {
    return (
        <div>
            <div className="flex place-content-center px-10 py-20 w-full text-3xl">
                <h1>404.</h1>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
            <div className="mx-auto max-w-prose text-xl">
                The page you're looking for doesn't exists on the server.
                <Link className="underline" href="/">Go back to HomePage</Link>
            </div>
        </div>
    )
}

export default NotFound;