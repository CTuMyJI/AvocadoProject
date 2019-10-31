import React from 'react'
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className="jumbotron">
            <div>
                <h1 className="display-4">Привіт, друже бобер!</h1>
                <p className="lead">Якщо ти шукав кваліфіковану та якісну юридичну консультацію, то ти зайшов на правильний сайт.</p>
                <img className={s.image} src='http://memesmix.net/media/created/xrjkph.jpg' alt='...' />
                <hr className="my-4" />
                <p>На сайті працює функція онлайн консультації.</p>
                <a className="btn btn-success btn-lg" href="/onconsult" role="button" >ДОПОМОЖІТЬ!</a>
            </div>
            <hr />
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Пошук по сайту" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Пошук</button>
                    </form>
                </nav>
            </div>
        </div>
    )
}