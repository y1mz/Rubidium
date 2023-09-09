import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

function getPostMetadata() {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            author: matterResult.data.author,
            date: matterResult.data.date,
            slug: filename.replace(".md", ""),
        };
    });
    return posts;
}

function BlogPage({ posts }) {
    const postMetadataReversed = getPostMetadata();
    const postMetadata = postMetadataReversed.slice().reverse();
    const postPreviews = postMetadata.map((post) => (
        <div className="flex">
        <Link href={`/blog/${post.slug}`}>
        <li className="text-lg p-1">{`${new Date(post.date).getDate()}.${new Date(post.date).getMonth()}.${new Date(post.date).getFullYear()}`} || {post.title}</li>
        </Link>
    </div>
    ))

    return (
        <div>
            <div className="flex place-content-center px-10 py-20 w-full text-3xl">
                <h1>Blog.</h1>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
            <div className="mx-auto max-w-prose text-xl">
                {postPreviews}
            </div>
        </div>
    )
}

export default BlogPage;