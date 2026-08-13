import { motion, useReducedMotion } from 'motion/react'
import { MagneticLink } from '../components/MagneticLink'
import { RouteMotif } from '../components/RouteMotif'
import { links, type PortfolioCopy } from '../data/portfolio'

type HeroProps = {
  copy: PortfolioCopy['hero']
  routeCopy: PortfolioCopy['route']
}

export function Hero({ copy, routeCopy }: HeroProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-section section-pad" id="top" aria-labelledby="hero-title">
      <div className="hero-kicker">
        {copy.kicker.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.h1 id="hero-title" className="hero-title">
            {copy.name.map((line, index) => (
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
            <p>{copy.headline}</p>
            <p>{copy.body}</p>
          </motion.div>
        </div>
        <motion.aside
          className="hero-brief"
          initial={prefersReducedMotion ? false : { y: 18, opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Profile summary"
        >
          <span>{copy.profileLabel}</span>
          <strong>{copy.profile}</strong>
          <span>{copy.focusLabel}</span>
          <strong>{copy.focus}</strong>
        </motion.aside>
      </div>
      <motion.div
        className="hero-actions"
        initial={prefersReducedMotion ? false : { y: 12, opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
      >
        <MagneticLink className="text-action primary" href="#work" cursorLabel="VIEW" strength={0.2}>
          {copy.actions.work}
        </MagneticLink>
        <MagneticLink className="text-action" href={links.linkedin} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.2}>
          LinkedIn
        </MagneticLink>
        <MagneticLink className="text-action" href={links.github} target="_blank" rel="noreferrer" cursorLabel="CODE" strength={0.2}>
          GitHub
        </MagneticLink>
      </motion.div>
      <RouteMotif copy={routeCopy} />
    </section>
  )
}
