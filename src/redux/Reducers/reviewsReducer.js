const ADD_REVIEWS = 'ADD-REVIEWS';

let initialState = {
    review: [
        { id: 1, review: 'Nice!', name: 'UserName1' },
        { id: 2, review: 'Not bad', name: 'UserName2' },
        { id: 3, review: 'Thanks for the help', name: 'UserName3' }
    ]
};

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEWS: {
            let newReview = {
                id: 4,
                name: 'Zeleboba',
                review: action.newReviewText
            };
            return {
                ...state,
                review: [...state.review, newReview],
            };
        }
        default:
            return state;
    }
}

export const addReviews = (newReviewText) => ({ type: ADD_REVIEWS, newReviewText })

export default reviewsReducer