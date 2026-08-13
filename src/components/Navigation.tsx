import { MagneticLink } from './MagneticLink'
import { type Language, locales, links, type PortfolioCopy } from '../data/portfolio'

type NavigationProps = {
  copy: PortfolioCopy['nav']
  language: Language
  onLanguageChange: (language: Language) => void
}

export function Navigation({ copy, language, onLanguageChange }: NavigationProps) {
  return (
    <header className="nav-wrap">
      <MagneticLink className="brand-mark" href="#top" aria-label={copy.ariaHome} strength={0.12}>
        LMM
      </MagneticLink>
      <nav className="primary-nav" aria-label="Primary navigation">
        {copy.primary.map(([label, href]) => (
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
      <label className="language-menu">
        <span>{copy.language}</span>
        <select
          aria-label={copy.language}
          value={language}
          onChange={(event) => onLanguageChange(event.target.value as Language)}
        >
          {locales.map((locale) => (
            <option key={locale.code} value={locale.code}>
              {locale.label}
            </option>
          ))}
        </select>
      </label>
    </header>
  )
}
