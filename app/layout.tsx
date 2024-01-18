import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Page from "./StorePage/page";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusPlay",
  description: "Future game store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  bg-gradient-to-l from-black to-[#B00101]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
