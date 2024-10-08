"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-purple-300 flex item justify-center gap-3 items-center py-2">
      <Link className={`link ${pathname === "/" ? "active underline" : ""} block`} href="/">
        Home
      </Link>

      <Link
        className={`link px-3 ${pathname === "/blogs" ? "active underline" : ""}`}
        href="/blogs"
      >
        Blogs
      </Link>
      <Link
        className={`link px-3 ${pathname === "/dashboard" ? "active underline" : ""}`}
        href="/dashboard"
      >
        Dashboard
      </Link>

      <Link
        className={`link px-3 ${pathname === "/quotes" ? "active underline" : ""}`}
        href="/quotes"
      >
        Quotes
      </Link>

      <Link
        className={`link px-3 ${pathname === "/contactus" ? "active underline" : ""}`}
        href="/contactus"
      >
        Contact Us
      </Link>

      <Link
        className={`link px-3 ${pathname === "/aboutus" ? "active underline" : ""}`}
        href="/aboutus"
      >
        About
      </Link>
    </nav>
  );
}
