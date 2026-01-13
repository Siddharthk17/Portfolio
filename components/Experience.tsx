import React from 'react';
import { TuiBox } from './TuiComponents';

const EXPERIENCE = [
  {
    role: "FINANCE INTERNSHIP",
    company: "BB ADVISORY",
    period: "Sept 2025 - Nov 2025",
    details: [
      "Gained hands-on experience in financial research, trading analytics, and market microstructure analysis.",
      "Explored tools and frameworks including Python, Excel, and quantitative modeling techniques for equities and derivatives.",
      "Built foundational knowledge in risk management, portfolio evaluation, and automated data workflows."
    ]
  },
  {
    role: "FINANCE RESEARCH ANALYST INTERN",
    company: "SAVVY MERIT",
    period: "Aug 2025 - Sept 2025",
    details: [
      "Engineered high-quality financial research workflows and data-driven models in Python/Excel, processing 10K+ datapoints for faster, accurate portfolio insights.",
      "Analyzed multi-sector equities using DCF and relative multiples, improving research precision by ~20–25% and supporting risk–return assessments.",
      "Produced enterprise-grade research decks adopted by management, enhancing decision clarity and reducing review time ~30%."
    ]
  },
  {
    role: "FOUNDER / CFO",
    company: "17 - A HEDGE FUND (Self Founded)",
    period: "2023 - Present",
    details: [
      "Built a quantitative research pipeline processing 250K+ market datapoints with 40+ predictive trading models.",
      "Developed a 24/7 automated execution system with ms-level latency and robust failover.",
      "Implemented risk models and scalable infrastructure, reducing downside exposure by 22%+",
      "Scaled infrastructure to multi-six-figure AUM readiness using AWS, Docker, and high-integrity data flows."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-end justify-between mb-8 border-b-2 border-gruv-bgSoft pb-2">
        <h2 className="text-3xl font-bold text-gruv-purple">
           <span className="text-gruv-gray mr-2">03.</span>LOG_HISTORY
        </h2>
      </div>

      <div className="space-y-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gruv-bgSoft hidden md:block"></div>

        {EXPERIENCE.map((exp, i) => (
           <div key={i} className="relative md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute left-[13px] top-6 w-2 h-2 bg-gruv-bg border-2 border-gruv-gray rounded-full hidden md:block group-hover:bg-gruv-purple group-hover:border-gruv-purple transition-colors z-10"></div>
              
              <TuiBox borderColor="border-gruv-bgSoft group-hover:border-gruv-purple" className="transition-colors duration-300">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gruv-fg group-hover:text-gruv-purple transition-colors">{exp.role}</h3>
                      <div className="text-gruv-blue font-bold tracking-wider text-sm">@{exp.company}</div>
                    </div>
                    <div className="mt-2 md:mt-0 px-3 py-1 bg-gruv-bgSoft text-xs font-mono text-gruv-fgAlt inline-block">
                       {exp.period}
                    </div>
                 </div>
                 <ul className="space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-gruv-fgAlt text-sm flex items-start gap-2">
                         <span className="text-gruv-purple mt-1">{'>>'}</span> {detail}
                      </li>
                    ))}
                 </ul>
              </TuiBox>
           </div>
        ))}
      </div>
    </section>
  );
};
