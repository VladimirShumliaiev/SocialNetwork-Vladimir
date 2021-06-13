import React from "react";
import style from './Dilogs.module.css';
import UserDilogs from "./Dailog Components/UserDilogs/UserDilogs";
import SmsDilogs from "./Dailog Components/Sms Dilogs/SmsDilogs";

const Dilogs = (props) => {
    let newUserDilogsObject = props.dilogsState.massDilogsUsers.map((el) => {
            return (
                <UserDilogs id={el.id} name={el.name}/>
            )
        }
    )

    let newSmsDilogsObject = props.dilogsState.massDilogsSms.map((el) => {
        return (
            <SmsDilogs sms={el.smsText}/>
        )
    })

    let newAddSms = React.createRef();

    let addSms = () => {
        let text = newAddSms.current.value;
        alert(text);
    }

    return (
        <div className={style.item}>
            <div className={style.userDilogs}>
                {newUserDilogsObject}
            </div>

            <div className={style.smsDilogs}>
                {newSmsDilogsObject}
                <textarea ref={newAddSms}></textarea>
                <button onClick={addSms}>add sms</button>
            </div>
        </div>
    )
}

export default Dilogs;