import { useState, useMemo } from 'react';

/**
 * Configurable Tax Slab Definitions for FY 2024-25 (AY 2025-26)
 * Easily extensible for future financial years
 */
export const TAX_CONFIG_FY2024_25 = {
  financialYear: '2024-25 (AY 2025-26)',
  newRegime: {
    standardDeduction: 75000,
    rebateLimit: 700000, // Section 87A rebate up to 7 Lakhs (Tax payable becomes 0)
    maxRebate: 25000,
    cessRate: 0.04,
    slabs: [
      { min: 0, max: 300000, rate: 0 },
      { min: 300000, max: 700000, rate: 0.05 },
      { min: 700000, max: 1000000, rate: 0.10 },
      { min: 1000000, max: 1200000, rate: 0.15 },
      { min: 1200000, max: 1500000, rate: 0.20 },
      { min: 1500000, max: Infinity, rate: 0.30 }
    ]
  },
  oldRegime: {
    standardDeduction: 50000,
    rebateLimit: 500000, // Section 87A rebate up to 5 Lakhs
    maxRebate: 12500,
    cessRate: 0.04,
    limits: {
      max80C: 150000,
      max80D: 100000,
      maxNPS_80CCD1B: 50000,
      maxHomeLoanInterest_24b: 200000
    },
    slabs: [
      { min: 0, max: 250000, rate: 0 },
      { min: 250000, max: 500000, rate: 0.05 },
      { min: 500000, max: 1000000, rate: 0.20 },
      { min: 1000000, max: Infinity, rate: 0.30 }
    ]
  }
};

/**
 * Custom React Hook for Indian Income Tax Calculation comparing Old vs New Regime
 */
export const useTaxCalculator = (initialInputs = {}) => {
  const [inputs, setInputs] = useState({
    salaryIncome: initialInputs.salaryIncome ?? 1200000,
    otherIncome: initialInputs.otherIncome ?? 0,
    hraExemption: initialInputs.hraExemption ?? 0,
    deduction80C: initialInputs.deduction80C ?? 150000,
    deduction80D: initialInputs.deduction80D ?? 25000,
    deductionNPS: initialInputs.deductionNPS ?? 50000,
    homeLoanInterest: initialInputs.homeLoanInterest ?? 0,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    const numValue = Math.max(0, Number(value) || 0);
    setInputs(prev => ({
      ...prev,
      [field]: numValue
    }));

    // Simple validation
    if (value < 0) {
      setErrors(prev => ({ ...prev, [field]: 'Value cannot be negative' }));
    } else {
      setErrors(prev => {
        const newErr = { ...prev };
        delete newErr[field];
        return newErr;
      });
    }
  };

  const resetInputs = () => {
    setInputs({
      salaryIncome: 1200000,
      otherIncome: 0,
      hraExemption: 0,
      deduction80C: 150000,
      deduction80D: 25000,
      deductionNPS: 50000,
      homeLoanInterest: 0,
    });
    setErrors({});
  };

  const results = useMemo(() => {
    const config = TAX_CONFIG_FY2024_25;
    const grossIncome = inputs.salaryIncome + inputs.otherIncome;

    // --- OLD REGIME CALCULATION ---
    const eligible80C = Math.min(inputs.deduction80C, config.oldRegime.limits.max80C);
    const eligible80D = Math.min(inputs.deduction80D, config.oldRegime.limits.max80D);
    const eligibleNPS = Math.min(inputs.deductionNPS, config.oldRegime.limits.maxNPS_80CCD1B);
    const eligibleHomeLoan = Math.min(inputs.homeLoanInterest, config.oldRegime.limits.maxHomeLoanInterest_24b);
    const eligibleHRA = Math.min(inputs.hraExemption, inputs.salaryIncome);

    const oldTotalDeductions =
      config.oldRegime.standardDeduction +
      eligible80C +
      eligible80D +
      eligibleNPS +
      eligibleHomeLoan +
      eligibleHRA;

    const oldTaxableIncome = Math.max(0, grossIncome - oldTotalDeductions);

    // Calculate base tax under Old Regime
    let oldBaseTax = 0;
    for (const slab of config.oldRegime.slabs) {
      if (oldTaxableIncome > slab.min) {
        const taxableAmountInSlab = Math.min(oldTaxableIncome, slab.max) - slab.min;
        oldBaseTax += taxableAmountInSlab * slab.rate;
      }
    }

    // Section 87A rebate for Old Regime (up to 5 Lakhs taxable income)
    let oldRebate87A = 0;
    if (oldTaxableIncome <= config.oldRegime.rebateLimit) {
      oldRebate87A = Math.min(oldBaseTax, config.oldRegime.maxRebate);
    }
    const oldTaxAfterRebate = Math.max(0, oldBaseTax - oldRebate87A);
    const oldCess = oldTaxAfterRebate * config.oldRegime.cessRate;
    const oldTotalTax = Math.round(oldTaxAfterRebate + oldCess);

    // --- NEW REGIME CALCULATION ---
    // Under New Regime: Standard Deduction ₹75,000 is allowed. Chapter VI-A deductions are not.
    const newTotalDeductions = config.newRegime.standardDeduction;
    const newTaxableIncome = Math.max(0, grossIncome - newTotalDeductions);

    let newBaseTax = 0;
    for (const slab of config.newRegime.slabs) {
      if (newTaxableIncome > slab.min) {
        const taxableAmountInSlab = Math.min(newTaxableIncome, slab.max) - slab.min;
        newBaseTax += taxableAmountInSlab * slab.rate;
      }
    }

    // Section 87A rebate for New Regime (up to 7 Lakhs taxable income)
    let newRebate87A = 0;
    if (newTaxableIncome <= config.newRegime.rebateLimit) {
      newRebate87A = Math.min(newBaseTax, config.newRegime.maxRebate);
    }
    const newTaxAfterRebate = Math.max(0, newBaseTax - newRebate87A);
    const newCess = newTaxAfterRebate * config.newRegime.cessRate;
    const newTotalTax = Math.round(newTaxAfterRebate + newCess);

    // Comparison analysis
    const taxDifference = Math.abs(oldTotalTax - newTotalTax);
    let recommendedRegime = 'EQUAL';
    if (newTotalTax < oldTotalTax) {
      recommendedRegime = 'NEW';
    } else if (oldTotalTax < newTotalTax) {
      recommendedRegime = 'OLD';
    }

    return {
      grossIncome,
      oldRegime: {
        totalDeductions: oldTotalDeductions,
        standardDeduction: config.oldRegime.standardDeduction,
        taxableIncome: oldTaxableIncome,
        baseTax: Math.round(oldBaseTax),
        rebate87A: Math.round(oldRebate87A),
        cess: Math.round(oldCess),
        totalTax: oldTotalTax,
        deductionBreakdown: {
          standardDeduction: config.oldRegime.standardDeduction,
          section80C: eligible80C,
          section80D: eligible80D,
          sectionNPS: eligibleNPS,
          homeLoan: eligibleHomeLoan,
          hra: eligibleHRA
        }
      },
      newRegime: {
        totalDeductions: newTotalDeductions,
        standardDeduction: config.newRegime.standardDeduction,
        taxableIncome: newTaxableIncome,
        baseTax: Math.round(newBaseTax),
        rebate87A: Math.round(newRebate87A),
        cess: Math.round(newCess),
        totalTax: newTotalTax
      },
      comparison: {
        recommendedRegime,
        taxSavings: taxDifference,
        cheaperBy: taxDifference,
        percentageSavings: grossIncome > 0 ? ((taxDifference / grossIncome) * 100).toFixed(1) : 0
      },
      financialYear: config.financialYear
    };
  }, [inputs]);

  return {
    inputs,
    errors,
    handleInputChange,
    resetInputs,
    results
  };
};

export default useTaxCalculator;
