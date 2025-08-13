import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { MapProvider } from './components/content/mapContext'
import WhatsAppButton from './components/common/whatsaapButton'
import Header from './components/Layout/header'
import Plots from './components/pages/plotPage'
import Houses from './components/pages/housesPage'
import Contact from './components/pages/contactPage'
import Home from './components/pages/HomePage'
import Footer from './components/Layout/footer'
// import { Home } from 'lucide-react'

function App() {

  return (
    <>
    <MapProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plots" element={<Plots />} />
              <Route path="/houses" element={<Houses />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </MapProvider>
    </>
  )
}

export default App
