import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='headerBox'>
            <nav className='navigation'>
                <Link to="/">Dashboard</Link>
                <Link to="/forecast">Forecast</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </div>
    )
}
