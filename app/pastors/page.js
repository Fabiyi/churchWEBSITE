'use client';
import { useState } from 'react';
import pastors from "@/app/data/pastor";
import Link from 'next/link';
import Image from 'next/image';



export default function PastorsPage() {
  const [search, setSearch] = useState('');
  const [branch, setBranch] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const branches = ['All', ...new Set(pastors.map(p => p.branch))];

  const filtered = pastors.filter(p =>
    (branch === 'All' || p.branch === branch) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const visiblePastors = filtered.slice(0, visibleCount);

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Pastors</h2>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 justify-between">
        <select
          value={branch}
          onChange={e => setBranch(e.target.value)}
          className="border p-2 rounded"
        >
          {branches.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded flex-grow md:ml-4"
        />
      </div>

      {/* Pastor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visiblePastors.map(pastor => (
          <Link key={pastor.id} href={`/pastors/${pastor.slug}`}>
            <div className="bg-white shadow rounded p-4 text-center hover:shadow-md transition">
              <Image
                src={pastor.image}
                alt={pastor.name}
                className="w-28 h-28 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg">{pastor.name}</h3>
              <p className="text-gray-500 text-sm">{pastor.role}</p>
              <p className="text-blue-500 text-sm">{pastor.branch}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount(v => v + 3)}
            className="btn-primary"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
