function Navbar() {
  return (
    <header className="site-header">
      <nav className="navigation" aria-label="Main navigation">
        <a className="brand" href="#home">
          Edwin Shibu Mathew
        </a>

        <div className="navigation-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>

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

          <a className="contact-link" href="mailto:iedwini777@gmail.com">
            Email me
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar