import { Reveal } from '../components/Reveal'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
      <Reveal className="section-heading split-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">Finance education with direct exposure to Latin American markets.</h2>
      </Reveal>
      <div className="timeline">
        {experience.map((item, index) => (
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
