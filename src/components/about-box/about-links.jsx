import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
function AboutLinks({ title, link }) {
  return (
    <div className="rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20">
      <Link
        target="_blank"
        rel="me"
        href={link}
        className="flex items-center gap-1 text-sm p-2"
      >
        <LinkIcon className="h-3 w-3" /> {title}{" "}
      </Link>
    </div>
  );
}

export default AboutLinks;
