import { addMessage, updateNewMessageText } from '../../redux/Reducers/messagesReducer'
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

export default connect(mapStateToProps, 
    { updateNewMessageText, addMessage} )(Onconsult);