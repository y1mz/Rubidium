import React from "react";

import Header from "@/components/header";
import AboutBox from "@/components/about-box";
import BlogBox from "@/components/blog-box";

import { readConfig } from "@/libs/readConfig";
import { readHeaderLinks } from "@/libs/readConfig";
import { getPostMetadata } from "@/libs/getPostMetadata";

// Make this page dynamic
export const dynamic = "force-dynamic";

export default function Home() {
  const config = readConfig();
  const headerLinks = readHeaderLinks();
  const latestPosts = getPostMetadata().slice(-6).reverse();

  return (
    <div>
      <header className="px-5 sticky top-2 z-30 max-w-[960px] mx-auto">
        <Header />
      </header>
      <AboutBox
        name={config.authorName}
        description={config.authorBio}
        links={config.links}
        header={headerLinks}
      />
      <div className="max-w-[960px] px-5 py-5 mx-auto">
        <BlogBox latestPosts={latestPosts} />
      </div>
    </div>
  );
}
