"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { navItems } from "@/data/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full pt-5">
      <div className="container border-b">
        {/* Top */}
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-4xl">
            Electrohub
          </Link>

          {/* Search bar */}
          <div className="flex justify-between max-w-96 w-full bg-gray-200 h-12 relative rounded-lg">
            <div className="w-full h-full">
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <Search />
              </span>
              <input
                type="search"
                placeholder="Search Product"
                className="w-full h-full indent-12"
              />
            </div>

            <Button
              size={"lg"}
              className="h-full rounded-l-none bg-black hover:bg-black/75 transition-colors"
            >
              Search
            </Button>
          </div>

          {/* Btns */}
          <div className="flex items-center gap-4">
            <span>
              <ShoppingCart size={30} />
            </span>
            <Button size={"lg"} className="bg-black hover:bg-black/75">
              Login
            </Button>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-7 mb-4">
          {/* Drop down */}
          <div></div>
          <nav>
            <ul className="flex items-center gap-11 justify-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href ? "text-violet-700" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
