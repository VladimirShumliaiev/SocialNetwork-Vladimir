import React from "react";
import style from './Dilogs.module.css';
import UserDilogs from "./Dailog Components/UserDilogs/UserDilogs";
import SmsDilogs from "./Dailog Components/Sms Dilogs/SmsDilogs";
import ButtonTexterea from "../Profile/Button and Texterea/Button-Texterea";

const Dilogs = (props) => {
    let newUserDilogsObject = props.dilogsState.arrDilogsUsers.map((el) => {
            return (
                <UserDilogs id={el.id} name={el.name}/>
            )
        }
    )

    let newSmsDilogsObject = props.dilogsState.arrDilogsSms.map((el) => {
        return (
            <SmsDilogs sms={el.smsText}/>
        )
    })


    return (
        <div className={style.item}>
            <div className={style.userDilogs}>
                {newUserDilogsObject}
            </div>

            <div className={style.smsDilogs}>
                {newSmsDilogsObject}
                <ButtonTexterea addSmsDilogs={props.addSmsDilogs}/>
            </div>
        </div>
    )
}

export default Dilogs;