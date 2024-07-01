import Markdown from "markdown-to-jsx"
import { getPageMetadata, getPageContent } from "@/libs/getPageMetadata"
import { readConfig } from "@/libs/readConfig"
import { notFound } from "next/navigation"
import Header from "@/components/header"

export async function generateStaticParams() {
    const pages = await getPageMetadata()
    return pages.map((page) => ({
        slug: page.slug
    }))
}

export async function generateMetadata({ params }) {
    const page = params.page
    const contentData = getPageContent(page).data
    const config = readConfig()
    const siteUrl = "https://" + config.siteURL

    return {
        title: `${contentData.title} - ${readConfig().siteName}`,
        description: contentData.description,
        modifiedTime: new Date().toISOString(),
        authors: [{name: config.authorName, url: siteUrl }]
    }
}

function Pages(props) {
    const page = props.params.page
    const content = getPageContent(page)

    if (!content) {
        return notFound()
    }

    return (
        <>
            <Header path={content.data.title} pathLink={`/${page}`}/>
            <div className="flex place-content-center p-10 w-full text-3xl">
                <h1>{content.data.title}</h1>
            </div>
            <div className="text-lg max-w-prose mx-auto">
                <article className="prose prose-invert lg:prose-xl ">
                    <Markdown>{content.content}</Markdown>
                </article>
            </div>
        </>
    )
}

export default Pages;