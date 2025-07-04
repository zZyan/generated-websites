/**
 * Chinese content for the OBBBA Financial Impact Analyzer.
 * This object contains all user-facing strings for the Chinese version of the site.
 */
const zh = {
    // Header
    headerTitle: "OBBBA 影响分析器",
    headerSubtitle: "分析“一项伟大法案”的财务影响。",

    // Language Toggle
    langToggle: "English",

    // Summary Section
    summaryTitle: "财政状况检查 (10年展望)",
    kpiTaxCuts: "减税",
    kpiSpendingReductions: "支出<br>削减",
    kpiNetDebtIncrease: "净债务增加",
    chartTitle: "财政行动比较",
    breakdownTitle: "详细分析",
    faqDebtTitle: "国债增加的经济影响？",
    faqDebtContent: "国债增加可能导致利率上升，从而增加消费者和企业的借贷成本。这也可能对美元价值构成下行压力并导致通货膨胀，从而可能随着时间的推移降低家庭购买力。",
    faqPersonalFinanceTitle: "对个人财务的长期影响？",
    faqPersonalFinanceContent: "短期的税收节省可能会被贷款利率上升、通货膨胀以及因联邦项目削减和清洁能源激励措施废除而增加的医疗和能源成本所抵消。",
    faqEconomistsTitle: "顶尖经济学家怎么说",
    quoteSummers: "“大规模、无资金支持的减税是导致通货膨胀加剧的根源，最终将使后代背上不可持续的债务。”",
    quoteSummersCite: "- 拉里·萨默斯",
    quoteLustig: "“政府债务的便利收益率是一个关键指标。在没有明确偿还路径的情况下大幅增加债务供给的财政政策，有可能侵蚀这一优势，导致政府融资成本上升。”",
    quoteLustigCite: "- 汉诺·卢斯蒂格",
    
    // Policy Details Section
    policyTitle: "主要政策变化",
    glowUpsTitle: "利好 (税收优惠)",
    saltDeductionTitle: "州和地方税 (SALT) 抵免上限提高",
    saltDeductionDesc: "对于AGI为$500,000或以下的纳税人，上限提高到$40,000。对于收入较高者，上限恢复到$10,000。",
    childTaxCreditTitle: "儿童税收抵免增强",
    childTaxCreditDesc: "每名儿童的抵免额从$2,000永久增加到$2,200。",
    tipOvertimeTitle: "小费和加班费抵免",
    tipOvertimeDesc: "为小费和加班费的联邦所得税创建了临时抵免。",
    nerfsTitle: "削弱 (成本增加)",
    repealEnergyTitle: "废除能源抵免",
    repealEnergyDesc: "电动汽车和住宅太阳能装置的联邦税收抵免计划于2025年后结束。",
    energyCostTitle: "预计能源成本增加",
    energyCostDesc: "分析表明，取消清洁能源激励措施可能导致家庭平均能源成本上升。",
    socialProgramsTitle: "削减社会项目",
    socialProgramsDesc: "Medicaid和SNAP资格的变更可能会增加受影响家庭的自付费用。",

    // Calculator Section
    calculatorTitle: "您的个人影响计算",
    calculatorSubtitle: "输入您的信息以获得个性化估算。",
    agiLabel: "调整后总收入 (AGI)",
    stateLabel: "居住州",
    stateTooltipTitle: "这为什么重要？",
    stateTooltipContent: "2017年的TCJA对州和地方税（SALT）的抵免上限设定为$10k，这主要影响了高税收州的居民。OBBBA暂时提高了这一上限，为这些州的居民提供了显著的直接救济，而对低税收州的影响很小。",
    filingStatusLabel: "报税身份",
    filingStatusSingle: "单身",
    filingStatusMfj: "夫妻联合报税",
    advancedOptions: "高级选项",
    childrenLabel: "子女数量 (17岁以下)",
    propertyTaxLabel: "年度房产税",
    overtimeLabel: "年度加班收入",
    overtimeDesc: "OBBBA 抵免上限：单身$12.5k / 联合$25k。",
    tipsLabel: "年度小费收入",
    tipsDesc: "OBBBA 抵免上限：$25k。",
    evSolarLabel: "我计划在2025年后进行电动汽车或太阳能升级。",
    calculateButton: "计算影响",

    // Comparison Output Section
    comparisonTitle: "个性化比较",
    metricHeader: "指标",
    preTcjaHeader: "TCJA前法律 (2017)",
    currentLawHeader: "现行法律 (2025)",
    obbbaHeader: "OBBBA (法案后)",
    comparisonFootnote: "<strong>为什么要与TCJA前的法律比较？</strong> 由于2017年《减税与就业法案》(TCJA) 的主要条款即将到期，TCJA前的法律成为衡量新立法影响的有效基准。",
    evSolarNoteTitle: "<strong>注意:</strong>",
    evSolarNoteContent: "根据OBBBA，价值$7,500的电动汽车税收抵免和30%的住宅太阳能抵免计划于2025年12月31日后到期。未来的项目成本可能会更高。",
    // Table rows
    deductionsRow: "总抵免额",
    taxableIncomeRow: "应税收入",
    taxableIncomeTooltip: "扣除所有可抵免项目后的收入。您的税款是根据这个数额计算的。",
    ctcRow: "儿童税收抵免 (CTC)",
    ctcTooltip: "为每个符合条件的子女提供的逐元减税。",
    taxLiabilityRow: "预估联邦应纳税额",
    taxLiabilityTooltip: "您的最终预估税单。计算公式为：（应税收入的税款）-（总抵免额）。",
    netSavingsRow: "净节省 (与TCJA前法律相比)",


    // Tax Rate Explanation Section
    taxRateTitle: "税率分析",
    marginalRateLabel: "边际税率",
    marginalRateDesc: "下一美元应税收入所支付的税率。",
    averageRateLabel: "平均有效税率",
    averageRateDesc: "总收入中实际支付的联邦税百分比。",

    // Footer
    disclaimerTitle: "⚠️ 重要免责声明 ⚠️",
    disclaimerContent: "本工具仅为说明和教育目的提供简化估算。它不能替代专业的财务或税务建议。税法复杂且可能发生变化。OBBBA的计算基于最新可用信息，可能不反映法案的最终版本。在做出任何财务决定之前，请咨询合格的专业人士。",
    footerDate: "数据基于截至2025年7月4日的公开报告和CBO分析。"
};
