import '../CSS Global/HeroSection.css'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img src="/assets/Images/Bridge-Mountain.jpg" alt="Front Page Image" className="hero-img" /> */}
      <h2>Find Your True North Here</h2>
      <h3>Your Journey Your Story
      <span className="hero-btns">
        <Button className='btn' buttonStyle='btn-outline' buttonSize='btn-large'>
            <p className='btn-flex'>Choose your plan <i className='bx bx-play'/></p>
        </Button>
      </span>
      </h3>
    </div>
  )
}

export default HeroSection
