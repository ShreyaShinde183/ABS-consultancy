import React from 'react';
import { Link } from 'react-router-dom';
import {
  Receipt,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Calculator,
  Building,
  Building2,
  Layers,
  TrendingUp,
  Briefcase,
  Globe,
  HeartHandshake,
  Scale,
  ArrowRight,
  Check
} from 'lucide-react';

// Icon map helper
const iconMap = {
  Receipt,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Calculator,
  Building,
  Building2,
  Layers,
  TrendingUp,
  Briefcase,
  Globe,
  HeartHandshake,
  Scale
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Briefcase;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Top: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-800 group-hover:bg-primary-900 group-hover:text-white transition-colors duration-200">
            <IconComponent className="w-6 h-6 group-hover:text-amber-400 transition-colors" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary-800 transition-colors">
          {service.title}
        </h3>

        {/* Subtitle / Pattern Tagline */}
        {service.subtitle && (
          <p className="text-xs font-semibold text-amber-600 mb-3">
            {service.subtitle}
          </p>
        )}

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Key Features Bullet List */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
            {service.features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-start text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5 mr-2" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-2 border-t border-slate-100/80">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center text-xs font-bold text-primary-900 group-hover:text-amber-600 transition-colors"
        >
          <span>Explore Deliverables & Scope</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
