import Markdown from "markdown-to-jsx"
import { getPageMetadata, getPageContent } from "@/libs/getPageMetadata"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const pages = await getPageMetadata()
    return pages.map((page) => ({
        slug: page.slug
    }))
}

function Pages(props) {
    const page = props.params.page
    const content = getPageContent(page)

    if (!content) {
        return notFound()
    }

    return (
        <>
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