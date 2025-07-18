'use client';

import { useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    let pos = window.innerWidth;

    function animate() {
      pos -= 1;
      if (pos < -el.offsetWidth) pos = window.innerWidth;
      el.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <footer className="bg-blue-900 text-white pt-10 relative overflow-hidden">
      {/* Scrolling banner */}
      <div
        ref={scrollRef}
        className="absolute top-2 left-0 whitespace-nowrap text-yellow-300 text-sm font-semibold"
        style={{ willChange: 'transform' }}
      >
        Jesus is Lord — Jesus is Lord — Jesus is Lord —
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 py-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Preacher Of Christ HQ</p>
          <p>123 Worship Street, Lagos</p>
          <p>Email: preacherofchrist@yahoo.co.uk</p>
          <p>Phone: +234 806 127 3323</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/events" className="hover:underline">Upcoming Events</Link></li>
            <li><Link href="/camp-site" className="hover:underline">Camp Site</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/pastors" className="hover:underline">Pastors</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-300"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-2">Subscribe</h3>
          <p className="text-sm mb-2">Get church news and events in your inbox.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom note */}
      <div className="bg-blue-800 py-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Preacher Of Christ. All rights reserved.
      </div>
    </footer>
  );
}
