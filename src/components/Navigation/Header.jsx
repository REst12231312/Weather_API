import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav>
                <Link to='/'>Dashboard</Link>
                <Link to='/forecast'>Forecast</Link>
                <Link to='/favorites'>Favorites</Link>
            </nav>
        </div>
    )
}
