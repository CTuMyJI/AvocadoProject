const ADD_REVIEWS = 'ADD-REVIEWS';

let initialState = {
    review: [
        { id: 1, review: 'UUU SUKA', name: 'Mikola' },
        { id: 2, review: 'TA ZA SHO', name: 'Valera' },
        { id: 3, review: 'ROZBIYNIKI', name: 'Vasiliy' }
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