import { motion, useReducedMotion } from 'motion/react'
import { MagneticLink } from '../components/MagneticLink'
import { RouteMotif } from '../components/RouteMotif'
import { links } from '../data/portfolio'

const titleLines = ['Lorenzo', 'Martínez Malvar']

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-section section-pad" id="top" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <span>Economics student</span>
        <span>Finance / Strategy / Technology</span>
        <span>Europe - Latin America</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.h1 id="hero-title" className="hero-title">
            {titleLines.map((line, index) => (
              <motion.span
                key={line}
                initial={prefersReducedMotion ? false : { y: 42, opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.2 + index * 0.11,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="hero-statement"
            initial={prefersReducedMotion ? false : { y: 18, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
          <p>Finance, strategy and automation across Europe and Latin America.</p>
            <p>
              I analyse businesses and markets, build financial models and automate research
              workflows, with a growing focus on Latin America and first-hand experience
              in Brazil through my academic exchange at Insper in São Paulo.
            </p>
          </motion.div>
        </div>
        <motion.aside
          className="hero-brief"
          initial={prefersReducedMotion ? false : { y: 18, opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Profile summary"
        >
          <span>Profile</span>
          <strong>Business and markets analysis, financial modelling, Python automation.</strong>
          <span>Focus</span>
          <strong>Europe-Latin America finance, strategy and international markets.</strong>
        </motion.aside>
      </div>
      <motion.div
        className="hero-actions"
        initial={prefersReducedMotion ? false : { y: 12, opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
      >
        <MagneticLink className="text-action primary" href="#work" cursorLabel="VIEW" strength={0.2}>
          View selected work
        </MagneticLink>
        <MagneticLink className="text-action" href={links.linkedin} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.2}>
          LinkedIn
        </MagneticLink>
        <MagneticLink className="text-action" href={links.github} target="_blank" rel="noreferrer" cursorLabel="CODE" strength={0.2}>
          GitHub
        </MagneticLink>
      </motion.div>
      <RouteMotif />
    </section>
  )
}
