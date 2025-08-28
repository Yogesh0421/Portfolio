import React, { useState } from 'react'
import '../Nav/Navbar.css'

const Navbar = () => {

    const [isOpen, setisOpen]  = useState(false);

    const handleClick = () => {
        setisOpen(!isOpen);
    }

  return (
    <nav >
        <a href="" className='logo'>
            <h1 className="logo">Portfolio</h1>
        </a>
        <div className="nav-right">
            <div className={`nav-inner ${isOpen ? "open": ""}`}>
                <ul>                  
                    <a href='' className="nav-items" >Home</a>
                    <a href='#about' className="nav-items">About</a>
                    <a href='#service' className='nav-items' >Service</a>
                    <a href='#Contact' className='nav-items' >Contact</a>
                </ul>
                <div className="btns">
                    <a href={"mailto:cs20.yogesh.sahu@lcit.edu.in"}>
                        <button className="btn">
                            Hire Me
                        </button>
                    </a>
                </div>
            </div>
            <button className="toggle" onClick={handleClick}>
                {/* <img src="" alt="" /> */}
                <i class="bi bi-list"></i>
            </button>

        </div>
    </nav>
  )
}

export default Navbar