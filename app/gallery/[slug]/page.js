import gallery from '@/public/data/gallery.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function GalleryDetail({ params }) {
  const item = gallery.find((g) => g.id === params.slug);
  if (!item) return notFound();

  return (
    <section className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">{item.title}</h1>
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={500}
          className="rounded shadow-lg mx-auto"
        />
      </div>
    </section>
  );
}
