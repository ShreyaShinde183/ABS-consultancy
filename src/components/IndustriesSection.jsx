import React from 'react';
import { Link } from 'react-router-dom';
import IndustryCard from './IndustryCard';
import industriesData from '../data/industries.json';
import { Briefcase, ArrowRight } from 'lucide-react';

const IndustriesSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent mb-1.5">
            <Briefcase className="w-4 h-4" />
            <span>Sector Specialization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Tailored Industry Compliance Frameworks
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every sector faces distinct statutory challenges—from inverted duty structures in manufacturing to recurring SaaS revenue recognition under Ind AS 115.
          </p>
        </div>

        {/* 8 Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>

        {/* View Details Link */}
        <div className="mt-10 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-navy hover:bg-primary-900 rounded-xl shadow-xs hover:shadow transition-all group"
          >
            <span>Explore In-Depth Sector Challenges & CA Solutions</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
