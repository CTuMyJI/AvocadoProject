import React from 'react'
import s from './Onconsult.module.css'
import DialogItem from '../Onconsult/DialogItem/DialogItem'
import Messages from './Messages/Messages'
import Answers from './Answers/Answers'

class Onconsult extends React.Component {

    dialogsElements = () => this.props.dialogs.map(o => <DialogItem name={o.name} id={o.id} avatar={o.avatar} key={o.id} />)

    messagesElements = () => this.props.messages.message.map(m => <Messages message={m.message} key={m.id} />)

    answersElements = () => this.props.messages.answer.map(a => <Answers answer={a.answer} key={a.id} />)

    newMessageTextBody = () => this.props.messages.newMessageText

    newMessageElement= () =>  React.createRef() 

    onAddMessage = () => this.props.addMessage();
    
    onMessageChange = () => {
        let text = this.newMessageElement.current.value;
        this.props.updateNewMessageText(text);
    }

    render() {

        return (
            <div className="jumbotron">
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        <h3>Оберіть спеціаліста:</h3>
                        {this.dialogsElements}
                    </div>
                    <div className={s.chat}>
                        <h3>ЧАТ:</h3>
                        {this.answersElements}
                        {this.messagesElements}
                        <div className={s.textarea}>
                            <textarea
                                placeholder='Введіть ваше повідомлення'
                                onChange={this.onMessageChange}
                                className="form-control mr-sm-2"
                                ref={this.newMessageElement}
                                value={this.newMessageTextBody}
                            />
                        </div>
                        <div className={s.button}>
                            <button
                                type="button"
                                className="btn btn-success btn-lg"
                                onClick={this.onAddMessage}
                            >Відправити
                </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Onconsult