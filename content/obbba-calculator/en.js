/**
 * English content for the OBBBA Financial Impact Analyzer.
 * This object contains all user-facing strings for the English version of the site.
 */
const en = {
    // Header
    headerTitle: "OBBBA Impact Analyzer",
    headerSubtitle: "An analysis of the financial effects of the \"One Big Beautiful Bill Act\".",
    
    // Language Toggle
    langToggle: "中文",

    // Summary Section
    summaryTitle: "Fiscal Vibe Check (10-Year Outlook)",
    kpiTaxCuts: "Tax Cuts",
    kpiSpendingReductions: "Spending<br>Reductions",
    kpiNetDebtIncrease: "Net Debt Increase",
    chartTitle: "Fiscal Action Comparison",
    breakdownTitle: "The Breakdown",
    faqDebtTitle: "Economic Impact of Higher National Debt?",
    faqDebtContent: "Increased national debt can lead to higher interest rates, which raises borrowing costs for consumers and businesses. It may also exert downward pressure on the US dollar's value and contribute to inflation, potentially reducing household purchasing power over time.",
    faqPersonalFinanceTitle: "Long-Term Impact on Personal Finances?",
    faqPersonalFinanceContent: "Potential short-term tax savings could be offset over the long term by higher interest rates on loans, inflation, and increased costs for healthcare and energy due to cuts in federal programs and the repeal of clean energy incentives.",
    faqEconomistsTitle: "What Top Economists Say",
    quoteSummers: `"Large-scale, unfunded tax cuts are a recipe for higher inflation and will ultimately burden future generations with unsustainable debt."`,
    quoteSummersCite: "- Larry Summers",
    quoteLustig: `"The convenience yield on government debt is a key indicator. Fiscal policies that dramatically increase the supply of debt without a clear path to repayment risk eroding that advantage, leading to higher financing costs for the government."`,
    quoteLustigCite: "- Hanno Lustig",

    // Policy Details Section
    policyTitle: "The Main Character Changes",
    glowUpsTitle: "The Glow Ups (Tax Breaks)",
    saltDeductionTitle: "SALT Deduction Cap Increase",
    saltDeductionDesc: "The cap is raised to $40,000 for taxpayers with AGI of $500,000 or less. The cap reverts to $10,000 for those with higher incomes.",
    childTaxCreditTitle: "Child Tax Credit Enhancement",
    childTaxCreditDesc: "The credit is permanently increased from $2,000 to $2,200 per child.",
    tipOvertimeTitle: "Tip & Overtime Deductions",
    tipOvertimeDesc: "A temporary deduction for federal income tax on tip and overtime pay is created.",
    nerfsTitle: "The Nerfs (Cost Increases)",
    repealEnergyTitle: "Repeal of Energy Credits",
    repealEnergyDesc: "Federal tax credits for EVs and residential solar installations are scheduled to end after 2025.",
    energyCostTitle: "Projected Energy Cost Increases",
    energyCostDesc: "Analysis indicates the rollback of clean energy incentives may lead to higher average household energy costs.",
    socialProgramsTitle: "Cuts to Social Programs",
    socialProgramsDesc: "Changes to Medicaid and SNAP eligibility may increase out-of-pocket costs for affected households.",

    // Calculator Section
    calculatorTitle: "Your Personal Impact Calc",
    calculatorSubtitle: "Enter your deets for a personalized estimate.",
    agiLabel: "Adjusted Gross Income (AGI)",
    stateLabel: "State of Residence",
    stateTooltipTitle: "Why does this matter?",
    stateTooltipContent: "The 2017 TCJA introduced a $10k cap on deducting State & Local Taxes (SALT), which primarily affected residents of high-tax states. The OBBBA temporarily raises this cap, providing significant, direct relief to those same states while having little effect on low-tax states.",
    filingStatusLabel: "Filing Status",
    filingStatusSingle: "Single",
    filingStatusMfj: "Married Filing Jointly",
    advancedOptions: "Advanced Options",
    childrenLabel: "Number of Children (under 17)",
    propertyTaxLabel: "Annual Property Tax",
    overtimeLabel: "Annual Overtime Income",
    overtimeDesc: "OBBBA deduction max $12.5k (Single) / $25k (Joint).",
    tipsLabel: "Annual Tip Income",
    tipsDesc: "OBBBA deduction max $25k.",
    evSolarLabel: "I am planning EV or Solar upgrades after 2025.",
    calculateButton: "Calculate Impact",

    // Comparison Output Section
    comparisonTitle: "Personalized Comparison",
    metricHeader: "Metric",
    preTcjaHeader: "Pre-TCJA Law (2017)",
    currentLawHeader: "Current Law (2025)",
    obbbaHeader: "OBBBA (Post-Bill)",
    comparisonFootnote: "<strong>Why the Pre-TCJA comparison?</strong> Since the major provisions of the 2017 Tax Cuts and Jobs Act (TCJA) are set to expire, the Pre-TCJA law becomes the effective baseline for measuring the impact of new legislation.",
    evSolarNoteTitle: "<strong>Note:</strong>",
    evSolarNoteContent: "Under the OBBBA, the $7,500 EV tax credit and 30% residential solar credit are scheduled to expire after Dec 31, 2025. Future project costs may be higher.",
    // Table rows will be generated dynamically but their labels need translation
    deductionsRow: "Total Deductions",
    taxableIncomeRow: "Taxable Income",
    taxableIncomeTooltip: "Your income after all deductions. This is the amount your tax is calculated on.",
    ctcRow: "Child Tax Credit (CTC)",
    ctcTooltip: "A dollar-for-dollar reduction of your tax liability for each qualifying child.",
    taxLiabilityRow: "Est. Federal Tax Liability",
    taxLiabilityTooltip: "Your final estimated tax bill. Calculated as: (Tax on Taxable Income) - (Total Credits).",
    netSavingsRow: "Net Savings (vs. Pre-TCJA Law)",

    // Tax Rate Explanation Section
    taxRateTitle: "Tax Rate Analysis",
    marginalRateLabel: "Marginal Tax Rate",
    marginalRateDesc: "The tax rate paid on the next dollar of taxable income.",
    averageRateLabel: "Average Effective Tax Rate",
    averageRateDesc: "The actual percentage of total income paid in federal tax.",

    // Footer
    disclaimerTitle: "⚠️ Important Disclaimer ⚠️",
    disclaimerContent: "This tool provides simplified estimations for illustrative and educational purposes only. It is not a substitute for professional financial or tax advice. Tax laws are complex and subject to change. The OBBBA calculations are based on the latest available information and may not reflect the final version of the bill. Consult with a qualified professional before making any financial decisions.",
    footerDate: "Data based on public reports and CBO analysis as of July 4, 2025."
};
