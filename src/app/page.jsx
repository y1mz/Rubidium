import React from "react";

import AboutBox from '@/components/about-box';
import BlogBox from '@/components/blog-box'

import { readConfig } from "@/libs/readConfig"
import { readHeaderLinks } from "@/libs/readConfig"
import HomeHeader from "@/components/about-box/header";

export default function Home() {
  const config = readConfig()
  const headerLinks = readHeaderLinks()
  
  const bio = config.authorBio
  const name = config.authorName
  const pp = "/assets/img/avatar.png"
  
  return (
    <div>
        <HomeHeader header={headerLinks}/>
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
  )
}
