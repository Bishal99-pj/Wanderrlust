// import React from 'react'
import '../CSS Global/Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function Footer() {
  return (
    <section className='footer-container'>
      <div className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our latest and best vacation plans
        </p>
        <p className="footer-subscription-text">
          You can <Link className='footer-unsub'>unsubscribe</Link> at any time
        </p>
        <form action="/" className='footer-email-form'>
          <input type="email" name='email' placeholder='your email' className="footer-form-input" />
          <Button buttonStyle='btn-outline'>Subscribe</Button>
        </form>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How It Works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to='/sign-up'>Submit Video</Link>
            <Link to='/'>Ambassador</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='/sign-up'>LinkedIn</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Reddit</Link>
            <Link to='/'>Discord</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className='social-logo'>
                Wanderlust <i className='bx bxs-plane-take-off'></i>
            </Link>
          </div>
          <small className='website-rights'>Wanderlust © 2023</small>
          <div className="social-icons">
            <Link 
            className='social-icon-link LinkedIn'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
            >
            <i className='bx bxl-linkedin-square'></i>
            </Link>
            <Link 
            className='social-icon-link Gmail'
            to='/'
            target='_blank'
            aria-label='Gmail'
            >
            <i className='bx bxl-gmail'></i>
            </Link>
            <Link 
            className='social-icon-link Instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
            >
            <i className='bx bxl-instagram'></i>
            </Link>
            <Link 
            className='social-icon-link Reddit'
            to='/'
            target='_blank'
            aria-label='Reddit'
            >
            <i className='bx bxl-reddit'></i>
            </Link>
            <Link 
            className='social-icon-link Discord'
            to='/'
            target='_blank'
            aria-label='Discord'
            >
            <i className='bx bxl-discord'></i>
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Footer
