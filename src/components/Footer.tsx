import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-identity">
          <a href="#home">Edwin Shibu Mathew</a>
          <p>Backend & Full-Stack Software Engineer</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a
            href="https://github.com/EdwinShibuMathew"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/edwin-shibu-mathew/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:iedwini777@gmail.com">Email</a>
        </nav>

        <p className="footer-copyright">
          © {currentYear} Edwin Shibu Mathew
        </p>
      </div>
    </footer>
  )
}

export default Footer