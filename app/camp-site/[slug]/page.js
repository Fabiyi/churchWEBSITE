'use client';
import { useParams } from 'next/navigation';
import campsite from '@/app/data/campsite';
import { notFound } from 'next/navigation';
import Image from 'next/image';



export default function CampDetail() {
  const { slug } = useParams();
  const section = campsite.find(item => item.slug === slug);

  if (!section) return notFound();

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <Image src={section.image} alt={section.title} className="rounded w-full h-64 object-cover mb-6" />
      <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
      <p className="text-gray-700 text-lg">{section.description}</p>
    </section>
  );
}
