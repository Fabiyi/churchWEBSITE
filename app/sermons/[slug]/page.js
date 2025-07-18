'use client';
import { useParams } from 'next/navigation';
import sermons from '@/app/data/sermons';
import { notFound } from 'next/navigation';

export default function SermonDetailPage() {
  const { slug } = useParams();
  const sermon = sermons.find(s => s.slug === slug);

  if (!sermon) return notFound();

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{sermon.title}</h1>
      <p className="text-gray-600 mb-4">
        {sermon.date} • Preached by {sermon.preacher}
      </p>
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded"
          src={sermon.videoUrl}
          title={sermon.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="text-lg leading-relaxed">{sermon.description}</p>
    </section>
  );
}
