import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messages = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.messages}>{messages}</div>
        </div>
    )
}

export default Dialogs;