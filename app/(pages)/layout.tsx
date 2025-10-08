import PageTitle from "@/components/PageTitle";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTitle title="About" />
        <main>{children}</main>
      </body>
    </html>
  );
}
