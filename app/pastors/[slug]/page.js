'use client';
import pastors from "@/app/data/pastor";
import { notFound } from "next/navigation";
import Image from 'next/image';



export default function PastorDetailPage({ params }) {
  const pastor = pastors.find((p) => p.slug === params.slug);
  if (!pastor) return notFound();

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <Image src={pastor.image} alt={pastor.name} className="w-48 h-48 rounded-full mx-auto" />
      <h2 className="text-2xl font-bold mt-4 text-center">{pastor.name}</h2>
      <p className="text-center text-gray-600">{pastor.role} – {pastor.branch}</p>
      <p className="mt-6 text-lg">{pastor.bio}</p>
    </section>
  );
}
