import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import FocusAreas from './components/FocusAreas.jsx'
import Approach from './components/Approach.jsx'
import Vision from './components/Vision.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import VideoModal from './components/VideoModal.jsx'

export default function App() {
  const [filmOpen, setFilmOpen] = useState(false)

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero onWatch={() => setFilmOpen(true)} />
        <Mission />
        <FocusAreas />
        <Approach />
        <Vision />
        <Contact />
      </main>
      <Footer />
      <VideoModal open={filmOpen} onClose={() => setFilmOpen(false)} />
    </>
  )
}
