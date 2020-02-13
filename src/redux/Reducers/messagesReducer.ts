const ADD_MESSAGE = 'ADD-MESSAGE'

type MessageListType = {
    id: number | null
    currentUser: boolean
    message: string | null
}

let initialState = {
    messageList: [
        { id: 1, currentUser: true, message: 'Hello!' },
        { id: 2, currentUser: false, message: 'Hi!' },
        { id: 3, currentUser: true, message: 'Can i help you?' },
        { id: 4, currentUser: false, message: 'Sure' },
        { id: 5, currentUser: true, message: 'Yoyoyo' },
        { id: 6, currentUser: false, message: '?????' }
    ] as Array<MessageListType>
}

export type InitialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any) => {
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

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessage = (newMessageText: string): AddMessageActionType => ({ type: ADD_MESSAGE, newMessageText })

export default messagesReducer