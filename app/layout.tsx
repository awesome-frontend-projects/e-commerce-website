import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = localFont({
  src: "./fonts/lato-v25-latin-regular.woff2",
  variable: "--font-lato",
});

const nunito = localFont({
  src: [
    {
      path: "./fonts/nunito-sans-v19-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/nunito-sans-v19-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/nunito-sans-v19-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/nunito-sans-v19-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/nunito-sans-v19-latin-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Electrohub",
  description: "an E-commerce website built with next.js and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${nunito.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
