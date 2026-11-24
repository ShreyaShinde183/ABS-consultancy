import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          {/* Column 1: Firm Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <span className="text-xl font-black text-white tracking-tight block uppercase group-hover:text-[#EAB308] transition-colors duration-300">
                ABS Consultancy
              </span>
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase block mt-0.5">
                Chartered Accountants & Advisors
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A premier Chartered Accountancy and financial advisory practice adhering to Institute of Chartered Accountants of India (ICAI) standards. Delivering institutional-grade auditing, tax litigation, corporate MCA compliances, and Virtual CFO advisory from Pune, Maharashtra.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>ICAI Aligned Practice • UDIN Verified</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Practice Verticals
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Sectors & Industries
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="hover:text-white transition-colors">
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers & Articleship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-white transition-colors block line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-accent hover:text-amber-400 font-semibold inline-flex items-center gap-1"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pune Head Office
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Office No. 70, 4th Floor, Patil Arcade, Above Kalinga Hotel, Khilare Road, Near Tech Mahindra, Erandwane, Pune - 411004, MH, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919028644499" className="hover:text-white transition-colors">
                  +91 9028644499
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:rahulchate.ca@gmail.com" className="hover:text-white transition-colors">
                  rahulchate.ca@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Mon - Sat: 10:00 AM - 06:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & ICAI Compliance Disclaimer */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p className="font-bold text-slate-300 uppercase tracking-wider">
            Important Regulatory Disclaimer:
          </p>
          <p>
            As per professional guidelines, this website is intended solely for general informational purposes and does not constitute advertisement, personal communication, invitation, or professional solicitation. The information provided herein is subject to continuous modifications in taxation, corporate laws, and accounting standards. Applicability of rules depends on the specific facts and circumstances of each individual or corporate case. Professional consultation should be obtained from practicing Chartered Accountants and advisors prior to taking any financial, legal, or commercial action.
          </p>
        </div>

        {/* Copyright & Meta Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} ABS Consultancy. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy & Data Security
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
