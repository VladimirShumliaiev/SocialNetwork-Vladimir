import React from "react";
import style from './Dilogs.module.css';
import UserDilogs from '../UserDilogs/UserDilogs';
import SmsDilogs from '../Sms Dilogs/SmsDilogs';


const Dilogs = (props) => {

    let newAddSms = props.arrDilogs.dilogsPostSms;

    let newUserDilogsList = props.arrDilogs.arrDilogsUsers.map((el) => {
        return (
            <UserDilogs id={el.id} name={el.name}/>
        )
    })

    let newDilogsSms = props.arrDilogs.arrDilogsSms.map((el) => {
        return (
            <SmsDilogs sms={el.smsText}/>
        )
    })

    let addSms = () => {
        props.addSms();

    }
    let newOnChange = (e) => {
        let smsDilogs = e.target.value;
        props.newOnChange(smsDilogs);

    }

    return (
        <div className={style.item}>
            <div className={style.userDilogs}>
                {newUserDilogsList}
            </div>

            <div className={style.smsDilogs}>
                {newDilogsSms}
                <textarea onChange={newOnChange} value={newAddSms} placeholder={'Text...'}/>
                <button onClick={addSms}>add sms</button>
            </div>
        </div>
    )
}

export default Dilogs;