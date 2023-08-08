import fs from "fs";
import matter from "gray-matter";

export const getPageMetadata = () => {
    const folder = "posts/pages/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const pages = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/pages/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            slug: filename.replace(".md", ""),
            content: matterResult.content,
        };
    });
    return pages;
}
