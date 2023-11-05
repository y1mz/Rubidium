import fs from "fs";
import { Feed } from "feed";
import { getPostMetadata } from "@/libs/getPostMetadata";
import Showdown from "showdown";
import config from "@/config/siteconfig.json"

export async function GET() {

    var converter = new Showdown.Converter() 

    const mtoh = ({ content }) => {
        const text = content;
        const html = converter.makeHtml(text);

        return html
    }

    const metadata = {
        title: config.siteName,
        author: config.authorName,
        description: config.siteDescription,
        url: config.siteUrl,
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
            author: config.authorName,
            date: new Date(post.date)
        });
    });

    return new Response(feed.rss2());
}
