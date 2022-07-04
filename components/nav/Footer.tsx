const LINKS = [
  {
    title: "Source",
    href: "https://github.com/denoland/fresh",
  },
  {
    title: "License",
    href: "https://github.com/denoland/fresh/blob/main/LICENSE",
  },
  {
    title: "Code of Conduct",
    href: "https://github.com/denoland/fresh/blob/main/CODE_OF_CONDUCT.md",
  },
];

export default function Footer() {
  const footer =
    "border-t-2 border-gray-200 bg-gray-100 h-32 flex flex-col gap-4 justify-center";
  const inner =
    "mx-auto max-w-screen-lg flex items-center justify-center gap-8";
  const linkStyle = "text-gray-600 hover:underline";
  const copyright = "text-gray-600 text-center";
  return (
    <footer className={footer}>
      <div className={inner}>
        {LINKS.map((link) => (
          <a href={link.href} className={linkStyle} key={link.title}>
            {link.title}
          </a>
        ))}
      </div>
      <div className={copyright}>
        <span>© {new Date().getFullYear()} the fresh authors</span>
      </div>
    </footer>
  );
}
