import { motion, useReducedMotion } from 'motion/react'
import { MagneticLink } from '../components/MagneticLink'
import { Reveal } from '../components/Reveal'
import { links, type PortfolioCopy } from '../data/portfolio'

type AnalysisProps = {
  copy: PortfolioCopy['analysis']
}

export function Analysis({ copy }: AnalysisProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="analysis-section section-pad" id="analysis" aria-labelledby="analysis-title">
      <Reveal className="section-heading split-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <div>
          <h2 id="analysis-title">{copy.heading}</h2>
          <p className="analysis-intro">{copy.intro}</p>
        </div>
      </Reveal>

      <div className="analysis-board">
        <motion.article
          className="analysis-feature"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="case-label">{copy.primary.label}</p>
            <h3>{copy.primary.title}</h3>
            <p>{copy.primary.subtitle}</p>
          </div>
          <div className="analysis-metrics" aria-label={`${copy.primary.title} metrics`}>
            {copy.primary.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <MagneticLink
            className="case-link"
            href={links.goldAnalysis}
            target="_blank"
            rel="noreferrer"
            cursorLabel="OPEN"
            strength={0.16}
          >
            {copy.primary.cta}
          </MagneticLink>
        </motion.article>

        <div className="analysis-secondary">
          {copy.secondary.map((item, index) => (
            <Reveal className="analysis-note" key={item.title} delay={index * 0.08}>
              <p className="case-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <MagneticLink
                className="case-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                cursorLabel={item.cursor}
                strength={0.16}
              >
                {item.cta}
              </MagneticLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
