import React from "react";

import Image from 'next/image';

import AboutBox from '@/components/about-box';
import BlogBox from '@/components/blog-box';

export default function Home() {
  return (
    <div>
      <AboutBox 
      pp="https://thebatuhansnetwork.xyz/assets/img/avatar.jpg"
      name="Batuhan Y. Yilmaz"
      description="I'm a 18 years old high school student who is interested in FOSS projects, Photography, Graphic design and technology. I write my adventures over there and I'm always open to new ideas. If you want to get in touch with me, feel free to send me an e-mail over at batuhan@thebatuhansnetwork.xyz."
      />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 justify-center"></hr>
      <BlogBox />
    </div>
  )
}
