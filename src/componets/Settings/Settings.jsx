import React from "react";
import style from './Settings.module.css';
import SettingsCall from "./SettingsCall/SettingsCall";


const Settings = (props) => {

    let newSmsSettings = props.state.map((el) => {
        return (
            <SettingsCall sms={el.sms} />
        )
    })

    let addTextTexterea = React.createRef();

    let pushBatton = () => {
        let sms = addTextTexterea.current.value;
        props.addSmsSettings(sms);
        addTextTexterea.current.value='';
    }

    return (
        <div className={style.item}>
            <div>
                <textarea ref={addTextTexterea} />
                <button onClick={pushBatton}>add Sms</button>
            </div>
            <div>
                {newSmsSettings}
            </div>

        </div>
    )
}

export default Settings;
