import { ThemeProvider } from './context/ThemeContext'
import { useLenisScroll } from './hooks/useLenisScroll'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeCustomizer from './components/ThemeCustomizer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

function App() {
  useLenisScroll()

  return (
    <ThemeProvider>
      <div className="min-h-screen font-inter relative" style={{ background: 'var(--primary)' }}>
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          
          <Contact />
          <Footer />
        </div>
        <ThemeCustomizer />
      </div>
    </ThemeProvider>
  )
}

export default App