import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import industriesData from '../data/industries.json';
import IndustryDetails from '../components/IndustryDetails';
import { Briefcase, ArrowRight, ShieldCheck, Factory, Home as HomeIcon, ChevronRight } from 'lucide-react';

const Industries = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-50">
      {/* Search Engine Optimization */}
      <SEO
        title="Industry-Specific Financial & Tax Solutions | ABS Consultancy Pune"
        description="Tailored CA, GST, Audit and Accounting Services for Manufacturing, IT & Startups, Real Estate, Healthcare, Retail & NGOs by ABS Consultancy in Pune."
        keywords="Industry Tax Solutions Pune, CA for Startups Pune, Manufacturing GST Audit Pune, Real Estate Tax Consultant Pune, Healthcare Accounting Services Pune"
        canonical="/industries"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' }
        ]}
      />

      {/* Header Banner with Pure CSS Technical Dark Navy Grid */}
      <section className="bg-tech-navy-grid text-white py-16 sm:py-20 border-b border-blue-950/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.18),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-xs font-medium text-slate-400 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">Industries</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-accent text-xs font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Specialized Practice Domains</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Industry-Specific Solutions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every business vertical operates under unique statutory dynamics. Explore how our practice addresses industry-specific financial hurdles.
          </p>

          {/* Quick Anchor Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {industriesData.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: All Industries with Detailed Challenges & Solutions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industriesData.map((industry) => (
            <IndustryDetails key={industry.id} industry={industry} />
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold text-navy">
            Looking for Domain-Specific Compliance Guidance?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our team assists organizations in structuring their accounting, direct taxes, and GST to align flawlessly with sector requirements.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-navy hover:bg-primary-900 rounded-xl shadow-md transition-all group"
            >
              <span>Consult Our Sector Specialists</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
