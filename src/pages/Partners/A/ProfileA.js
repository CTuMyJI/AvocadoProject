import React from 'react'
import {NavLink} from 'react-router-dom'

const AvoItems = (props) => {
    return (
        <div className="card mb-3">
            <div className="col-md-4">
                <img src={props.avatar} className="card-img-top w-25" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <n className="card-text">{props.pow}</n>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">адреса: {props.address}</li>
                <li className="list-group-item">моб. тел. {props.ctel}</li>
                <li className="list-group-item">тел. {props.tel}</li>
            </ul>
            <div className="card-body">
                <NavLink to="/onconsult" className="card-link">Надіслати повідомлення</NavLink>
                <NavLink to="/profilen/website" className="card-link">Веб-сторінка</NavLink>
            </div>
            </div>
        </div>
    )
}

export const ProfileA = (props) => {
       
    let avoElements = props.avoData.map((a) => {
        return (
            <AvoItems name={a.name} pow={a.pow} address={a.address} ctel={a.ctel} tel={a.tel} avatar={a.avatar} />
        )
    })
    
    return (
        <div className="card">
            {avoElements}
        </div>
    )
}