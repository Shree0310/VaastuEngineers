import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Vaastu Group Of Engineers">
          <Image
            src="https://ext.same-assets.com/3352166871/767852535.png"
            alt="Vaastu Group Of Engineers logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="text-sm sm:text-base font-semibold tracking-wide text-[#2f3033]">Vaastu Group Of Engineers</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#2f3033]">
          <Link href="/" className="hover:text-[#d7343a]">Home</Link>
          <Link href="/about-us" className="hover:text-[#d7343a]">About Us</Link>
          <Link href="/our-team" className="hover:text-[#d7343a]">Our Team</Link>
          <Link href="/services" className="hover:text-[#d7343a]">Services</Link>
          <Link href="/projects" className="hover:text-[#d7343a]">Projects</Link>
          <Link href="/contact-us" className="hover:text-[#d7343a]">Contact Us</Link>
        </nav>
        <nav className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer rounded border px-3 py-2 text-sm font-medium text-[#2f3033] hover:border-[#d7343a] hover:text-[#d7343a]">Menu</summary>
            <div className="absolute right-0 mt-2 w-48 rounded border bg-white shadow">
              <div className="flex flex-col p-2 text-sm">
                <Link href="/" className="px-2 py-1 hover:text-[#d7343a]">Home</Link>
                <Link href="/about-us" className="px-2 py-1 hover:text-[#d7343a]">About Us</Link>
                <Link href="/our-team" className="px-2 py-1 hover:text-[#d7343a]">Our Team</Link>
                <Link href="/services" className="px-2 py-1 hover:text-[#d7343a]">Services</Link>
                <Link href="/projects" className="px-2 py-1 hover:text-[#d7343a]">Projects</Link>
                <Link href="/contact-us" className="px-2 py-1 hover:text-[#d7343a]">Contact Us</Link>
              </div>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
