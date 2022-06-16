import { Facebook, Instagram, LinkedIn, MenuBook, SettingsPowerRounded, } from '@material-ui/icons'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Main.scss'
import man from './assets/man.jpg'

const Main = () => {
    return (
        <div className='main'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Shayne Ganness</h1>
                            <p>Web Developer & Game Designer</p>

                            <div className="icons">
                            <a href="https://www.instagram.com/shayneous/">    
                                <Instagram className='icon'/>
                            </a>
                            <a href="https://www.facebook.com/shayne.ganness/">
                                <Facebook className='icon'/>
                            </a>
                            <a href="https://ca.linkedin.com/in/shayne-ganness-00829711b?original_referer=https%3A%2F%2Fwww.google.ca%2F">
                                <LinkedIn className='icon'/>
                            </a>
                            </div>


                    <div className="buttons">
                        <button>My Resume</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img a src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main