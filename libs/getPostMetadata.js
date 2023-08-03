import fs from "fs";
import matter from "gray-matter";

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

export default getPostMetadata();