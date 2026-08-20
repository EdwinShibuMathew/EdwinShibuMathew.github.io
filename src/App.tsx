import './App.css'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <Experience />
      </main>
    </div>
  )
}

export default App