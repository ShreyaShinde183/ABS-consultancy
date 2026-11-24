import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import TrustIndicators from '../components/TrustIndicators';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesSection from '../components/IndustriesSection';
import TaxCalculator from '../components/TaxCalculator';
import WorkflowSection from '../components/WorkflowSection';
import Testimonials from '../components/Testimonials';
import ConsultationForm from '../components/ConsultationForm';
import { Calculator, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Search Engine Optimization Metadata */}
      <SEO
        title="ABS Consultancy | CA Firm in Pune | Tax & Audit Consultants"
        description="Premier CA Firm in Pune offering professional Tax Consulting, GST Compliance, Statutory Audit Services & Accounting Services in Erandwane, Pune. Schedule a consultation today."
        keywords="CA Firm in Pune, GST Consultant in Pune, Tax Consultant in Pune, Accounting Services, Audit Services, Chartered Accountant Erandwane Pune, Income Tax Filing Pune, Virtual CFO Pune"
        canonical="/"
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Indicators */}
      <TrustIndicators />

      {/* 3. Services Overview Grid */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Industries Section */}
      <IndustriesSection />

      {/* 6. Featured Tax Calculator Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1.5">
              Free Financial Advisory Tool
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              Compare Old vs. New Tax Regime Instantly
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Plan your direct tax liability under Section 115BAC or the traditional slab system with deductions. Explore our full suite of calculators for GST, HRA, and Gratuity.
            </p>
          </div>

          {/* Interactive Calculator */}
          <TaxCalculator />

          <div className="mt-8 text-center">
            <Link
              to="/calculators"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-primary-900 hover:text-accent transition-colors gap-1.5"
            >
              <span>Explore All 5 Interactive Financial Calculators & Tax Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Client Engagement Workflow */}
      <WorkflowSection />

      {/* 8. Testimonials Carousel */}
      <Testimonials />

      {/* 9. Direct Consultation & Office Info Section */}
      <section className="py-12 sm:py-16 bg-slate-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 5 Cols: Office Overview & Direct Contact */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                  Headquarters & Consultation
                </span>
                <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                  Connect With Practicing Chartered Accountants
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Whether you are planning your quarterly advance tax, facing department scrutiny notices, or restructuring corporate capital, our partners are ready to assist.
                </p>
              </div>

              {/* Office Details Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <MapPin className="w-5 h-5 text-primary-800" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <h4 className="font-bold text-navy">Pune Head Office</h4>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">
                      Office No. 70, 4th Floor, Patil Arcade, Above Kalinga Hotel, Khilare Road, Near Tech Mahindra, Erandwane, Pune - 411004, Maharashtra.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <Phone className="w-5 h-5 text-primary-800" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <h4 className="font-bold text-navy">Direct Line / WhatsApp</h4>
                    <a href="tel:+919028644499" className="text-primary-800 font-semibold hover:underline">
                      +91 9028644499
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <Mail className="w-5 h-5 text-primary-800" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <h4 className="font-bold text-navy">Official Email</h4>
                    <a href="mailto:rahulchate.ca@gmail.com" className="text-primary-800 font-semibold hover:underline">
                      rahulchate.ca@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <Clock className="w-5 h-5 text-primary-800" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <h4 className="font-bold text-navy">Consultation Hours</h4>
                    <p className="text-slate-500 mt-0.5">Mon - Sat: 10:00 AM – 06:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Consultation Format Badges */}
              <div className="bg-navy text-white p-5 rounded-2xl shadow-sm space-y-2">
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider block">
                  Flexible Engagement Modes
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We welcome in-person client conferences at our Erandwane office, as well as scheduled video consultations via Google Meet & Zoom for businesses across Mumbai, Delhi, Bangalore, and growing corporate enterprises.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
