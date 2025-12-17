import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us – Vaastu Group Of Engineers – Industrial Project Consultant",
  description: "Reach us via address, email or phone. Send us a message using the form.",
};

export default function ContactUs() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2f3033] mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="rounded border bg-white p-6">
          <a href="https://g.co/kgs/TLGAFc9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
            <Image src="https://ext.same-assets.com/3352166871/876194102.svg" alt="Map" width={30} height={30} />
            <div>
              <h3 className="font-semibold text-[#2f3033]">Our Address</h3>
              <p className="text-sm text-[#2f3033]">Kota Gudhyari Road,<br />Infront of Singapore City<br />Raipur, Chhattisgarh</p>
            </div>
          </a>
        </div>
        <div className="rounded border bg-white p-6">
          <a href="mailto:vivekagr100@gmail.com" className="flex items-start gap-3">
            <Image src="https://ext.same-assets.com/3352166871/2518525645.svg" alt="Email" width={30} height={30} />
            <div>
              <h3 className="font-semibold text-[#2f3033]">vivekagr100@gmail.com</h3>
              <p className="text-sm text-[#2f3033]">Email us anytime for any kind of query.</p>
            </div>
          </a>
        </div>
        <div className="rounded border bg-white p-6">
          <a href="tel:+91-94792-45129" className="flex items-start gap-3">
            <Image src="https://ext.same-assets.com/3352166871/171311963.svg" alt="Phone" width={30} height={30} />
            <div>
              <h3 className="font-semibold text-[#2f3033]">+91-94792-45129<br />+91-96857-77472</h3>
              <p className="text-sm text-[#2f3033]">Call us for any kind of support, we will wait for it.</p>
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
