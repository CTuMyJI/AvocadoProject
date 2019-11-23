import React from 'react'
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className="jumbotron">
            <div>
                <h1 className="display-4">Hello world!</h1>
                <p className="lead">Something about Avocado...</p>
                <img className={s.image} src='' alt='...' />
                <hr className="my-4" />
                <p>We have online consultation</p>
                <a className="btn btn-success btn-lg" href="/onconsult" role="button" >Help me!</a>
            </div>
        </div>
    )
}