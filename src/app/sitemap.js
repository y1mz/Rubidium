import { getPostMetadata } from "@/libs/getPostMetadata"
import { getPageMetadata } from "@/libs/getPageMetadata";
import config from "&/config/siteconfig.json"

export default async function sitemap() {
    const siteURL = config.siteUrl
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
        ...pageMetadata,
        ...postMetadata
    ]
}