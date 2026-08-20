import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-content">
          <p className="contact-label">Get in touch</p>

          <h2>Interested in working together?</h2>

          <p className="contact-description">
            I am currently interested in 2027 graduate software engineering
            opportunities in Ireland, particularly backend and full-stack
            roles.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="contact-button contact-button-primary"
            href="mailto:iedwini777@gmail.com"
          >
            Send me an email
          </a>

          <a
            className="contact-button contact-button-secondary"
            href="https://www.linkedin.com/in/edwin-shibu-mathew/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>

          <a
            className="contact-button contact-button-secondary"
            href="/Edwin-Shibu-Mathew-CV.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact