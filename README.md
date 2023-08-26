# next-js-starter-markdown
A simple markdown based blogsite with RSS feed created using NextJS + TailwindCSS.
I created this site for learning and tried my best. It's a 100% functional website and you can even customize it and deploy as your own blog site.

## Features:
- Markdown based posts and pages.
- Fully functional RSS feed.
- Dynamic Sitemap.xml
- FS layout is very simple and easy to read and customize.

## Packages I used:
- Feed
- gray-matter
- markdown-to-jsx
- react-icons

## Deploying 
Deploying on Vercel isn't recommended becouse for some reason Vercel doesn't allows my site to read files from /posts folder and this makes the content inaccsesible.

### On your server:
- Clone this repo ```git clone https://github.com/B4tuhanY1lmaz/nextjs-starter-markdown```
- Than go to config/ folder and edit the siteconfig.json with your information.
- Add your content to posts/ directory and make sure that it has the metadata section at the top of file.
  Example: ```---
title: Personal Blogs should be simple
date: 01.01.1970
author: Batuhan Y. Yilmaz
---```
- Lastly run the ```npm install && npm run build``` command to compile the website and ```npm run start``` to kickstart your website.
