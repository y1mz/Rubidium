import Header from "@/components/header";
import BlogPageContainer from "@/components/containers/blog-page-container";

import { getPostMetadata } from "@/libs/getPostMetadata";
import { readConfig } from "@/libs/readConfig";

export const metadata = {
  title: `Blog - ${readConfig().siteName}`,
  modifiedTime: getPostMetadata().slice().reverse()[0].date,
};

async function BlogPage({ searchParams }) {
  const { p } = await searchParams;
  const postMetadata = getPostMetadata().slice().reverse();

  return (
    <div>
      <Header path="Blog" pathLink={"/blog?p=1"} />
      <div className="flex place-content-center px-10 py-20 w-full text-3xl">
        <h1>Blog</h1>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
      <BlogPageContainer posts={postMetadata} p={p} />
    </div>
  );
}

export default BlogPage;
