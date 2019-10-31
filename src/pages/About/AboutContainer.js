import { updateNewReviewTextActionCreator, addReviewsActionCreator } from '../../redux/Reducers/reviewsReducer'
import About from './About'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewReviewText: (text) => {
            dispatch(updateNewReviewTextActionCreator(text))
        },
        addReviews: () => {
            dispatch(addReviewsActionCreator())
        }
    }
}
const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About)

export default AboutContainer;