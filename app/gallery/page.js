'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/gallery.json')
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error('Gallery fetch failed:', err));
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Church Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link href={`/gallery/${item.id}`} key={item.id}>
              <div className="bg-white rounded shadow hover:shadow-lg transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-t object-cover w-full h-48"
                />
                <div className="p-4 text-center font-medium">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

