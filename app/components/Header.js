
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 bg-blue-900 text-white z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Church Name */}
        <Link href="/" className="flex flex-col items-center gap-1">
          <Image
            src="/images/cap.png"
            alt="Church Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-sm font-semibold">Preacher Of Christ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/contacts" className="hover:text-yellow-300 transition">Contact</Link>
          <Link href="/branches" className="hover:text-yellow-300 transition">Branch</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-blue-800 px-4 py-2 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-2">
          <Link href="/" onClick={closeMenu} className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/contacts" onClick={closeMenu} className="hover:text-yellow-300 transition">Contact</Link>
          <Link href="/camp-site" onClick={closeMenu} className="hover:text-yellow-300 transition">Camp</Link>
          <Link href="/branches" onClick={closeMenu} className="hover:text-yellow-300 transition">Branches</Link>
        </nav>
      </div>
    </header>
  );
}
