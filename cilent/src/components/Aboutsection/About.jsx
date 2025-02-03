import './About.css'

function About() {
  return (
    <div className='section-about' id='about' >

      <div className='about-content' >
        <h1>The Exmedia</h1>
        <p>Exmedia is well-experienced and successful company in the segment of branding and advertising for 17 years. We have transformed the business ideas of about 1000+ valuable clients to position their brands in respective environments, We have enabled them to compete with anyone and capture maximum business volume. they are always consulting with us in every business diversion movement for successful completions. exmedia has been a trailblazing Branding & an Advertisement company, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency but your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.</p>
      </div>

      <div className='about-form'>
        <form className="cta-form" name="sign-up">
                <div>
                  <label htmlFor="First-Name">First Name</label>
                  <input
                    id="ffirst-name"
                    type="text"
                    placeholder="John "
                    name="first-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="Last-Name">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="smith"
                    name="last-name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="number"
                    placeholder="1234567890"
                    name="phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="ex-media"
                    name="company"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="place">Place</label>
                  <input
                    id="place"
                    type="text"
                    placeholder="calicut"
                    name="place"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    id="pincode"
                    type="number"
                    placeholder="897653"
                    name="pincode"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="select-where">Where did you hear from us?</label>
                  <select id="select-where" name="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className="register-btn">Register</button>
          </form>
      </div>   
    </div>
  )
}

export default About