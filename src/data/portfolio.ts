const baseUrl = import.meta.env.BASE_URL

export type Language = 'en' | 'es' | 'pt'

export const locales: Array<{ code: Language; label: string; nativeName: string }> = [
  { code: 'en', label: 'EN', nativeName: 'English' },
  { code: 'es', label: 'ES', nativeName: 'Español' },
  { code: 'pt', label: 'PT', nativeName: 'Português' },
]

export const links = {
  email: 'mailto:martinezmalvarinvesting@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lorenzo-martinez-malvar/',
  github: 'https://github.com/lorenlorenloren',
  cv: `${baseUrl}Lorenzo_Martinez_Malvar_CV.pdf`,
}

const sharedProjects = {
  carry: {
    number: '01',
    github: 'https://github.com/lorenlorenloren/fixed-income-carry-trade-brazil',
    visual: 'yield',
  },
  weber: {
    number: '02',
    github: undefined,
    visual: 'pipeline',
  },
  optimizer: {
    number: '03',
    github: 'https://github.com/lorenlorenloren/Smart-Portfolio-Optimizer',
    visual: 'portfolio',
  },
  regimes: {
    number: '04',
    github: 'https://github.com/lorenlorenloren/Market-Regime-Detection-Enhanced',
    visual: 'regime',
  },
} as const

export const portfolioCopy = {
  en: {
    seo: {
      title: 'Lorenzo Martínez Malvar | Finance, Strategy and Automation',
      description:
        'Lorenzo Martínez Malvar — Economics student focused on finance, strategy and automation, with international experience in Madrid and São Paulo and a growing professional focus on Latin America.',
    },
    nav: {
      ariaHome: 'Lorenzo Martínez Malvar home',
      primary: [
        ['Work', '#work'],
        ['Experience', '#experience'],
        ['About', '#about'],
        ['Contact', '#contact'],
      ],
      language: 'Language',
    },
    hero: {
      kicker: ['Economics student', 'Finance / Strategy / Technology', 'Europe - Latin America'],
      name: ['Lorenzo', 'Martínez Malvar'],
      headline: 'Finance, strategy and automation across Europe and Latin America.',
      body:
        'I analyse businesses and markets, build financial models and automate research workflows, with a growing focus on Latin America and first-hand experience in Brazil through my academic exchange at Insper in São Paulo.',
      profileLabel: 'Profile',
      profile: 'Business and markets analysis, financial modelling, Python automation.',
      focusLabel: 'Focus',
      focus: 'Europe-Latin America finance, strategy and international markets.',
      actions: {
        work: 'View selected work',
      },
    },
    route: {
      aria: 'Europe to Latin America connection with São Paulo as academic experience',
      toplineLeft: 'Europe - Latin America axis',
      madridRegion: 'EUROPE',
      madridCity: 'MADRID',
      latinRegion: 'LATIN AMERICA',
      saoContext: 'SÃO PAULO / ACADEMIC EXPERIENCE',
      caption: 'Regional ambition: Latin America / Existing anchor: São Paulo',
    },
    work: {
      eyebrow: 'Selected Work',
      heading: 'Research files.',
      approach: 'Approach',
      output: 'Output',
      focusAreas: 'focus areas',
      methods: 'methods',
      review: 'Review file',
      internal: 'Internal professional work',
    },
    projects: [
      {
        ...sharedProjects.carry,
        title: 'Brazil-US Fixed Income Carry Trade',
        desk: 'Emerging markets / rates',
        question: 'Where does BRL-USD carry survive after curve shape, volatility and portfolio constraints?',
        approach: 'NSS curve fitting, Black-76 pricing and constrained allocation across Brazilian and US rates.',
        output: 'Emerging-market rates research with curve, option and portfolio layers.',
        description:
          'Quantitative analysis of Brazilian and US fixed-income markets using Nelson-Siegel-Svensson yield curves, Black-76 and portfolio optimisation.',
        tags: ['Latin America', 'Brazil', 'Fixed Income', 'Python'],
        metrics: ['NSS curves', 'Black-76', 'Optimisation'],
      },
      {
        ...sharedProjects.weber,
        title: 'Research Automation - Weber',
        desk: 'Business research / automation',
        question: 'How can recurring market-data collection become faster without losing traceability?',
        approach: 'Python and API workflows joining pharmaceutical sources into repeatable research pipelines.',
        output: '15+ source workflow reducing manual collection time by 65%.',
        description:
          'Built Python and API workflows integrating 15+ pharmaceutical data sources and reducing manual data collection time by 65%.',
        tags: ['Python', 'APIs', 'Automation', 'Business Research'],
        metrics: ['15+ sources', '65% faster', 'API workflows'],
      },
      {
        ...sharedProjects.optimizer,
        title: 'Smart Portfolio Optimizer',
        desk: 'Global / emerging-market finance',
        question: 'How do allocation rules behave when emerging-market exposure is treated as a first-order decision?',
        approach: 'Multi-strategy allocation research across global and emerging-market risk profiles.',
        output: 'Research platform for global allocation, emerging-market risk comparison and scenario testing.',
        description:
          'Research platform exploring multi-strategy portfolio allocation across emerging and global markets.',
        tags: ['Portfolio Management', 'Emerging Markets', 'Python', 'Risk'],
        metrics: ['Allocation', 'Risk', 'Markets'],
      },
      {
        ...sharedProjects.regimes,
        title: 'Market Regime Detection',
        desk: 'Quant research / regimes',
        question: 'Can noisy market behaviour be classified into regimes useful for research and risk context?',
        approach: 'HMM, clustering and machine-learning techniques applied to market-state identification.',
        output: 'Regime research layer for interpreting market structure and transitions.',
        description:
          'Quantitative research into identifying market regimes using HMM, clustering and machine-learning techniques.',
        tags: ['Machine Learning', 'Markets', 'Python', 'Quant Research'],
        metrics: ['HMM', 'Clustering', 'Signals'],
      },
    ],
    experience: {
      eyebrow: 'Experience',
      heading: 'Finance education with direct exposure to Latin American markets.',
      items: [
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
      ],
    },
    about: {
      eyebrow: 'About',
      heading: 'Finance, economics, strategy and technology across markets.',
      paragraphs: [
        'I am an Economics student at Universidad Carlos III de Madrid interested in the intersection of finance, economics, strategy and technology.',
        'My academic exchange at Insper in São Paulo gave me direct exposure to the Brazilian business and financial environment and strengthened my interest in building an internationally oriented career connected to Latin America.',
        'Brazil is currently the Latin American market I know best, but my broader professional interest extends across the region and to the economic and business links between Europe and Latin America.',
        'My work and independent projects combine financial analysis, quantitative research and automation.',
      ],
      languagesLabel: 'Languages',
      languages: ['Spanish', 'Galician', 'English C1', 'Portuguese C1'],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Europe ↔ Latin America',
      line:
        'Madrid and São Paulo have shaped my international perspective. I am interested in opportunities connecting European and Latin American markets.',
      email: 'Email',
      download: 'Download CV',
    },
    visuals: {
      yield: 'Brazil rates as Latin America example / USD curve',
      pipeline: ['Source', 'API', 'Clean', 'Model', 'Brief'],
      pipelineIndex: '15+ pharmaceutical data sources',
      allocation: 'Multi-strategy allocation',
      regimes: ['Expansion', 'Stress', 'Transition'],
    },
  },
  es: {
    seo: {
      title: 'Lorenzo Martínez Malvar | Finanzas, estrategia y automatización',
      description:
        'Lorenzo Martínez Malvar — estudiante de Economía centrado en finanzas, estrategia y automatización, con experiencia internacional en Madrid y São Paulo y un foco profesional creciente en América Latina.',
    },
    nav: {
      ariaHome: 'Inicio de Lorenzo Martínez Malvar',
      primary: [
        ['Proyectos', '#work'],
        ['Experiencia', '#experience'],
        ['Sobre mí', '#about'],
        ['Contacto', '#contact'],
      ],
      language: 'Idioma',
    },
    hero: {
      kicker: ['Estudiante de Economía', 'Finanzas / Estrategia / Tecnología', 'Europa - América Latina'],
      name: ['Lorenzo', 'Martínez Malvar'],
      headline: 'Finanzas, estrategia y automatización entre Europa y América Latina.',
      body:
        'Analizo empresas y mercados, construyo modelos financieros y automatizo flujos de investigación, con un foco creciente en América Latina y experiencia directa en Brasil por mi intercambio académico en Insper, São Paulo.',
      profileLabel: 'Perfil',
      profile: 'Análisis de negocios y mercados, modelización financiera, automatización con Python.',
      focusLabel: 'Foco',
      focus: 'Finanzas, estrategia y mercados internacionales entre Europa y América Latina.',
      actions: {
        work: 'Ver proyectos seleccionados',
      },
    },
    route: {
      aria: 'Conexión de Europa con América Latina con São Paulo como experiencia académica',
      toplineLeft: 'Eje Europa - América Latina',
      madridRegion: 'EUROPA',
      madridCity: 'MADRID',
      latinRegion: 'AMÉRICA LATINA',
      saoContext: 'SÃO PAULO / EXPERIENCIA ACADÉMICA',
      caption: 'Ambición regional: América Latina / Ancla real: São Paulo',
    },
    work: {
      eyebrow: 'Proyectos',
      heading: 'Casos de análisis.',
      approach: 'Enfoque',
      output: 'Resultado',
      focusAreas: 'áreas de enfoque',
      methods: 'métodos',
      review: 'Ver repositorio',
      internal: 'Trabajo profesional interno',
    },
    projects: [
      {
        ...sharedProjects.carry,
        title: 'Carry Trade de Renta Fija Brasil-EE. UU.',
        desk: 'Mercados emergentes / tipos',
        question: '¿Dónde resiste el carry BRL-USD tras considerar curva, volatilidad y restricciones de cartera?',
        approach: 'Ajuste de curvas NSS, valoración Black-76 y asignación restringida entre tipos brasileños y estadounidenses.',
        output: 'Análisis de tipos en mercados emergentes con capas de curva, opciones y cartera.',
        description:
          'Análisis cuantitativo de mercados de renta fija brasileños y estadounidenses usando curvas Nelson-Siegel-Svensson, Black-76 y optimización de carteras.',
        tags: ['América Latina', 'Brasil', 'Renta Fija', 'Python'],
        metrics: ['Curvas NSS', 'Black-76', 'Optimización'],
      },
      {
        ...sharedProjects.weber,
        title: 'Automatización de Research - Weber',
        desk: 'Research de negocio / automatización',
        question: '¿Cómo convertir la recogida recurrente de datos de mercado en un proceso más rápido y trazable?',
        approach: 'Flujos con Python y APIs que conectan fuentes farmacéuticas en pipelines repetibles de investigación.',
        output: 'Flujo con más de 15 fuentes que redujo el tiempo manual de recopilación un 65%.',
        description:
          'Construcción de flujos con Python y APIs integrando más de 15 fuentes farmacéuticas y reduciendo un 65% el tiempo manual de recopilación.',
        tags: ['Python', 'APIs', 'Automatización', 'Research de Negocio'],
        metrics: ['15+ fuentes', '65% más rápido', 'APIs'],
      },
      {
        ...sharedProjects.optimizer,
        title: 'Smart Portfolio Optimizer',
        desk: 'Finanzas globales / mercados emergentes',
        question: '¿Cómo se comportan las reglas de asignación cuando la exposición emergente es una decisión central?',
        approach: 'Investigación de asignación multiestrategia sobre perfiles de riesgo globales y emergentes.',
        output: 'Plataforma de investigación para asignación global, comparación de riesgo emergente y escenarios.',
        description:
          'Plataforma de investigación sobre asignación multiestrategia de carteras en mercados globales y emergentes.',
        tags: ['Gestión de Carteras', 'Mercados Emergentes', 'Python', 'Riesgo'],
        metrics: ['Asignación', 'Riesgo', 'Mercados'],
      },
      {
        ...sharedProjects.regimes,
        title: 'Detección de Regímenes de Mercado',
        desk: 'Research cuantitativo / regímenes',
        question: '¿Puede clasificarse el comportamiento ruidoso del mercado en regímenes útiles para research y riesgo?',
        approach: 'HMM, clustering y técnicas de machine learning aplicadas a la identificación de estados de mercado.',
        output: 'Capa de investigación de regímenes para interpretar estructura y transiciones de mercado.',
        description:
          'Investigación cuantitativa para identificar regímenes de mercado usando HMM, clustering y machine learning.',
        tags: ['Machine Learning', 'Mercados', 'Python', 'Research Cuantitativo'],
        metrics: ['HMM', 'Clustering', 'Señales'],
      },
    ],
    experience: {
      eyebrow: 'Experiencia',
      heading: 'Formación financiera con exposición directa a mercados latinoamericanos.',
      items: [
        {
          institution: 'Universidad Carlos III de Madrid',
          role: 'Grado en Economía',
          place: 'Madrid',
          detail:
            'Bases de economía, finanzas y análisis cuantitativo para estudiar empresas, mercados y negocio internacional.',
        },
        {
          institution: 'Insper',
          role: 'Intercambio académico',
          place: 'São Paulo',
          detail:
            'Primera exposición académica directa a mercados financieros y de negocio latinoamericanos, incluyendo mercado de capitales brasileño, corporate finance, M&A, finanzas internacionales y mercados emergentes.',
        },
        {
          institution: 'Weber Pharmacoeconomics Consulting',
          role: 'Becario en el Departamento de Innovación',
          place: 'Madrid',
          detail:
            'Conecté investigación de negocio con automatización en Python y APIs para hacer el análisis recurrente más rápido y fiable.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      heading: 'Finanzas, economía, estrategia y tecnología entre mercados.',
      paragraphs: [
        'Soy estudiante de Economía en la Universidad Carlos III de Madrid, interesado en la intersección entre finanzas, economía, estrategia y tecnología.',
        'Mi intercambio académico en Insper, São Paulo, me dio exposición directa al entorno empresarial y financiero brasileño y reforzó mi interés por construir una carrera internacional conectada con América Latina.',
        'Brasil es actualmente el mercado latinoamericano que mejor conozco, pero mi interés profesional más amplio se extiende a la región y a los vínculos económicos y empresariales entre Europa y América Latina.',
        'Mi trabajo y proyectos independientes combinan análisis financiero, investigación cuantitativa y automatización.',
      ],
      languagesLabel: 'Idiomas',
      languages: ['Español', 'Gallego', 'Inglés C1', 'Portugués C1'],
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Europa ↔ América Latina',
      line:
        'Madrid y São Paulo han formado mi perspectiva internacional. Me interesan oportunidades que conecten mercados europeos y latinoamericanos.',
      email: 'Email',
      download: 'Descargar CV',
    },
    visuals: {
      yield: 'Tipos de Brasil como ejemplo latinoamericano / curva USD',
      pipeline: ['Fuente', 'API', 'Limpieza', 'Modelo', 'Brief'],
      pipelineIndex: '15+ fuentes farmacéuticas',
      allocation: 'Asignación multiestrategia',
      regimes: ['Expansión', 'Estrés', 'Transición'],
    },
  },
  pt: {
    seo: {
      title: 'Lorenzo Martínez Malvar | Finanças, estratégia e automação',
      description:
        'Lorenzo Martínez Malvar — estudante de Economia focado em finanças, estratégia e automação, com experiência internacional em Madrid e São Paulo e foco profissional crescente na América Latina.',
    },
    nav: {
      ariaHome: 'Início de Lorenzo Martínez Malvar',
      primary: [
        ['Projetos', '#work'],
        ['Experiência', '#experience'],
        ['Sobre', '#about'],
        ['Contato', '#contact'],
      ],
      language: 'Idioma',
    },
    hero: {
      kicker: ['Estudante de Economia', 'Finanças / Estratégia / Tecnologia', 'Europa - América Latina'],
      name: ['Lorenzo', 'Martínez Malvar'],
      headline: 'Finanças, estratégia e automação entre Europa e América Latina.',
      body:
        'Analiso empresas e mercados, construo modelos financeiros e automatizo fluxos de pesquisa, com foco crescente na América Latina e experiência direta no Brasil por meio do meu intercâmbio acadêmico no Insper, em São Paulo.',
      profileLabel: 'Perfil',
      profile: 'Análise de negócios e mercados, modelagem financeira, automação com Python.',
      focusLabel: 'Foco',
      focus: 'Finanças, estratégia e mercados internacionais entre Europa e América Latina.',
      actions: {
        work: 'Ver projetos selecionados',
      },
    },
    route: {
      aria: 'Conexão da Europa com a América Latina com São Paulo como experiência acadêmica',
      toplineLeft: 'Eixo Europa - América Latina',
      madridRegion: 'EUROPA',
      madridCity: 'MADRID',
      latinRegion: 'AMÉRICA LATINA',
      saoContext: 'SÃO PAULO / EXPERIÊNCIA ACADÊMICA',
      caption: 'Ambição regional: América Latina / Âncora real: São Paulo',
    },
    work: {
      eyebrow: 'Projetos',
      heading: 'Casos de análise.',
      approach: 'Abordagem',
      output: 'Resultado',
      focusAreas: 'áreas de foco',
      methods: 'métodos',
      review: 'Ver repositório',
      internal: 'Trabalho profissional interno',
    },
    projects: [
      {
        ...sharedProjects.carry,
        title: 'Carry Trade de Renda Fixa Brasil-EUA',
        desk: 'Mercados emergentes / juros',
        question: 'Onde o carry BRL-USD resiste depois de curva, volatilidade e restrições de carteira?',
        approach: 'Ajuste de curvas NSS, precificação Black-76 e alocação restrita entre juros brasileiros e americanos.',
        output: 'Pesquisa de juros em mercados emergentes com camadas de curva, opções e carteira.',
        description:
          'Análise quantitativa de mercados de renda fixa brasileiros e americanos usando curvas Nelson-Siegel-Svensson, Black-76 e otimização de carteiras.',
        tags: ['América Latina', 'Brasil', 'Renda Fixa', 'Python'],
        metrics: ['Curvas NSS', 'Black-76', 'Otimização'],
      },
      {
        ...sharedProjects.weber,
        title: 'Automação de Pesquisa - Weber',
        desk: 'Pesquisa de negócios / automação',
        question: 'Como tornar a coleta recorrente de dados de mercado mais rápida sem perder rastreabilidade?',
        approach: 'Fluxos em Python e APIs conectando fontes farmacêuticas em pipelines repetíveis de pesquisa.',
        output: 'Fluxo com mais de 15 fontes que reduziu o tempo manual de coleta em 65%.',
        description:
          'Construção de fluxos em Python e APIs integrando mais de 15 fontes farmacêuticas e reduzindo em 65% o tempo manual de coleta.',
        tags: ['Python', 'APIs', 'Automação', 'Pesquisa de Negócios'],
        metrics: ['15+ fontes', '65% mais rápido', 'APIs'],
      },
      {
        ...sharedProjects.optimizer,
        title: 'Smart Portfolio Optimizer',
        desk: 'Finanças globais / mercados emergentes',
        question: 'Como regras de alocação se comportam quando exposição emergente vira uma decisão central?',
        approach: 'Pesquisa de alocação multiestratégia em perfis de risco globais e emergentes.',
        output: 'Plataforma de pesquisa para alocação global, comparação de risco emergente e testes de cenário.',
        description:
          'Plataforma de pesquisa explorando alocação multiestratégia de carteiras em mercados globais e emergentes.',
        tags: ['Gestão de Carteiras', 'Mercados Emergentes', 'Python', 'Risco'],
        metrics: ['Alocação', 'Risco', 'Mercados'],
      },
      {
        ...sharedProjects.regimes,
        title: 'Detecção de Regimes de Mercado',
        desk: 'Pesquisa quantitativa / regimes',
        question: 'O comportamento ruidoso do mercado pode ser classificado em regimes úteis para pesquisa e risco?',
        approach: 'HMM, clustering e técnicas de machine learning aplicadas à identificação de estados de mercado.',
        output: 'Camada de pesquisa de regimes para interpretar estrutura e transições de mercado.',
        description:
          'Pesquisa quantitativa para identificar regimes de mercado usando HMM, clustering e machine learning.',
        tags: ['Machine Learning', 'Mercados', 'Python', 'Pesquisa Quantitativa'],
        metrics: ['HMM', 'Clustering', 'Sinais'],
      },
    ],
    experience: {
      eyebrow: 'Experiência',
      heading: 'Formação financeira com exposição direta a mercados latino-americanos.',
      items: [
        {
          institution: 'Universidad Carlos III de Madrid',
          role: 'Bacharelado em Economia',
          place: 'Madrid',
          detail:
            'Bases de economia, finanças e análise quantitativa para estudar empresas, mercados e negócios internacionais.',
        },
        {
          institution: 'Insper',
          role: 'Intercâmbio acadêmico',
          place: 'São Paulo',
          detail:
            'Primeira exposição acadêmica direta a mercados financeiros e de negócios latino-americanos, incluindo mercado de capitais brasileiro, corporate finance, M&A, finanças internacionais e mercados emergentes.',
        },
        {
          institution: 'Weber Pharmacoeconomics Consulting',
          role: 'Estagiário no Departamento de Inovação',
          place: 'Madrid',
          detail:
            'Conectei pesquisa de negócios com automação em Python e APIs para tornar análises recorrentes mais rápidas e confiáveis.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre',
      heading: 'Finanças, economia, estratégia e tecnologia entre mercados.',
      paragraphs: [
        'Sou estudante de Economia na Universidad Carlos III de Madrid, interessado na interseção entre finanças, economia, estratégia e tecnologia.',
        'Meu intercâmbio acadêmico no Insper, em São Paulo, me deu exposição direta ao ambiente empresarial e financeiro brasileiro e fortaleceu meu interesse em construir uma carreira internacional conectada à América Latina.',
        'O Brasil é atualmente o mercado latino-americano que conheço melhor, mas meu interesse profissional mais amplo se estende pela região e pelos vínculos econômicos e empresariais entre Europa e América Latina.',
        'Meu trabalho e projetos independentes combinam análise financeira, pesquisa quantitativa e automação.',
      ],
      languagesLabel: 'Idiomas',
      languages: ['Espanhol', 'Galego', 'Inglês C1', 'Português C1'],
    },
    contact: {
      eyebrow: 'Contato',
      heading: 'Europa ↔ América Latina',
      line:
        'Madrid e São Paulo moldaram minha perspectiva internacional. Tenho interesse em oportunidades conectando mercados europeus e latino-americanos.',
      email: 'Email',
      download: 'Baixar CV',
    },
    visuals: {
      yield: 'Juros do Brasil como exemplo latino-americano / curva USD',
      pipeline: ['Fonte', 'API', 'Limpeza', 'Modelo', 'Brief'],
      pipelineIndex: '15+ fontes farmacêuticas',
      allocation: 'Alocação multiestratégia',
      regimes: ['Expansão', 'Estresse', 'Transição'],
    },
  },
} as const

export type PortfolioCopy = (typeof portfolioCopy)[Language]
export type PortfolioProject = PortfolioCopy['projects'][number]
export type ProjectVisualType = PortfolioProject['visual']
