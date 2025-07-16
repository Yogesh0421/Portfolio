import React from 'react'
import '../ServiceCard/ServiceCard.css'


const ServiceCard = ({img,name,text}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{text}</p>
    </div>
  )
}

export default ServiceCard