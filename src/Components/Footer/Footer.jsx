import React from "react";
import "../Footer/Footer.css";


const Footer = () => {
  return (
    <footer>
      <h1 className="">Portfolio</h1>
      <div className="link-container">
        <a href="#home" >Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#project">Portfolio</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="social-links ">
        <a href="mailto:cs20.yogesh.sahu@lcit.edu.in" target="#">
          <button className="dribble">
            <i class="bi bi-send-fill"></i>
          </button>
        </a>
        <a href="https://github.com/Yogesh0421" target="#">
          <button className="dribble">
            <i class="bi bi-github"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/yogesh-sahu-66308323b/" target="#">
          <button className="dribble">
            <i class="bi bi-linkedin"></i>
          </button>
        </a>
      </div>
      <hr className="text-muted my-4" />

      <p>Copyright 2025 Portfolio | Made By Yogesh Sahu</p>
    </footer>
  );
};

export default Footer;
