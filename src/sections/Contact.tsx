import { Reveal } from '../components/Reveal'
import { MagneticLink } from '../components/MagneticLink'
import { links, type PortfolioCopy } from '../data/portfolio'

type ContactProps = {
  copy: PortfolioCopy['contact']
}

export function Contact({ copy }: ContactProps) {
  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="contact-title">{copy.heading}</h2>
        <p className="contact-line">{copy.line}</p>
        <div className="contact-links">
          <MagneticLink href={links.email} cursorLabel="OPEN" strength={0.2}>
            {copy.email}
          </MagneticLink>
          <MagneticLink href={links.linkedin} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.2}>
            LinkedIn
          </MagneticLink>
          <MagneticLink href={links.github} target="_blank" rel="noreferrer" cursorLabel="CODE" strength={0.2}>
            GitHub
          </MagneticLink>
          <MagneticLink href={links.medium} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.2}>
            Medium
          </MagneticLink>
          <MagneticLink href={links.cv} download cursorLabel="PDF" strength={0.2}>
            {copy.download}
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  )
}
