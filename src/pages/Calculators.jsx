import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TaxCalculator from '../components/TaxCalculator';
import {
  Calculator,
  Receipt,
  Home,
  PiggyBank,
  Award,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Home as HomeIcon,
  ChevronRight
} from 'lucide-react';

// Format INR Helper
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
};

const statutoryCalendar = [
  {
    month: 'Monthly (Every Month)',
    dueDates: [
      { day: '07th', title: 'TDS / TCS Deposit', desc: 'Challan ITNS 281 for taxes deducted in previous month' },
      { day: '11th', title: 'GSTR-1 (Outward Supplies)', desc: 'Monthly taxpayers with turnover > ₹5 Crore or non-QRMP' },
      { day: '13th', title: 'GSTR-1 IFF (QRMP Scheme)', desc: 'Invoice Furnishing Facility for QRMP quarterly taxpayers' },
      { day: '20th', title: 'GSTR-3B (Monthly Return)', desc: 'Summary return and GST tax payment for previous month' },
      { day: '15th', title: 'PF & ESIC Payment', desc: 'Monthly statutory employee welfare deductions' }
    ]
  },
  {
    month: 'Advance Tax Due Dates (Quarterly)',
    dueDates: [
      { day: '15 June', title: '1st Installment (15%)', desc: 'Advance tax liability for all corporate & non-corporate assessees' },
      { day: '15 September', title: '2nd Installment (45%)', desc: 'Cumulative 45% of estimated total annual tax liability' },
      { day: '15 December', title: '3rd Installment (75%)', desc: 'Cumulative 75% of estimated total annual tax liability' },
      { day: '15 March', title: '4th Installment (100%)', desc: 'Final installment of 100% advance tax to avoid Sec 234B/234C interest' }
    ]
  },
  {
    month: 'Annual Statutory Filings',
    dueDates: [
      { day: '31 July', title: 'Non-Audit ITR Filing', desc: 'Individual, HUF, and non-audit business income tax returns' },
      { day: '30 September', title: 'Tax Audit Report', desc: 'Filing of Form 3CA/3CB and Form 3CD u/s 44AB' },
      { day: '31 October', title: 'Corporate & Audit ITR', desc: 'ITR filing for corporate assessees and audit cases' },
      { day: '31 December', title: 'GSTR-9 & GSTR-9C', desc: 'Annual GST return and reconciliation statement' }
    ]
  }
];

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('income-tax');

  // --- GST Calculator State ---
  const [gstAmount, setGstAmount] = useState(100000);
  const [gstRate, setGstRate] = useState(18);
  const [gstType, setGstType] = useState('exclusive'); // 'exclusive' (Forward) or 'inclusive' (Reverse)

  const calculatedGst = () => {
    const rate = Number(gstRate) / 100;
    const amount = Number(gstAmount) || 0;
    if (gstType === 'exclusive') {
      const tax = amount * rate;
      return {
        base: amount,
        tax: tax,
        cgst: tax / 2,
        sgst: tax / 2,
        total: amount + tax,
      };
    } else {
      const base = amount / (1 + rate);
      const tax = amount - base;
      return {
        base: Math.round(base),
        tax: Math.round(tax),
        cgst: Math.round(tax / 2),
        sgst: Math.round(tax / 2),
        total: amount,
      };
    }
  };

  const gstResult = calculatedGst();

  // --- HRA Calculator State ---
  const [hraSalary, setHraSalary] = useState(600000); // Basic + DA
  const [actualHra, setActualHra] = useState(240000);
  const [rentPaid, setRentPaid] = useState(300000);
  const [isMetro, setIsMetro] = useState(false); // Pune is non-metro (40%)

  const calculateHra = () => {
    const basic = Number(hraSalary) || 0;
    const hra = Number(actualHra) || 0;
    const rent = Number(rentPaid) || 0;

    // Conditions:
    // 1. Actual HRA received
    // 2. 50% of salary (metro) or 40% (non-metro)
    // 3. Rent paid - 10% of salary
    const cond1 = hra;
    const cond2 = isMetro ? basic * 0.5 : basic * 0.4;
    const cond3 = Math.max(0, rent - basic * 0.1);

    const exemptHra = Math.min(cond1, cond2, cond3);
    const taxableHra = Math.max(0, hra - exemptHra);

    return { exemptHra, taxableHra, cond1, cond2, cond3 };
  };

  const hraResult = calculateHra();

  // --- NPS Calculator State ---
  const [npsMonthly, setNpsMonthly] = useState(5000);
  const [npsYears, setNpsYears] = useState(25);
  const [npsReturnRate, setNpsReturnRate] = useState(10); // 10% average return

  const calculateNps = () => {
    const P = Number(npsMonthly) || 0;
    const n = Number(npsYears) * 12;
    const r = (Number(npsReturnRate) || 0) / 100 / 12;

    const totalInvested = P * n;
    // Compound interest formula for monthly SIP: P * [((1+r)^n - 1) / r] * (1+r)
    let totalCorpus = 0;
    if (r > 0) {
      totalCorpus = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    } else {
      totalCorpus = totalInvested;
    }

    const lumpSum = totalCorpus * 0.6; // 60% tax-free withdrawal
    const annuity = totalCorpus * 0.4; // 40% for pension annuity
    const annualTaxSavings = Math.min(50000, P * 12) * 0.3; // assuming 30% bracket for Sec 80CCD(1B)

    return { totalInvested, totalCorpus: Math.round(totalCorpus), lumpSum: Math.round(lumpSum), annuity: Math.round(annuity), annualTaxSavings };
  };

  const npsResult = calculateNps();

  // --- Gratuity Calculator State ---
  const [gratuityBasic, setGratuityBasic] = useState(50000);
  const [gratuityTenure, setGratuityTenure] = useState(7);

  const calculateGratuity = () => {
    const basic = Number(gratuityBasic) || 0;
    const tenure = Number(gratuityTenure) || 0;

    if (tenure < 5) {
      return { eligible: false, amount: 0, reason: 'Gratuity requires a minimum of 5 continuous years of service under the Payment of Gratuity Act, 1972.' };
    }

    // Formula: (15 * Last Drawn Basic * Tenure) / 26
    const formulaAmount = Math.round((15 * basic * tenure) / 26);
    // Statutory exemption cap is ₹20 Lakhs
    const exemptAmount = Math.min(2000000, formulaAmount);

    return { eligible: true, amount: formulaAmount, exemptAmount, capped: formulaAmount > 2000000 };
  };

  const gratuityResult = calculateGratuity();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Search Engine Optimization */}
      <SEO
        title="Free Income Tax, GST & Financial Calculators 2025 | ABS Consultancy"
        description="Calculate your Old vs New regime income tax, HRA exemption, SIP returns, and GST amounts with our updated statutory calculators based on the latest Finance Act."
        keywords="Income Tax Calculator 2025, GST Calculator India, Old vs New Tax Regime, Tax Consultant in Pune Tools, CA Firm in Pune Utilities, HRA Exemption Calculator"
        canonical="/calculators"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tax Tools', url: '/calculators' }
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
            <span className="text-amber-400 font-semibold">Tax Tools & Calculators</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-accent text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Utilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Financial & Tax Calculators
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Statutory calculators and due-date trackers engineered according to the latest Indian Finance Act and CBDT guidelines.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'income-tax', label: 'Income Tax (Old vs New)', icon: Calculator },
              { id: 'gst-calc', label: 'GST Calculator', icon: Receipt },
              { id: 'hra-calc', label: 'HRA Exemption', icon: Home },
              { id: 'nps-calc', label: 'NPS & 80CCD(1B)', icon: PiggyBank },
              { id: 'gratuity-calc', label: 'Gratuity Calculator', icon: Award },
              { id: 'tax-calendar', label: 'Tax Calendar', icon: Calendar },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-accent text-slate-950 font-bold shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1: INCOME TAX CALCULATOR */}
          {activeTab === 'income-tax' && (
            <div className="space-y-6">
              <TaxCalculator />
            </div>
          )}

          {/* TAB 2: GST CALCULATOR */}
          {activeTab === 'gst-calc' && (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Indirect Taxation Utility
                </span>
                <h3 className="text-2xl font-bold text-navy mt-1">
                  GST Forward & Reverse Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Compute forward GST addition or reverse extract the base taxable value and CGST/SGST split.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Calculation Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setGstType('exclusive')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border ${
                          gstType === 'exclusive'
                            ? 'bg-navy text-white border-navy'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        GST Exclusive (Add GST)
                      </button>
                      <button
                        onClick={() => setGstType('inclusive')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border ${
                          gstType === 'inclusive'
                            ? 'bg-navy text-white border-navy'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        GST Inclusive (Extract Base)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Amount (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={gstAmount}
                      onChange={(e) => setGstAmount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      GST Tax Slab Rate
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[5, 12, 18, 28].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setGstRate(rate)}
                          className={`py-2 rounded-xl text-xs font-bold border ${
                            gstRate === rate
                              ? 'bg-accent text-slate-950 border-accent font-extrabold'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* GST Result Output Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2">
                    GST Computation Breakdown
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>Base Value:</span>
                      <span className="font-semibold text-navy">{formatINR(gstResult.base)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total GST ({gstRate}%):</span>
                      <span className="font-semibold text-primary-800">{formatINR(gstResult.tax)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 pl-4">
                      <span>CGST ({gstRate / 2}%):</span>
                      <span>{formatINR(gstResult.cgst)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 pl-4">
                      <span>SGST ({gstRate / 2}%):</span>
                      <span>{formatINR(gstResult.sgst)}</span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex justify-between text-base font-extrabold text-navy">
                      <span>Gross Total:</span>
                      <span className="text-emerald-700">{formatINR(gstResult.total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: HRA CALCULATOR */}
          {activeTab === 'hra-calc' && (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Direct Tax Section 10(13A)
                </span>
                <h3 className="text-2xl font-bold text-navy mt-1">
                  House Rent Allowance (HRA) Exemption Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Calculate the legally exempt HRA under the Old Tax Regime based on statutory limits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Annual Basic Salary + Dearness Allowance (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={hraSalary}
                      onChange={(e) => setHraSalary(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Annual HRA Received from Employer (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={actualHra}
                      onChange={(e) => setActualHra(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Total Annual Rent Paid (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={rentPaid}
                      onChange={(e) => setRentPaid(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City of Residence
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="inline-flex items-center text-xs font-medium text-slate-700">
                        <input
                          type="radio"
                          name="metro"
                          checked={!isMetro}
                          onChange={() => setIsMetro(false)}
                          className="mr-2"
                        />
                        Non-Metro (Pune, Bangalore, etc. - 40%)
                      </label>
                      <label className="inline-flex items-center text-xs font-medium text-slate-700">
                        <input
                          type="radio"
                          name="metro"
                          checked={isMetro}
                          onChange={() => setIsMetro(true)}
                          className="mr-2"
                        />
                        Metro (Mumbai, Delhi, Kol, Chn - 50%)
                      </label>
                    </div>
                  </div>
                </div>

                {/* HRA Result */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2">
                    Section 10(13A) Verdict
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>1. Actual HRA Received:</span>
                      <span>{formatINR(hraResult.cond1)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>2. {isMetro ? '50%' : '40%'} of Basic Salary:</span>
                      <span>{formatINR(hraResult.cond2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>3. Rent Paid minus 10% Salary:</span>
                      <span>{formatINR(hraResult.cond3)}</span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex justify-between text-base font-extrabold text-emerald-700">
                      <span>Exempted HRA (Least of 3):</span>
                      <span>{formatINR(hraResult.exemptHra)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-rose-600 font-semibold">
                      <span>Taxable HRA Portion:</span>
                      <span>{formatINR(hraResult.taxableHra)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: NPS CALCULATOR */}
          {activeTab === 'nps-calc' && (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Retirement & Section 80CCD(1B)
                </span>
                <h3 className="text-2xl font-bold text-navy mt-1">
                  National Pension System (NPS) Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Project long-term compound retirement wealth and evaluate additional ₹50,000 tax deduction benefits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Monthly Contribution (₹)
                    </label>
                    <input
                      type="number"
                      min="500"
                      step="500"
                      value={npsMonthly}
                      onChange={(e) => setNpsMonthly(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Investment Duration ({npsYears} Years)
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={npsYears}
                      onChange={(e) => setNpsYears(e.target.value)}
                      className="w-full accent-primary-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Expected Annual Return Rate ({npsReturnRate}%)
                    </label>
                    <input
                      type="range"
                      min="6"
                      max="15"
                      value={npsReturnRate}
                      onChange={(e) => setNpsReturnRate(e.target.value)}
                      className="w-full accent-primary-900"
                    />
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 text-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2">
                    Retirement Maturity Breakdown
                  </h4>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Out-of-Pocket Invested:</span>
                    <span className="font-semibold text-navy">{formatINR(npsResult.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Projected Corpus at Maturity:</span>
                    <span className="font-bold text-emerald-700 text-base">{formatINR(npsResult.totalCorpus)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                    <span>60% Tax-Free Lump Sum:</span>
                    <span>{formatINR(npsResult.lumpSum)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>40% Annuity for Monthly Pension:</span>
                    <span>{formatINR(npsResult.annuity)}</span>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-semibold">
                    Estimated Annual Tax Savings u/s 80CCD(1B): {formatINR(npsResult.annualTaxSavings)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: GRATUITY CALCULATOR */}
          {activeTab === 'gratuity-calc' && (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Payment of Gratuity Act, 1972
                </span>
                <h3 className="text-2xl font-bold text-navy mt-1">
                  Gratuity Benefit Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Compute statutory gratuity eligibility and tax exemption under Section 10(10).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Drawn Monthly Basic Salary + DA (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={gratuityBasic}
                      onChange={(e) => setGratuityBasic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Completed Years of Service
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="45"
                      value={gratuityTenure}
                      onChange={(e) => setGratuityTenure(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 outline-none"
                    />
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2">
                    Gratuity Payable
                  </h4>
                  {gratuityResult.eligible ? (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-slate-600">
                        <span>Statutory Formula (15/26):</span>
                        <span className="font-bold text-navy">{formatINR(gratuityResult.amount)}</span>
                      </div>
                      <div className="flex justify-between text-emerald-700 font-bold text-base pt-2 border-t border-slate-200">
                        <span>Tax-Exempt Gratuity:</span>
                        <span>{formatINR(gratuityResult.exemptAmount)}</span>
                      </div>
                      {gratuityResult.capped && (
                        <p className="text-[11px] text-amber-600">
                          Note: Income tax exemption under Section 10(10) is currently capped at ₹20,00,000.
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{gratuityResult.reason}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: STATUTORY TAX CALENDAR */}
          {activeTab === 'tax-calendar' && (
            <div id="tax-calendar" className="space-y-8 max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Compliance Tracker
                </span>
                <h3 className="text-2xl font-bold text-navy">
                  Statutory Tax Due Date Calendar
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Track recurring direct tax, GST, TDS, and corporate filing deadlines to prevent cumulative late fee penalties.
                </p>
              </div>

              <div className="space-y-6">
                {statutoryCalendar.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                      {section.month}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.dueDates.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:shadow-xs transition-all"
                        >
                          <span className="px-2.5 py-1 rounded-md bg-navy text-accent font-extrabold text-xs shrink-0">
                            {item.day}
                          </span>
                          <div>
                            <h5 className="text-xs font-bold text-navy">{item.title}</h5>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Calculators;
