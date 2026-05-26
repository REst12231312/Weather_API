import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import homeIcon from '../../image/free-icon-font-home-3917033.png';
import weatherWeekIcon from '../../image/free-icon-font-cloud-sun-rain-17511547.png'
import favoritesCity from '../../image/free-icon-font-star-3916582.png'

export default function Header() {
    return (
        <div className='headerBox'>
            <nav className='navigation'>
                <ul>
                    <li>
                        <img src={homeIcon} alt="home" />
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <img src={weatherWeekIcon} alt="home" />
                        <Link to="/forecast">Forecast</Link>
                    </li>
                    <li>
                        <img src={favoritesCity} alt="home" />
                        <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
