import Link from "next/link"
import PostEntry from "@/components/blog-box/post-entry"
import { IoIosArrowForward } from "react-icons/io"

import { getPostMetadata } from "@/libs/getPostMetadata"

function BlogBox({ posts }) {
    const latestPosts = getPostMetadata().slice(-6).reverse()

    return (
        <div className="mx-auto flex flex-col gap-4">
            <div>
                <h2 className="text-2xl text-center font-bold">Latest from Blog</h2>
            </div>
            <div>
                {latestPosts.map((post) => (
                    <PostEntry
                        title={post.title}
                        link={`/blog/${post.slug}`}
                        date={post.date}
                        key={post.title}
                    />
                ))}
            </div>
            <div>
                <Link href="/blog" className="text-2xl hover:bg-gray-800 p-2 text-center rounded-xl font-bold flex items-center">
                    <p className="mr-1">Older posts</p><IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default BlogBox;