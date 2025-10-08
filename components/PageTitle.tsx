"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PageTitle({ title }: { title: string }) {
  const pathname = usePathname();
  return (
    <div className="bg-gray-200 min-h-72 flex flex-col items-center justify-center">
      <h2 className="font-extrabold text-4xl">{title}</h2>
      <div className="flex gap-1.5">
        <Link href={"/"} className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <Link
          href={pathname}
          className="text-red-600 hover:text-red-700 transition-colors"
        >
          {" "}
          / {title}
        </Link>
      </div>
    </div>
  );
}
