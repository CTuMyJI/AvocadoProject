import React from 'react'
import { NavLink } from 'react-router-dom'

export const Partners = (props) => {
    
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Our partners</h1>
                    <p className="lead">...description...</p>

                    <NavLink to="/profilen" className="nav-link">
                        <button type="button" className="btn btn-success btn-lg">Notary</button>
                    </NavLink>
                    <NavLink to="/profilea" className="nav-link">
                        <button type="button" className="btn btn-primary btn-lg">Advocate</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}