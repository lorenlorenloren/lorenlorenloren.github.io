import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties } from 'react'
import type { PortfolioCopy, ProjectVisualType } from '../data/portfolio'

type ProjectVisualProps = {
  type: ProjectVisualType
  copy: PortfolioCopy['visuals']
}

export function ProjectVisual({ type, copy }: ProjectVisualProps) {
  if (type === 'yield') return <YieldCurve label={copy.yield} />
  if (type === 'pipeline') return <DataPipeline nodes={copy.pipeline} index={copy.pipelineIndex} />
  if (type === 'portfolio') return <PortfolioAllocation label={copy.allocation} />
  return <RegimeChart legend={copy.regimes} />
}

function YieldCurve({ label }: { label: string }) {
  const reduced = useReducedMotion()

  return (
    <svg className="project-visual" viewBox="0 0 520 300" role="presentation" aria-hidden="true">
      <path className="visual-grid" d="M48 52H484M48 112H484M48 172H484M48 232H484M92 32V252M182 32V252M272 32V252M362 32V252M452 32V252" />
      <motion.path
        className="curve primary"
        d="M58 216 C120 186 170 132 226 118 C292 102 358 126 470 78"
        initial={reduced ? false : { pathLength: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        className="curve secondary"
        d="M58 236 C134 192 190 166 252 154 C324 140 378 128 470 118"
        initial={reduced ? false : { pathLength: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      />
      <text x="48" y="278">{label}</text>
    </svg>
  )
}

function DataPipeline({ nodes, index }: { nodes: readonly string[]; index: string }) {
  const reduced = useReducedMotion()

  return (
    <div className="pipeline-visual" aria-hidden="true">
      {nodes.map((node, index) => (
        <motion.div
          className="pipeline-node"
          key={node}
          initial={reduced ? false : { opacity: 0.42, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>{node}</span>
        </motion.div>
      ))}
      <div className="pipeline-thread" />
      <div className="pipeline-index">{index}</div>
    </div>
  )
}

function PortfolioAllocation({ label }: { label: string }) {
  const reduced = useReducedMotion()
  const bars = [42, 28, 18, 12]

  return (
    <div className="allocation-visual" aria-hidden="true">
      <div className="allocation-ring">
        <span>EM</span>
      </div>
      <div className="allocation-bars">
        {bars.map((bar, index) => (
          <motion.span
            key={bar}
            style={{ '--bar': `${bar}%` } as CSSProperties}
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={reduced ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
      <p>{label}</p>
    </div>
  )
}

function RegimeChart({ legend }: { legend: readonly string[] }) {
  const reduced = useReducedMotion()

  return (
    <div className="regime-visual" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => (
        <motion.span
          key={index}
          className={index > 6 && index < 13 ? 'stress' : index > 17 ? 'transition' : ''}
          initial={reduced ? false : { scaleY: 0.72, opacity: 0.48 }}
          whileInView={reduced ? undefined : { scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: index * 0.018, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <div className="regime-legend">
        {legend.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
