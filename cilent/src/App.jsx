import './App.css'
import NavBar from './components/NAVBAR/Navbar'
import LandingSection from './components/LandingSection/LandingSection'
import Service from './components/ServiceSection/Service'
import Media from './components/MediaSection/Media'
import Deliverable from './components/DeliverableSection/Deliverable'

function App() {
  

  return (
    <>
     <div>
       <NavBar/>
       <LandingSection/>
       <Service/>
       <Media/>
       <Deliverable/>
     </div>

    </>
  )
}

export default App
