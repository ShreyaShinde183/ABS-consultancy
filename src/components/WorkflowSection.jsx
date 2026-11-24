import React from 'react';
import { PhoneCall, Search, ShieldCheck, RefreshCw } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'We discuss your business structure, pain points, impending compliance deadlines, and immediate advisory requirements via phone, video call, or at our Pune office.',
    icon: PhoneCall,
  },
  {
    step: '02',
    title: 'Understanding Requirements',
    description:
      'Our chartered accountants review past ITRs, GST 2B/3B filings, financial statements, and litigation history to draft a bespoke statutory scope of work.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Execution & Compliance',
    description:
      'Execution adhering strictly to ICAI standards. We complete tax computations, audits, reconciliations, and regulatory filings backed by mandatory UDIN generation.',
    icon: ShieldCheck,
  },
  {
    step: '04',
    title: 'Review & Continuous Support',
    description:
      'Periodic executive debriefs, quarterly advance tax estimations, MIS reporting, and proactive alerts on legal amendments affecting your business.',
    icon: RefreshCw,
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1.5">
            Systematic Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Our 4-Step Client Engagement Process
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Eliminating guesswork and regulatory delays through structured, transparent, and deadline-driven advisory workflows.
          </p>
        </div>

        {/* Timeline Grid (Horizontal Desktop / Vertical Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-7 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/4 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 z-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-slate-200 font-serif">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-800">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
