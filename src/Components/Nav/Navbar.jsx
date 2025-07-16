import React, { useState } from 'react'
import '../Nav/Navbar.css'

const Navbar = () => {

    const [isOpen, setisOpen]  = useState(false);

    const handleClick = () => {
        setisOpen(!isOpen);
    }

  return (
    <nav>
        <h1 className="logo">Portfolio</h1>
        <div className="nav-right">
            <div className={`nav-inner ${isOpen ? "open": ""}`}>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About</li>
                    <li>Certificate</li>
                </ul>
                <div className="btns">
                    <button className="btn">
                        Hire Me
                    </button>
                </div>
            </div>
            <button className="toggle" onClick={handleClick}>
                <img src="" alt="" />
            </button>

        </div>
    </nav>
  )
}

export default Navbar