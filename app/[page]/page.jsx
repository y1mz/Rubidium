import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPageContent = (page) => {
    const folder = "posts/pages/";
    const file = `${folder}${page}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

function Pages(props) {
    const page = props.params.page;
    const content = getPageContent(page);
    return (
        <>
            <div className="flex place-content-center p-10 w-full text-3xl">
            <h1>{content.data.title}</h1>
            </div>
            <div className="text-lg max-w-prose mx-auto">
            <article class="prose prose-invert lg:prose-xl ">
                <Markdown>{content.content}</Markdown>
            </article>
            </div>
        </>
    )
}

export default Pages;