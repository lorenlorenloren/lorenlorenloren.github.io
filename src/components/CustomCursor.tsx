import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'
import { type CursorLabel, cursorEventName } from '../hooks/useCursorLabel'

function canUseCursor() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
}

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState<CursorLabel>('')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 230, damping: 27, mass: 0.38 })
  const springY = useSpring(y, { stiffness: 230, damping: 27, mass: 0.38 })
  const glowX = useSpring(x, { stiffness: 70, damping: 32, mass: 0.75 })
  const glowY = useSpring(y, { stiffness: 70, damping: 32, mass: 0.75 })
  const cursorSize = label ? 68 : 28
  const dotOpacity = useTransform(springX, () => (label ? 0 : 1))
  const ringX = useTransform(springX, (value) => value - cursorSize / 2)
  const ringY = useTransform(springY, (value) => value - cursorSize / 2)
  const dotX = useTransform(x, (value) => value - 2.5)
  const dotY = useTransform(y, (value) => value - 2.5)
  const haloX = useTransform(glowX, (value) => value - 144)
  const haloY = useTransform(glowY, (value) => value - 144)

  useEffect(() => {
    if (prefersReducedMotion || !canUseCursor()) {
      return
    }

    setEnabled(true)

    const move = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const update = (event: Event) => {
      setLabel((event as CustomEvent<CursorLabel>).detail)
    }
    const leave = () => setEnabled(false)
    const enter = () => setEnabled(true)

    window.addEventListener('pointermove', move)
    window.addEventListener(cursorEventName, update)
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener(cursorEventName, update)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
    }
  }, [glowX, glowY, prefersReducedMotion, x, y])

  if (!enabled || prefersReducedMotion) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-glow"
        style={{
          x: haloX,
          y: haloY,
        }}
      />
      <motion.div
        className="cursor-ring"
        data-active={label ? 'true' : 'false'}
        animate={{ width: cursorSize, height: cursorSize }}
        style={{
          x: ringX,
          y: ringY,
        }}
        transition={{ type: 'spring', stiffness: 360, damping: 30, mass: 0.35 }}
      >
        <AnimatePresence mode="popLayout">
          {label ? (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.92, y: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -2 }}
              transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              {label}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY, opacity: dotOpacity }} />
    </>
  )
}
