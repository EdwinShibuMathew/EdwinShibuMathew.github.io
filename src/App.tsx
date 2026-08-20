import './App.css'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App