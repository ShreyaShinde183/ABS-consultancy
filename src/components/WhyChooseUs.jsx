import React from 'react';
import {
  Users,
  BookOpen,
  CalendarCheck,
  MessageSquare,
  Cpu,
  Handshake
} from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Experienced Professionals',
    description:
      'Our practice is led by qualified Chartered Accountants with extensive experience representing clients before tax authorities, appellate tribunals, and statutory bodies.',
  },
  {
    icon: BookOpen,
    title: 'Deep Industry Knowledge',
    description:
      'We understand domain-specific intricacies across manufacturing, SaaS, real estate, healthcare, and NGOs, providing tailored compliance blueprints.',
  },
  {
    icon: CalendarCheck,
    title: 'Timely Compliance & Filings',
    description:
      'We proactively anticipate advance tax liabilities, GST reconciliations, and ROC deadlines well in advance, eliminating last-minute chaos and late fees.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description:
      'Clear, jargon-free advisory with transparent billing and prompt updates on regulatory amendments impacting your balance sheet.',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven Processes',
    description:
      'Leveraging modern cloud accounting (Tally Prime, Zoho Books, QuickBooks), automated ITC reconciliations, and secure client document repositories.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Client Relationships',
    description:
      'We serve as strategic anchors and Virtual CFOs throughout your corporate lifecycle—from seed incorporation to complex institutional expansion.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1.5">
            Our Core Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Why Clients Choose ABS Consultancy
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            As an established CA Firm in Pune, we combine technical mastery in Audit Services and Accounting Services with prompt, partner-led counsel as your dedicated Tax Consultant in Pune.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary-200 hover:bg-white hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-800 group-hover:bg-navy group-hover:text-accent transition-colors mb-5 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2.5 group-hover:text-primary-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
