"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Películas", href: "/" },
  { name: "Vistas", href: "/watched" },
  { name: "Actores", href: "/person" },
];

export default function NavItems() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={` ${
              pathname === link.href ? " border-b border-blue-500" : null
            } text-xl text-neutral-100`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
