'use client';
import campsite from '@/app/data/campsite';
import Link from 'next/link';

export default function CampPage() {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Camp Site Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {campsite.map(item => (
          <Link key={item.slug} href={`/camp-site/${item.slug}`}>
            <div className="bg-white rounded shadow hover:shadow-lg transition p-4 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.description.slice(0, 60)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
