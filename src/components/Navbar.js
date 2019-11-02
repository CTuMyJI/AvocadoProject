import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-success navbar-expand-lg">
        <div className="navbar-brand">
            <img className={s.headerImage} src='https://pngriver.com/wp-content/uploads/2018/04/Download-Avocado-PNG-HD.png' alt='...'></img>
            <NavLink to="/" className="navbar-brand">
                AVOCADO - Юридичні послуги
            </NavLink>
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink exact to="/" className="nav-link">На головну</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink exact to="/profile" className="nav-link">Моя сторінка</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/about" className="nav-link">Про нас</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/services" className="nav-link">Послуги</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/onconsult" className="nav-link">ONLINE - консультація</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/partners" className="nav-link">Партнери</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/users" className="nav-link">Користувачі</NavLink>
            </li>
        </ul>
    </nav>
)