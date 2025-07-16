import React from 'react'
import '../Service/Service.css'
import design from '../../assets/design.png'
import debug from '../../assets/debug.png'
import development from '../../assets/development.png'
import ServiceCard from '../../Cards/ServiceCard/ServiceCard'

const Service = () => {

    let designText = 'Crafting visually stunning and user-friendly web designs that leave a lasting impression. Bringingcreativity and functionality together for seamless digital experiences.'
    let developmentText = 'Developing dynamic, responsive, and performance-driven websites tailored to your needs Merging innovation with functionality to create seamless user experiences.' 
    let dubugingText = 'Identifying and fixing issues to ensure smooth and efficient functionality. Delivering error-free solutionswith precision and expertise!'
  return (
    <section className='section service' id='service'>
        <h1>Provide wide Range of  Web Services</h1>
        <div className="service-grid">
            <ServiceCard  img={design} name={"Web Design"} text={designText}/>
            <ServiceCard  img={development} name={"Web Development"} text={developmentText}/>
            <ServiceCard  img={debug} name={"Debugging"} text={designText}/>
        </div>
    </section>
  )
}

export default Service