import fs from "fs";
import { Feed } from "feed";
import { getPostMetadata } from "@/libs/getPostMetadata";
import Showdown from "showdown";

export async function generateRSSFeed() {

    var converter = new Showdown.Converter()

    const mtoh = ({ content }) => {
        const text = content;
        const html = converter.makeHtml(text);

        return html
    }

    const metadata = {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        author: process.env.NEXT_PUBLIC_AUTHOR_NAME,
        description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        lang: process.env.NEXT_PUBLIC_SITE_LANGUAGE,
    }

    const postMetadataReversed = getPostMetadata();
    const postMetadata = postMetadataReversed.slice(-20).reverse();
    const posts = postMetadata;

    const feed = new Feed({
        title: metadata.title,
        description: metadata.description,
        id: metadata.url,
        link: metadata.url,
        favicon: `${metadata.url}/public/assets/favicon.png`,
        image: `${metadata.url}/public/assets/favicon.png`,
        copyright: `All rights reversed ${new Date().getFullYear()} ${metadata.title}`,
        updated: new Date(),
        generator: `Manually typed by ${metadata.author}`,
        feedLinks: {
            rss2: `${metadata.url}/feed.xml`,
            json: `${metadata.url}/feed.json`,
            atom: `${metadata.url}/atom.xml`,
        },
        author: metadata.author,
    });

    posts.map((post) => {
        const url = `${metadata.url}/blog/${post.slug}`;

        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            content: mtoh({ content: post.content } ),
            author: post.author,
        });
    });

    fs.writeFileSync("public/feed.xml", feed.rss2());
}