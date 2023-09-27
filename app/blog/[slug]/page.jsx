import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import { getPostMetadata } from "@/libs/getPostMetadata";

const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

export function generateMetadata({ params }) {
    const slug = params.slug
    const content = getPostContent(slug)

    const description = () => {
        const sentences = content.content.split(/[.!?]/)
        const preview = sentences.slice(0,2).join("")
        return preview
    }

    return {
        title: content.data.title,
        description: description(),
    }
}

export async function generateStaticParams() {
    const posts = await getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

function PostPage(props) {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <>
        <div className="flex flex-col place-content-center py-10 px-20 w-full text-xl sm:text-3xl">
            <h1>{content.data.title}</h1>
            <div className="flex flex-wrap justify-between mt-2">
                <p className="text-sm">{content.data.author}</p>
                <p className="text-sm">{`${new Date(content.data.date).getDate()}.${new Date(content.data.date).getMonth()}.${new Date(content.data.date).getFullYear()}`}</p>
            </div>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        <div className="text-lg max-w-prose mx-auto">
            <article class="prose prose-invert lg:prose-xl 
            prose-code:text-sm prose-code:mx-5 prose-code:my-5 prose-code:bg-slate-800 prose-pre:bg-slate-800">
                <Markdown>{content.content}</Markdown>
            </article>
        </div>
        </>
    )
}

export default PostPage;