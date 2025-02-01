import "./Navbar.css"

function Navbar() {
  return (
    <section className='section-nav-bar'>
      <div className='nav-bar-container'>
          <h1 className='logo'>Ex Media</h1>
          <div className='nav-bar-items'>
              <a className='nav-bar-item'>Home</a>
              <a className='nav-bar-item'>Services</a>
              <a className='nav-bar-item'>Deliverables</a>
              <a className='nav-bar-item'>Get in touch</a>
              <a className='nav-bar-item'>About</a>
          </div>
      </div>

    </section>

  )
}

export default Navbar