import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import messagesReducer from './Reducers/messagesReducer';
import reviewsReducer from './Reducers/reviewsReducer';
import avoDataReducer from './Reducers/avoDataReducer';
import dialogsReducer from './Reducers/dialogsReducer';
import notDataReducer from './Reducers/notDataReducer';
import usersReducer from './Reducers/usersReducer';
import profileReducer from './Reducers/profileReducer';
import authReducer from './Reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './Reducers/appReducer';
import homePageReducer from './Reducers/homePageReducer';

let reducers = combineReducers({
    messages: messagesReducer,
    reviews: reviewsReducer,
    avoData: avoDataReducer,
    dialogs: dialogsReducer,
    notData: notDataReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    home: homePageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;