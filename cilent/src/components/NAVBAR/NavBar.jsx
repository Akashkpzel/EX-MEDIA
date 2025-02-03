import "./Navbar.css"
import "./Navbar.js"

function Navbar() {
  return (
    <section className='section-nav-bar'>
      <div className='nav-bar-container'>
          <h1 className='logo' href="#home">Ex Media</h1>
          <div className='nav-bar-items'>
              <a className='nav-bar-item' href="#home">Home</a>
              <a className='nav-bar-item' href="#services">Services</a>
              <a className='nav-bar-item' href="#deliverables">Deliverables</a>
              <a className='nav-bar-item' href="#getintouch">Get in touch</a>
              <a className='nav-bar-item' href="#about">About</a>
          </div>
      </div>

    </section>

  )
}

export default Navbar