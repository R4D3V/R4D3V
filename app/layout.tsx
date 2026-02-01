import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RAYMON JOHNS - Frontend Developer Portfolio",
  description:
    "Frontend developer focused on accessible, user-friendly web applications built with HTML, CSS, JavaScript, React, and Tailwind CSS.",
  keywords:
    "frontend, developer, portfolio, react, tailwind, accessibility, web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
