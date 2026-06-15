import Markdown from "markdown-to-jsx";
import { readConfig } from "@/libs/readConfig";
import { getPostContent } from "@/libs/getPostMetadata";
import { notFound } from "next/navigation";
import { getFirstTwoSentences } from "@/libs/getDescription";

import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = getPostContent(slug);
  const config = readConfig();
  const description = getFirstTwoSentences(content.content);

  return {
    title: `${content.data.title} - ${config.siteName}`,
    description: description,
    authors: [
      { name: config.authorFullName, url: `https://${config.siteURL}` },
    ],
    openGraph: {
      title: content.data.title,
      description: description,
      type: "website",
      publishedTime: content.data.date,
      images: content.data.image && content.data.image,
    },
  };
}

async function PostPage({ params }) {
  const { slug } = await params;
  const content = getPostContent(slug);
  const config = readConfig();

  if (!content) {
    return notFound();
  }

  return (
    <>
      <Header
        path="Blog"
        pathLink={"/blog"}
        blogLink={`/blog/${slug}`}
        blogTitle={content.data.title}
      />
      <div className="space-y-5 p-5 sm:px-10 md:px-20 md:py-5 w-full text-xl sm:text-2xl md:text-3xl">
        <h1 className="font-bold">{content.data.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar className="h-5 w-5">
              <AvatarFallback className="text-xs">
                {config.authorFullName.substring(0, 1)}
              </AvatarFallback>
              <AvatarImage src={config.authorImage} />
            </Avatar>
            <p className="text-sm font-bold">{config.authorFullName}</p>
          </div>
          <p className="text-sm">{`${new Date(content.data.date).toDateString()}`}</p>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
      <article
        className="text-lg max-w-prose mx-auto py-5 prose prose-invert lg:prose-xl
            prose-code:text-sm prose-code:mx-5 prose-code:my-5 prose-code:bg-slate-800 prose-pre:bg-slate-800"
      >
        <Markdown>{content.content}</Markdown>
      </article>
    </>
  );
}

export default PostPage;
