import Link from "next/link"
import PostEntry from "@/components/blog-box/post-entry"
import HomepageBlogCard from "@/components/blog-box/homepage-blog-card"
import { IoIosArrowForward } from "react-icons/io"

import { getPostMetadata } from "@/libs/getPostMetadata"

function BlogBox({ posts }) {
    const latestPosts = getPostMetadata().slice(-6).reverse()

    return (
        <div id="blogbox" className="mx-auto flex flex-col gap-4 py-10">
            <div>
                <h2 className="text-2xl font-mono">Latest from Blog</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {latestPosts.map((post, index) => (
                    <HomepageBlogCard
                        title={post.title}
                        link={`/blog/${post.slug}`}
                        date={post.date}
                        key={index}
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