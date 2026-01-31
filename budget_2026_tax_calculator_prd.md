# PRODUCT REQUIREMENT DOCUMENT (PRD)
## Budget 2026 Tax Calculator - India

**Document Owner:** Chief Product Officer  
**Version:** 1.0  
**Date:** January 31, 2026  
**Target Launch:** February 1, 2026 (1:30 PM IST)

---

## EXECUTIVE SUMMARY

**Product Vision:** Build the fastest, simplest income tax calculator in India that helps users instantly understand their tax liability under Budget 2026 and compare savings vs FY 2025-26.

**Success Metrics:**
- Launch within 30 minutes of Budget 2026 speech ending
- Achieve 10,000+ visits on Day 1
- Capture ₹5,000-15,000 revenue in Week 1
- Maintain <2 second page load time
- Achieve 70%+ mobile traffic engagement

---

## PRODUCT GOALS

### Primary Goals
1. **Speed to Market:** First calculator live with Budget 2026 numbers
2. **Simplicity:** Users can calculate tax in <60 seconds
3. **Clarity:** Show exact savings vs previous year
4. **Mobile-First:** 70%+ traffic will be mobile
5. **Viral Potential:** Easy sharing on WhatsApp/Social Media

### Secondary Goals
1. Monetize through display ads (AdSense)
2. Build email list for future tax updates
3. Establish SEO authority for "budget 2026 tax calculator"

---

## TARGET AUDIENCE

### Primary Users
1. **Salaried Professionals** (25-45 years)
   - Income: ₹6-25 lakhs/year
   - Tech-savvy, mobile-first
   - Want quick answers on budget day

2. **Senior Citizens** (60+ years)
   - Income: ₹3-12 lakhs/year
   - Looking for senior-specific benefits
   - May use desktop more

3. **Tax Planning Individuals** (All ages)
   - Comparing old vs new regime
   - Making investment decisions

### User Behaviors
- 90% will access via Google search
- 70% will be on mobile devices
- Average time on page: 2-3 minutes
- Will share results if savings are significant

---

## CURRENT STATE ANALYSIS (FY 2025-26)

### Tax Slabs - New Regime (FY 2025-26)

| Income Slab (₹) | Tax Rate |
|-----------------|----------|
| 0 - 4,00,000 | Nil |
| 4,00,001 - 8,00,000 | 5% |
| 8,00,001 - 12,00,000 | 10% |
| 12,00,001 - 16,00,000 | 15% |
| 16,00,001 - 20,00,000 | 20% |
| 20,00,001 - 24,00,000 | 25% |
| Above 24,00,000 | 30% |

**Key Features:**
- Standard Deduction: ₹75,000 (salaried)
- Rebate: ₹60,000 (if taxable income ≤ ₹12,00,000)
- Effective Zero Tax: Up to ₹12,75,000 gross income (salaried)
- Health & Education Cess: 4% on tax amount

### Tax Slabs - Old Regime (FY 2025-26)

**For individuals below 60 years:**

| Income Slab (₹) | Tax Rate |
|-----------------|----------|
| 0 - 2,50,000 | Nil |
| 2,50,001 - 5,00,000 | 5% |
| 5,00,001 - 10,00,000 | 20% |
| Above 10,00,000 | 30% |

**For Senior Citizens (60-80 years):**

| Income Slab (₹) | Tax Rate |
|-----------------|----------|
| 0 - 3,00,000 | Nil |
| 3,00,001 - 5,00,000 | 5% |
| 5,00,001 - 10,00,000 | 20% |
| Above 10,00,000 | 30% |

**For Super Senior Citizens (80+ years):**

| Income Slab (₹) | Tax Rate |
|-----------------|----------|
| 0 - 5,00,000 | Nil |
| 5,00,001 - 10,00,000 | 20% |
| Above 10,00,000 | 30% |

**Key Deductions Available in Old Regime:**
- Section 80C: Up to ₹1,50,000
- Section 80D: ₹25,000 (₹50,000 for seniors)
- HRA: Exempt as per rules
- Home Loan Interest: Up to ₹2,00,000
- Standard Deduction: ₹50,000

---

## PRODUCT FEATURES

### MVP FEATURES (Must-Have for Day 1 Launch)

#### Feature 1: Basic Tax Calculator
**User Story:** As a user, I want to input my salary and see my tax liability under Budget 2026

**Inputs Required:**
1. Annual Gross Salary (CTC or Gross Income)
2. Age Group (Below 60, 60-80, Above 80)
3. Regime Selection (New/Old) - Default: New

**Outputs Shown:**
1. Total Tax Payable
2. Monthly Tax Deduction
3. Annual Take-Home Salary
4. Effective Tax Rate (%)

**Calculation Logic:**
```
For New Regime (Salaried):
1. Gross Income - ₹75,000 (Standard Deduction) = Taxable Income
2. Apply tax slabs to calculate base tax
3. If taxable income ≤ ₹12,00,000 → Rebate of ₹60,000
4. Add 4% Health & Education Cess
5. Final Tax = Base Tax + Cess - Rebate
```

---

#### Feature 2: Old vs New Regime Comparison
**User Story:** As a user, I want to see which regime saves me more money

**Display:**
- Side-by-side comparison table
- Tax under Old Regime vs New Regime
- Highlight which is better (with visual indicator)
- Show exact savings amount

**Assumptions for Old Regime:**
- Standard Deduction: ₹50,000
- Section 80C: ₹1,50,000 (default assumption)
- User can modify deductions (optional input)

---

#### Feature 3: Savings vs FY 2025-26 Calculator
**User Story:** As a user, I want to know how much I'm saving under Budget 2026 compared to last year

**Display:**
- "Your Tax Savings Under Budget 2026"
- Show FY 2025-26 tax amount
- Show FY 2026-27 (Budget 2026) tax amount
- Highlight savings in green box
- Emotional messaging: "You saved ₹X this year! 🎉"

**Note:** This will be updated AFTER Budget 2026 is announced with actual changes

---

#### Feature 4: Simple Senior Citizen Calculator
**User Story:** As a senior citizen, I want to see my tax with senior-specific benefits

**Special Inputs:**
- Age: 60-80 or 80+
- Interest Income from Deposits (TDS threshold changed to ₹1,00,000)

**Special Display:**
- Highlight senior citizen benefits
- Show TDS impact
- Show Section 80D benefits (₹50,000 health insurance)

---

### PHASE 2 FEATURES (Week 2-4)

1. **Standard Deduction Impact Calculator**
   - Show impact if standard deduction increases

2. **Take-Home Salary Calculator**
   - Input: CTC → Output: Monthly take-home

3. **Tax Planning Suggestions**
   - Recommend optimal regime based on user profile
   - Suggest tax-saving investments

4. **Download Tax Report (Premium)**
   - Detailed PDF report
   - Charge ₹99 per download

---

## USER INTERFACE & DESIGN

### Design Principles
1. **Extreme Simplicity:** Like ClearTax - clean, minimal, focused
2. **Mobile-First:** 70% traffic will be mobile
3. **Progressive Disclosure:** Show only essential fields first
4. **Visual Hierarchy:** Results should be bold and clear
5. **Trust Signals:** Show "Updated with Budget 2026" badge

### Color Scheme
- Primary: #2563EB (Blue - trust, financial)
- Success: #10B981 (Green - savings)
- Background: #F9FAFB (Light gray)
- Text: #111827 (Dark gray)
- Accent: #F59E0B (Orange - highlights)

### Page Structure

```
┌─────────────────────────────────────┐
│  HEADER                             │
│  Logo | Budget 2026 Tax Calculator  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  HERO SECTION                       │
│  "Calculate Your Tax Under          │
│   Budget 2026 - Updated Live!"      │
│  [Last Updated: Feb 1, 2026 badge]  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  CALCULATOR FORM                    │
│                                     │
│  Step 1: Basic Details              │
│  ┌─────────────────────────────┐   │
│  │ Annual Gross Salary (₹)     │   │
│  │ [____________]              │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Age Group                   │   │
│  │ ○ Below 60  ○ 60-80  ○ 80+  │   │
│  └─────────────────────────────┘   │
│                                     │
│  Step 2: Choose Regime              │
│  ┌─────────────────────────────┐   │
│  │ ○ New Regime (Recommended)  │   │
│  │ ○ Old Regime                │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Advanced Options ▼] (collapsed)   │
│                                     │
│  [Calculate Tax] (Big Button)       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  RESULTS SECTION                    │
│  (Shows after calculation)          │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ YOUR TAX SUMMARY              │ │
│  │                               │ │
│  │ Total Tax: ₹XX,XXX            │ │
│  │ (₹X,XXX per month)            │ │
│  │                               │ │
│  │ Take-Home: ₹XX,XX,XXX         │ │
│  │                               │ │
│  │ Effective Rate: X.X%          │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ 🎉 YOU SAVED ₹XX,XXX          │ │
│  │    Under Budget 2026!         │ │
│  └───────────────────────────────┘ │
│                                     │
│  [Share Results] [Download Report]  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  OLD vs NEW COMPARISON              │
│  (Toggle option)                    │
│                                     │
│  New Regime    vs    Old Regime     │
│  ₹XX,XXX              ₹XX,XXX       │
│  ✓ Better             Less          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  TAX BREAKDOWN                      │
│  (Expandable)                       │
│                                     │
│  Income Breakup by Slabs            │
│  Deductions Applied                 │
│  Cess & Surcharge                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  FOOTER                             │
│  Budget 2026 Updates | FAQs         │
│  Privacy | About                    │
└─────────────────────────────────────┘
```

### Mobile View Optimization
- Single column layout
- Large touch-friendly buttons (min 44px height)
- Input fields: Full width
- Sticky "Calculate" button at bottom
- Collapsible sections by default

---

## TECHNICAL ARCHITECTURE

### Technology Stack
**Frontend:**
- HTML5
- CSS3 (Tailwind CSS for rapid development)
- Vanilla JavaScript (no framework - faster load)

**Hosting:**
- Vercel (Free tier)
- Auto-deploy from Git
- CDN enabled globally

**Domain:**
- Primary: `budget2026calculator.in` or `taxcalc2026.in`
- Cost: ₹500-800

**Analytics:**
- Google Analytics 4
- Simple event tracking (calculations, shares)

### Performance Requirements
- First Contentful Paint (FCP): < 1.0 second
- Time to Interactive (TTI): < 2.0 seconds
- Total Page Size: < 500 KB
- Mobile PageSpeed Score: > 90

### SEO Requirements
**Meta Tags:**
```html
<title>Budget 2026 Tax Calculator - Calculate Income Tax India FY 2026-27</title>
<meta name="description" content="Calculate your income tax under Budget 2026. Updated with latest tax slabs. Compare old vs new regime. Know your savings instantly.">
<meta name="keywords" content="budget 2026 tax calculator, income tax calculator 2026, tax calculator india, new tax regime calculator">
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Budget 2026 Tax Calculator",
  "description": "Calculate income tax under Budget 2026",
  "applicationCategory": "FinanceApplication"
}
```

---

## CALCULATION FORMULAS

### Formula 1: New Regime Tax Calculation

```javascript
function calculateNewRegimeTax(grossIncome, age) {
  // Step 1: Apply Standard Deduction
  const standardDeduction = 75000; // For salaried
  const taxableIncome = grossIncome - standardDeduction;
  
  // Step 2: Calculate tax based on slabs (WILL UPDATE AFTER BUDGET 2026)
  let tax = 0;
  
  // Current FY 2025-26 slabs (to be updated)
  if (taxableIncome <= 400000) {
    tax = 0;
  } else if (taxableIncome <= 800000) {
    tax = (taxableIncome - 400000) * 0.05;
  } else if (taxableIncome <= 1200000) {
    tax = (400000 * 0.05) + (taxableIncome - 800000) * 0.10;
  } else if (taxableIncome <= 1600000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (taxableIncome - 1200000) * 0.15;
  } else if (taxableIncome <= 2000000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (taxableIncome - 1600000) * 0.20;
  } else if (taxableIncome <= 2400000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (taxableIncome - 2000000) * 0.25;
  } else {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (400000 * 0.25) + (taxableIncome - 2400000) * 0.30;
  }
  
  // Step 3: Apply Rebate (if eligible)
  let rebate = 0;
  if (taxableIncome <= 1200000) {
    rebate = Math.min(tax, 60000);
  }
  
  // Step 4: Calculate final tax
  tax = tax - rebate;
  
  // Step 5: Add Health & Education Cess (4%)
  const cess = tax * 0.04;
  const totalTax = tax + cess;
  
  return {
    taxableIncome: taxableIncome,
    baseTax: tax,
    cess: cess,
    rebate: rebate,
    totalTax: Math.round(totalTax),
    takeHome: grossIncome - totalTax,
    effectiveRate: ((totalTax / grossIncome) * 100).toFixed(2)
  };
}
```

### Formula 2: Old Regime Tax Calculation

```javascript
function calculateOldRegimeTax(grossIncome, age, deductions = 150000) {
  // Step 1: Apply Standard Deduction
  const standardDeduction = 50000;
  
  // Step 2: Apply Section 80C and other deductions
  const totalDeductions = standardDeduction + deductions;
  const taxableIncome = Math.max(0, grossIncome - totalDeductions);
  
  // Step 3: Calculate tax based on age and slabs
  let tax = 0;
  let basicExemption = 250000; // Default for below 60
  
  if (age >= 80) {
    basicExemption = 500000; // Super senior citizen
  } else if (age >= 60) {
    basicExemption = 300000; // Senior citizen
  }
  
  if (taxableIncome <= basicExemption) {
    tax = 0;
  } else if (taxableIncome <= 500000) {
    tax = (taxableIncome - basicExemption) * 0.05;
  } else if (taxableIncome <= 1000000) {
    tax = ((500000 - basicExemption) * 0.05) + (taxableIncome - 500000) * 0.20;
  } else {
    tax = ((500000 - basicExemption) * 0.05) + (500000 * 0.20) + (taxableIncome - 1000000) * 0.30;
  }
  
  // Step 4: Add Health & Education Cess (4%)
  const cess = tax * 0.04;
  const totalTax = tax + cess;
  
  return {
    taxableIncome: taxableIncome,
    baseTax: tax,
    cess: cess,
    totalTax: Math.round(totalTax),
    takeHome: grossIncome - totalTax,
    effectiveRate: ((totalTax / grossIncome) * 100).toFixed(2)
  };
}
```

### Formula 3: Savings Calculator (vs FY 2025-26)

```javascript
function calculateSavings(grossIncome, age, regime) {
  // Calculate tax under FY 2025-26 (current known slabs)
  const taxFY2026 = calculateNewRegimeTax(grossIncome, age);
  
  // Calculate tax under Budget 2026 (UPDATED AFTER BUDGET)
  const taxBudget2026 = calculateBudget2026Tax(grossIncome, age);
  
  const savings = taxFY2026.totalTax - taxBudget2026.totalTax;
  
  return {
    previousYearTax: taxFY2026.totalTax,
    currentYearTax: taxBudget2026.totalTax,
    savings: savings,
    savingsPercentage: ((savings / taxFY2026.totalTax) * 100).toFixed(2)
  };
}
```

---

## MONETIZATION STRATEGY

### Phase 1: Display Advertising (Week 1)

**Google AdSense:**
- Apply immediately after launch
- Approval time: 24-48 hours
- Ad Placements:
  - Top banner (after header)
  - Sidebar (desktop only)
  - Between results sections
  - Footer

**Expected RPM:** ₹3-8 per 1000 views
**Expected CTR:** 1-3%

**Revenue Calculation:**
```
Week 1: 50,000 views × ₹5 RPM = ₹2,500
Month 1: 200,000 views × ₹5 RPM = ₹10,000
```

### Phase 2: Affiliate Marketing (Week 1)

**Affiliate Programs:**
1. **Tax Filing Software**
   - ClearTax, QuickBooks
   - Commission: 10-20% per sale

2. **Investment Platforms**
   - Groww, Zerodha, Upstox
   - Commission: ₹200-500 per signup

3. **Insurance Products**
   - PolicyBazaar (Health insurance)
   - Commission: ₹500-2000 per policy

4. **Books & Courses**
   - Amazon Associates (Tax planning books)
   - Commission: 4-8%

**Strategic Placement:**
- "Save more tax with these investments" section
- "File your taxes easily" CTA after calculation
- "Get health insurance for Section 80D benefits"

### Phase 3: Premium Features (Month 2)

**Paid Features:**
1. **Download Detailed Tax Report:** ₹99
   - Comprehensive PDF breakdown
   - Tax planning suggestions
   - Year-on-year comparison

2. **Save Calculations:** ₹49/year
   - Create account
   - Save multiple scenarios
   - Email reminders for tax deadlines

3. **Tax Planning Consultation:** ₹499
   - 30-minute call with CA
   - Personalized advice
   - Affiliate with CAs

**Conversion Target:** 1-2% of users

---

## LAUNCH STRATEGY

### Pre-Launch (Tonight - Jan 31)

**Time: 6:00 PM - 11:00 PM**

**Tasks:**
1. ✅ Buy domain name (6:00 PM - 6:30 PM)
2. ✅ Set up Git repository (6:30 PM - 7:00 PM)
3. ✅ Build HTML structure with placeholder (7:00 PM - 9:00 PM)
4. ✅ Implement current FY 2025-26 calculator (9:00 PM - 10:30 PM)
5. ✅ Test on mobile devices (10:30 PM - 11:00 PM)
6. ✅ Prepare social media posts (11:00 PM - 11:30 PM)
7. ✅ Sleep! (11:30 PM onwards)

**Deliverables:**
- Working calculator with FY 2025-26 slabs
- Variables ready to update with Budget 2026 numbers
- Deployment pipeline ready
- Social media posts drafted

---

### Launch Day (Feb 1, 2026)

**Morning (10:00 AM - 11:00 AM)**
- ☕ Coffee ready
- 💻 Code editor open
- 📺 Budget live stream ready
- 📱 Phone on silent (focus mode)

**During Budget Speech (11:00 AM - 1:00 PM)**

**11:00 AM - Start of Speech:**
- Listen for tax slab announcements
- Note down changes in real-time

**When Tax Changes Announced (approx 11:30 AM):**
- IMMEDIATELY update JavaScript variables
- Update tax slab arrays
- Update standard deduction (if changed)
- Update rebate amounts (if changed)

**12:30 PM - Speech Ends:**
- Final verification of all numbers
- Quick test with sample calculations
- Deploy to production

**1:00 PM - 1:30 PM:**
- Deploy and test live site
- Verify calculations are correct
- Check mobile rendering

**Goal: Website LIVE by 1:30 PM**

---

### Post-Launch (1:30 PM - 6:00 PM)

**1:30 PM - Social Media Blitz:**

**Reddit (Immediate):**
- Post in r/india
- Post in r/IndiaInvestments
- Post in r/personalfinance
- Post in r/IndiaTax

**Post Template:**
```
Title: [Budget 2026] Free Income Tax Calculator - Calculate Your Tax & Savings

I've built a simple tax calculator updated with today's Budget 2026 announcements. 

Features:
✅ Calculate tax under new Budget 2026 slabs
✅ Compare old vs new regime
✅ See your savings vs last year
✅ Mobile-friendly

Link: [your-domain]

It's completely free. Hope it helps!
```

**Twitter:**
```
🎯 Budget 2026 Tax Calculator is LIVE!

✅ Updated with TODAY's budget announcements
✅ Calculate your tax in 30 seconds
✅ See your savings vs FY 2025-26
✅ Old vs New regime comparison

Try it: [link]

#Budget2026 #IncomeTax #TaxCalculator
```

**LinkedIn:**
```
Budget 2026 Tax Calculator - Now Live! 📊

Just updated our free tax calculator with today's Budget 2026 announcements.

Key features:
- Instant tax calculation
- Old vs New regime comparison
- Savings analysis vs last year
- Mobile-optimized

Perfect for quick tax planning and understanding the budget's impact on your finances.

Link in comments 👇

#Budget2026 #TaxPlanning #PersonalFinance
```

**2:00 PM - Monitor & Respond:**
- Monitor traffic in Google Analytics
- Respond to Reddit comments
- Fix any bugs reported
- Monitor social media engagement

**3:00 PM - Affiliate Setup:**
- Add affiliate links strategically
- Test affiliate tracking
- Add CTA buttons

**4:00 PM - AdSense Application:**
- Apply for Google AdSense
- Prepare required pages (Privacy Policy, About)

**5:00 PM - Content Updates:**
- Add "Budget 2026 Summary" page
- Write FAQs
- Optimize for additional keywords

---

## SUCCESS METRICS & KPIs

### Day 1 Metrics (Feb 1, 2026)

**Traffic:**
- Target: 10,000-20,000 unique visitors
- Bounce Rate: < 60%
- Avg. Time on Page: > 2 minutes
- Mobile Traffic: > 65%

**Engagement:**
- Calculations Performed: > 8,000
- Share Button Clicks: > 500
- Social Media Shares: > 200

**Technical:**
- Page Load Time: < 2 seconds
- Zero critical errors
- Uptime: 99.9%

### Week 1 Metrics (Feb 1-7)

**Traffic:**
- Target: 40,000-80,000 unique visitors
- Organic Search: > 50%
- Direct: > 30%
- Social: > 15%

**Revenue:**
- AdSense Earnings: ₹5,000-15,000
- Affiliate Clicks: > 1,000
- Affiliate Conversions: > 20

**SEO:**
- Google Indexing: 100% of pages
- Ranking for "budget 2026 tax calculator": Top 5
- Backlinks: > 20

### Month 1 Metrics (February)

**Traffic:**
- Target: 100,000-250,000 total visitors
- Returning Users: > 15%
- Pages per Session: > 2.5

**Revenue:**
- Total Earnings: ₹15,000-40,000
- AdSense: ₹10,000-25,000
- Affiliates: ₹5,000-15,000

**Growth:**
- Email List: > 1,000 subscribers
- Social Media Followers: > 500
- Domain Authority: > 10

---

## RISK MITIGATION

### Technical Risks

**Risk 1: Website Crashes During High Traffic**
- **Mitigation:** Use Vercel (auto-scales)
- **Backup Plan:** Cloudflare CDN enabled
- **Monitoring:** Set up UptimeRobot alerts

**Risk 2: Calculation Errors**
- **Mitigation:** Extensive testing with known examples
- **Backup Plan:** Add disclaimer "For informational purposes"
- **Monitoring:** User feedback form for error reporting

**Risk 3: Slow Page Load**
- **Mitigation:** Minimize JavaScript, optimize images
- **Backup Plan:** Lazy load non-critical elements
- **Monitoring:** Google PageSpeed Insights daily

### Business Risks

**Risk 1: Late to Market (Competitors Launch First)**
- **Mitigation:** Focus on speed, launch within 30 mins
- **Backup Plan:** Differentiate with better UX/features
- **Strategy:** Advertise as "Most Accurate" if not first

**Risk 2: Low Traffic**
- **Mitigation:** Aggressive social media marketing
- **Backup Plan:** Paid promotion on Reddit/Twitter (₹2,000-5,000)
- **Strategy:** SEO optimization for long-tail keywords

**Risk 3: AdSense Rejection**
- **Mitigation:** Follow AdSense policies strictly
- **Backup Plan:** Use alternative ad networks (PropellerAds, Ezoic)
- **Strategy:** Focus on affiliate revenue initially

### Legal Risks

**Risk 1: Copyright/Trademark Issues**
- **Mitigation:** Use original content, don't copy competitors
- **Backup Plan:** Add disclaimers
- **Strategy:** Consult lawyer for terms of service

**Risk 2: Incorrect Tax Advice**
- **Mitigation:** Add clear disclaimer
- **Disclaimer Text:** "This calculator is for informational purposes only. Please consult a tax professional for accurate advice."

---

## CONTENT STRATEGY

### Core Pages (Week 1)

**1. Home Page (Calculator)**
- Primary content: Tax calculator
- Secondary: Budget 2026 highlights
- SEO: "Budget 2026 Tax Calculator"

**2. Budget 2026 Summary**
- Key changes announced
- Impact on different income groups
- Comparison tables
- SEO: "Budget 2026 tax changes"

**3. Old vs New Regime Guide**
- Detailed comparison
- Who should choose which
- Examples
- SEO: "Old vs new tax regime 2026"

**4. FAQs**
- "How to calculate income tax?"
- "Which regime is better for me?"
- "What are the new tax slabs?"
- SEO: Long-tail keywords

**5. About & Privacy**
- About the calculator
- Privacy policy (required for AdSense)
- Contact information

### Blog Content (Week 2-4)

**Week 2:**
- "5 Ways to Save Tax Under Budget 2026"
- "Budget 2026: Winners and Losers"
- "How to Choose Between Old and New Regime"

**Week 3:**
- "Tax Planning for Salaried Employees in 2026"
- "Senior Citizens: Your Tax Benefits in Budget 2026"
- "Budget 2026: Impact on Middle Class"

**Week 4:**
- "Common Tax Mistakes to Avoid"
- "How to File ITR for FY 2026-27"
- "Investment Options for Tax Savings"

---

## FUTURE ROADMAP

### Q1 2026 (Feb-Apr)
- ✅ Launch core calculator (Feb 1)
- Add premium features (Feb 15)
- Build email automation (Mar 1)
- Add 5 more calculators (Mar 15)
- Reach 50,000 monthly users (Apr 1)

### Q2 2026 (May-Jul)
- Add HRA calculator
- Add investment planning tool
- Launch mobile app (PWA)
- Partner with CAs for consultations
- Reach 100,000 monthly users

### Q3 2026 (Aug-Oct)
- Add ITR filing guidance
- Create video tutorials
- Launch YouTube channel
- Build calculator API
- Reach 150,000 monthly users

### Q4 2026 (Nov-Jan 2027)
- Prepare for Budget 2027
- Build advanced features
- Add AI-powered recommendations
- Launch pro subscription
- Reach 200,000 monthly users

---

## APPENDIX

### A. Competitor Analysis

**ClearTax:**
- Strengths: Brand recognition, comprehensive features
- Weaknesses: Complex UI, too many options
- Our Advantage: Simpler, faster, budget-focused

**GrowW:**
- Strengths: Clean UI, integrated with investments
- Weaknesses: Not tax-focused
- Our Advantage: Dedicated to tax calculations

**Calculator.net:**
- Strengths: Multiple calculators, SEO authority
- Weaknesses: Outdated design, not India-specific
- Our Advantage: Modern, India-focused, budget-specific

### B. Required Legal Pages

**Privacy Policy Must Include:**
- Data collection practices
- Cookie usage
- Third-party services (Google Analytics, AdSense)
- User rights
- Contact information

**Terms of Service Must Include:**
- Disclaimer of accuracy
- Limitation of liability
- Copyright notice
- Acceptable use policy

### C. Testing Checklist

**Before Launch:**
- [ ] Test calculator with 10+ salary examples
- [ ] Verify calculations match official tax calculators
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on Android and iOS
- [ ] Test page load speed
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test share buttons
- [ ] Verify analytics tracking
- [ ] Check SEO meta tags

**After Launch:**
- [ ] Monitor error logs
- [ ] Check user feedback
- [ ] Verify calculations are accurate
- [ ] Monitor traffic sources
- [ ] Check conversion rates
- [ ] Test affiliate links
- [ ] Monitor page speed
- [ ] Check mobile usability

---

## CONCLUSION

This PRD provides a comprehensive blueprint for building and launching the Budget 2026 Tax Calculator. The focus is on:

1. **Speed:** Launch within 30 minutes of budget speech
2. **Simplicity:** Like ClearTax, but even simpler
3. **Accuracy:** Correct calculations validated
4. **Mobile-First:** 70% users are mobile
5. **Monetization:** AdSense + Affiliates from Day 1

**Success depends on:**
- Executing the launch plan precisely on Feb 1
- Aggressive social media marketing
- Maintaining simplicity and speed
- Continuous optimization based on user feedback

**Next Steps:**
1. Review and approve this PRD
2. Start building tonight (Jan 31)
3. Execute launch plan tomorrow (Feb 1)
4. Monitor and iterate based on metrics

---

**Document End**

*This is a living document and will be updated as the product evolves.*
