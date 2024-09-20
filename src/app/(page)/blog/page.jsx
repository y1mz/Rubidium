import HomepageBlogCard from "@/components/blog-box/homepage-blog-card"
import Header from "@/components/header"

import { getPostMetadata } from "@/libs/getPostMetadata"
import { readConfig } from "@/libs/readConfig"

export const metadata = {
    title: `Blog - ${readConfig().siteName}`,
    modifiedTime: getPostMetadata().slice().reverse()[0].date
}

function BlogPage() {
    const postMetadataReversed = getPostMetadata();
    const postMetadata = postMetadataReversed.slice().reverse();

    return (
        <div>
            <Header path="Blog" pathLink={"/blog"} />
            <div className="flex place-content-center px-10 py-20 w-full text-3xl">
                <h1>Blog</h1>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {postMetadata.map((post, index) => (
                    <HomepageBlogCard
                        key={index}
                        title={post.title}
                        link={`/blog/${post.slug}`}
                        date={post.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogPage;