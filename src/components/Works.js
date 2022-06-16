import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import react from './assets/react.jpg'
import ui from './assets/ui.gif'
import wd from './assets/wd.jpg'
import wd2 from './assets/wd2.png'
import './styles/Works.scss'

const Works = () => {
    return (
        <div className='works'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className="work__section">


                <a href="https://mysterious-badlands-54283.herokuapp.com/">
                    <div className="cards">
                    <img src={react} alt="" />
                    <button>On-Demand CRM</button>
                    </div>
                </a>

                <a href="https://mysterious-badlands-54283.herokuapp.com/">
                    <div className="cards">
                    <img src={ui} alt="" />
                    <button>Privacy Protectors</button>
                    </div>
                </a>

                <a href="https://memestagram1.herokuapp.com/">
                    <div className="cards">
                    <img src={wd2} alt="" />
                    <button>Memestagram</button>
                    </div>
                </a>

                <a href="https://www.thesputnik.ca/students-help-design-board-game/">
                    <div className="cards">
                    <img src={wd} alt="" />
                    <button>Suspect</button>
                    </div>
                </a>

            </div>
        </div>)
}

export default Works