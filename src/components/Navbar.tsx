"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "", href: "#ContactForm" }

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full bg-black/70 backdrop-blur-md z-50 shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5  text-white">
        {/* Logo */}
        <Link href="#home" scroll={true} onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Nextrive Technologies"
            width={70}
            height={70}
            className="cursor-pointer hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex   gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-400  transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <motion.div
          className="md:hidden flex flex-col text-white items-center gap-6 py-6 bg-black/90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-400 text-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
