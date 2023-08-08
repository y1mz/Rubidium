import React from "react";

import Image from 'next/image';

import AboutBox from '@/components/about-box';
import BlogBox from '@/components/blog-box';

export default function Home() {
  const bio = process.env.NEXT_PUBLIC_AUTHOR_BIO
  const name = process.env.NEXT_PUBLIC_AUTHOR_NAME
  const pp = process.env.NEXT_PUBLIC_AUTHOR_PP
  
  return (
    <div>
      <AboutBox 
      pp={pp}
      name={name}
      description={bio}
      />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
      <BlogBox />
    </div>
  )
}
