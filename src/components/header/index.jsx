import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdRssFeed, MdInfo, MdTextSnippet } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

import { readConfig } from "@/libs/readConfig";

function Header({ path, pathLink, blogLink, blogTitle }) {
  const config = readConfig();

  return (
    <div className="sticky top-2 rounded-md backdrop-blur-md bg-white/5 p-2 items-center z-30">
      <div className="flex justify-between text-lg">
        <div className="flex items-center">
          <Button variant="ghost3" size="sm2" asChild>
            <Link className="text-bold" href={"/"}>
              {config.siteName}
            </Link>
          </Button>
          <p>/</p>
          {path && (
            <>
              <Button variant="ghost3" size="sm2" asChild>
                <Link href={pathLink}>{path}</Link>
              </Button>
            </>
          )}
          {blogLink && (
            <nav className="hidden md:flex">
              <p>/</p>
              <Button variant="ghost3" size="sm2" asChild>
                <Link href={blogLink}>{blogTitle}</Link>
              </Button>
            </nav>
          )}
        </div>
        <div className="flex gap-1 items-center">
          <Button variant="ghost3" size="icon" asChild>
            <Link href={"/feed.xml"}>
              <IoMdGlobe className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost3" size="icon" asChild>
            <Link href={"/feed.xml"}>
              <MdTextSnippet className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost3" size="icon" asChild>
            <Link href={"/feed.xml"}>
              <MdInfo className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost3" size="icon" asChild>
            <Link href={"/feed.xml"}>
              <MdRssFeed className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
