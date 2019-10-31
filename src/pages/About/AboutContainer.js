import { updateNewReviewText, addReviews } from '../../redux/Reducers/reviewsReducer'
import About from './About'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}
export default connect(mapStateToProps, {updateNewReviewText, addReviews})(About);