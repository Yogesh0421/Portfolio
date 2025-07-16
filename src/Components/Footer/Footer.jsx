import React from "react";
import '../Footer/Footer.css'


const Footer = () => {
  return (
    <footer>
      <h1 className="">Portfolio</h1>
      <div className="link-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-links " >
        <a href="mailto:cs20.yogesh.sahu@lcit.edu.in">
          <button >
            
          </button>
        </a>
        <a href="https://github.com/yogesh2104">
          <button className="github">
            
          </button>
        </a>
        <a href="http://www.linkedin.com/in/lucky15">
          <button className=" linkedin">
          
          </button>
        </a>
      </div>
      <hr className="text-muted my-4" />

      <p>Copyright 2025 Portfolio | Made By Yogesh Sahu</p>
    </footer>
  );
};

export default Footer;
