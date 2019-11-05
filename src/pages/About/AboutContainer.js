import { updateNewReviewText, addReviews } from '../../redux/Reducers/reviewsReducer'
import About from './About'
import { connect } from 'react-redux'
import {compose} from 'redux'

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

export default compose(
    connect(mapStateToProps, {updateNewReviewText, addReviews})
)(About);