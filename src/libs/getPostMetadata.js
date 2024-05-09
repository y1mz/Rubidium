import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            slug: filename.replace(".md", ""),
            content: matterResult.content,
        };
    });
    return posts;
}

export const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

