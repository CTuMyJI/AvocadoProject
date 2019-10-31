import React from 'react'
import s from './About.module.css'
import Reviews from './Reviews/Reviews'

const About = (props) => {

    let state = props.reviews;

    let reviewsElements = state.review.map(r => <Reviews name={r.name} id={r.id} review={r.review} key={r.id}/>)

    let addReview = () => {
        props.addReviews();
    }

    let onReviewChange = () => {
        let text = newReviewElement.current.value;
        props.updateNewReviewText(text);
    }

    let newReviewTextBody = state.newReviewText;

    let newReviewElement = React.createRef();

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-5">Інформація про AVOCADO</h1>
                <p className="lead">Сцики брики без пердики, то шо свадьба без музики. version 0.0.0.0.0.1</p>
            </div>
            <div>
                <hr />
                <h2>Відгуки користувачів:</h2>
            </div>
            {reviewsElements}
            <hr />
            <div>
                <h4>Тут Ви можете залиши свій відгук:</h4>
                <textarea
                    placeholder='Введіть ваше повідомлення'
                    onChange={onReviewChange}
                    ref={newReviewElement}
                    value={newReviewTextBody}
                    className="form-control mr-sm-2" />
            </div>
            <div className={s.button}>
                <button type="button" className="btn btn-success btn-lg" onClick={addReview}>Відправити</button>
            </div>
        </div>
    )
}

export default About