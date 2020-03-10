const ADD_CURRENT_PAGE_COUNTER = 'avocado/homePageReducer/ADD_CURRENT_PAGE_COUNTER';

let initialState = {
    currentPage: 1
};

export type InitialStateType = typeof initialState

const homePageReducer = (state = initialState, action: any): InitialStateType => {
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

type AddCurrentPageCounterActionType = {
    type: typeof ADD_CURRENT_PAGE_COUNTER
    currentPage: number
}

export const addCurrentPageCounter = (currentPage: number): AddCurrentPageCounterActionType => ({ type: ADD_CURRENT_PAGE_COUNTER, currentPage })

export default homePageReducer;