import './Projects.css'

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <p className="projects-label">Selected work</p>
          <h2>Projects built to solve real problems.</h2>

          <p className="projects-summary">
            A selection of full-stack and developer-tooling projects that
            demonstrate how I approach software design and implementation.
          </p>
        </div>

        <a
          className="all-projects-link"
          href="https://github.com/EdwinShibuMathew?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Explore all repositories <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-number">01</div>

          <div className="project-content">
            <p className="project-type">Full-stack application</p>

            <h3>Real-Time Chat Application</h3>

            <p className="project-description">
              A full-stack messaging application with authentication, profile
              management, image uploads, online-user tracking and real-time
              message delivery.
            </p>

            <ul className="project-highlights">
              <li>
                Built a React and Vite frontend with Zustand state management.
              </li>
              <li>
                Created a Node.js, Express and Socket.IO backend using MongoDB.
              </li>
              <li>
                Implemented JWT authentication, bcrypt password hashing and
                Cloudinary image uploads.
              </li>
              <li>
                Validated support for up to 50 concurrent users with message
                latency below 100 ms.
              </li>
            </ul>

            <div className="project-footer">
              <div
                className="project-technologies"
                aria-label="Project technologies"
              >
                <span>React</span>
                <span>Node.js</span>
                <span>Socket.IO</span>
                <span>MongoDB</span>
                <span>JWT</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/EdwinShibuMathew/Real-Time-Chat-App"
                target="_blank"
                rel="noreferrer"
              >
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-number">02</div>

          <div className="project-content">
            <p className="project-type">Developer tool · Chrome extension</p>

            <h3>HARless API Discovery</h3>

            <p className="project-description">
              A browser extension that analyses website network traffic,
              identifies API calls and generates exportable OpenAPI
              specifications.
            </p>

            <ul className="project-highlights">
              <li>
                Captures and analyses XHR and fetch requests using Chrome
                Manifest V3.
              </li>
              <li>
                Groups detected endpoints and generates OpenAPI documentation.
              </li>
              <li>
                Redacts sensitive information and performs processing locally.
              </li>
              <li>Placed fourth in the Jentic Hackathon.</li>
            </ul>

            <div className="project-footer">
              <div
                className="project-technologies"
                aria-label="Project technologies"
              >
                <span>JavaScript</span>
                <span>Manifest V3</span>
                <span>OpenAPI</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/EdwinShibuMathew/chrome-api-discovery"
                target="_blank"
                rel="noreferrer"
              >
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects