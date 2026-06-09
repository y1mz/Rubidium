import React from "react";

import AboutBox from "@/components/about-box";
import BlogBox from "@/components/blog-box";

import { readConfig } from "@/libs/readConfig";
import { readHeaderLinks } from "@/libs/readConfig";
import Header from "@/components/header";

export default function Home() {
  const config = readConfig();
  const headerLinks = readHeaderLinks();

  const bio = config.authorBio;
  const name = config.authorName;
  const pp = "/assets/img/avatar.png";

  return (
    <div>
      <header className="px-5 sticky top-2 z-30 max-w-[960px] mx-auto">
        <Header />
      </header>
      <AboutBox
        pp={pp}
        name={name}
        description={bio}
        links={config.links}
        header={headerLinks}
      />
      <div className="max-w-[960px] px-5 py-5 mx-auto">
        <BlogBox />
      </div>
    </div>
  );
}
