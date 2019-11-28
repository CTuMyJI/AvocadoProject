const ADD_CURRENT_PAGE_COUNTER = 'avocado/homePageReducer/ADD_CURRENT_PAGE_COUNTER';

let initialState = {
    currentPage: 1
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_PAGE_COUNTER:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}

export const addCurrentPageCounter = (currentPage) => ({ type: ADD_CURRENT_PAGE_COUNTER, currentPage })

export default homePageReducer;