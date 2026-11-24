import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Calculator,
  Receipt,
  FileText,
  Building2,
  TrendingUp,
  Globe,
  HeartHandshake,
  Scale
} from 'lucide-react';
import servicesData from '../data/services.json';

// Icon Map for Dropdown
const iconMap = {
  Calculator,
  Receipt,
  ShieldCheck,
  Building2,
  FileText,
  TrendingUp,
  Globe,
  HeartHandshake,
  Scale
};

// Exact balanced column split (4 items each, total 8 practice verticals)
const leftColumnIds = ['income-tax', 'auditing-assurance', 'digital-accounting', 'tax-litigation'];
const rightColumnIds = ['gst-compliance', 'corporate-mca', 'virtual-cfo', 'ngo-trust'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location]);

  const leftServices = servicesData.filter((s) => leftColumnIds.includes(s.id));
  const rightServices = servicesData.filter((s) => rightColumnIds.includes(s.id));

  // Desktop navigation link style with 0.3s smooth transition & golden yellow (#EAB308) active/hover
  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-300 ease-in-out py-1 px-1 relative ${
      isActive
        ? 'text-[#EAB308] font-bold'
        : 'text-slate-700 hover:text-[#EAB308]'
    }`;

  // Mobile navigation link style with 0.3s smooth transition & golden yellow (#EAB308) active/hover
  const mobileNavLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out ${
      isActive
        ? 'bg-amber-50/80 text-[#EAB308] font-bold'
        : 'text-slate-700 hover:text-[#EAB308] hover:bg-slate-50'
    }`;

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-200 ${isScrolled ? 'shadow-md py-2.5' : 'border-b border-slate-100 py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity: ABS Consultancy (CA Logo removed as requested) */}
          <Link to="/" className="flex flex-col justify-center py-1 group">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-navy block leading-tight uppercase group-hover:text-[#EAB308] transition-colors duration-300">
              ABS Consultancy
            </span>
            <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase block mt-0.5">
              Chartered Accountants • Pune
            </span>
          </Link>

          {/* Center Navigation Links (Home, About Us, Services, Tax Tools, Careers, Contact) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Services Dropdown Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`text-sm font-semibold transition-colors duration-300 ease-in-out flex items-center gap-1.5 py-1 px-1 ${
                  isServicesActive || servicesDropdown
                    ? 'text-[#EAB308] font-bold'
                    : 'text-slate-700 hover:text-[#EAB308]'
                }`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                {servicesDropdown ? (
                  <ChevronUp className={`w-4 h-4 transition-colors duration-300 ease-in-out ${isServicesActive || servicesDropdown ? 'text-[#EAB308]' : 'text-slate-500'}`} />
                ) : (
                  <ChevronDown className={`w-4 h-4 transition-colors duration-300 ease-in-out ${isServicesActive ? 'text-[#EAB308]' : 'text-slate-500'}`} />
                )}
              </button>

              {/* Exact 2-Column Mega Menu Pattern with Yellow Hover on Items */}
              {servicesDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-5">
                    {/* Column 1 (Left 5 items) */}
                    <div className="space-y-4">
                      {leftServices.map((service) => {
                        const Icon = iconMap[service.icon] || FileText;
                        return (
                          <Link
                            key={service.id}
                            to={`/services#${service.id}`}
                            className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-slate-50 group transition-all duration-300 ease-in-out"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-800 shrink-0 group-hover:bg-[#EAB308] group-hover:text-slate-950 group-hover:border-[#EAB308] transition-colors duration-300 ease-in-out">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-navy group-hover:text-[#EAB308] transition-colors duration-300 ease-in-out leading-tight">
                                {service.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                                {service.subtitle}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Column 2 (Right 4 items) */}
                    <div className="space-y-4">
                      {rightServices.map((service) => {
                        const Icon = iconMap[service.icon] || FileText;
                        return (
                          <Link
                            key={service.id}
                            to={`/services#${service.id}`}
                            className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-slate-50 group transition-all duration-300 ease-in-out"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-800 shrink-0 group-hover:bg-[#EAB308] group-hover:text-slate-950 group-hover:border-[#EAB308] transition-colors duration-300 ease-in-out">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-navy group-hover:text-[#EAB308] transition-colors duration-300 ease-in-out leading-tight">
                                {service.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                                {service.subtitle}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mega Menu Footer matching screenshot with Yellow Hover */}
                  <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      to="/services"
                      className="font-bold text-primary-900 hover:text-[#EAB308] flex items-center gap-1.5 transition-colors duration-300 ease-in-out"
                    >
                      <span>View All 8 Practice Verticals</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-medium text-slate-400">
                      ICAI Aligned Practice • Erandwane, Pune
                    </span>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/calculators" className={navLinkClass}>
              Tax Tools
            </NavLink>
            <NavLink to="/careers" className={navLinkClass}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Book Consultation Button (Matching gold/yellow rounded button in screenshot) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#EAB308] hover:bg-slate-100 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-100 space-y-1 animate-in fade-in slide-in-from-top-3">
            <NavLink to="/" className={mobileNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={mobileNavLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" className={mobileNavLinkClass}>
              Services (8 Practice Verticals)
            </NavLink>
            <NavLink to="/calculators" className={mobileNavLinkClass}>
              Tax Tools
            </NavLink>
            <NavLink to="/careers" className={mobileNavLinkClass}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass}>
              Contact
            </NavLink>
            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-xs transition-colors duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
