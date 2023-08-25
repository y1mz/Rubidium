import { getPostMetadata } from "@/libs/getPostMetadata"
import { getPageMetadata } from "@/libs/getPageMetadata";
import { readConfig } from "@/libs/readConfig";

const config = readConfig();

export default async function sitemap() {
    const siteURL = config.siteURL
    const postMeta = await getPostMetadata();
    const postMetadata = postMeta.map((post) => {
        return {
            url: `${siteURL}/blog/${post.slug}`,
            lastModified: post.date
        }
    });

    const pageMeta = getPageMetadata();
    const pageMetadata = pageMeta.map((page) => {
        return {
            url: `${siteURL}/${page.slug}`,
            lastModified: new Date()
        }
    })

    return [
        {
            url: siteURL,
            lastModified: new Date(),
        },
        {
            url: `${siteURL}/about`
        },
        ...pageMetadata,
        ...postMetadata
    ]
}