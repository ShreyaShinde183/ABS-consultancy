import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 min-h-[calc(100vh-105px)] flex items-center">
      {/* Background Hero Banner Image with Accessibility & SEO Label */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[right_center] lg:bg-[right_10%] pointer-events-none"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
        role="img"
        aria-label="ABS Consultancy - Top CA Firm in Pune Office Desk with Tax and Audit Analytics"
      />

      {/* Multi-stage Gradient Overlays to ensure 100% text legibility on the left while showing the office/laptop on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10 w-full">
        <div className="max-w-2xl space-y-5 text-left">
          {/* Exact Badge Matching Reference Website */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-sm text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
              CHARTERED ACCOUNTANTS
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-bold text-amber-600 tracking-wider uppercase text-[11px]">
              TAX • AUDIT • ADVISORY
            </span>
          </div>

          {/* Exact 3-line Headline Matching Reference Website */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-navy tracking-tight leading-[1.12]">
            Professional Expertise. <br />
            Practical Solutions. <br />
            <span className="text-amber-600">Reliable Advisory.</span>
          </h1>

          {/* Exact 2 Descriptive Paragraphs Naturally Featuring Target Keywords */}
          <div className="space-y-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
            <p>
              <strong className="text-navy font-semibold">ABS Consultancy</strong> is a premier <strong>CA Firm in Pune</strong> providing institutional-grade <strong>Audit Services</strong>, expert guidance as your trusted <strong>Tax Consultant in Pune</strong> and certified <strong>GST Consultant in Pune</strong>, alongside comprehensive corporate <strong>Accounting Services</strong>.
            </p>
            <p>
              We combine professional expertise with practical business understanding to help our clients remain compliant, financially informed and ready for growth.
            </p>
          </div>

          {/* Exact Action Buttons Matching Reference Website */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm hover:shadow transition-all group"
            >
              <Calendar className="w-4 h-4 text-amber-100" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-900 rounded-xl shadow-xs transition-colors"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
