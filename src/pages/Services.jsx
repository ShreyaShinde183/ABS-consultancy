import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useLocation, Link } from 'react-router-dom';
import servicesData from '../data/services.json';
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
  ChevronDown,
  ArrowRight,
  HelpCircle,
  Check,
  Home as HomeIcon,
  ChevronRight
} from 'lucide-react';

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

const categories = ['All', 'Taxation', 'Indirect Tax', 'Auditing', 'Corporate Law', 'Accounting', 'Advisory', 'Litigation'];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState({});
  const location = useLocation();

  // Handle hash scrolling
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

  const toggleFaq = (key) => {
    setOpenFaq((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredServices =
    selectedCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Search Engine Optimization */}
      <SEO
        title="Chartered Accountancy & Audit Services in Pune | ABS Consultancy"
        description="Comprehensive CA & Audit Services in Pune: Income Tax, GST Consulting, Statutory Audits, MCA Compliance, Digital Accounting & Virtual CFO Services."
        keywords="Audit Services Pune, GST Consultant in Pune, Tax Consultant in Pune, Accounting Services, CA Firm in Pune, Statutory Audit Services, Virtual CFO Services"
        canonical="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />

      {/* Dark Hero Banner with pure CSS technical navy grid */}
      <section className="bg-tech-navy-grid text-white py-14 sm:py-20 border-b border-blue-950/80 relative overflow-hidden">
        {/* Subtle radial illumination for depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.18),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb matching screenshot */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-400 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">Services</span>
          </nav>

          {/* Badge matching screenshot */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>PRACTICE AREAS & DELIVERABLES</span>
          </div>

          {/* Headline matching screenshot */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl text-white leading-tight">
            Our Professional Accountancy & Advisory Services
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            From direct tax planning as an experienced <strong>Tax Consultant in Pune</strong> and monthly compliance as your certified <strong>GST Consultant in Pune</strong> to institutional-grade <strong>Audit Services</strong> and digital <strong>Accounting Services</strong>, explore our 8 specialized practice verticals.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List with In-Depth Breakdown & FAQs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs hover:shadow-card transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column (7 cols): Overview & Capabilities */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-800 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                          {service.category} Practice
                        </span>
                        <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {service.detailedDescription || service.shortDescription}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                        Key Deliverables & Scope:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-start text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                          >
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 mr-2" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-white bg-navy hover:bg-primary-900 px-5 py-2.5 rounded-xl transition-colors gap-2"
                      >
                        <span>Enquire for {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (5 cols): FAQs */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                    <div className="flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-wider mb-2">
                      <HelpCircle className="w-4 h-4 text-amber-600" />
                      <span>Regulatory FAQs & Insights</span>
                    </div>

                    {service.faqs && service.faqs.length > 0 ? (
                      <div className="space-y-3">
                        {service.faqs.map((faq, idx) => {
                          const faqKey = `${service.id}-${idx}`;
                          const isOpen = openFaq[faqKey] ?? idx === 0;
                          return (
                            <div
                              key={idx}
                              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                            >
                              <button
                                onClick={() => toggleFaq(faqKey)}
                                className="w-full px-4 py-3 text-left text-xs sm:text-sm font-bold text-navy flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                              >
                                <span>{faq.question}</span>
                                <ChevronDown
                                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {isOpen && (
                                <div className="px-4 pb-3 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                                  {faq.answer}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500">
                        Contact our team for specialized statutory documentation guidelines.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="bg-navy text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Require Custom Regulatory or Audit Scopes?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Speak directly with our Chartered Accountants to discuss customized engagement terms.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-sm shrink-0"
          >
            Request Engagement Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
