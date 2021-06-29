import React from "react";
import style from './Settings.module.css';
import SettingsCall from "./SettingsCall/SettingsCall";
import {addSettingsCreator, oneSettingsSmsChangeCreator} from "../../Redux/state";


const Settings = (props) => {

    let newSmsSettings = props.state.arrSettings.map((el) => {
        return (
            <SettingsCall sms={el.smsSettings}/>
        )
    })

    let addSettingsSms = props.state.addSettingsSms;

  let onButtonClick = () => {
        props.dispatch( addSettingsCreator());
  }

  let oneChangeSettings = (e) => {
        let sms = e.target.value;
        props.dispatch(oneSettingsSmsChangeCreator(sms));

  }



    return (
        <div className={style.item}>
            <div>
                <textarea onChange={oneChangeSettings} value={addSettingsSms} placeholder={'Sms...'}/>
                <button onClick={onButtonClick}>add Sms</button>
            </div>
            <div>
                {newSmsSettings}
            </div>

        </div>
    )
}

export default Settings;
