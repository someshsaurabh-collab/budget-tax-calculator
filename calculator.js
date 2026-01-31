document.addEventListener('DOMContentLoaded', function () {

    // --- DOM ELEMENTS ---
    const grossSalaryInput = document.getElementById('gross-salary');
    const ageGroupRadios = document.querySelectorAll('input[name="age-group"]');
    const taxRegimeRadios = document.querySelectorAll('input[name="tax-regime"]');
    const deductions80cInput = document.getElementById('deductions-80c');
    const deductionsOtherInput = document.getElementById('deductions-other');
    const deductionsContainer = document.getElementById('deductions-container');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultsSection = document.getElementById('results-section');
    const currencyInputs = document.querySelectorAll('.currency-input');

    // Result display elements
    const resultRegimeTitle = document.getElementById('result-regime-title');
    const totalTaxEl = document.getElementById('total-tax');
    const monthlyTaxEl = document.getElementById('monthly-tax');
    const takeHomeEl = document.getElementById('take-home');
    const monthlyTakeHomeEl = document.getElementById('monthly-take-home');
    const effectiveRateEl = document.getElementById('effective-rate');
    const newRegimeTaxEl = document.getElementById('new-regime-tax');
    const oldRegimeTaxEl = document.getElementById('old-regime-tax');
    const comparisonResultEl = document.getElementById('comparison-result');
    const savingsCard = document.getElementById('savings-card');
    const savingsAmountEl = document.getElementById('savings-amount');


    // --- CONSTANTS (TO BE UPDATED FOR BUDGET 2026) ---

    // NEW REGIME FY 2025-26 (Old Budget)
    const NR_25_26_STANDARD_DEDUCTION = 75000;
    const NR_25_26_REBATE_INCOME_LIMIT = 1200000;
    const NR_25_26_REBATE_AMOUNT = 60000;
    
    // NEW REGIME FY 2026-27 (Budget 2026) - THESE ARE THE VALUES TO UPDATE ON BUDGET DAY
    const NR_26_27_STANDARD_DEDUCTION = 75000; // Will be updated
    const NR_26_27_REBATE_INCOME_LIMIT = 1200000; // Will be updated
    const NR_26_27_REBATE_AMOUNT = 60000; // Will be updated

    const CESS_RATE = 0.04;

    // OLD REGIME
    const OR_STANDARD_DEDUCTION = 50000;

    // --- HELPER FUNCTIONS ---
    const formatCurrency = (num) => `₹${num.toLocaleString('en-IN')}`;


    // --- CALCULATION LOGIC ---

    // This function will use the updated Budget 2026 numbers
    function calculateNewRegimeTax_Budget2026(grossIncome) {
        if (grossIncome < NR_26_27_STANDARD_DEDUCTION) return createResultObject(grossIncome, 0, 0, 0);

        const taxableIncome = grossIncome - NR_26_27_STANDARD_DEDUCTION;
        let tax = 0;

        // TAX SLABS FOR BUDGET 2026 WILL BE UPDATED HERE. Using FY 25-26 as placeholder.
        if (taxableIncome > 2400000) {
            tax = 300000 + (taxableIncome - 2400000) * 0.30;
        } else if (taxableIncome > 2000000) {
            tax = 200000 + (taxableIncome - 2000000) * 0.25;
        } else if (taxableIncome > 1600000) {
            tax = 120000 + (taxableIncome - 1600000) * 0.20;
        } else if (taxableIncome > 1200000) {
            tax = 60000 + (taxableIncome - 1200000) * 0.15;
        } else if (taxableIncome > 800000) {
            tax = 20000 + (taxableIncome - 800000) * 0.10;
        } else if (taxableIncome > 400000) {
            tax = (taxableIncome - 400000) * 0.05;
        }

        let rebate = 0;
        if (taxableIncome <= NR_26_27_REBATE_INCOME_LIMIT) {
            rebate = Math.min(tax, NR_26_27_REBATE_AMOUNT);
        }

        const taxAfterRebate = tax - rebate;
        const cess = taxAfterRebate * CESS_RATE;
        const totalTax = taxAfterRebate + cess;

        return createResultObject(grossIncome, taxableIncome, totalTax, rebate);
    }
    
    // This function calculates tax based on last year's (FY 2025-26) rules for comparison
    function calculateNewRegimeTax_FY2526(grossIncome) {
        if (grossIncome < NR_25_26_STANDARD_DEDUCTION) return createResultObject(grossIncome, 0, 0, 0);

        const taxableIncome = grossIncome - NR_25_26_STANDARD_DEDUCTION;
        let tax = 0;

        if (taxableIncome > 2400000) {
            tax = 300000 + (taxableIncome - 2400000) * 0.30;
        } else if (taxableIncome > 2000000) {
            tax = 200000 + (taxableIncome - 2000000) * 0.25;
        } else if (taxableIncome > 1600000) {
            tax = 120000 + (taxableIncome - 1600000) * 0.20;
        } else if (taxableIncome > 1200000) {
            tax = 60000 + (taxableIncome - 1200000) * 0.15;
        } else if (taxableIncome > 800000) {
            tax = 20000 + (taxableIncome - 800000) * 0.10;
        } else if (taxableIncome > 400000) {
            tax = (taxableIncome - 400000) * 0.05;
        }

        let rebate = 0;
        if (taxableIncome <= NR_25_26_REBATE_INCOME_LIMIT) {
            rebate = Math.min(tax, NR_25_26_REBATE_AMOUNT);
        }

        const taxAfterRebate = tax - rebate;
        const cess = taxAfterRebate * CESS_RATE;
        const totalTax = taxAfterRebate + cess;

        return createResultObject(grossIncome, taxableIncome, totalTax, rebate);
    }

    function calculateOldRegimeTax(grossIncome, age, deductions80c, otherDeductions) {
        const totalDeductions = OR_STANDARD_DEDUCTION + deductions80c + otherDeductions;
        const taxableIncome = Math.max(0, grossIncome - totalDeductions);

        let tax = 0;
        
        // Apply rebate for Old Regime: If taxable income is up to 5L, tax is zero.
        if (taxableIncome <= 500000) {
            tax = 0;
        } else {
            let basicExemption = 250000;
            if (age >= 80) basicExemption = 500000;
            else if (age >= 60) basicExemption = 300000;
            
            if (taxableIncome > 1000000) {
                tax = 112500 - ((basicExemption - 250000) * 0.05) + (taxableIncome - 1000000) * 0.30;
            } else if (taxableIncome > 500000) {
                tax = 12500 - ((basicExemption - 250000) * 0.05) + (taxableIncome - 500000) * 0.20;
            }
            // No tax on income up to basic exemption limit, which is handled by the above logic.
            // But the 5L rebate check is more direct and covers all cases below it.
        }

        const cess = tax * CESS_RATE;
        const totalTax = tax + cess;
        
        return createResultObject(grossIncome, taxableIncome, totalTax, 0); // Rebate is handled directly, so passing 0
    }
    
    function createResultObject(grossIncome, taxableIncome, totalTax, rebate) {
        const roundedTax = Math.round(totalTax);
        return {
            grossIncome,
            taxableIncome,
            totalTax: roundedTax,
            rebate,
            takeHome: grossIncome - roundedTax,
            effectiveRate: grossIncome > 0 ? ((roundedTax / grossIncome) * 100).toFixed(2) : 0,
        };
    }

    // --- EVENT HANDLERS ---
    
    const parseCurrency = (str) => parseFloat(str.replace(/,/g, '')) || 0;

    function handleCalculation() {
        const grossIncome = parseCurrency(grossSalaryInput.value);
        const selectedAgeValue = document.querySelector('input[name="age-group"]:checked').value;
        const selectedRegime = document.querySelector('input[name="tax-regime"]:checked').value;
        const deductions80c = parseCurrency(deductions80cInput.value);
        const otherDeductions = parseCurrency(deductionsOtherInput.value);

        if (grossIncome <= 0) {
            alert("Please enter a valid annual salary.");
            return;
        }

        let age = 30; // default
        if (selectedAgeValue === '60-80') age = 65;
        if (selectedAgeValue === 'above-80') age = 85;

        // Calculate for both regimes to show comparison
        const newRegimeResult = calculateNewRegimeTax_Budget2026(grossIncome);
        const oldRegimeResult = calculateOldRegimeTax(grossIncome, age, deductions80c, otherDeductions);
        
        // Display results based on selected regime
        const primaryResult = selectedRegime === 'new' ? newRegimeResult : oldRegimeResult;
        
        resultRegimeTitle.textContent = `${selectedRegime.charAt(0).toUpperCase() + selectedRegime.slice(1)} Regime Tax`;
        totalTaxEl.textContent = formatCurrency(primaryResult.totalTax);
        monthlyTaxEl.textContent = `(${formatCurrency(Math.round(primaryResult.totalTax / 12))} per month)`;
        takeHomeEl.textContent = formatCurrency(primaryResult.takeHome);
        monthlyTakeHomeEl.textContent = formatCurrency(Math.round(primaryResult.takeHome / 12));
        effectiveRateEl.textContent = `${primaryResult.effectiveRate}%`;

        // Display regime comparison
        newRegimeTaxEl.textContent = formatCurrency(newRegimeResult.totalTax);
        oldRegimeTaxEl.textContent = formatCurrency(oldRegimeResult.totalTax);
        
        const regimeSavings = oldRegimeResult.totalTax - newRegimeResult.totalTax;
        if (regimeSavings > 0) {
            comparisonResultEl.textContent = `You save ${formatCurrency(regimeSavings)} with the New Regime!`;
            comparisonResultEl.className = 'mt-4 text-center bg-green-50 text-success p-3 rounded-lg font-semibold';
        } else if (regimeSavings < 0) {
             comparisonResultEl.textContent = `You save ${formatCurrency(Math.abs(regimeSavings))} with the Old Regime!`;
             comparisonResultEl.className = 'mt-4 text-center bg-orange-50 text-accent p-3 rounded-lg font-semibold';
        } else {
             comparisonResultEl.textContent = `Tax is the same under both regimes.`;
             comparisonResultEl.className = 'mt-4 text-center bg-gray-100 text-gray-800 p-3 rounded-lg font-semibold';
        }

        // Calculate and display savings vs last year (FY 2025-26)
        const lastYearTaxResult = calculateNewRegimeTax_FY2526(grossIncome);
        const budgetSavings = lastYearTaxResult.totalTax - newRegimeResult.totalTax;
        
        if (budgetSavings > 0) {
            savingsCard.classList.remove('hidden');
            savingsAmountEl.textContent = formatCurrency(budgetSavings);
        } else {
            savingsCard.classList.add('hidden');
        }
        
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function toggleDeductionsInput() {
        if (document.querySelector('input[name="tax-regime"]:checked').value === 'old') {
            deductionsContainer.classList.remove('hidden');
        } else {
            deductionsContainer.classList.add('hidden');
        }
    }
    
    function formatCurrencyInput(event) {
        let value = event.target.value.replace(/,/g, '');
        if (isNaN(value) || value === '') {
            event.target.value = '';
            return;
        }
        let numberValue = parseInt(value, 10);
        event.target.value = numberValue.toLocaleString('en-IN');
    }

    calculateBtn.addEventListener('click', handleCalculation);
    taxRegimeRadios.forEach(radio => radio.addEventListener('change', toggleDeductionsInput));
    currencyInputs.forEach(input => input.addEventListener('keyup', formatCurrencyInput));

});