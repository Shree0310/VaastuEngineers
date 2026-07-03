export const metadata = {
  title: "Services – Vaastu Group Of Engineers – Industrial Project Consultant",
  description: "Comprehensive design, engineering, audits, sustainability and water management services.",
};

import { Hammer, ClipboardCheck, Leaf, Droplet } from "lucide-react";

export default function Services() {
  const groups = [
    {
      title: "Design & Engineering",
      icon: Hammer,
      description: "Comprehensive structural design and engineering solutions for industrial and commercial projects.",
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
      icon: ClipboardCheck,
      description: "Expert supervision, quality control and comprehensive audit services for project excellence.",
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
      icon: Leaf,
      description: "Sustainable architecture and environmental solutions for modern, eco-friendly infrastructure.",
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
      icon: Droplet,
      description: "Advanced water management and waste treatment solutions for sustainable operations.",
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
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2f3033] mb-4">Services We Offer</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive engineering consultancy services designed to deliver excellence in industrial and commercial projects
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((g) => {
          const IconComponent = g.icon;
          return (
            <div
              key={g.title}
              className="rounded-lg border bg-white p-6 hover:shadow-xl hover:border-[#d7343a] transition-all duration-300 group"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#d7343a]/10 flex items-center justify-center group-hover:bg-[#d7343a]/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-[#d7343a]" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#2f3033] mb-2">{g.title}</h2>
                  <p className="text-sm text-gray-600">{g.description}</p>
                </div>
              </div>

              {/* Services List */}
              <ul className="space-y-2.5 mt-6">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#2f3033]">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#d7343a] mt-2"></span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-[#2f3033] to-[#3d3e42] rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Need Expert Consultation?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Our team of experienced engineers is ready to help you with your next project. Get in touch with us today.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-[#d7343a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b6282e] transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </main>
  );
}
