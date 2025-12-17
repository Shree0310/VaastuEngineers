export const metadata = {
  title: "Services – Vaastu Group Of Engineers – Industrial Project Consultant",
  description: "Comprehensive design, engineering, audits, sustainability and water management services.",
};

export default function Services() {
  const groups = [
    {
      title: "Design & Engineering",
      items: [
        "Design, Planning & Co-Ordination",
        "Design: Civil-Engineering & Architecture",
        "Detailed And Basic Engineering",
        "Detailed Project Reports/ Detailed Designs",
        "Earthquake Engineering Foundations & Geology",
        "Site Supervision, Testing And Commissioning",
        "Contract Administration N Cost Estimation & Control",
      ],
    },
    {
      title: "Supervision & Audits",
      items: [
        "Supervision & Quality Control",
        "Geotechnical And Surveys",
        "Soil/ Sub-Soil Investigations",
        "Plant Layout And Crane /Gantry/Material Handling",
        "Project Management Consultancy",
        "Technical Audit",
        "Contracts Reviews",
        "Pre-Bid Engineering Services",
        "Material And Energy Balance",
      ],
    },
    {
      title: "Architecture & Sustainability",
      items: [
        "Architecture, Landscape And Interior Design",
        "Asset Valuations",
        "Pollution Control And Waste Minimization",
        "Effluent Treatment Systems N Sewerage Planning",
        "EIA, EMP And R & R Planning Services",
        "Energy Conservation",
        "Due Diligence Services",
        "Green And Energy Efficient Buildings",
      ],
    },
    {
      title: "Water & Waste Management",
      items: [
        "Solid Waste Management",
        "Water & Waste Water Management",
        "Water Supply And Distribution",
        "Land Surveys, Studies & Investigations",
        "Topographic Surveys And Site Appraisals",
        "Tender Documents And Negotiations",
        "Technical Software Preparation",
        "Safety Assessments And Audits",
        "Feasibility And Pre-Bid Engineering Services",
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2f3033] mb-8">Services We Offer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((g) => (
          <div key={g.title} className="rounded border bg-white p-6">
            <h2 className="text-xl font-semibold text-[#2f3033] mb-4">{g.title}</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#2f3033]">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
