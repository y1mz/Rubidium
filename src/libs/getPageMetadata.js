import fs from "fs";
import matter from "gray-matter";

export const getPageMetadata = () => {
  const folder = "pagess/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const pages = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`pagess/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".md", ""),
      content: matterResult.content,
    };
  });
  return pages;
};

export const getPageContent = (page) => {
  const folder = "pagess/";
  const file = `${folder}${page}.md`;
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};
