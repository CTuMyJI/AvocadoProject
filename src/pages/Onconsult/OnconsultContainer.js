import { addMessage, updateNewMessageText } from '../../redux/Reducers/messagesReducer'
import Onconsult from './Onconsult'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        messageList: state.messages.messageList,
        newMessageText: state.messages.newMessageText
    }
}

export default connect(mapStateToProps, 
    { updateNewMessageText, addMessage} )(Onconsult);