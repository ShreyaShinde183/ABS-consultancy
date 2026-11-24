import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Cpu,
  Rocket,
  Building2,
  Activity,
  ShoppingBag,
  Wheat,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

const industryIconMap = {
  Factory,
  Cpu,
  Rocket,
  Building2,
  Activity,
  ShoppingBag,
  Wheat,
  HeartHandshake,
};

const IndustryCard = ({ industry }) => {
  const IconComponent = industryIconMap[industry.icon] || Factory;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-800 group-hover:bg-navy group-hover:text-accent transition-colors mb-4">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-navy mb-2 group-hover:text-primary-900 transition-colors">
          {industry.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
          {industry.shortDescription}
        </p>

        {industry.challenges && (
          <div className="text-xs text-slate-600 border-t border-slate-100 pt-3 space-y-1.5">
            <span className="font-semibold text-navy text-[11px] uppercase tracking-wide block">Key Domain Focus:</span>
            <p className="line-clamp-2 text-slate-500 italic">"{industry.challenges[0]}"</p>
          </div>
        )}
      </div>

      <div className="pt-4 mt-2">
        <Link
          to={`/industries#${industry.id}`}
          className="inline-flex items-center text-xs font-bold text-primary-900 group-hover:text-accent transition-colors"
        >
          <span>Explore Sector Solutions</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
