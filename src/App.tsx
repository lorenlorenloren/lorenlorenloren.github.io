import { motion, useReducedMotion, type Variants } from 'motion/react'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { SelectedWork } from './sections/SelectedWork'
import { CustomCursor } from './components/CustomCursor'
import { FolioRail } from './components/FolioRail'
import { Navigation } from './components/Navigation'

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

function App() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <CustomCursor />
      <Navigation />
      <FolioRail />
      <motion.main
        className="site-shell"
        initial={prefersReducedMotion ? false : 'hidden'}
        animate="visible"
        variants={pageVariants}
      >
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
        <Contact />
      </motion.main>
    </>
  )
}

export default App
