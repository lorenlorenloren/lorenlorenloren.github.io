import { Reveal } from '../components/Reveal'
import type { PortfolioCopy } from '../data/portfolio'

type ExperienceProps = {
  copy: PortfolioCopy['experience']
}

export function Experience({ copy }: ExperienceProps) {
  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
      <Reveal className="section-heading split-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="experience-title">{copy.heading}</h2>
      </Reveal>
      <div className="timeline">
        {copy.items.map((item, index) => (
          <Reveal className="timeline-item" key={item.institution} delay={index * 0.06}>
            <div className="timeline-rule" />
            <div className="timeline-place">{item.place}</div>
            <div>
              <h3>{item.institution}</h3>
              <p className="timeline-role">{item.role}</p>
              <p>{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
