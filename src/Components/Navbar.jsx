import {useEffect, useState} from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'
import '../CSS Global/Navbar.css'

function Navbar() {
    const [isClicked , setIsClicked] = useState(false);
    const [button , setButton] = useState(true);

    const handleMenuClick = ()=> setIsClicked(!isClicked);
    const handleMenuClose = ()=> setIsClicked(false);

    const showButton = ()=>{
        if(window.innerWidth <= 1211) setButton(false)
        else setButton(true)
    }
    useEffect(()=>{
        showButton(); // sign up button doesn't show up after resizing & refresh
    },[])
    window.addEventListener('resize', showButton)
  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-logo' onClick={handleMenuClose}>
                Wanderlust<i className='bx bxs-plane-take-off'></i>
            </Link>
            <div className="menu-icon" onClick={handleMenuClick}>
                <i className={isClicked?'bx bx-x':'bx bx-menu'}></i>
            </div>
            <ul className={isClicked ? "nav-menu active" : 'nav-menu'}>
                <li className="nav-items">
                    <Link to='/' className='nav-links' onClick={handleMenuClose}>
                        <span className="nav-icons-flex-wrapper">
                            <i className='bx bxs-home'/>
                            <span className="nav-menu-title">Home</span>
                        </span>
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to='/services' className='nav-links' onClick={handleMenuClose}>
                        <span className="nav-icons-flex-wrapper">
                            <i className='bx bxs-briefcase'/>
                            <span className="nav-menu-title">Services</span>
                        </span>
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to='/products' className='nav-links' onClick={handleMenuClose}>
                        <span className="nav-icons-flex-wrapper">
                            <i className='bx bx-trip'/>
                            <span className="nav-menu-title">Best Deals</span>
                        </span>
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to='/sign-up' className='nav-links-mobile' onClick={handleMenuClose}>
                        <span className="nav-icons-flex-wrapper">
                            <i className='bx bx-log-in'/>
                            <span className="nav-menu-title">Log In/Sign Up</span>
                        </span>
                    </Link>
                </li>
            </ul>
            {button && 
                <Button buttonStyle='btn-outline'>
                    <span className="nav-icons-flex-wrapper">                           
                        <i className='bx bxs-user'/>
                        <span className="nav-menu-title">SIGN UP / LOG IN</span>
                    </span>
                </Button>
            }
        </div>
     </nav> 
    </>
  )
}

export default Navbar