import { getPostMetadata } from "@/libs/getPostMetadata"
import { getPageMetadata } from "@/libs/getPageMetadata";

export default async function sitemap() {
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL
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