const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messageList: [
        { id: 1, currentUser: true, message: 'Доброго дня!' },
        { id: 2, currentUser: false, message: 'Привіт!' },
        { id: 3, currentUser: true, message: 'Чим я можу Вам допомогти?' },
        { id: 4, currentUser: false, message: 'Як зробити дарувізну по смерті?' },
        { id: 5, currentUser: true, message: 'Privet yoba kak dila?' },
        { id: 6, currentUser: false, message: 'Номально' },
        { id: 7, currentUser: true, message: 'Вийди отсюда розбійник!' },
        { id: 8, currentUser: false, message: 'Сам вийди!' }
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 9,
                currentUser: true,
                message: action.newMessageText                
            };
            return {
                ...state,
                messageList: [...state.messageList, newMessage],
            };
        }
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default messagesReducer