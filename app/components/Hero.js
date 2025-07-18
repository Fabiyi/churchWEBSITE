'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <header className="bg-blue-900 dark:bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/church-logo.png" alt="Logo" width={40} height={40} />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold">Grace Chapel</span>
              <span className="text-xs text-yellow-200">Connecting People to God</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/contacts" className="hover:text-yellow-300">Contact</Link>
            <div className="relative group">
              <button
                className="hover:text-yellow-300 flex items-center gap-1"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Branches <HiChevronDown />
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-1 bg-blue-700 p-2 rounded shadow-md space-y-2 text-sm z-50">
                  <Link href="/branches" className="block hover:text-yellow-300">All Branches</Link>
                  <Link href="/branches/lagos" className="block hover:text-yellow-300">Lagos</Link>
                  <Link href="/branches/abuja" className="block hover:text-yellow-300">Abuja</Link>
                </div>
              )}
            </div>
            <Link href="/camp-site" className="hover:text-yellow-300">Camp</Link>

            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} className="ml-4 px-2 py-1 text-sm border rounded">
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-2xl">
            <HiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "25%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 w-3/4 h-full bg-blue-800 dark:bg-gray-800 text-white z-50 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setMenuOpen(false)} className="text-2xl">
                  <HiX />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/contacts" onClick={() => setMenuOpen(false)}>Contact</Link>
                <div>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center justify-between w-full"
                  >
                    Branches <HiChevronDown />
                  </button>
                  {showDropdown && (
                    <div className="ml-4 mt-2 space-y-1 text-sm">
                      <Link href="/branches" onClick={() => setMenuOpen(false)}>All Branches</Link>
                      <Link href="/branches/lagos" onClick={() => setMenuOpen(false)}>Lagos</Link>
                      <Link href="/branches/abuja" onClick={() => setMenuOpen(false)}>Abuja</Link>
                    </div>
                  )}
                </div>
                <Link href="/camp-site" onClick={() => setMenuOpen(false)}>Camp</Link>

                {/* Dark Mode */}
                <button onClick={toggleTheme} className="mt-4 px-2 py-1 border rounded">
                  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
