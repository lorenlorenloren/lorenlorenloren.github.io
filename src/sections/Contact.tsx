import { Reveal } from '../components/Reveal'
import { MagneticLink } from '../components/MagneticLink'
import { links } from '../data/portfolio'

export function Contact() {
  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Europe ↔ Latin America</h2>
        <p className="contact-line">
          Madrid and São Paulo have shaped my international perspective. I am interested
          in opportunities connecting European and Latin American markets.
        </p>
        <div className="contact-links">
          <MagneticLink href={links.email} cursorLabel="OPEN" strength={0.2}>
            Email
          </MagneticLink>
          <MagneticLink href={links.linkedin} target="_blank" rel="noreferrer" cursorLabel="OPEN" strength={0.2}>
            LinkedIn
          </MagneticLink>
          <MagneticLink href={links.github} target="_blank" rel="noreferrer" cursorLabel="CODE" strength={0.2}>
            GitHub
          </MagneticLink>
          <MagneticLink href={links.cv} target="_blank" rel="noreferrer" cursorLabel="PDF" strength={0.2}>
            Download CV
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  )
}
