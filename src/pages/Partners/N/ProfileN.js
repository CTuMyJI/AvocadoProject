import React from 'react'
import { NavLink } from 'react-router-dom'

const NotItems = (props) => {
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

export const ProfileN = (props) => {

    let notElements = props.notData.map((n) => {
        return (
            <NotItems name={n.name} pow={n.pow} address={n.address} ctel={n.ctel} tel={n.tel} avatar={n.avatar} />
        )
    })

    return (
        <div className="card">
            {notElements}
        </div>
    )
}