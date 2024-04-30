import PostEntry from "@/components/blog-box/post-entry"
import Header from "@/components/header"

import { getPostMetadata } from "@/libs/getPostMetadata"

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
            <div className="mx-auto max-w-prose text-xl">
                {postMetadata.map((post) => (
                    <PostEntry
                        title={post.title}
                        date={post.date}
                        link={`/blog/${post.slug}`}
                        key={post.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogPage;