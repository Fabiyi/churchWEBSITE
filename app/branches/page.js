'use client';
import Link from 'next/link';
import branches from '@/app/data/branches';

export default function BranchesPage() {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Our Branches</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map(branch => (
          <Link key={branch.slug} href={`/branches/${branch.slug}`}>
            <div className="bg-white rounded shadow p-4 hover:shadow-md transition text-center">
              <img
                src={branch.image}
                alt={branch.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="text-xl font-semibold">{branch.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{branch.coordinator}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
