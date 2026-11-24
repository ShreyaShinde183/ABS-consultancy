import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ConsultationForm from '../components/ConsultationForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Home as HomeIcon, ChevronRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50">
      {/* Search Engine Optimization */}
      <SEO
        title="Contact CA Firm in Pune | Office in Erandwane | ABS Consultancy"
        description="Get in touch with ABS Consultancy, leading CA Firm in Pune. Visit our Patil Arcade Erandwane office or schedule a virtual video call for Tax, GST, and Audit Services."
        keywords="Contact CA Firm in Pune, Chartered Accountant Erandwane, Tax Consultant in Pune Phone, GST Consultant Office Pune, CA Office Near Tech Mahindra Pune"
        canonical="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
      />

      {/* Header Banner with Premium Technical Dark Navy Blue Gradient & Grid */}
      <section className="bg-tech-navy-grid text-white py-14 sm:py-20 border-b border-blue-950/80 relative overflow-hidden">
        {/* Subtle radial illumination to provide soft depth without overpowering the technical grid */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.18),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-xs font-medium text-slate-400 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">Contact</span>
          </nav>

          {/* Corporate Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Pune Head Office & Digital Advisory</span>
          </div>

          {/* High-Contrast White Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Contact & Consultation
          </h1>

          {/* Light Blue Supporting Text for Crystal-Clear Readability */}
          <p className="mt-4 text-sm sm:text-base text-blue-100/85 leading-relaxed max-w-2xl mx-auto">
            Schedule an in-person meeting at our Erandwane office with our trusted <strong>Tax Consultant in Pune</strong> and <strong>GST Consultant in Pune</strong> team, or request a virtual video conference for statutory <strong>Audit Services</strong> and corporate advisory.
          </p>
        </div>
      </section>

      {/* Main Section: Details + Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Office Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Firm Location & Channels
                </span>
                <h2 className="text-2xl font-bold text-navy">ABS Head Office Details</h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Conveniently situated in Erandwane, central Pune, close to prime corporate corridors.
                </p>
              </div>

              {/* Office Details Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <MapPin className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Physical Address</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Office No. 70, 4th Floor, Patil Arcade, Above Kalinga Hotel, Khilare Road, Near Tech Mahindra, Erandwane, Pune - 411004, Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <Phone className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Direct Phone & WhatsApp</h4>
                    <a
                      href="tel:+919028644499"
                      className="text-xs text-primary-800 font-semibold hover:underline block mt-0.5"
                    >
                      +91 9028644499
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <Mail className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Official Email</h4>
                    <a
                      href="mailto:rahulchate.ca@gmail.com"
                      className="text-xs text-primary-800 font-semibold hover:underline block mt-0.5"
                    >
                      rahulchate.ca@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-navy">
                    <Clock className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Business Hours</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Monday to Saturday: 10:00 AM – 06:30 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <a
                href="https://wa.me/919028644499"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              {/* Map Embed & Directions */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 border-b border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                    Google Maps Location
                  </h4>
                  <p className="text-[11px] text-slate-500">Patil Arcade, Khilare Road, Erandwane, Pune</p>
                </div>
                <div className="h-56 w-full bg-slate-100 relative">
                  <iframe
                    title="ABS Consultancy Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3323136262446!2d73.83248887519147!3d18.51388658257912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8546f3a3f5%3A0x7d6c6e3b56a31c5!2sPatil%20Arcade%2C%20Khilare%20Path%2C%20Erandwane%2C%20Pune%2C%20Maharashtra%20411004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Consultation Enquiry Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
