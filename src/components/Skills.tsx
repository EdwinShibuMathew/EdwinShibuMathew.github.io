import './Skills.css'

const skillGroups = [
  {
    title: 'Backend',
    description: 'Server-side development and APIs',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express'],
  },
  {
    title: 'Frontend',
    description: 'Responsive web interfaces',
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Data & Services',
    description: 'Persistence, authentication and media',
    skills: ['MongoDB', 'Mongoose', 'Cloudinary', 'JWT'],
  },
  {
    title: 'Tools & Observability',
    description: 'Development and production workflows',
    skills: [
      'Git',
      'Bitbucket',
      'Jenkins',
      'Splunk',
      'Dynatrace',
      'Vite',
    ],
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-introduction">
        <p className="skills-label">Technical skills</p>
        <h2>Technologies I use to build and maintain software.</h2>

        <p className="skills-summary">
          My strongest experience is in backend and full-stack development,
          supported by production tooling and application observability.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-number">0{index + 1}</span>

            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills