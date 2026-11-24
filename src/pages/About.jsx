import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Award, Target, Compass, Users2, CheckCircle2, Building, Scale, ArrowRight, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const coreValues = [
  {
    title: 'Technical Precision & Rigor',
    description:
      'Every tax computation, legal memorandum, and audit observation is anchored by authoritative statutory citations, judicial precedents, and mathematical reconciliation.',
    icon: Scale,
  },
  {
    title: 'Uncompromising Integrity',
    description:
      'We practice strict compliance with the ICAI Code of Ethics, data privacy standards, and mandatory UDIN authentication across all statutory certificates.',
    icon: ShieldCheck,
  },
  {
    title: 'Commercial Reality & Sense',
    description:
      'We translate intricate statutory tax law into pragmatic business solutions that honor operational realities, working capital cycles, and cash flow constraints.',
    icon: Target,
  },
  {
    title: 'Proactive Strategic Partnering',
    description:
      'We anticipate upcoming statutory deadlines, advance tax liabilities, and legal amendments well in advance—eliminating eleventh-hour surprises.',
    icon: Compass,
  },
];

const teamMembers = [
  {
    name: 'ABS Senior Partners & Leadership',
    qualifications: 'Fellow Chartered Accountants (FCA), DISA, Law Graduates',
    role: 'Managing Partners & Principal Consultants',
    bio: 'Bringing decades of combined practice in corporate taxation, statutory auditing, forensic accounting, and appellate advocacy, our leadership anchors ABS Consultancy. We advise corporate boards, MSMEs, and high-growth ventures on regulatory frameworks, cross-border transactions, and Virtual CFO operations.',
    focus: 'Direct Taxation, Statutory Audits, Mergers & Restructuring, Virtual CFO'
  },
  {
    name: 'Tax, Audit & Financial Advisory Associates',
    qualifications: 'Chartered Accountants, Semi-Qualified CAs & Cost Accountants',
    role: 'Core Execution & Audit Practice Team',
    bio: 'Our multi-disciplinary team brings focused capabilities in GST inverted duty refunds, CARO 2020 reporting, cloud accounting migrations (Tally Prime & Zoho), and quarterly RERA compliance.',
    focus: 'GST Audits, MCA Secretarial Compliance, Financial Modeling, Internal Controls'
  }
];

const About = () => {
  return (
    <div className="bg-slate-50">
      {/* Search Engine Optimization */}
      <SEO
        title="About Us | Leading CA Firm in Pune | ABS Consultancy"
        description="Learn about ABS Consultancy, an esteemed CA Firm in Pune. Discover our practice philosophy, ICAI-aligned standards, and expert partners in taxation & auditing."
        keywords="About CA Firm in Pune, Chartered Accountants Erandwane, Tax Consultant in Pune, Audit Services Pune, Accounting Services Maharashtra"
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />

      {/* Page Header with Pure CSS Technical Dark Navy Grid */}
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
            <span className="text-amber-400 font-semibold">About Us</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-accent text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Practice Profile & Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About ABS Consultancy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Bridging statutory complexity and commercial reality through institutional-grade taxation, auditing, and corporate advisory from Pune, Maharashtra.
          </p>
        </div>
      </section>

      {/* Firm Introduction */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                Firm History & Foundation
              </span>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Dedicated to Financial Integrity, Statutory Excellence & Strategic Growth
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At <strong>ABS Consultancy</strong>, our practice has established a reputation for unflinching technical precision, high ethical standards, and proactive client partnering. Headquartered in Erandwane, Pune, we serve a broad clientele ranging from multi-crore manufacturing conglomerates and SaaS exporters to early-stage ventures and philanthropic trusts.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Adhering strictly to standards formulated by the <strong>Institute of Chartered Accountants of India (ICAI)</strong>, all our audit and assurance engagements are conducted under disciplined quality control, ensuring stakeholder credibility and statutory sanctity.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-extrabold text-navy block">100%</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">UDIN Generated</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-extrabold text-primary-800 block">Rigorous</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">Quality Control</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-lg font-bold text-accent">Vision & Mission</h3>
                  <p className="text-xs text-slate-400">Guiding our professional practice</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      <span>Our Mission</span>
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      To empower enterprises and leaders with mathematically sound, legally grounded, and ethically unyielding financial assurance and strategic tax stewardship.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-accent" />
                      <span>Our Vision</span>
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      To stand as Maharashtra’s foremost trusted corporate and tax advisory anchor, recognized for eliminating regulatory vulnerabilities while driving financial clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              Our Professional Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Foundational Practice Values
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              The four unshakeable standards guiding every audit opinion, tax assessment representation, and corporate consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-800 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              Leadership & Stewardship
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Meet Our Senior Practice Leadership
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              A leadership team combining statutory authority, corporate governance acumen, and hands-on commercial experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-navy text-accent font-sans font-black text-sm flex items-center justify-center shadow-xs">
                      ABS
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                      <p className="text-xs text-primary-800 font-semibold">{member.role}</p>
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-semibold text-slate-500 mb-3 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {member.qualifications}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-3 text-xs text-slate-500">
                  <span className="font-bold text-navy block text-[11px] uppercase tracking-wide mb-1">
                    Core Specializations:
                  </span>
                  <span>{member.focus}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-navy hover:bg-primary-900 rounded-xl shadow-md transition-all group"
            >
              <span>Schedule a Meeting with Our Advisors</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
