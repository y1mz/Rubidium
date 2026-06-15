import Link from "next/link";

function Footer({ links }) {
  return (
    <footer className="flex flex-col gap-1 items-center text-15 mb-10">
      <div className="flex flex-wrap gap-2 text-sm">
        {links.map((link) => (
          <Link className="hover:underline" href={link.link} key={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="text-xs text-gray-400">
        Made by{" "}
        <Link className="underline" href="https://github.com/y1mz">
          Batuhan Y. Yilmaz
        </Link>
        <> ©{new Date().getFullYear()}</>
      </div>
    </footer>
  );
}

export default Footer;
