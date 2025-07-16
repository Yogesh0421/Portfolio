import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import '../About/About.css'

const About = () => {

  let htmlText = "Semantic, accessible, SEO-friendly — clean markup is my thing."
  let cssText = "Master of Flexbox, Grid, animations, and pixel-perfect layouts."
  let jsText = "I write clean, modular ES6+ code with DOM & async mastery."
  let reactText = "Built dynamic UIs with hooks, context, and reusable components."


  return (
    
    <section className='section about' id='about'>
        <h1>Beautiful & Unique Digital Experiences</h1>
        <div>
            <div className="imgs">
                <div className="img" tooltipText={htmlText}><img src={html} alt="" width={100}/></div>
                <div className="img" tooltipText={cssText}><img src={css} alt="" width={100}/></div>
                <div className="img" tooltipText={jsText}><img src={js} alt="" width={100}/></div>
                <div className="img" tooltipText={reactText}><img src={react} alt="" width={100}/></div>
            </div>
            <div className="texts">
                <h2>My Skills</h2>
                <li>I am proficient in HTML and CSS, enabling me to create visually appealing and responsive web pages</li>
                <li>With strong knowledge of JavaScript, I build dynamic and interactive user interfaces.</li>
                <li>I specialize in React.js for developing modern, scalable front-end applications.</li>
                <li>I have experience with MySQL, effectively managing and querying relational databases.</li>
                <li>Additionally, I am skilled in Java, excelling in problem-solving and logic-based programming.</li>
            </div>
        </div>
    </section>
  )
}

export default About