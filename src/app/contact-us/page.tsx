import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us – Vaastu Group Of Engineers – Industrial Project Consultant",
  description: "Reach us via address, email or phone. Send us a message using the form.",
};

export default function ContactUs() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2f3033] mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="rounded border bg-white p-6 hover:border-[#d7343a] hover:shadow-lg transition-all">
          <a href="https://g.co/kgs/TLGAFc9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d7343a]/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#d7343a]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2f3033] mb-2">Our Address</h3>
              <p className="text-sm text-gray-600">Kota Gudhyari Road,<br />Infront of Singapore City<br />Raipur, Chhattisgarh</p>
            </div>
          </a>
        </div>
        <div className="rounded border bg-white p-6 hover:border-[#d7343a] hover:shadow-lg transition-all">
          <a href="mailto:vivekagr100@gmail.com" className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d7343a]/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#d7343a]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2f3033] mb-2">Email Us</h3>
              <p className="text-sm text-[#d7343a] font-medium">vivekagr100@gmail.com</p>
              <p className="text-xs text-gray-600 mt-1">Email us anytime for any kind of query.</p>
            </div>
          </a>
        </div>
        <div className="rounded border bg-white p-6 hover:border-[#d7343a] hover:shadow-lg transition-all">
          <a href="tel:+91-94792-45129" className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d7343a]/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#d7343a]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2f3033] mb-2">Call Us</h3>
              <p className="text-sm text-[#d7343a] font-medium">+91-94792-45129<br />+91-96857-77472</p>
              <p className="text-xs text-gray-600 mt-1">Call us for any kind of support, we will wait for it.</p>
            </div>
          </a>
        </div>
      </div>

      <section className="rounded border bg-white p-6">
        <h2 className="text-xl font-semibold text-[#2f3033] mb-4">Ready To Get Started?</h2>
        <p className="text-sm text-[#2f3033] mb-6">
          We would glad to hear from you! Whether you have a question about our services, need support, or just want to
          share feedback, feel free to contact us filling the information below:
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
