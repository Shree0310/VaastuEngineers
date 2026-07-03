import Image from "next/image";

export const metadata = {
  title: "About Us – Vaastu Group Of Engineers – Industrial Project Consultant",
  description:
    "Vaastu Group Of Engineers, Established In The Year 1991, Is A Trusted Name In The Field Of Industrial And Commercial Structural Consulting.",
};

export default function AboutUs() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2f3033] mb-6">About Us</h1>
      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
          alt="Industrial construction and engineering"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="space-y-5 text-[#2f3033]">
        <p>
          Vaastu Group Of Engineers, Established In The Year 1991, Is A Trusted Name In The Field Of Industrial And
          Commercial Structural Consulting. With Over Three Decades Of Experience, We Specialize In Providing
          Comprehensive Design And Drawing Solutions Tailored To Meet The Needs Of Complex Structures.
        </p>
        <p>
          Our Firm Vaastu Group Of Engineers Is Built On A Foundation Of Precision, Innovation, And Engineering
          Excellence. From Concept To Execution, We Work Closely With Our Clients To Deliver Structurally Sound,
          Efficient, And Cost-Effective Solutions That Align With Client Vision And As per engineering Standards.
        </p>
        <p>
          At Vaastu Group Of Engineers, We Combine Deep Technical Expertise With Practical Experience To Offer
          High-Quality Consultancy Services That Support Successful Industrial And Commercial Projects. Whether It Is
          Structural Designing, Planning, Or Drafting, Our Goal Is To Ensure Safe, Sustainable, And Smart Engineering
          Outcome.
        </p>
        <p>
          Driven By A Quality Commitment And Client Satisfaction, We Continue To Grow As A Reliable Consultant For
          Engineering Excellence.
        </p>
      </div>
    </main>
  );
}
