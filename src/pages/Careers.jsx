import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Home as HomeIcon, 
  ChevronRight,
  Clock,
  ArrowRight
} from 'lucide-react';

const positions = [
  {
    id: 'ca-articleship',
    title: 'CA Article Assistants (ICAI Articleship)',
    experience: 'CA Intermediate / IPCC (Single or Both Groups Cleared)',
    type: 'Full-Time Articleship (ICAI Mandated)',
    description: 'Comprehensive 360-degree training across statutory assurance, tax audits, GST compliance, MCA company filings, and TDS/TCS reconciliations.',
    skills: ['Direct Tax (ITR 1-6)', 'GST Returns (GSTR-1, 3B, 9)', 'Tally Prime & Excel', 'ICAI Code of Ethics']
  },
  {
    id: 'audit-executive',
    title: 'Semi-Qualified CA / Audit Executive',
    experience: '1 – 3 Years in a CA Firm',
    type: 'Full-Time • On-Site Pune',
    description: 'Leading field audit engagements, drafting scrutiny submissions for Income Tax, preparing audit working papers, and finalising balance sheets.',
    skills: ['Statutory & Tax Audit Finalisation', 'GST Scrutiny & Appeals', 'Internal Controls Review', 'Team Guidance']
  },
  {
    id: 'senior-accountant',
    title: 'Senior Accountant & Compliance Executive',
    experience: '2 – 5 Years Corporate / CA Firm Experience',
    type: 'Full-Time • Pune Office',
    description: 'Day-to-day accounting supervision, monthly GST/TDS reconciliations, payroll processing, and management information system (MIS) report generation.',
    skills: ['Tally Prime / Zoho Books', 'Advance Excel / VLOOKUP / Pivots', 'TDS & PF/ESI Returns', 'Financial Statements']
  },
  {
    id: 'qualified-ca',
    title: 'Qualified Chartered Accountant (ACA)',
    experience: '0 – 2 Years Post-Qualification',
    type: 'Full-Time Advisory Role',
    description: 'Managing corporate client portfolios, handling direct tax advisory, drafting appeals before CIT(A), and assisting in Virtual CFO client retainers.',
    skills: ['Tax Advisory & Litigation', 'Corporate Due Diligence', 'Financial Modeling', 'Client Relationship Mgmt']
  }
];

const Careers = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Search Engine Optimization */}
      <SEO
        title="Careers & ICAI Articleship in Pune | ABS Consultancy"
        description="Explore career opportunities at ABS Consultancy, a top CA Firm in Pune. Openings for CA Article Assistants, Semi-Qualified Audit Executives, and Qualified CAs."
        keywords="CA Articleship in Pune, CA Firm Jobs Pune, Audit Executive Openings Pune, ICAI Articleship Erandwane, Qualified CA Jobs Pune"
        canonical="/careers"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' }
        ]}
      />

      {/* Header Banner with Premium Technical Dark Navy Grid */}
      <section className="bg-tech-navy-grid text-white py-14 sm:py-20 border-b border-blue-950/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.18),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-xs font-medium text-slate-400 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">Careers</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Growth & Articleship Opportunities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Careers at ABS Consultancy
          </h1>

          <p className="mt-4 text-sm sm:text-base text-blue-100/85 leading-relaxed max-w-2xl mx-auto">
            Build a distinguished career in taxation, audit, and corporate finance. We provide rigorous multi-disciplinary training and professional growth under ICAI guidance.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 8 Cols: Open Positions */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Active Openings
                </span>
                <h2 className="text-2xl font-bold text-navy">Current Practice Openings</h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                  Explore opportunities for students, semi-qualified professionals, and qualified Chartered Accountants in Pune.
                </p>
              </div>

              <div className="space-y-5">
                {positions.map((pos) => (
                  <div
                    key={pos.id}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-card transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="text-lg font-bold text-navy">{pos.title}</h3>
                        <p className="text-xs font-medium text-amber-600 mt-0.5">{pos.experience}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold self-start sm:self-auto">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{pos.type}</span>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {pos.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-50 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Key Competencies:
                      </span>
                      {pos.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 font-semibold text-xs border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: Application Info & Firm Culture */}
            <div className="lg:col-span-4 space-y-6">
              {/* How to Apply Card */}
              <div className="bg-navy rounded-2xl p-6 text-white shadow-md space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">How to Apply</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interested candidates can send their detailed curriculum vitae directly to our recruitment team with the position name in the subject line.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">Email Resume</span>
                      <a href="mailto:rahulchate.ca@gmail.com" className="font-bold text-white hover:text-amber-400 transition-colors">
                        rahulchate.ca@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">Direct Queries</span>
                      <a href="tel:+919028644499" className="font-bold text-white hover:text-amber-400 transition-colors">
                        +91 9028644499
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">Practice Location</span>
                      <p className="text-slate-300 text-[11px] leading-snug">
                        Patil Arcade, Khilare Road, Erandwane, Pune - 411004
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm transition-all"
                  >
                    <span>Contact Recruitment Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* What We Offer Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
                <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
                  Why Train With Us?
                </h4>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct partner mentoring on live tax scrutiny and audit matters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cross-functional exposure across manufacturing, tech startups, and retail.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Strict compliance with ICAI articleship guidelines and study leave policy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Modern corporate office environment located in central Pune.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
