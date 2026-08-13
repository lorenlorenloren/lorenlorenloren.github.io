import { useRef, type PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { MagneticLink } from '../components/MagneticLink'
import { ProjectVisual } from '../components/ProjectVisual'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/portfolio'
import { setCursorLabel } from '../hooks/useCursorLabel'

export function SelectedWork() {
  return (
    <section className="work-section section-pad" id="work" aria-labelledby="work-title">
      <Reveal className="section-heading editorial-heading">
        <p className="eyebrow">Selected Work</p>
        <h2 id="work-title">Research files.</h2>
      </Reveal>
      <div className="case-study-list">
        {projects.map((project) => (
          <ProjectCase key={project.number} project={project} />
        ))}
      </div>
    </section>
  )
}

type ProjectCaseProps = {
  project: (typeof projects)[number]
}

function ProjectCase({ project }: ProjectCaseProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const visualX = useSpring(0, { stiffness: 210, damping: 28, mass: 0.42 })
  const visualY = useSpring(0, { stiffness: 210, damping: 28, mass: 0.42 })
  const visualScale = useSpring(1, { stiffness: 220, damping: 26, mass: 0.4 })
  const smoothRotateX = useSpring(rotateX, { stiffness: 150, damping: 25, mass: 0.45 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 150, damping: 25, mass: 0.45 })

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const xPercent = (x / rect.width - 0.5) * 2
    const yPercent = (y / rect.height - 0.5) * 2
    rotateX.set(yPercent * -0.75)
    rotateY.set(xPercent * 0.75)
    visualX.set(xPercent * 8)
    visualY.set(yPercent * 6)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
    visualX.set(0)
    visualY.set(0)
    visualScale.set(1)
  }

  return (
    <motion.article
      ref={ref}
      className="case-study"
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
      initial={reduced ? false : { opacity: 0, y: 42 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onPointerMove}
      onPointerEnter={() => {
        if (!reduced) {
          setCursorLabel('VIEW')
          visualScale.set(1.012)
        }
      }}
      onPointerLeave={() => {
        reset()
        if (!reduced) {
          setCursorLabel('')
        }
      }}
    >
      <div className="case-index" aria-hidden="true">
        {project.number}
      </div>
      <div className="case-copy">
        <p className="case-label">{project.desk}</p>
        <h3>{project.title}</h3>
        <p className="case-thesis">{project.question}</p>
        <div className="memo-grid">
          <div>
            <span>Approach</span>
            <p>{project.approach}</p>
          </div>
          <div>
            <span>Output</span>
            <p>{project.output}</p>
          </div>
        </div>
        <div className="case-tags" aria-label={`${project.title} focus areas`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="case-metrics" aria-label={`${project.title} methods`}>
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
        {project.github ? (
          <MagneticLink
            className="case-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            cursorLabel="CODE"
            strength={0.16}
          >
            Review file
          </MagneticLink>
        ) : (
          <span className="case-link muted">Internal professional work</span>
        )}
      </div>
      <motion.div className="case-visual" style={{ x: visualX, y: visualY, scale: visualScale }}>
        <ProjectVisual type={project.visual} />
      </motion.div>
    </motion.article>
  )
}
