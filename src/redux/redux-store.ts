import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import messagesReducer from './Reducers/messagesReducer'
import reviewsReducer from './Reducers/reviewsReducer'
import avoDataReducer from './Reducers/avoDataReducer'
import dialogsReducer from './Reducers/dialogsReducer'
import notDataReducer from './Reducers/notDataReducer'
import usersReducer from './Reducers/usersReducer'
import profileReducer from './Reducers/profileReducer'
import authReducer from './Reducers/authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './Reducers/appReducer'
import homePageReducer from './Reducers/homePageReducer'

let rootReducer = combineReducers({
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

type RootReducerType = typeof rootReducer // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store