import React from 'react'
import myimage from '../../assets/image.png'
import '../Home/Home.css'

const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className="text-container">
                <h1 >
                    Hello! I Am <br /><span class="name">Yogesh Sahu</span>
                </h1>
                <p className="">
                    I am a skilled web developer with expertise in creating fully responsive websites and managing backend development. I am eager to contribute my skills and grow in a professional environment.
                </p>
                <div>
                    <button className="hire-btn">Hire Me</button>
                </div>
            </div>
            <div className="img-container">
                <img src={myimage} className="" alt="" />
            </div>
        </section>
    )
}

export default Home