const baseUrl = import.meta.env.BASE_URL

export const links = {
  email: 'mailto:lorenzo.martinezmalvar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lorenzo-martinez-malvar/',
  github: 'https://github.com/lorenlorenloren',
  cv: `${baseUrl}Lorenzo_Martinez_Malvar_CV.pdf.pdf`,
}

export const projects = [
  {
    number: '01',
    title: 'Brazil-US Fixed Income Carry Trade',
    desk: 'Emerging markets / rates',
    question: 'Where does BRL-USD carry survive after curve shape, volatility and portfolio constraints?',
    approach: 'NSS curve fitting, Black-76 pricing and constrained allocation across Brazilian and US rates.',
    output: 'Emerging-market rates research with curve, option and portfolio layers.',
    thesis: 'A tangible emerging-market research project grounded in Brazilian and US fixed income.',
    description:
      'Quantitative analysis of Brazilian and US fixed-income markets using Nelson-Siegel-Svensson yield curves, Black-76 and portfolio optimisation.',
    tags: ['Latin America', 'Brazil', 'Fixed Income', 'Python'],
    github: 'https://github.com/lorenlorenloren/fixed-income-carry-trade-brazil',
    visual: 'yield',
    metrics: ['NSS curves', 'Black-76', 'Optimisation'],
  },
  {
    number: '02',
    title: 'Research Automation - Weber',
    desk: 'Business research / automation',
    question: 'How can recurring market-data collection become faster without losing traceability?',
    approach: 'Python and API workflows joining pharmaceutical sources into repeatable research pipelines.',
    output: '15+ source workflow reducing manual collection time by 65%.',
    thesis: 'Recurring market research converted into dependable data operations.',
    description:
      'Built Python and API workflows integrating 15+ pharmaceutical data sources and reducing manual data collection time by 65%.',
    tags: ['Python', 'APIs', 'Automation', 'Business Research'],
    github: undefined,
    visual: 'pipeline',
    metrics: ['15+ sources', '65% faster', 'API workflows'],
  },
  {
    number: '03',
    title: 'Smart Portfolio Optimizer',
    desk: 'Global / emerging-market finance',
    question: 'How do allocation rules behave when emerging-market exposure is treated as a first-order decision?',
    approach: 'Multi-strategy allocation research across global and emerging-market risk profiles.',
    output: 'Research platform for global allocation, emerging-market risk comparison and scenario testing.',
    thesis: 'Allocation logic across emerging and global market exposures.',
    description:
      'Research platform exploring multi-strategy portfolio allocation across emerging and global markets.',
    tags: ['Portfolio Management', 'Emerging Markets', 'Python', 'Risk'],
    github: 'https://github.com/lorenlorenloren/Smart-Portfolio-Optimizer',
    visual: 'portfolio',
    metrics: ['Allocation', 'Risk', 'Markets'],
  },
  {
    number: '04',
    title: 'Market Regime Detection',
    desk: 'Quant research / regimes',
    question: 'Can noisy market behaviour be classified into regimes useful for research and risk context?',
    approach: 'HMM, clustering and machine-learning techniques applied to market-state identification.',
    output: 'Regime research layer for interpreting market structure and transitions.',
    thesis: 'Noisy price behaviour translated into interpretable market states.',
    description:
      'Quantitative research into identifying market regimes using HMM, clustering and machine-learning techniques.',
    tags: ['Machine Learning', 'Markets', 'Python', 'Quant Research'],
    github: 'https://github.com/lorenlorenloren/Market-Regime-Detection-Enhanced',
    visual: 'regime',
    metrics: ['HMM', 'Clustering', 'Signals'],
  },
] as const

export const experience = [
  {
    institution: 'Universidad Carlos III de Madrid',
    role: 'Bachelor of Economics',
    place: 'Madrid',
    detail:
      'Economics, finance and quantitative foundations for company, market and international business analysis.',
  },
  {
    institution: 'Insper',
    role: 'Academic Exchange',
    place: 'São Paulo',
    detail:
      'First direct academic exposure to Latin American financial and business markets, including Brazilian capital markets, corporate finance, M&A, international finance and emerging markets.',
  },
  {
    institution: 'Weber Pharmacoeconomics Consulting',
    role: 'Innovation Department Intern',
    place: 'Madrid',
    detail:
      'Connected business research with Python and API automation to make recurring analysis faster and more reliable.',
  },
] as const

export const languages = ['Spanish', 'Galician', 'English C1', 'Portuguese C1']
