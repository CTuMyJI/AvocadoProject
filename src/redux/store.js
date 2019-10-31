import reviewsReducer from "./Reducers/reviewsReducer";
import messagesReducer from "./Reducers/messagesReducer";
import avoDataReducer from "./Reducers/avoDataReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import notDataReducer from "./Reducers/notDataReducer";

let store = {

    _state: {
        notData: [
            {
                name: 'Римська Анастасія Вікторівна',
                pow: 'Приватний нотаріус Дніпропетровського міського нотаріального округу',
                address: 'пр. Карла Маркса 49А/к.35',
                ctel: '098 888 00 00',
                tel: '777 77 77',
                avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3bfa43d9-6ed6-4006-878a-35edc1e09213-profile_image-300x300.png'
            },
            {
                name: 'Бондаренко Валентина Григорівна',
                pow: 'Приватний нотаріус Дніпропетровського міського нотаріального округу',
                address: 'пр. Карла Маркса 49А/к.35',
                ctel: '098 888 00 00',
                tel: '777 77 77',
                avatar: 'https://discordemoji.com/assets/emoji/4825_PepeClown.png'
            }
        ],

        avoData: [
            {
                name: 'Салтисюк Юрій Миколайович',
                pow: 'Адвокат по кримінальним справам',
                address: 'смт. Магдалинівка, Дніпропетровська обл.',
                ctel: '090 888 00 00',
                tel: '111 77 77',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-3EOwKjoTvD-_H9sgR3JCKT7h-3vUnstuwTAsKZOIjFYFQ9O'
            },
            {
                name: 'Бондар Інна Василівна',
                pow: 'Адвокат по цивільним справам',
                address: 'Донецьке шосе 2/76',
                ctel: '098 888 00 00',
                tel: '333 77 77',
                avatar: 'https://i.pinimg.com/736x/e4/bd/98/e4bd98a58bac3e45c8c4fbd919650b1d--marine-smile.jpg'
            }
        ],

        dialogs: [
            { id: 1, name: 'Римська Анастасія Вікторівна', avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3bfa43d9-6ed6-4006-878a-35edc1e09213-profile_image-300x300.png' },
            { id: 2, name: 'Бондаренко Валентина Григорівна', avatar: 'https://discordemoji.com/assets/emoji/4825_PepeClown.png' },
            { id: 3, name: 'Салтисюк Юрій Миколайович', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-3EOwKjoTvD-_H9sgR3JCKT7h-3vUnstuwTAsKZOIjFYFQ9O' },
            { id: 4, name: 'Бондар Інна Василівна', avatar: 'https://i.pinimg.com/736x/e4/bd/98/e4bd98a58bac3e45c8c4fbd919650b1d--marine-smile.jpg' }
        ],

        messages: {
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
        },

        reviews: {
            review: [
                { id: 1, review: 'UUU SUKA', name: 'Mikola' },
                { id: 2, review: 'TA ZA SHO', name: 'Valera' },
                { id: 3, review: 'ROZBIYNIKI', name: 'Vasiliy' }
            ],

            newReviewText: '',
        },
    },

    _callSubscriber() {
        console.log('no subscribesrs (observers)');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messages = messagesReducer(this._state.messages, action);
        this._state.reviews = reviewsReducer(this._state.reviews, action);
        this._state.avoData = avoDataReducer(this._state.avoData, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.notData = notDataReducer(this._state.notData, action);
        
        this._callSubscriber(this._state);
    }
}

export default store