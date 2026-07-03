"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85",
    alt: "Industrial construction site",
  },
  {
    src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=85",
    alt: "Steel structure construction"
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85",
    alt: "Bridge construction engineering"
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=85",
    alt: "Industrial building construction"
  },
  {
    src: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1920&q=85",
    alt: "Civil engineering infrastructure"
  },
];

const gallery = [
  { src: "/images/gallery/CHIMNEY-1-150x150.jpg", title: "Industrial Chimney Construction", category: "Steel & Power Projects" },
  { src: "/images/gallery/CHIMNEY-2-150x150.jpg", title: "Chimney Engineering", category: "Steel & Power Projects" },
  { src: "/images/gallery/SILO-1-150x150.jpg", title: "Silo Construction", category: "Industrial Projects" },
  { src: "/images/gallery/SILO-2-150x150.jpg", title: "Storage Silo Design", category: "Industrial Projects" },
  { src: "/images/gallery/HOPPER-1-150x150.jpg", title: "Hopper Fabrication", category: "Steel Projects" },
  { src: "/images/gallery/HOPPER-2-150x150.jpg", title: "Industrial Hopper", category: "Steel Projects" },
  { src: "/images/gallery/20160123_171949-150x150.jpg", title: "Industrial Site Development", category: "Commercial Projects" },
  { src: "/images/gallery/DSC00086-150x150.jpg", title: "Rolling Mill Project", category: "Rolling Mills" },
  { src: "/images/gallery/DSC00088-150x150.jpg", title: "Steel Plant Construction", category: "Steel Projects" },
  { src: "/images/gallery/DSC00098-150x150.jpg", title: "Structural Engineering", category: "Design & Engineering" },
  { src: "/images/gallery/DSC00103-150x150.jpg", title: "Power Plant Infrastructure", category: "Power Plants" },
  { src: "/images/gallery/DSC00116-150x150.jpg", title: "Industrial Building Design", category: "Commercial Projects" },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      {/* Hero Slider */}
      <section className="relative w-full">
        <div className="relative h-[50vw] min-h-[400px] max-h-[600px] overflow-hidden">
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === i ? "opacity-100" : "opacity-0"}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" priority={i === 0} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${index === i ? "bg-[#d7343a] w-8" : "bg-white/70"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
              Building Tomorrow's Infrastructure Today
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl drop-shadow-md mb-8 max-w-3xl mx-auto">
              Strategic Project Consultancy That Bridges The Gap Between Vision and Reality
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/services" className="rounded-lg bg-[#d7343a] px-6 py-3 text-white font-semibold hover:bg-[#b6282e] transition-colors shadow-lg">
                Our Services
              </Link>
              <Link href="/contact-us" className="rounded-lg bg-white/90 px-6 py-3 text-[#2f3033] font-semibold hover:bg-white transition-colors shadow-lg">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f3033] mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-[#d7343a] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Established in 1991, Vaastu Group Of Engineers is a trusted name in industrial and commercial structural consulting with over three decades of excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#d7343a] mb-2">30+</div>
              <h3 className="text-xl font-semibold text-[#2f3033] mb-2">Years of Experience</h3>
              <p className="text-gray-600">Delivering excellence since 1991</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#d7343a] mb-2">500+</div>
              <h3 className="text-xl font-semibold text-[#2f3033] mb-2">Projects Completed</h3>
              <p className="text-gray-600">Across industrial & commercial sectors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#d7343a] mb-2">100%</div>
              <h3 className="text-xl font-semibold text-[#2f3033] mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Committed to quality & excellence</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/about-us" className="inline-block rounded-lg bg-[#d7343a] px-6 py-3 text-white font-semibold hover:bg-[#b6282e] transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f3033] mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-[#d7343a] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive design, engineering, and consultancy services for industrial and commercial projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#d7343a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-[#2f3033] mb-3">Design & Engineering</h3>
              <p className="text-gray-600 mb-4">Comprehensive design, planning, and detailed engineering solutions</p>
              <Link href="/services" className="text-[#d7343a] font-semibold hover:underline">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#d7343a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-[#2f3033] mb-3">Supervision & Audits</h3>
              <p className="text-gray-600 mb-4">Quality control, technical audits, and project management</p>
              <Link href="/services" className="text-[#d7343a] font-semibold hover:underline">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#d7343a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-[#2f3033] mb-3">Sustainability</h3>
              <p className="text-gray-600 mb-4">Green buildings, energy conservation, and pollution control</p>
              <Link href="/services" className="text-[#d7343a] font-semibold hover:underline">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#d7343a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-[#2f3033] mb-3">Water Management</h3>
              <p className="text-gray-600 mb-4">Water supply, waste management, and treatment systems</p>
              <Link href="/services" className="text-[#d7343a] font-semibold hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f3033] mb-4">Our Work</h2>
            <div className="w-20 h-1 bg-[#d7343a] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successfully completed industrial and commercial projects
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {gallery.slice(0, 12).map((item, i) => (
              <div key={item.src + i} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
                  <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-semibold text-[#2f3033] text-sm mb-1 group-hover:text-[#d7343a] transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="inline-block rounded-lg bg-[#d7343a] px-6 py-3 text-white font-semibold hover:bg-[#b6282e] transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2f3033] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help bring your vision to life. Contact us today for a consultation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact-us" className="rounded-lg bg-[#d7343a] px-8 py-3 text-white font-semibold hover:bg-[#b6282e] transition-colors">
              Contact Us
            </Link>
            <Link href="/our-team" className="rounded-lg bg-white/10 px-8 py-3 text-white font-semibold hover:bg-white/20 transition-colors">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
