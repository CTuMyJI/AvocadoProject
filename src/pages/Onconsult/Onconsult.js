import React from 'react'
import s from './Onconsult.module.css'
import DialogItem from '../Onconsult/DialogItem/DialogItem'
import Message from './Messages/Message'
import {Redirect} from 'react-router-dom'

const Onconsult = (props) => {

    let dialogsElements = 
        props.dialogs.map(o => <DialogItem name={o.name} id={o.id} avatar={o.avatar} key={o.id}/>)

    let messagesElements = 
        props.messageList.map(m => <Message {...m} key={m.id}/>)

    let newMessageTextBody = props.newMessageText;

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) return <Redirect to='/login' />;

    return (
        <div className="jumbotron">
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <h3>Оберіть спеціаліста:</h3>
                    {dialogsElements}
                </div>
                <div className={s.chat}>
                    <h3>ЧАТ:</h3>
                    {messagesElements}
                    <div className={s.textarea}>
                        <textarea
                            placeholder='Введіть ваше повідомлення'
                            onChange={onMessageChange}
                            className="form-control mr-sm-2"
                            ref={newMessageElement}
                            value={newMessageTextBody}
                        />
                    </div>
                    <div className={s.button}>
                        <button
                            type="button"
                            className="btn btn-success btn-lg"
                            onClick={onAddMessage}
                        >Відправити
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onconsult