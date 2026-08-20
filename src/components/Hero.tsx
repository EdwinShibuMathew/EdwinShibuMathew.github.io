function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          Dublin, Ireland · Backend & Full-Stack Engineer
        </p>

        <h1>I build reliable backend systems and full-stack products.</h1>

        <p className="hero-description">
          I am a final-year Computer Science and Software Engineering student
          at Maynooth University and a former Mastercard Software Engineering
          Intern. I work across Java, Spring Boot and full-stack JavaScript.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://github.com/EdwinShibuMathew"
            target="_blank"
            rel="noreferrer"
          >
            View my GitHub
          </a>

          <a
            className="button button-secondary"
            href="mailto:iedwini777@gmail.com"
          >
            Contact me
          </a>
        </div>
      </div>

      <ul className="proof-grid" aria-label="Career highlights">
        <li>
          <span>Experience</span>
          <strong>Mastercard SWE Intern</strong>
        </li>

        <li>
          <span>Backend</span>
          <strong>Java & Spring Boot</strong>
        </li>

        <li>
          <span>Achievement</span>
          <strong>4th at Jentic Hackathon</strong>
        </li>
      </ul>
    </section>
  )
}

export default Hero