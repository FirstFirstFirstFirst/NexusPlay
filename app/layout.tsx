import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        className={
          poppins.className + " bg-gradient-to-r from-[#B30000] to-black"
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
