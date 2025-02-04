import './App.css'
import NavBar from './components/NAVBAR/Navbar'
import LandingSection from './components/LandingSection/LandingSection'
import Service from './components/ServiceSection/Service'
import Media from './components/MediaSection/Media'
import Deliverable from './components/DeliverableSection/Deliverable'
import About from './components/Aboutsection/About'
import Footer from './components/FooterSection/Footer'
import whatsappLogo from './assets/whatsapp.png' 

function App() {


  return (
    <>
      <div>
        <NavBar />
        <LandingSection />
        <Service />
        <Media />
        <Deliverable />
        <About />
        <Footer />
      </div>
      <div className='fixed-bottom right-100 p-3' style={{ zindex: '6', left : 'initial' }} >
        <a href="https://wa.me/91XXXXXXXXXX?text=Hello How can I help you ?" target='_blank' >
        <img src={whatsappLogo} width='60' alt='aaaa'/>
        </a>
      </div>
    </>
  )
}

export default App
