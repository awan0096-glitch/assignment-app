import Link from "next/link";

export default function Nav() {
  const navItems = [
    { label: "Home", href: "/home" },
    {
      label: "My Neighbor Totoro",
      href: "/work/my-neighbor-totoro",
    },
    { label: "Princess Mononoke", href: "/work/princess-mononoke" },
    { label: "Spirited Away", href: "/work/spirited-away" },
    {
      label: "Howl's Moving Castle",
      href: "/work/howls-moving-castle",
    },
  ];

  return (
    <nav>
      <ul className="flex justify-center gap-x-20 p-7 text-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative text-[#333] cursor-pointer
             after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
             after:bg-[#333] after:transition-all after:duration-300 after:ease-out
             after:-translate-x-1/2 hover:after:w-full"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
