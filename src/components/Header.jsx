import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>REACT</h1>
            <nav className='nav'>
                <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Reseña</a></li>
                        <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
