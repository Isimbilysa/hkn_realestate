import './App.css'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import About from './components/sections/about'
import Contact from './components/sections/contact'
import Hero from './components/sections/hero'
import FloatingWhatsApp from './components/ui/floating-whatsaap'
import FeaturedProperties from './components/sections/feature-properties'
import InteractiveMap from './components/sections/interactive-map'

function App() {

  return (
       <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <InteractiveMap />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
