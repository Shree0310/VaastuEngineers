export const metadata = {
  title: "Projects – Vaastu Group Of Engineers – Industrial Project Consultant",
  description: "Projects we have handled across steel, rolling mills, power plants, food processing, commercial and environment.",
};

type Section = { title: string; items: string[] };

const sections: Section[] = [
  {
    title: "Steel, Power & Industrial Projects",
    items: [
      "Induction Furnace / Caster and Hot Billet Charging in Rolling Mills",
      "Bajrangbali Re-Rollers, Rourkela (Odisha)",
      "Rama Metal, Raipur",
      "Rama Power, Raipur",
      "Rama Udyog, Raipur",
      "Sadguru Ispat Pvt. Ltd., Raigarh",
      "Sambhavi Ispat, Gerwani & Raipur",
      "Sarti Ispat, Raipur",
      "Sarvottam, Raipur",
      "Shivali Udyog Pvt. Ltd.",
      "Shree Hanuman Loha, Raipur",
      "Shree Rupanadham Steel Pvt. Ltd., Raigarh",
      "Shresth Steel, Ranchi (Jharkhand)",
      "Shri Bankebihari Ispat (Raigarh & Punjipatra)",
      "Shyam Ispat, Raigarh",
      "Shyam Industry, Siltara, Raipur",
      "Singhal Energy Pvt. Ltd., Raigarh",
      "Singhal Enterprises, Raigarh",
      "SKS Ispat & Power Ltd., Raipur",
      "Sky Alloys & Power Pvt. Ltd., Raigarh",
      "Somnath Iron & Steel, Raipur",
      "Vandana Ispat, Urla Raipur",
      "Zeon Steels, Raigarh",
      "Gagan Resources, Siltara",
      "Ganpati Iron & Steel",
      "Zion, Raigarh",
      "Ishwar Ispat",
      "Jay Ambe, Urla Raipur",
      "Karni Kripa, Mahasamund",
      "Kalandi Ispat, Bilaspur",
      "Maa Gayatri Ispat",
      "Mahalaxmi Casting",
      "Nandan Pipe",
    ],
  },
  {
    title: "Rolling Mills & Wire Drawing Units",
    items: [
      "Agrawal Rolling Mill, Raipur",
      "Mahaveer Rolling Mill",
      "Suraj Rolling Mill",
      "DS Ducto Fab",
      "Hariom TMT, Palghar",
      "Bhagwati Pipes, Raipur",
      "Vandana Industries, Raipur",
      "Surya Wires Pvt. Ltd., Raipur",
      "Swastik Wires, Raigarh",
      "Intellect Wires, Raipur",
      "Shri Hanuman Wiron Pvt. Ltd., Raipur",
      "Govardhan Wires, Tilda",
    ],
  },
  {
    title: "Sponge Iron Units & Power Plants",
    items: [
      "Global Hi-Tech Industries Ltd., Gujarat",
      "Ghankun Ispat, Siltara",
      "Hanumant Alloys, Bilaspur",
      "P.D. Industries Ltd., Siltara",
      "Satyarth Steel & Power Ltd., Raipur",
      "Sharda Sponge Ltd., C.G.",
      "Swadesh Metallic Pvt. Ltd., Kesda Raipur",
      "VAP Ispat Pvt. Ltd.",
    ],
  },
  {
    title: "Food Processing & Rice Mills",
    items: [
      "Navic Oil & Foods Solvent",
      "Sanjay Grains, Sakri Raipur",
      "Shiv Agro Products, Gundardehi",
      "Uma Shri Rice Mill",
      "Ecofora, Tilda",
      "Many rice mills (216 TPH)",
    ],
  },
  {
    title: "Land Development, Commercial & Misc. Projects",
    items: [
      "Jaguar Showroom, Raipur",
      "Magneto Mall, Raipur",
      "Church at Tatibandh, Raipur",
      "Jindal Industrial Park, Raigarh",
      "Jindal Airstrip Hangar, Raigarh",
      "Ashoka Aluminium Pvt. Ltd., Raipur",
      "Carbon Edge Coke Oven, Gujarat",
      "Usha Fuels (Coke Oven), Dhaneli",
      "NMDC Nagarnar (BEC), C.G.",
      "Viransh Paper Industry",
      "Yugbudh Publication, Raipur",
      "Mojo Mushroom project",
      "Bar Council Building, Raipur",
      "Red Cross Society Hospital Projects",
    ],
  },
  {
    title: "Environment & Effluent Treatment Projects",
    items: [
      "Bag filters, ESP, Wet scrubbers",
      "EIA & EMP reports",
      "Oil extraction units (energy audits)",
      "Effluent Treatment Plants (industrial & domestic)",
      "Environmental stack monitoring & remedies",
    ],
  },
  {
    title: "Cement Industries",
    items: [
      "Ambuja Cements, C.G.",
      "Grasim Cements, Raipur",
      "For Acid Waste Producing Units (G.I. Plant)",
    ],
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2f3033] mb-8">Projects we have handled</h1>
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.title} className="rounded border bg-white p-6">
            <h2 className="text-xl font-semibold text-[#2f3033] mb-4">{s.title}</h2>
            <ul className="list-disc pl-5 space-y-1 text-[#2f3033]">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
