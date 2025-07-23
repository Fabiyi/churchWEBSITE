'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';





export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <div className="bg-black/40 absolute inset-0 z-0" />
        <motion.div
  initial={{ opacity: 1, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Preacher of Christ Chapel</h1>
  <p className="text-lg md:text-xl">Connecting people to God...</p>
</motion.div>

      </section>

      {/* Grid Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 text-center">
        {/* Gallery */}
        <div className="home-grid-block">
          <Link href="./gallery">
          <Image src="/images/galleryH.jpg" alt="Gallery" className="rounded mb-4"  width={600}
                  height={400} />
          <h3 className="text-xl font-semibold mb-2">Gallery</h3>
          <p>Explore photos from past events, services and retreats.</p>
          </Link>
        </div>

        {/* Video */}
        <div className="home-grid-block">
          
          <video autoPlay muted loop className="rounded mb-4 w-full">
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          
          <h3 className="text-xl font-semibold mb-2">Watch Sermons</h3>
          <p>Catch up on inspiring messages from our pastors.</p>
          
        </div>

        {/* Pastors */}
        <div className="home-grid-block">
          <Link href="./pastors">
          <Image src="/images/pastorsH.jpg" alt="Pastors" className="rounded mb-4"  width={600}
                  height={400} />
          <h3 className="text-xl font-semibold mb-2">Meet Our Pastors</h3>
          <p>Learn more about our founder, coordinators, and pastoral team.</p>
          </Link>
        </div>

        {/* Camp Site */}
        <div className="home-grid-block">
          <Link href="./camp-site">
          <Image src="/images/campsiteH.jpg" alt="Camp Site" className="rounded mb-4"  width={600}
                  height={400} />
          <h3 className="text-xl font-semibold mb-2">Camp Site</h3>
          <p>View our auditorium, cafeteria, toilet & parking lot facilities.</p>
          </Link>
        </div>

        {/* Branches */}
        <div className="home-grid-block">
          <Link href="./branches">
          <Image src="/images/branchesH.jpg" alt="Branches" className="rounded mb-4"  width={600}
                  height={400} />
          <h3 className="text-xl font-semibold mb-2">Our Branches</h3>
          <p>Visit any of our branches across the region with coordinators and pastors.</p>
          </Link>
        </div>

        {/* Events */}
        <div className="home-grid-block">
          <Link href="./events">
          <Image src="/images/eventsH.jpg" alt="Events" className="rounded mb-4"  width={600}
                  height={400} />
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          <p>Join us in worship, revival, and community development programs.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

