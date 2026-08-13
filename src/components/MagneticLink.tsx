import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from 'motion/react'
import { type CursorLabel, setCursorLabel } from '../hooks/useCursorLabel'

type MagneticLinkProps = HTMLMotionProps<'a'> & {
  cursorLabel?: CursorLabel
  strength?: number
}

function hasFinePointer() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
}

export function MagneticLink({
  children,
  cursorLabel = '',
  strength = 0.22,
  onPointerEnter,
  onPointerMove,
  onPointerLeave,
  ...props
}: MagneticLinkProps) {
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.35 })

  return (
    <motion.a
      {...props}
      style={{
        ...props.style,
        x: springX,
        y: springY,
      }}
      onPointerEnter={(event) => {
        if (!prefersReducedMotion && hasFinePointer()) {
          setCursorLabel(cursorLabel)
        }
        onPointerEnter?.(event)
      }}
      onPointerMove={(event) => {
        if (!prefersReducedMotion && hasFinePointer()) {
          const rect = event.currentTarget.getBoundingClientRect()
          x.set((event.clientX - rect.left - rect.width / 2) * strength)
          y.set((event.clientY - rect.top - rect.height / 2) * strength)
        }
        onPointerMove?.(event)
      }}
      onPointerLeave={(event) => {
        x.set(0)
        y.set(0)
        if (!prefersReducedMotion && hasFinePointer()) {
          setCursorLabel('')
        }
        onPointerLeave?.(event)
      }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
    >
      {children}
    </motion.a>
  )
}
