import fs from "fs"
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
            date: matterResult.data.date,
            slug: filename.replace(".md", ""),
        };
    });
    return posts;
}

export default async function sitemap() {
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL
    const postMeta = await getPostMetadata();
    const postMetadata = postMeta.map((post) => {
        return {
            url: `${siteURL}/blog/${post.slug}`,
            lastModified: post.date
        }
    });

    return [
        {
            url: siteURL,
            lastModified: new Date(),
        },
        {
            url: `${siteURL}/about`
        },
        ...postMetadata
    ]
}