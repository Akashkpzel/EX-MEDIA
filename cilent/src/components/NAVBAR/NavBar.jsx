import React, { useEffect, useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`section-nav-bar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-bar-container">
        {/* Logo */}
        <h1 className="logo">Ex Media</h1>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>

        {/* Navigation Items */}
        <div className={`nav-bar-items ${isMenuOpen ? "active" : ""}`}>
          <a className="nav-bar-item" href="#home">Home</a>
          <a className="nav-bar-item" href="#services">Services</a>
          <a className="nav-bar-item" href="#deliverables">Deliverables</a>
          <a className="nav-bar-item" href="#getintouch">Get in touch</a>
          <a className="nav-bar-item" href="#about">About</a>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
