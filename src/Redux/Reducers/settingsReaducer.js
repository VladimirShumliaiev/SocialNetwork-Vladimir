const addSettingsSms = 'ADD-SMS-SETTINGS';
const oneSettingsSms = 'ONE-SETTINGS-POST';

let initialState = {
    arrSettings: [
        {smsSettings: 'sms:'},
    ],
    addSettingsSms: '',
}


const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addSettingsSms:
            let newSettingsPost = {
                smsSettings: state.addSettingsSms
            }
            state.arrSettings.push(newSettingsPost);
            state.addSettingsSms = '';
            return state;
        case oneSettingsSms:
            state.addSettingsSms = action.smsSettings;
            return state;
        default:
            return state;
    }
}

export const addSettingsCreator = () => {
    return (
        {type: addSettingsSms}
    )
}
export const oneSettingsSmsChangeCreator = (sms) => {
    return (
        {type: oneSettingsSms, smsSettings: sms}
    )
}


export default settingsReducer;