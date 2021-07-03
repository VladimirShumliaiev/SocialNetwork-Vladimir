const addSettingsSms = 'ADD-SMS-SETTINGS';
const oneSettingsSms = 'ONE-SETTINGS-POST';

const settingsReducer = (state,action) => {

    if (action.type === addSettingsSms) {
        let newSettingsPost = {
            smsSettings: state.addSettingsSms
        }
        state.arrSettings.push(newSettingsPost);
        state.addSettingsSms = '';

    } else if (action.type === oneSettingsSms) {
        state.addSettingsSms = action.smsSettings;

    }

    return state;
}

export const addSettingsCreator = () => {
    return (
        {type: addSettingsSms}
    )
}
export const oneSettingsSmsChangeCreator = (sms) => {
    return(
        {type: oneSettingsSms,smsSettings: sms }
    )
}


export default settingsReducer;