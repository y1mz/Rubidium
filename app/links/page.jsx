import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getAboutPageData = () => {
    const folder = "posts/pages/";
    const file = `${folder}about.md`;
    const content = fs.readFileSync(file, "utf8");
    const fileContents = fs.readFileSync(`posts/pages/links.md`, "utf8");
    const matterResult = matter(fileContents);
    return {
        title: matterResult.data.title,
        content: matterResult.content,
    }
}

function AboutPage() {
    const content = getAboutPageData();
    return (
        <div>
            <div className="flex place-content-center p-10 w-full text-3xl">
                <h1>{content.title}</h1>
            </div>
            <div className="text-lg max-w-prose mx-auto">
            <article class="prose prose-invert lg:prose-xl 
            prose-code:text-sm prose-code:mx-5 prose-code:my-5 prose-code:bg-slate-800 prose-pre:bg-slate-800">
                <Markdown>{content.content}</Markdown>
            </article>
            </div>
        </div>
    )
}
export default AboutPage;