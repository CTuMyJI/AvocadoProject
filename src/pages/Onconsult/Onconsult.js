import React from 'react'
import s from './Onconsult.module.css'
import DialogItem from '../Onconsult/DialogItem/DialogItem'
import Messages from './Messages/Messages'
import Answers from './Answers/Answers'

const Onconsult = (props) => {

    let dialogsElements = 
        props.dialogs.map(o => <DialogItem name={o.name} id={o.id} avatar={o.avatar} key={o.id}/>)

    let messagesElements = 
        props.messages.message.map(m => <Messages message={m.message} key={m.id}/>)

    let answersElements = 
        props.messages.answer.map(a => <Answers answer={a.answer} key={a.id}/>)

    let newMessageTextBody = props.messages.newMessageText;

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className="jumbotron">
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <h3>Оберіть спеціаліста:</h3>
                    {dialogsElements}
                </div>
                <div className={s.chat}>
                    <h3>ЧАТ:</h3>
                    {answersElements}
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