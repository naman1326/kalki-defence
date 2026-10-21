import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import FocusAreas from './components/FocusAreas.jsx'
import Mission from './components/Mission.jsx'
import PartnerTicker from './components/PartnerTicker.jsx'
import TeamSection from './components/TeamSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import EmailServiceModal from './components/EmailServiceModal.jsx'

export default function App() {
  const [briefingOpen, setBriefingOpen] = useState(false)

  const openBriefing = () => setBriefingOpen(true)
  const closeBriefing = () => setBriefingOpen(false)

  return (
    <>
      {/* Loading sequence: loading.mp4 autoplays and fades out at logo reveal */}
      <LoadingScreen />

      <a className="skip" href="#main">Skip to tactical content</a>
      <Header />
      <main id="main">
        <Hero onRequestBriefing={openBriefing} />
        <ProductShowcase onRequestBriefing={openBriefing} />
        <FocusAreas />
        <Mission />
        <PartnerTicker />
        <TeamSection />
        <Contact onRequestBriefing={openBriefing} />
      </main>
      <Footer onRequestBriefing={openBriefing} />
      <EmailServiceModal open={briefingOpen} onClose={closeBriefing} />
    </>
  )
}
