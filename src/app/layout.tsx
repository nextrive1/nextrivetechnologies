import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Nextrive Technologies",
  description: "Empowering businesses with cutting-edge digital solutions 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

