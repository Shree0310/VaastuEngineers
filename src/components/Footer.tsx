import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-[#2f3033]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#2f3033]">
            <li><Link href="/about-us" className="hover:text-[#d7343a]">About Us</Link></li>
            <li><Link href="/our-team" className="hover:text-[#d7343a]">Our Team</Link></li>
            <li><Link href="/services" className="hover:text-[#d7343a]">Services</Link></li>
            <li><Link href="/projects" className="hover:text-[#d7343a]">Projects</Link></li>
            <li><Link href="/contact-us" className="hover:text-[#d7343a]">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2f3033]">Reach Us Through</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2f3033]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d7343a]" />
              <Link href="https://g.co/kgs/TLGAFc9" className="hover:text-[#d7343a]" target="_blank" rel="noopener noreferrer">
                Kota Gudhyari Road, Infront Of Singapore City, Raipur, Chhattisgarh
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d7343a]" />
              <div className="flex flex-col">
                <Link href="tel:+91-94792-45129" className="hover:text-[#d7343a]">+91-94792-45129</Link>
                <Link href="tel:+91-96857-77472" className="hover:text-[#d7343a]">+91-96857-77472</Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d7343a]" />
              <div className="flex flex-col">
                <Link href="mailto:vivekagr100@gmail.com" className="hover:text-[#d7343a]">vivekagr100@gmail.com</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-sm text-[#2f3033]">
          <p>
            &copy; 2025 Vaastu Group Of Engineers - Industrial Project Consultant
          </p>
        </div>
      </div>
    </footer>
  );
}
