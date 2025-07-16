import React from 'react'
import '../Project/Project.css'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard'
import foodapp from '../../assets/foodorder.png'
import hospital from '../../assets/hospitaldash.png'
import calculator from '../../assets/calculator.png'
import amazon from '../../assets/Amazon.png'
import figma from '../../assets/Demo.png'

const Project = () => {
  return (
    <section className='section project' id='project'>
      <h1>Check out my work and Projects</h1>
        <div className="projects">
          <ProjectCard  img={foodapp} name={"Food Order App"} language={"HTML & CSS"} preview={"https://yogesh0421.github.io/Food-order-React/"} 
                      language1={"React"} code={"https://github.com/Yogesh0421/Food-order-React"}/>

          <ProjectCard  img={hospital} name={"Hoshpital Dashboard"} preview={"https://yogesh0421.github.io/Hospital-Dashboard/"}
                      language={"HTML & CSS"} language1={"React"} code={"https://github.com/Yogesh0421/calculator"}/>

          <ProjectCard  img={calculator} name={"Calculator App"} preview={"https://yogesh0421.github.io/calculator/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/calculator"}/>

          <ProjectCard  img={amazon} name={"Amazon Clone"}   preview={"https://yogesh0421.github.io/Movie-Finder/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/Movie-Finder"}/>

          <ProjectCard  img={figma} name={"Figma Design"}  preview={"https://yogesh0421.github.io/Test-Website/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/Test-Website"}/>

          <ProjectCard  img={foodapp} name={"Food Order App"} 
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/calculator"}/>
        </div>
    </section>
  )
}

export default Project