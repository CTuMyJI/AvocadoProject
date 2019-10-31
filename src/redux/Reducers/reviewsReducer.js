const ADD_REVIEWS = 'ADD-REVIEWS';
const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';

let initialState = {
    review: [
        { id: 1, review: 'UUU SUKA', name: 'Mikola' },
        { id: 2, review: 'TA ZA SHO', name: 'Valera' },
        { id: 3, review: 'ROZBIYNIKI', name: 'Vasiliy' }
    ],

    newReviewText: '',
};

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEWS: {
            let newReview = {
                id: 4,
                name: 'Zeleboba',
                review: state.newReviewText
            };
            return {
                ...state,
                review: [...state.review, newReview],
                newReviewText: ''
            };
        }
        case UPDATE_NEW_REVIEW_TEXT: {
            return {
                ...state,
                newReviewText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addReviews = () => ({ type: ADD_REVIEWS })

export const updateNewReviewText = (text) => ({ type: UPDATE_NEW_REVIEW_TEXT, newText: text })

export default reviewsReducer