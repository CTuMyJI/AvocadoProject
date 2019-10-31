const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    message: [
        { id: 1, message: 'Доброго дня!' },
        { id: 2, message: 'Чим я можу Вам допомогти?' },
        { id: 3, message: 'Privet yoba kak dila?' },
        { id: 4, message: 'Вийди отсюда розбійник!' }
    ],

    answer: [
        { id: 1, answer: 'Привіт!' },
        { id: 2, answer: 'Як зробити дарувізну по смерті?' },
        { id: 3, answer: 'Номально' },
        { id: 4, answer: 'Сам вийди!' }
    ],

    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            return {
                ...state,
                message: [...state.message, newMessage],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default messagesReducer