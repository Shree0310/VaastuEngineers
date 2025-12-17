import Image from "next/image";

type Member = { name: string; role: string; img: string };

const members: Member[] = [
  { name: "VIVEK AGARWAL", role: "DIRECTOR", img: "https://ext.same-assets.com/3352166871/2047434408.jpeg" },
  { name: "VIKAS RATHORE", role: "SENIOR RCC STRUCTURAL DESIGNER", img: "https://ext.same-assets.com/3352166871/2913470673.jpeg" },
  { name: "GARIMA SAHU", role: "OFFICE MGMT & STEEL STRUCTURAL", img: "https://ext.same-assets.com/3352166871/4039920057.jpeg" },
  { name: "GULESHWARI SAHU", role: "RCC STRUCTURAL ENGINEER", img: "https://ext.same-assets.com/3352166871/1482089064.jpeg" },
  { name: "RAHUL NISHAD", role: "STEEL STRUCTURAL ENGINEER", img: "https://ext.same-assets.com/3352166871/2180640624.jpeg" },
  { name: "KHILESH KUNJAM", role: "STEEL STRUCTURAL ENGINEER", img: "https://ext.same-assets.com/3352166871/1095439568.jpeg" },
  { name: "DIPESH RATHORE", role: "RCC STRUCTURAL ENGINEER", img: "https://ext.same-assets.com/3352166871/3627927290.jpeg" },
  { name: "ATTUL AGARWAL", role: "ARCHITECTURAL DESIGNER", img: "https://ext.same-assets.com/3352166871/2712392463.jpeg" },
];

export const metadata = {
  title: "Our Team – Vaastu Group Of Engineers – Industrial Project Consultant",
  description: "Collective Leadership – It's how we work.",
};

export default function OurTeam() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2f3033] mb-8">Collective Leadership</h1>
      <p className="text-[#2f3033] mb-6 italic">Its how we work</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {members.map((m) => (
          <div key={m.name} className="rounded border bg-white p-3">
            <div className="relative aspect-square overflow-hidden rounded">
              <Image src={m.img} alt={m.name} fill className="object-cover" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-[#2f3033]">{m.name}</h3>
            <p className="text-xs text-[#2f3033]">{m.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
