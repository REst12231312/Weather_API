import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/favorites'>Favorites</Link>
            </nav>
        </div>
    )
}
