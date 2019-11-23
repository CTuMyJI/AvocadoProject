import React from 'react'
import s from './About.module.css'
import Reviews from './Reviews/Reviews'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../components/common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'

const About = (props) => {

    let state = props.reviews;

    let reviewsElements = state.review.map(r => <Reviews name={r.name} id={r.id} review={r.review} key={r.id} />)

    let addNewReview = (values) => {
        props.addReviews(values.newReviewText);
    }

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-5">About AVOCADO</h1>
                <p className="lead">...description...</p>
            </div>
            <div>
                <hr />
                <h2>Users reviews:</h2>
            </div>
            {reviewsElements}
            <hr />
            <h4>Add your review:</h4>
            <AddNewReviewReduxForm onSubmit={addNewReview}/>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

const AddNewReviewForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} name={"newReviewText"} placeholder='Review text'
                    className="form-control mr-sm-2" />
            </div>
            <div className={s.button}>
                <button className="btn btn-success btn-lg">
                    Send
                </button>
            </div>
        </form>
    )
}

const AddNewReviewReduxForm = reduxForm({ form: "reviewAddMessageForm" })(AddNewReviewForm);

export default About;