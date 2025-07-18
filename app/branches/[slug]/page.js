'use client';
import branches from '@/app/data/branches';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function BranchDetail() {
  const { slug } = useParams();
  const branch = branches.find(b => b.slug === slug);

  if (!branch) return notFound();

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <Image src={branch.image} alt={branch.name} className="rounded mb-4 w-full h-60 object-cover" />
      <h1 className="text-3xl font-bold mb-2">{branch.name}</h1>
      <p className="text-gray-600 mb-4">
        <strong>Coordinator:</strong> {branch.coordinator}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Address:</strong> {branch.address}
      </p>
      <div>
        <h3 className="font-semibold mt-6 mb-2">Pastors:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {branch.pastors.map((pastor, i) => (
            <li key={i}>{pastor}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
