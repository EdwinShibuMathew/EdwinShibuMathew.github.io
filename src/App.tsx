import './App.css'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  )
}

export default App