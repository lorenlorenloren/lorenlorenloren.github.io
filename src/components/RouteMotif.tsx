import { motion, useReducedMotion } from 'motion/react'

export function RouteMotif() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="route-motif" aria-label="Europe to Latin America connection with São Paulo as academic experience">
      <div className="route-topline">
        <span>Europe - Latin America axis</span>
        <span>MAD 40.4168 N / GRU 23.5505 S</span>
      </div>
      <div className="route-watermark madrid" aria-hidden="true">EU</div>
      <div className="route-watermark sao latin" aria-hidden="true">LATIN AMERICA</div>
      <svg viewBox="0 0 1180 500" role="presentation" aria-hidden="true">
        <defs>
          <linearGradient id="route-line" x1="0" x2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="46%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path className="route-grid" d="M0 70H1180M0 150H1180M0 250H1180M0 350H1180M0 430H1180" />
        <path className="route-grid" d="M130 0V500M300 0V500M470 0V500M640 0V500M810 0V500M980 0V500" />
        <path className="route-ghost" d="M178 190 C360 62 510 116 642 246 C765 367 913 374 1005 284" />
        <motion.path
          className="route-path"
          d="M178 190 C360 62 510 116 642 246 C765 367 913 374 1005 284"
          pathLength="1"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          className="route-tracer"
          d="M178 190 C360 62 510 116 642 246 C765 367 913 374 1005 284"
          pathLength="1"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          className="route-pulse madrid"
          cx="178"
          cy="190"
          r="8"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.16, 1], opacity: [0.44, 0.74, 0.44] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          className="route-pulse sao"
          cx="1005"
          cy="284"
          r="8"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.16, 1], opacity: [0.44, 0.74, 0.44] }}
          transition={{ duration: 5.8, delay: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle className="route-node" cx="178" cy="190" r="4" />
        <circle className="route-node" cx="1005" cy="284" r="4" />
      </svg>
      <div className="route-label madrid">
        <strong>EUROPE</strong>
        <span>MADRID</span>
      </div>
      <div className="route-label sao">
        <strong>LATIN AMERICA</strong>
        <span>SÃO PAULO / ACADEMIC EXPERIENCE</span>
      </div>
      <div className="route-caption">
        <span>MAD</span>
        <span>Regional ambition: Latin America / Existing anchor: São Paulo</span>
        <span>GRU</span>
      </div>
    </div>
  )
}
