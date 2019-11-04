import { createStore, combineReducers, applyMiddleware } from 'redux';
import messagesReducer from './Reducers/messagesReducer';
import reviewsReducer from './Reducers/reviewsReducer';
import avoDataReducer from './Reducers/avoDataReducer';
import dialogsReducer from './Reducers/dialogsReducer';
import notDataReducer from './Reducers/notDataReducer';
import usersReducer from './Reducers/usersReducer';
import profileReducer from './Reducers/profileReducer';
import authReducer from './Reducers/authReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    messages: messagesReducer,
    reviews: reviewsReducer,
    avoData: avoDataReducer,
    dialogs: dialogsReducer,
    notData: notDataReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;