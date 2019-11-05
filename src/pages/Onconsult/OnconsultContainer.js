import { addMessage, updateNewMessageText } from '../../redux/Reducers/messagesReducer'
import Onconsult from './Onconsult'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        messageList: state.messages.messageList,
        newMessageText: state.messages.newMessageText,
    }
}

let AuthRedirectComponent = withAuthRedirect(Onconsult);

export default connect(mapStateToProps, {updateNewMessageText, addMessage} )(AuthRedirectComponent);