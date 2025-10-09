import PageTitle from "@/components/PageTitle";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <PageTitle title="About" />
      {children}
    </main>
  );
}
