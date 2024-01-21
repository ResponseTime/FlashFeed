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
      <body className={inter.className} >
        <div className="flex container mx-auto my-5">
          <Sidebar />{children} <Right />
        </div>
      </body >
    </html >

  );
}
