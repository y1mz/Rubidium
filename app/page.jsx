import React from "react";

import AboutBox from '@/components/about-box';
import BlogBox from '@/components/blog-box';

import { readConfig } from "@/libs/readConfig";

export default function Home() {
  const config = readConfig()
  
  const bio = config.authorBio
  const name = config.authorName
  const pp = "/assets/img/avatar.png"
  
  return (
    <div>
      <AboutBox 
      pp={pp}
      name={name}
      description={bio}
      links={config.links}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
      <BlogBox />
    </div>
  )
}
