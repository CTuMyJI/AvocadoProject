import React from 'react'
import s from './Onconsult.module.css'
import DialogItem from '../Onconsult/DialogItem/DialogItem'
import Message from './Messages/Message'
import { reduxForm, Field } from 'redux-form'

const Onconsult = (props) => {
    
    let dialogsElements =
        props.dialogs.map(o => <DialogItem name={o.name} id={o.id} avatar={o.avatar} key={o.id} />)
    let messagesElements =
        props.messageList.map(m => <Message {...m} key={m.id} />)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
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
                    {messagesElements}
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field
                    component="textarea" name="newMessageText" placeholder="Введіть ваше повідомлення"
                    className="form-control mr-sm-2" />
            </div>
            <div className={s.button}>
                <button className="btn btn-success btn-lg">
                    Відправити
                </button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "onconsultAddMessageForm"})(AddMessageForm)

export default Onconsult;