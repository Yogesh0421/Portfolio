import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className='section contact' id='Contact'>
      <h1 className='headings'>Contact Details</h1>
      <div className='contact-container'>
        <div className="contact-detail">
            <a href=""><i className="bi bi-geo-alt-fill"></i>Bilaspur Chhattisgarh</a>
        </div>
        <div className="contact-detail">
            <a href="https://github.com/Yogesh0421"><i class="bi bi-github"></i>Github Account</a>
        </div>
        <div className="contact-detail">
            <a href="mailto:cs20.yogesh.sahu@lcit.edu.in"><i class="bi bi-send-fill"></i>Cs20.yogesh.sahu@lcit.edu.in</a>
        </div>
        <div className="contact-detail">
            <a href="https://www.linkedin.com/in/yogesh-sahu-66308323b/"><i class="bi bi-linkedin"></i>Linked In Profile</a>
        </div>
      </div>
    </div>
  )
}

export default Contact