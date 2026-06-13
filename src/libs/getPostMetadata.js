import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      content: matterResult.content,
    };
  });
  return posts.sort((a, b) => {
    const aDate = new Date(a.date).valueOf();
    const bDate = new Date(b.date).valueOf();

    return aDate - bDate;
  });
};

export const getPostContent = (slug) => {
  const folder = path.resolve("posts/");
  const file = path.join(folder, slug + ".md");
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
