import RSS from "rss";
import fs from "fs";
import matter from "gray-matter";

export async function GET() {
    
    const metadata = {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        lang: process.env.NEXT_PUBLIC_SITE_LANGUAGE,
    }
    const max_posts = process.env.NEXT_PUBLIC_MAX_POSTS;

    function getPostMetadata() {
        const folder = "posts/";
        const files = fs.readdirSync(folder);
        const markdownPosts = files.filter((file) => file.endsWith(".md"));
        const posts = markdownPosts.map((filename) => {
            const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
            const matterResult = matter(fileContents);
            const betterPrompt = () => {
                return (
                    <h2>For a better reading experience, please view this content over at <a href="https://www.thebatuhansnetwork.xyz/"></a></h2>
                )
            }
            return {
                title: matterResult.data.title,
                author: matterResult.data.author,
                date: matterResult.data.date,
                slug: filename.replace(".md", ""),
                content: matterResult.content,
            };
        });
        return posts;
    }


    const postMetadataReversed = getPostMetadata();
    const postMetadata = postMetadataReversed.slice(-20).reverse();
    const posts = postMetadata;

    const feed = new RSS({
        title: metadata.title,
        description: metadata.description,
        site_url: metadata.url,
        feed_url: `${metadata.url}/feed.xml`,
        copyright: `${new Date().getFullYear()} ${metadata.title}`,
        language: metadata.lang,
        pubDate: new Date(),
    });

    posts.map((post) => {
        feed.item({
            title: post.title,
            description: "RSS is still under construction",
            guid: `${metadata.url}/${post.slug}`,
            url: `${metadata.url}/${post.slug}`,
            date: post.date,
            author: post.author,
        }) ;
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
        },
    });
}