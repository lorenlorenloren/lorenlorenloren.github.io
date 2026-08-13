import { MagneticLink } from './MagneticLink'
import { links } from '../data/portfolio'

const navItems = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['About', '#about'],
  ['Contact', '#contact'],
] as const

export function Navigation() {
  return (
    <header className="nav-wrap">
      <MagneticLink className="brand-mark" href="#top" aria-label="Lorenzo Martínez Malvar home" strength={0.12}>
        LMM
      </MagneticLink>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <MagneticLink key={label} href={href} strength={0.16}>
            {label}
          </MagneticLink>
        ))}
      </nav>
      <nav className="external-nav" aria-label="External links">
        <MagneticLink href={links.cv} target="_blank" rel="noreferrer" cursorLabel="PDF" strength={0.18}>
          CV
        </MagneticLink>
        <MagneticLink href={links.linkedin} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.18}>
          LinkedIn
        </MagneticLink>
        <MagneticLink href={links.github} target="_blank" rel="noreferrer" cursorLabel="CODE" strength={0.18}>
          GitHub
        </MagneticLink>
      </nav>
    </header>
  )
}
