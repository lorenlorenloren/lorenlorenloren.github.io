import { Reveal } from '../components/Reveal'
import { languages } from '../data/portfolio'

export function About() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <Reveal className="about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title">Finance, economics, strategy and technology across markets.</h2>
        </div>
        <div className="about-copy">
          <p>
            I am an Economics student at Universidad Carlos III de Madrid interested in
            the intersection of finance, economics, strategy and technology.
          </p>
          <p>
            My academic exchange at Insper in São Paulo gave me direct exposure to the
            Brazilian business and financial environment and strengthened my interest in
            building an internationally oriented career connected to Latin America.
          </p>
          <p>
            Brazil is currently the Latin American market I know best, but my broader
            professional interest extends across the region and to the economic and
            business links between Europe and Latin America.
          </p>
          <p>
            My work and independent projects combine financial analysis, quantitative
            research and automation.
          </p>
          <div className="language-row" aria-label="Languages">
            {languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
