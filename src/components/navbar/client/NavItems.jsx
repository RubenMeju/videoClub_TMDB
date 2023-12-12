"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4">
      <li>
        <Link
          href="/"
          className={` ${
            pathname === "/" ? " border-b border-blue-500" : null
          } text-xl text-neutral-100`}
        >
          Películas
        </Link>
      </li>

      <li>
        <Link
          href="/favorites"
          className={` ${
            pathname === "/favorites" ? " border-b border-blue-500" : null
          } text-xl text-neutral-100`}
        >
          Favoritos
        </Link>
      </li>
    </ul>
  );
}
