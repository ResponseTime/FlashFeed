import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Right from "./components/Right";
import Sidebar from "./components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter",
  description: "Twitter Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /> *
      </head>
      <body className={inter.className} >
        <div className="flex container mx-auto my-5">
          <Sidebar />{children} <Right />
        </div>
      </body >
    </html >
  );
}
