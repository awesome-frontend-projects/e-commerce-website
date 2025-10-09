"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { categoryCardItems, navItems } from "@/data/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownClose, setIsDropdownClose] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-3 sm:pt-5">
      <div className="container border-b pb-3 sm:pb-0">
        {/* Top */}
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="font-semibold text-xl sm:text-2xl lg:text-3xl flex-shrink-0"
          >
            Electrohub
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden lg:flex justify-between max-w-96 w-full bg-gray-200 h-12 relative rounded-lg">
            <div className="w-full h-full">
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <Search />
              </span>
              <input
                type="search"
                placeholder="Search Product"
                className="w-full h-full indent-12 bg-transparent outline-none"
              />
            </div>

            <Button
              size={"lg"}
              className="h-full rounded-l-none bg-black hover:bg-black/75 transition-colors"
            >
              Search
            </Button>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button className="hover:text-purple-800 transition-colors">
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <Button
              size={"sm"}
              className="bg-black hover:bg-black/75 sm:text-base h-9 sm:h-10 px-3 sm:px-6"
            >
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-3 flex bg-gray-200 rounded-lg overflow-hidden h-10">
          <div className="w-full relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="search"
              placeholder="Search products..."
              className="w-full h-full indent-9 bg-transparent outline-none text-sm"
            />
          </div>
          <Button className="rounded-none bg-black hover:bg-black/75 transition-colors px-4 text-sm">
            Search
          </Button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-3 sm:mt-7 flex items-center justify-between lg:justify-start gap-2">
          {/* Categories Dropdown */}
          <button
            className="relative flex justify-between items-center gap-2 sm:gap-4 bg-gray-200/75 py-2 px-2.5 sm:px-3.5 rounded-t-lg text-sm sm:text-base font-semibold min-w-0 sm:min-w-[200px] md:max-w-[257px]"
            onClick={() => {
              setIsDropdownClose(!isDropdownClose);
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Categories</span>
            </div>

            <ChevronDown
              className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${
                isDropdownClose ? "rotate-180" : ""
              }`}
            />

            {/* Categories List */}
            {isDropdownClose && (
              <div className="bg-white absolute top-full left-0 w-64 sm:w-full border shadow-lg z-50 rounded-b-lg overflow-hidden">
                {categoryCardItems.map((item) => (
                  <Link
                    href={""}
                    key={item.id}
                    className="flex items-center gap-2 p-3 hover:bg-gray-100 transition-colors text-sm sm:text-base border-b last:border-b-0"
                    onClick={() => setIsDropdownClose(false)}
                  >
                    <span>
                      <item.icon className="w-5 h-5" />
                    </span>
                    <p>{item.label}</p>
                  </Link>
                ))}
              </div>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center gap-2 bg-black text-white px-3 py-2 rounded-t-lg text-sm font-medium"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsDropdownClose(false);
            }}
          >
            <span>Menu</span>
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block mx-auto">
            <ul className="flex items-center gap-8 xl:gap-11">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`hover:text-violet-800 transition-colors font-medium ${
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-0 pb-3 border-t">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 hover:bg-gray-100 transition-colors border-b last:border-b-0 ${
                      pathname === item.href
                        ? "text-violet-700 bg-violet-50 font-medium"
                        : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
