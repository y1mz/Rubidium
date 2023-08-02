import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";


const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

function PostPage(props) {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <div>
        <div className="flex flex-col place-content-center py-10 px-20 w-full text-3xl">
            <p>{content.data.title}</p>
            <div className="flex justify-between mt-2">
                <p className="text-sm">{content.data.author}</p>
                <p className="text-sm">{content.data.date}</p>
            </div>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
        <div className="text-lg max-w-96">
            <p>This is a blog page named: {slug}</p>
            <Markdown>{content.content}</Markdown>
        </div>
        </div>
    )
}

export default PostPage;