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
        <h1 className='headings'>Education and  Experiences</h1>
        <div className="education">
          <h2 className="course-name"> <i class="bi bi-mortarboard"></i>Bachler of Technology - B.Tech</h2>
          <div className='clg-detail'>
            <h2 className="clg-name">Lakhmi Chand Institute of Technology, Bilaspur</h2>
            <h4 className="year">Oct 2020 - Sep 2024</h4>
          </div>
          <h4 className="speciality">
            Computer science and Engineering
          </h4>
          <div className="grade">
            GRADE: 7.2 CGPA
          </div>
          <p className="course-text">
            I have completed my Bachelor degree in Computer Science and Engineering from Lakhmi Chand Institute of Technology, Bilaspur. I have completed with a CGPA of 7.2. I have taken courses in Web Development, Front-end Development Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems,  etc.
          </p>
        </div>
        <div>
            <div className="imgs">
                <div className="img" tooltipText={htmlText}><img src={html} alt="" width={100}/></div>
                <div className="img" tooltipText={cssText}><img src={css} alt="" width={100}/></div>
                <div className="img" tooltipText={jsText}><img src={js} alt="" width={100}/></div>
                <div className="img" tooltipText={reactText}><img src={react} alt="" width={100}/></div>
            </div>
            <div className="texts">
                <h2>My Skills</h2>
                <li>I am proficient in <span>HTML</span>  and <span>CSS</span>, enabling me to create visually appealing and responsive web pages</li>
                <li>With strong knowledge of <span>JavaScript</span>, I build dynamic and interactive user interfaces.</li>
                <li>I specialize in <span>React.js</span> for developing modern, scalable front-end applications.</li>
                <li>I have experience with <span>MySQL</span>, effectively managing and querying relational databases.</li>
                <li>Additionally, I am skilled in <span>Java</span>, excelling in problem-solving and logic-based programming.</li>
            </div>
        </div>
    </section>
  )
}

export default About