import React from "react";

function LoadingPage() {
    return (
        <div>
            <div className="flex place-content-center px-10 py-20 w-full text-3xl">
                <h1>Loading...</h1>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
            <div className="mx-auto max-w-prose text-xl">
                Loading ... Please wait
            </div>
        </div>
    )
}

export default LoadingPage;