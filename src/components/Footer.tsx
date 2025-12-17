import Image from "next/image";
import Link from "next/link";

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
              <Image src="https://ext.same-assets.com/3352166871/3670407081.svg" alt="Location" width={22} height={22} />
              <Link href="https://g.co/kgs/TLGAFc9" className="hover:text-[#d7343a]" target="_blank" rel="noopener noreferrer">
                Kota Gudhyari Road, Infront Of Singapore City, Raipur, Chhattisgarh
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Image src="https://ext.same-assets.com/3352166871/3352337814.svg" alt="Phone" width={22} height={22} />
              <div className="flex flex-col">
                <Link href="tel:+91-94792-45129" className="hover:text-[#d7343a]">+91-94792-45129</Link>
                <Link href="tel:+91-96857-77472" className="hover:text-[#d7343a]">+91-96857-77472</Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Image src="https://ext.same-assets.com/3352166871/1474254989.svg" alt="Email" width={22} height={22} />
              <div className="flex flex-col">
                <Link href="mailto:vivekagr100@gmail.com" className="hover:text-[#d7343a]">vivekagr100@gmail.com</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-sm text-[#2f3033]">
          <p>
            &copy; 2025 Vaastu Group Of Engineers - Industrial Project Consultant | Powered by {" "}
            <Link href="http://socidesk.com" className="hover:text-[#d7343a]" target="_blank" rel="noopener noreferrer">Socidesk</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
