import React from 'react'
import styles from './Home.module.css'

const Home = (props) => {

    let image;

    if (props.currentPage === 1) {
        image = <div>
            <img className={styles.image} src='https://www.meme-arsenal.com/memes/34996c8b3d6d35bc9a08bb20a95df8e0.jpg' alt='...' />
            <p className="lead">Communicate...</p>
        </div>
    } else if (props.currentPage === 2) {
        image = <div>
            <img className={styles.image} src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/11/11/harold-0.jpg' alt='...' />
            <p className="lead">Learn...</p>
        </div>
    } else if (props.currentPage === 3) {
        image = <div>
            <img className={styles.image} src='https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg' alt='...' />
            <p className="lead">Help!</p>
        </div>
    }

    return (
        <div className="jumbotron">
            <div className={styles.wrapper}>
                <h1 className="display-4">Hello world!</h1>
                <p className="lead">Join us!</p>
                <div>
                        {image}
                </div>
                <div>
                    <div>
                        <button className={styles.button} onClick={() => { props.addCurrentPageCounter(1) }}>1</button>
                        <button className={styles.button} onClick={() => { props.addCurrentPageCounter(2) }}>2</button>
                        <button className={styles.button} onClick={() => { props.addCurrentPageCounter(3) }}>3</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;