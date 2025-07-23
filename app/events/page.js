'use client';
import Link from 'next/link';
import events from '@/app/data/events';
import Image from 'next/image';



export default function EventsPage() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <Link key={event.slug} href={`/events/${event.slug}`}>
            <div className="bg-white shadow rounded p-4 hover:shadow-md transition">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded mb-3"
                 width={600}
                  height={400}
              />
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.date} • {event.time}</p>
              <p className="text-gray-500 text-sm mt-1">{event.venue}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
