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
        <MagneticLink href={links.medium} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.18}>
          Medium
        </MagneticLink>
      </nav>
      <div className="language-menu" role="group" aria-label={copy.language}>
        <span>{copy.language}</span>
        <div className="language-switch">
          {locales.map((locale) => (
            <button
              type="button"
              key={locale.code}
              className={language === locale.code ? 'active' : ''}
              aria-pressed={language === locale.code}
              aria-label={locale.nativeName}
              onClick={() => onLanguageChange(locale.code)}
            >
              {locale.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
