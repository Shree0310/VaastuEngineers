import Image from "next/image";

type Member = { name: string; role: string; img: string };

const members: Member[] = [
  { name: "VIVEK AGARWAL", role: "DIRECTOR", img: "https://ui-avatars.com/api/?name=Vivek+Agarwal&size=200&background=d7343a&color=fff&bold=true" },
  { name: "VIKAS RATHORE", role: "SENIOR RCC STRUCTURAL DESIGNER", img: "https://ui-avatars.com/api/?name=Vikas+Rathore&size=200&background=2f3033&color=fff&bold=true" },
  { name: "GARIMA SAHU", role: "OFFICE MGMT & STEEL STRUCTURAL", img: "https://ui-avatars.com/api/?name=Garima+Sahu&size=200&background=d7343a&color=fff&bold=true" },
  { name: "GULESHWARI SAHU", role: "RCC STRUCTURAL ENGINEER", img: "https://ui-avatars.com/api/?name=Guleshwari+Sahu&size=200&background=2f3033&color=fff&bold=true" },
  { name: "RAHUL NISHAD", role: "STEEL STRUCTURAL ENGINEER", img: "https://ui-avatars.com/api/?name=Rahul+Nishad&size=200&background=d7343a&color=fff&bold=true" },
  { name: "KHILESH KUNJAM", role: "STEEL STRUCTURAL ENGINEER", img: "https://ui-avatars.com/api/?name=Khilesh+Kunjam&size=200&background=2f3033&color=fff&bold=true" },
  { name: "DIPESH RATHORE", role: "RCC STRUCTURAL ENGINEER", img: "https://ui-avatars.com/api/?name=Dipesh+Rathore&size=200&background=d7343a&color=fff&bold=true" },
  { name: "ATTUL AGARWAL", role: "ARCHITECTURAL DESIGNER", img: "https://ui-avatars.com/api/?name=Attul+Agarwal&size=200&background=2f3033&color=fff&bold=true" },
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
