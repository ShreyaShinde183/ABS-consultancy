import React from 'react';
import { Award, ShieldCheck, Lock, UserCheck } from 'lucide-react';

const indicators = [
  {
    icon: Award,
    title: 'Professional Expertise',
    description: 'Led by seasoned Chartered Accountants bringing deep statutory and judicial insights across corporate, tax, and audit domains.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    description: '100% adherence to ICAI standards, mandatory UDIN generation, and complete alignment with the latest MCA & CBDT directives.',
  },
  {
    icon: Lock,
    title: 'Uncompromised Confidentiality',
    description: 'Institutional-grade data protection and non-disclosure standards safeguarding sensitive corporate and financial intelligence.',
  },
  {
    icon: UserCheck,
    title: 'Client-Focused Advisory',
    description: 'Proactive strategic partnering tailored to operational realities and cash flow constraints rather than generic compliance.',
  },
];

const TrustIndicators = () => {
  return (
    <section className="bg-white py-8 sm:py-10 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-200 border border-transparent hover:border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                  <Icon className="w-5 h-5 text-primary-800" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
