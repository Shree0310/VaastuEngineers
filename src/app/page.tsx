"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "https://ext.same-assets.com/3352166871/3959760294.jpeg",
    alt: "Water treatment plant",
  },
  { src: "https://ext.same-assets.com/3352166871/3283234834.jpeg", alt: "Industrial site" },
  { src: "https://ext.same-assets.com/3352166871/4041831023.jpeg", alt: "Chimney construction" },
  { src: "https://ext.same-assets.com/3352166871/2418042873.jpeg", alt: "Team at site" },
  { src: "https://ext.same-assets.com/3352166871/1493278097.jpeg", alt: "Fabrication" },
];

const gallery = [
  "https://ext.same-assets.com/3352166871/4000225283.jpeg",
  "https://ext.same-assets.com/3352166871/1098604950.jpeg",
  "https://ext.same-assets.com/3352166871/1026365928.jpeg",
  "https://ext.same-assets.com/3352166871/1550643983.jpeg",
  "https://ext.same-assets.com/3352166871/2302298707.jpeg",
  "https://ext.same-assets.com/3352166871/2325668354.jpeg",
  "https://ext.same-assets.com/3352166871/933210317.jpeg",
  "https://ext.same-assets.com/3352166871/2584474064.jpeg",
  "https://ext.same-assets.com/3352166871/2658666253.jpeg",
  "https://ext.same-assets.com/3352166871/3387368152.jpeg",
  "https://ext.same-assets.com/3352166871/2113017195.jpeg",
  "https://ext.same-assets.com/3352166871/403377650.jpeg",
  "https://ext.same-assets.com/3352166871/4283867920.jpeg",
  "https://ext.same-assets.com/3352166871/1135622707.jpeg",
  "https://ext.same-assets.com/3352166871/2696583647.jpeg",
  "https://ext.same-assets.com/3352166871/2753502382.jpeg",
  "https://ext.same-assets.com/3352166871/210436618.jpeg",
  "https://ext.same-assets.com/3352166871/2080447345.jpeg",
  "https://ext.same-assets.com/3352166871/1112618231.jpeg",
  "https://ext.same-assets.com/3352166871/127863383.jpeg",
  "https://ext.same-assets.com/3352166871/2125234575.jpeg",
  "https://ext.same-assets.com/3352166871/2554189209.jpeg",
  "https://ext.same-assets.com/3352166871/4208931960.jpeg",
  "https://ext.same-assets.com/3352166871/737988072.jpeg",
  "https://ext.same-assets.com/3352166871/341363883.jpeg",
  "https://ext.same-assets.com/3352166871/2260713785.jpeg",
  "https://ext.same-assets.com/3352166871/514635184.jpeg",
  "https://ext.same-assets.com/3352166871/728729596.jpeg",
  "https://ext.same-assets.com/3352166871/2727731037.jpeg",
  "https://ext.same-assets.com/3352166871/2824743201.jpeg",
  "https://ext.same-assets.com/3352166871/2373575932.jpeg",
  "https://ext.same-assets.com/3352166871/175272392.jpeg",
  "https://ext.same-assets.com/3352166871/342980363.jpeg",
  "https://ext.same-assets.com/3352166871/4123390119.jpeg",
  "https://ext.same-assets.com/3352166871/4110088063.jpeg",
  "https://ext.same-assets.com/3352166871/2969742681.jpeg",
  "https://ext.same-assets.com/3352166871/3264433316.jpeg",
  "https://ext.same-assets.com/3352166871/3609151771.jpeg",
  "https://ext.same-assets.com/3352166871/3467422425.jpeg",
  "https://ext.same-assets.com/3352166871/1905875932.jpeg",
  "https://ext.same-assets.com/3352166871/996394639.jpeg",
  "https://ext.same-assets.com/3352166871/1263840483.jpeg",
  "https://ext.same-assets.com/3352166871/1620440644.jpeg",
  "https://ext.same-assets.com/3352166871/2111166503.jpeg",
  "https://ext.same-assets.com/3352166871/3670067255.jpeg",
  "https://ext.same-assets.com/3352166871/955746416.jpeg",
  "https://ext.same-assets.com/3352166871/1445825365.jpeg",
  "https://ext.same-assets.com/3352166871/1299914013.jpeg",
  "https://ext.same-assets.com/3352166871/2189554590.jpeg",
  "https://ext.same-assets.com/3352166871/1039532063.jpeg",
  "https://ext.same-assets.com/3352166871/3213532474.jpeg",
  "https://ext.same-assets.com/3352166871/1218722056.jpeg",
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
        <div className="relative h-[44vw] min-h-[240px] max-h-[560px] overflow-hidden">
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === i ? "opacity-100" : "opacity-0"}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" priority={i === 0} />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent h-24" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 w-2 rounded-full ${index === i ? "bg-[#d7343a]" : "bg-white/70"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-end sm:items-center justify-center text-center pb-10 sm:pb-0">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-md">
              Strategic Project Consultancy That Bridges The Gap Between Vision and Reality
            </h1>
            <div className="mt-5 flex gap-3 justify-center">
              <Link href="/about-us" className="rounded bg-white/90 px-4 py-2 text-[#2f3033] hover:bg-white">About Us</Link>
              <Link href="/contact-us" className="rounded bg-[#d7343a] px-4 py-2 text-white hover:bg-[#b6282e]">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {gallery.map((src, i) => (
            <div key={src + i} className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src={src} alt="Project photo" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-block rounded bg-[#d7343a] px-5 py-2 text-white hover:bg-[#b6282e]">
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
