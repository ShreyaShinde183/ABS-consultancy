import React from 'react';
import useTaxCalculator from '../hooks/useTaxCalculator';
import {
  Calculator,
  RotateCcw,
  Sparkles,
  TrendingDown,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// Format Indian Currency Helper
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

const TaxCalculator = () => {
  const { inputs, errors, handleInputChange, resetInputs, results } = useTaxCalculator();

  const isNewBetter = results.comparison.recommendedRegime === 'NEW';
  const isOldBetter = results.comparison.recommendedRegime === 'OLD';

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-navy text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-accent text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Utility • FY {results.financialYear}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Old vs. New Tax Regime Comparator
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Evaluate your total tax liability under Section 115BAC versus the Old Slab System with standard and Chapter VI-A deductions.
          </p>
        </div>
        <button
          onClick={resetInputs}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Values</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Input Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
              1. Income Details
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Annual Gross Salary (₹)
              </label>
              <input
                type="number"
                min="0"
                step="10000"
                value={inputs.salaryIncome || ''}
                onChange={(e) => handleInputChange('salaryIncome', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 1200000"
              />
              {errors.salaryIncome && (
                <span className="text-[11px] text-rose-500 mt-0.5 block">{errors.salaryIncome}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Other Income / Interest (₹)
              </label>
              <input
                type="number"
                min="0"
                step="5000"
                value={inputs.otherIncome || ''}
                onChange={(e) => handleInputChange('otherIncome', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 50000"
              />
            </div>
          </div>

          <div className="border-b border-slate-100 pb-3 pt-2">
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider flex items-center justify-between">
              <span>2. Deductions & Exemptions (Old Regime)</span>
              <span className="text-[11px] font-normal text-slate-400 lowercase italic">
                standard deduction applied automatically
              </span>
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Section 80C (PPF, ELSS, EPF, LIC)
                <span className="text-slate-400 ml-1 font-normal">(Max ₹1.5L)</span>
              </label>
              <input
                type="number"
                min="0"
                max="150000"
                value={inputs.deduction80C || ''}
                onChange={(e) => handleInputChange('deduction80C', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 150000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Section 80D (Health Insurance)
                <span className="text-slate-400 ml-1 font-normal">(Self & Parents)</span>
              </label>
              <input
                type="number"
                min="0"
                value={inputs.deduction80D || ''}
                onChange={(e) => handleInputChange('deduction80D', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 25000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                HRA Exemption Claimed (₹)
              </label>
              <input
                type="number"
                min="0"
                value={inputs.hraExemption || ''}
                onChange={(e) => handleInputChange('hraExemption', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 120000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                NPS Contribution 80CCD(1B)
                <span className="text-slate-400 ml-1 font-normal">(Max ₹50k)</span>
              </label>
              <input
                type="number"
                min="0"
                max="50000"
                value={inputs.deductionNPS || ''}
                onChange={(e) => handleInputChange('deductionNPS', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 50000"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Home Loan Interest u/s 24(b) - Self Occupied
                <span className="text-slate-400 ml-1 font-normal">(Max ₹2,00,000)</span>
              </label>
              <input
                type="number"
                min="0"
                max="200000"
                value={inputs.homeLoanInterest || ''}
                onChange={(e) => handleInputChange('homeLoanInterest', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g. 200000"
              />
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-500 flex items-start gap-2">
            <Info className="w-4 h-4 text-primary-800 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Under the New Tax Regime (Section 115BAC), a revised Standard Deduction of ₹75,000 is directly permitted for salaried individuals. Full rebate under Section 87A renders tax zero for taxable incomes up to ₹7,00,000.
            </span>
          </div>
        </div>

        {/* Right Column: Comparative Results & Recommendation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Comparison Cards */}
          <div className="space-y-4">
            {/* New Regime Card */}
            <div
              className={`rounded-2xl p-5 border transition-all ${
                isNewBetter
                  ? 'bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  New Tax Regime (Sec 115BAC)
                </span>
                {isNewBetter && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                    <Sparkles className="w-3 h-3" /> Recommended
                  </span>
                )}
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs text-slate-500">Total Tax Payable:</span>
                <span className="text-2xl font-extrabold text-navy">
                  {formatINR(results.newRegime.totalTax)}
                </span>
              </div>

              <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-200/60">
                <div className="flex justify-between">
                  <span>Gross Income:</span>
                  <span>{formatINR(results.grossIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Std. Deduction:</span>
                  <span>{formatINR(results.newRegime.standardDeduction)}</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Net Taxable Income:</span>
                  <span>{formatINR(results.newRegime.taxableIncome)}</span>
                </div>
              </div>
            </div>

            {/* Old Regime Card */}
            <div
              className={`rounded-2xl p-5 border transition-all ${
                isOldBetter
                  ? 'bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  Old Tax Regime
                </span>
                {isOldBetter && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                    <Sparkles className="w-3 h-3" /> Recommended
                  </span>
                )}
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs text-slate-500">Total Tax Payable:</span>
                <span className="text-2xl font-extrabold text-navy">
                  {formatINR(results.oldRegime.totalTax)}
                </span>
              </div>

              <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-200/60">
                <div className="flex justify-between">
                  <span>Gross Income:</span>
                  <span>{formatINR(results.grossIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Deductions:</span>
                  <span className="text-emerald-700">-{formatINR(results.oldRegime.totalDeductions)}</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Net Taxable Income:</span>
                  <span>{formatINR(results.oldRegime.taxableIncome)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Comparative Recommendation Box */}
          <div className="bg-navy rounded-2xl p-5 text-white shadow-md">
            <div className="flex items-center gap-2 mb-2 text-accent">
              <TrendingDown className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Comparative Verdict</span>
            </div>
            {results.comparison.taxSavings > 0 ? (
              <div>
                <p className="text-sm font-medium text-slate-200">
                  You save{' '}
                  <span className="text-emerald-400 font-extrabold text-lg">
                    {formatINR(results.comparison.taxSavings)}
                  </span>{' '}
                  by opting for the{' '}
                  <span className="text-accent font-bold uppercase">
                    {results.comparison.recommendedRegime} Tax Regime
                  </span>
                  .
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Our Chartered Accountants can review your salary components and investment proofs to structure maximum take-home remuneration.
                </p>
              </div>
            ) : (
              <p className="text-sm text-slate-200">
                Tax liability is identical under both regimes for this income structure.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
