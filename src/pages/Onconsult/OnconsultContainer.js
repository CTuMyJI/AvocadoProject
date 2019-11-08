import { addMessage } from '../../redux/Reducers/messagesReducer'
import Onconsult from './Onconsult'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        messageList: state.messages.messageList,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Onconsult);