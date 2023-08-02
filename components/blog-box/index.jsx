import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const getPostMetadata = () => {
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

function BlogBox({ posts }) {
    const postMetadata = getPostMetadata();
    const latestPosts = postMetadata.slice(-6);
    const postPreviews = latestPosts.map((post) => (
        <div className="flex">
            <Link href={`/blog/${post.slug}`}>
            <h2 className="text-lg p-1">{post.date} || {post.title}</h2>
            </Link>
        </div>
    ))
    return (
        <div className="mx-auto flex flex-col gap-4">
            <div>
                <h2 className="text-2xl">Latest from Blog</h2>
            </div>
            <div>
                {postPreviews}
            </div>
            <div>
                <Link href="/blog" className="text-2xl">Read more ...</Link>
            </div>
        </div>
    )
}

export default BlogBox;