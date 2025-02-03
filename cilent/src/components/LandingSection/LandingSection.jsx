import './LandingSection.css';

function LandingSection() {
  return (
    <section className='section-landing'id='home'>
        <span className='background'></span>
        <div className='title-text'>
            <h1>Think Beyond Your Ads</h1>
            <p> We are driving brand success through innovation, creativity, and strategic excellence. </p>
        </div>
        <div className='landing-action-btns'>
          <a href="#getintouch">
          <button className='btn btn-outline-light btn-lg cta' >Get In Touch</button>
          </a>
          <a href="#services">
          <button className='btn btn-outline-light btn-lg cta' >Explore</button>
          </a>
        </div>
    </section>
    
  )
}

export default LandingSection