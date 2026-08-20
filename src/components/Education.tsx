import './Education.css'

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-introduction">
        <p className="education-label">Education & involvement</p>
        <h2>Learning beyond the classroom.</h2>
      </div>

      <div className="education-layout">
        <article className="education-card education-main">
          <div className="education-card-heading">
            <div>
              <p className="education-organisation">Maynooth University</p>
              <h3>BSc Computer Science and Software Engineering</h3>
            </div>

            <p className="education-date">September 2023 – October 2027</p>
          </div>

          <p className="education-detail">
            Expected graduation: October 2027
          </p>

          <p className="education-result">
            Predicted First-Class Honours (1.1)
          </p>
        </article>

        <div className="education-secondary">
          <article className="education-card">
            <p className="education-organisation">Leadership</p>
            <h3>Organising Committee Member</h3>
            <p className="education-detail">
              Indian Society, Maynooth University
            </p>
          </article>

          <article className="education-card">
            <p className="education-organisation">Certification</p>
            <h3>IT Specialist – Python</h3>
            <p className="education-detail">
              Certified foundational Python programming knowledge.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education