import React from 'react'
import '../Project/Project.css'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard'
import foodapp from '../../assets/foodorder.png'
import education from '../../assets/education.png'
import hospital from '../../assets/hospitaldash.png'
import calculator from '../../assets/calculator.png'
import amazon from '../../assets/Amazon.png'
import figma from '../../assets/Demo.png'
import news from '../../assets/news.png'
import weather from '../../assets/weather.png'
import movie from '../../assets/movieFinder.png'

const Project = () => {

  const projects = [
    { id:1,
      image:foodapp,
      name:"Food Order App",
      Language:"HTML & CSS",
      Language1:"React",
      Preview:"https://yogesh0421-food-order-react.vercel.app/",
      Code:"https://github.com/Yogesh0421/Food-order-React"
    },
    { id:2,
      image:hospital,
      name:"Hospital Dashboard",
      Language:"HTML & CSS",
      Language1:"React",
      Preview:"https://yogesh0421-hospital-dashboard.vercel.app",
      Code:"https://github.com/Yogesh0421/Hospital-Dashboard"
    },
    { id:3,
      image:calculator,
      name:"Calculator App",
      Language:"HTML & CSS",
      Language1:"JavaScript",
      Preview:"https://yogesh0421-calculator.vercel.app",
      Code:"https://github.com/Yogesh0421/calculator"
    },
    { id:4,
      image:amazon,
      name:"Amazon Clone",
      Language:"HTML & CSS",
      Language1:"JavaScript",
      Preview:"https://yogesh0421.github.io/amazon-clone/",
      Code:"https://github.com/Yogesh0421/amazon-clone"
    },
    { id:5,
      image:figma,
      name:"Figma Design",
      Language:"HTML & CSS",
      Language1:"React",
      Preview:"https://yogesh0421-test-website.vercel.app",
      Code:"https://github.com/Yogesh0421/Test-Website"
    },
    { id:6,
      image:education,
      name:"Tutorial Freak App",
      Language:"HTML & CSS",
      Language1:"JavaScript",
      Preview:"https://educational-website-rose.vercel.app/",
      Code:"https://github.com/Yogesh0421/Educational-website"
    },
    { id:7,
      image:weather,
      name:"Weather App",
      Language:"HTML & CSS",
      Language1:"React",
      Preview:"https://yogesh0421-weather-app.vercel.app",
      Code:"https://github.com/Yogesh0421/Weather-app"
    },
    { id:8,
      image:movie,
      name:"Movie Finder",
      Language:"HTML & CSS",
      Language1:"React",
      Preview:"https://yogesh0421.github.io/Movie-Finder/",
      Code:"https://github.com/Yogesh0421/Movie-Finder"
    },
    { id:9,
      image:news,
      name:"News Homepage",
      Language:"HTML & CSS",
      Language1:"JavaScript",
      Preview:"https://yogesh0421-news-homepage.vercel.app",
      Code:"https://github.com/Yogesh0421/news-homepage"
    },
  ]
  return (
    <section className='section project' id='project'>
      <h1 className='headings'>Check out my work and Projects</h1>
        <div className="projects">
          {projects.map((project)=>(
            <ProjectCard  
            		key={project.id}
            		img={project.image} 
            		name={project.name} 
            		language={project.Language} 
            		preview={project.Preview} 
            		language1={project.Language1} 
            		code={project.Code}/>
          ))}
          {/* <ProjectCard  img={projects.image} name={"Food Order App"} language={"HTML & CSS"} preview={"https://yogesh0421.github.io/Food-order-React/"} 
                      language1={"React"} code={"https://github.com/Yogesh0421/Food-order-React"}/>

          <ProjectCard  img={hospital} name={"Hoshpital Dashboard"} preview={"https://yogesh0421.github.io/Hospital-Dashboard/"}
                      language={"HTML & CSS"} language1={"React"} code={"https://github.com/Yogesh0421/calculator"}/>

          <ProjectCard  img={calculator} name={"Calculator App"} preview={"https://yogesh0421.github.io/calculator/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/calculator"}/>

          <ProjectCard  img={amazon} name={"Amazon Clone"}   preview={"https://yogesh0421.github.io/Movie-Finder/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/Movie-Finder"}/>

          <ProjectCard  img={figma} name={"Figma Design"}  preview={"https://yogesh0421.github.io/Test-Website/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/Test-Website"}/>

          <ProjectCard  img={education} name={"Tutotial Freak App"} preview={"https://yogesh0421.github.io/Educational-website/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/Educational-website"}/>

          <ProjectCard  img={weather} name={"Weather App"} preview={"https://yogesh0421.github.io/Weather-app/"}
                      language={"HTML & CSS"} language1={"JavaScript"} code={"https://github.com/Yogesh0421/Weather-app"}/> */}
        </div>
    </section>
  )
}

export default Project