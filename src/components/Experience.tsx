import './Experience.css'

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-introduction">
        <p className="section-label">Experience</p>

        <h2>Production engineering experience.</h2>

        <p className="section-summary">
          Experience contributing to backend services, production workflows
          and application observability within a global engineering team.
        </p>
      </div>

      <article className="experience-card">
        <div className="experience-heading">
          <div>
            <p className="experience-company">Mastercard</p>
            <h3>Software Engineering Intern</h3>
            <p className="experience-location">Dublin, Ireland</p>
          </div>

          <p className="experience-date">February 2026 – July 2026</p>
        </div>

        <ul className="experience-list">
          <li>
            Contributed to production Java and Spring Boot backend services
            supporting Mastercard&apos;s corporate virtual-card product.
          </li>

          <li>
            Used Splunk and Dynatrace to investigate application behaviour and
            support backend monitoring and troubleshooting.
          </li>

          <li>
            Worked with Jenkins and Bitbucket across CI/CD and source-control
            workflows, contributing code that reached production.
          </li>

          <li>
            Proposed the idea selected as the team&apos;s submission for
            Mastercard&apos;s intern hackathon.
          </li>
        </ul>

        <div className="technology-list" aria-label="Technologies used">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Jenkins</span>
          <span>Bitbucket</span>
          <span>Splunk</span>
          <span>Dynatrace</span>
        </div>
      </article>
    </section>
  )
}

export default Experience