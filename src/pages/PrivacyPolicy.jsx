import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-20">
      {/* Search Engine Optimization */}
      <SEO
        title="Privacy Policy | Client Data Confidentiality | ABS Consultancy Pune"
        description="Privacy Policy and client confidentiality commitments of ABS Consultancy, Chartered Accountants Pune, adhering strictly to ICAI professional ethics and statutory data protection."
        keywords="Privacy Policy ABS Consultancy, CA Client Confidentiality, ICAI Data Protection Pune"
        canonical="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-card space-y-8">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-900 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Data Confidentiality & Professional Ethics</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy tracking-tight">
              Privacy Policy & Client Data Protection
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last Updated & Reviewed: Financial Year 2024-25 | Effective Date: April 1, 2024
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>1. Professional Confidentiality Mandate</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At <strong>ABS Consultancy</strong>, client confidentiality is our paramount commitment. All books of accounts, financial statements, bank records, tax filings, and corporate strategic information shared with our firm remain strictly privileged and protected.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              <span>2. Information We Collect</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collect information strictly necessary to fulfill statutory advisory, return filing, and audit assurance engagements:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-4 list-disc">
              <li>Contact details: Name, corporate designation, email address, and verified phone number.</li>
              <li>Entity KYC identifiers: PAN, TAN, GSTIN, CIN, Director Identification Numbers (DIN).</li>
              <li>Financial records: Ledger exports, audited balance sheets, bank statements, and invoices.</li>
              <li>Digital consultation parameters: Preferred meeting mode (in-person vs virtual) and enquiry scopes.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>3. How We Use and Safeguard Your Data</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Client data is utilized exclusively for:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-4 list-disc">
              <li>Statutory compliance filing on government portals (Income Tax e-Filing, GSTN, MCA21).</li>
              <li>Conducting statutory and tax audits, generating mandatory Unique Document Identification Numbers (UDIN).</li>
              <li>Communicating advance tax projections, compliance due-date notices, and regulatory updates.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              We do <strong>not</strong> sell, rent, commercialize, or trade client information to any third-party marketing networks under any circumstance.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-navy">4. Regulatory Disclosure Exceptions</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We may disclose client information solely when strictly compelled by law, court order, or written requisition by statutory enforcement authorities in conformity with applicable Indian laws.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-navy">5. Data Retention & Security Protocols</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Audit working papers and statutory documents are maintained for the statutory duration prescribed under applicable corporate regulations (typically 8 years). Working papers are secured using multi-factor authenticated cloud vaults with restricted internal access controls.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <h3 className="font-bold text-navy text-sm">Grievance & Privacy Inquiries</h3>
            <p>
              For questions regarding our privacy framework or to inspect working paper confidentiality safeguards, contact:
            </p>
            <p className="font-semibold text-navy">
              Compliance Officer • ABS Consultancy<br />
              Office No. 70, 4th Floor, Patil Arcade, Erandwane, Pune - 411004<br />
              Email: rahulchate.ca@gmail.com | Phone: +91 9028644499
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
