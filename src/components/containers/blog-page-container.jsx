"use client";

import HomepageBlogCard from "../blog-box/homepage-blog-card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { redirect } from "next/navigation";
import { cn } from "@/libs/utils";
import Link from "next/link";

function BlogPageContainer({ p, posts }) {
  // Pagination
  const pp = parseInt(p);
  const itemsPerPage = 9;
  const url = "/blog";

  if (!isFinite(pp) || !p) {
    return redirect(url + "?p=1");
  }
  let pagesCount =
    posts.length % itemsPerPage >= 1
      ? Math.floor(posts.length / itemsPerPage + 1)
      : posts.length / itemsPerPage;

  if (Math.floor(pagesCount) === 0) {
    pagesCount = Math.floor(pagesCount) + 1;
  }

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  if (parseInt(pp) > pagesCount) {
    return redirect(url + `?p=${pagesCount}`);
  }
  if (parseInt(pp) <= 0) {
    return redirect(url + "?p=1");
  }

  const pagedPosts = posts.slice((pp - 1) * itemsPerPage, pp * itemsPerPage);

  return (
    <>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 min-h-[50vh]">
        {pagedPosts.map((post, index) => (
          <HomepageBlogCard
            key={index}
            title={post.title}
            link={`/blog/${post.slug}`}
            date={post.date}
          />
        ))}
      </div>
      <div className="w-full mt-5 bottom-0 flex justify-between items-center gap-1 mx-auto">
        {pagesCount > 1 ? (
          <Link
            href={url + "?p=" + (pp - 1)}
            className={cn(pp == 1 && "pointer-events-none")}
            asChild
          >
            <Button variant="ghost" disabled={pp == 1}>
              <ChevronLeft /> Previous
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        <p className="text-sm">
          {pp} / {pagesCount}
        </p>
        {pagesCount > 1 ? (
          <Link
            href={url + "?p=" + (pp + 1)}
            className={cn(pp == pagesCount && "pointer-events-none")}
            asChild
          >
            <Button variant="ghost" disabled={pp == pagesCount}>
              Next <ChevronRight />
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default BlogPageContainer;
