import Link from "next/link";
import { Button } from "@/components/ui/button";

import { readConfig, readHeaderLinks } from "@/libs/readConfig";
import { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@/libs/utils";

function Icon({ name, ...props }) {
  const LucideIcon = lazy(dynamicIconImports[name]);
  const fallback = (
    <div style={{ background: "#ddd", width: 30, height: 30 }} />
  );

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
}

function HeaderButton({ icon, title, link }) {
  console.log(link);
  return (
    <Button variant="ghost3" size="icon" className="relative group" asChild>
      <Link href={link}>
        <Icon name={icon} size={20} color={"#FFFFFF"} />
        <span
          className={cn(
            "absolute -bottom-10 left-1/2 -translate-x-1/2",
            "px-3 py-2 rounded text-sm",
            "bg-popover text-popover-foreground",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity whitespace-nowrap pointer-events-none",
          )}
        >
          {title}
        </span>
      </Link>
    </Button>
  );
}

function Header({ path, pathLink, blogLink, blogTitle }) {
  const config = readConfig();
  const headerButtons = readHeaderLinks();
  console.log(headerButtons);

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
          {headerButtons.map((item, index) => (
            <HeaderButton
              key={index}
              icon={item.icon}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
