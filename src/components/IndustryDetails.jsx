import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const IndustryDetails = ({ industry }) => {
  return (
    <div id={industry.id} className="scroll-mt-28 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-accent">Sector Focus</span>
        <h3 className="text-2xl font-bold text-navy mt-1">{industry.name}</h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{industry.shortDescription}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
        {/* Specific Industry Challenges */}
        <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
          <div className="flex items-center gap-2 mb-4 text-rose-900 font-bold text-sm">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Inherent Statutory & Financial Challenges</span>
          </div>
          <ul className="space-y-3">
            {industry.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-2.5 shrink-0" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ABS Consultancy Solutions */}
        <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
          <div className="flex items-center gap-2 mb-4 text-emerald-950 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ABS Consultancy Tailored Solutions</span>
          </div>
          <ul className="space-y-3">
            {industry.solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 mr-2.5 shrink-0" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetails;
