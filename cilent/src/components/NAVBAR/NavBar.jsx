import "./Navbar.css"


function NavBar() {
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".section-nav-bar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled"); 
    }
});

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

export default NavBar