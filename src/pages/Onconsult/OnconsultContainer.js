import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Reducers/messagesReducer'
import Onconsult from './Onconsult'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        messages: state.messages,
        answer: state.messages,
        newMessageText: state.newMessageText
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Onconsult);