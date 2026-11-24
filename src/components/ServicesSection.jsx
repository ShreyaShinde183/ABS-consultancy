import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import servicesData from '../data/services.json';
import { ArrowRight, Layers } from 'lucide-react';

const categories = ['All', 'Taxation', 'Indirect Tax', 'Auditing', 'Corporate Law', 'Accounting', 'Advisory'];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices =
    activeCategory === 'All'
      ? servicesData
      : servicesData.filter((service) => service.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent mb-2">
            <Layers className="w-4 h-4" />
            <span>Practice Verticals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Institutional-Grade Audit & Tax Services
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            As a leading CA Firm in Pune, we deliver specialized statutory Audit Services, comprehensive Accounting Services, and experienced counsel as your trusted GST Consultant in Pune and Tax Consultant in Pune.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA to Full Services Page */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-navy bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs hover:shadow transition-all group"
          >
            <span>View All 8 Practice Verticals & Regulatory FAQs</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
