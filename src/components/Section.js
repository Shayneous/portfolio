import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Section.scss'
import man2 from './assets/man2.jpg'

const Section = () => {
    return (
        <div className='section'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>


            <div className="section__container">


                <div className="section__img">
                    <img src={man2} alt="" />
                </div>


                <div className="section__content">
                    <h1>About Me</h1>
                    <p>2 Years of Experience in Game Design</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
                    <p>Experienced in CSS/SCSS</p>
                    <p>Experienced in SQL & NoSQL Databases</p>
                    
                </div>



            </div>


        </div>
    )
}

export default Section