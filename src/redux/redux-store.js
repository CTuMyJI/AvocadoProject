import { createStore, combineReducers } from "redux";
import messagesReducer from './Reducers/messagesReducer';
import reviewsReducer from './Reducers/reviewsReducer';
import avoDataReducer from './Reducers/avoDataReducer';
import dialogsReducer from './Reducers/dialogsReducer';
import notDataReducer from './Reducers/notDataReducer';
import usersReducer from "./Reducers/usersReducer";

let reducers = combineReducers({
    messages: messagesReducer,
    reviews: reviewsReducer,
    avoData: avoDataReducer,
    dialogs: dialogsReducer,
    notData: notDataReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;