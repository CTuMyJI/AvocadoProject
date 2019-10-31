import React from 'react'
import { NavLink } from 'react-router-dom'

export const Partners = (props) => {
    
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Наші партнери</h1>
                    <p className="lead">На цій сторінці Ви можете ознайомитися з нашими фахівцями. Вам необхідно знайти...</p>

                    <NavLink to="/profilen" className="nav-link">
                        <button type="button" className="btn btn-success btn-lg">Переглянути нотаріусів</button>
                    </NavLink>
                    <NavLink to="/profilea" className="nav-link">
                        <button type="button" className="btn btn-primary btn-lg">Переглянути адвакатів</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}