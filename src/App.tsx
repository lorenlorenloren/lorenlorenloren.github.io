import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { SelectedWork } from './sections/SelectedWork'
import { CustomCursor } from './components/CustomCursor'
import { FolioRail } from './components/FolioRail'
import { Navigation } from './components/Navigation'
import { type Language, portfolioCopy } from './data/portfolio'

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
}

const languageKey = 'lmm-language'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem(languageKey)
  if (saved === 'en' || saved === 'es' || saved === 'pt') return saved

  const browserLanguage = window.navigator.language.toLowerCase()
  if (browserLanguage.startsWith('es')) return 'es'
  if (browserLanguage.startsWith('pt')) return 'pt'
  return 'en'
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const copy = useMemo(() => portfolioCopy[language], [language])

  useEffect(() => {
    window.localStorage.setItem(languageKey, language)
    document.documentElement.lang = language
    document.title = copy.seo.title

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')

    description?.setAttribute('content', copy.seo.description)
    ogDescription?.setAttribute('content', copy.seo.description)
    twitterDescription?.setAttribute('content', copy.seo.description)
    ogTitle?.setAttribute('content', copy.seo.title)
    twitterTitle?.setAttribute('content', copy.seo.title)
  }, [copy, language])

  return (
    <>
      <CustomCursor />
      <Navigation copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      <FolioRail />
      <motion.main
        className="site-shell"
        initial={prefersReducedMotion ? false : 'hidden'}
        animate="visible"
        variants={pageVariants}
      >
        <Hero copy={copy.hero} routeCopy={copy.route} />
        <SelectedWork copy={copy.work} projects={copy.projects} visuals={copy.visuals} />
        <Experience copy={copy.experience} />
        <About copy={copy.about} />
        <Contact copy={copy.contact} />
      </motion.main>
    </>
  )
}

export default App
