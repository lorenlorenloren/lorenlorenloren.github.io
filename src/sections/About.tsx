import { Reveal } from '../components/Reveal'
import type { PortfolioCopy } from '../data/portfolio'

type AboutProps = {
  copy: PortfolioCopy['about']
}

export function About({ copy }: AboutProps) {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <Reveal className="about-grid">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="about-title">{copy.heading}</h2>
        </div>
        <div className="about-copy">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="language-row" aria-label={copy.languagesLabel}>
            {copy.languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
