'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import events from '@/app/data/events';
import Image from 'next/image';



export default function EventDetailPage() {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);

  if (!event) return notFound();

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <Image src={event.image} alt={event.title} className="w-full h-60 object-cover rounded mb-6"  width={600}
                  height={400} />
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600">{event.date} at {event.time}</p>
      <p className="text-gray-500 mb-4">{event.venue}</p>
      <p className="text-lg leading-relaxed">{event.description}</p>
    </section>
  );
}
