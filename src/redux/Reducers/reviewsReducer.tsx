const ADD_REVIEWS = 'ADD-REVIEWS';

type ReviewType = {
    id: number
    review: string
    name: string
}

let initialState = {
    review: [
        { id: 1, review: 'Nice!', name: 'UserName1' },
        { id: 2, review: 'Not bad', name: 'UserName2' },
        { id: 3, review: 'Thanks for the help', name: 'UserName3' }
    ] as Array<ReviewType>
};

type InitialStateType = typeof initialState

export const reviewsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddReviewsActionType = {
    type: typeof ADD_REVIEWS
    newReviewText: string
}
export const addReviews = (newReviewText: string): AddReviewsActionType => ({ type: ADD_REVIEWS, newReviewText })

export default reviewsReducer