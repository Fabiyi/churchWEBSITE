'use client';
import Link from 'next/link';
import sermons from '@/app/data/sermons';

export default function SermonsPage() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Watch Sermons</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {sermons.map(sermon => (
          <Link key={sermon.slug} href={`/sermons/${sermon.slug}`}>
            <div className="bg-white p-4 shadow rounded hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{sermon.title}</h2>
              <p className="text-gray-600">{sermon.date} by {sermon.preacher}</p>
              <p className="text-sm text-gray-500 mt-2">{sermon.description.slice(0, 80)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
