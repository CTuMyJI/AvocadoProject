import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = (props) => (
    <nav className="navbar navbar-dark bg-success navbar-expand-lg">
        <div className="navbar-brand">
            <img className={s.headerImage} src='https://pngriver.com/wp-content/uploads/2018/04/Download-Avocado-PNG-HD.png' alt='...'></img>
            <NavLink to="/" className="navbar-brand">
                AVOCADO - social network
            </NavLink>
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink exact to="/profile" className="nav-link">Profile</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/about" className="nav-link">About us</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/onconsult" className="nav-link">ONLINE - consulation</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/partners" className="nav-link">Partners</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/users" className="nav-link">Users</NavLink>
            </li>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className="nav-link">
                        {props.login}
                        <button onClick={props.logout} className="btn btn-danger btn-sm">Logout</button>
                    </div>
                    : <NavLink to={'/login'} className="nav-link">LOGIN</NavLink>}
            </div>
        </ul>
    </nav>
)