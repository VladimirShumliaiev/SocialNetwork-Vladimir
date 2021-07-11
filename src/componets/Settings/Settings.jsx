import React from "react";
import style from './Settings.module.css';
import SettingsCall from "./SettingsCall/SettingsCall";


const Settings = (props) => {
    let newSmsSettings = props.settingsPage.arrSettings.map((el) => {
        return (
            <SettingsCall sms={el.smsSettings}/>
        )
    })

    let addSettingsSms = props.settingsPage.addSettingsSms;

  let onButtonClick = () => {
        props.onButtonClick();
  }

  let oneChangeSettings = (e) => {
        let sms = e.target.value;
        props.oneChangeSettings(sms);

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
