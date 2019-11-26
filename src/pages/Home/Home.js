import React from 'react'
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className="jumbotron">
            <div>
                <h1 className="display-4">Hello world!</h1>
                <p className="lead">Something about Avocado...</p>
                <img className={s.image} src='' alt='...' />
            </div>
        </div>
    )
}