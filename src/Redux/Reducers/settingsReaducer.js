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
        case addSettingsSms: {
            let newSettingsPost = {
                smsSettings: state.addSettingsSms
            }
            let stateCopy = {...state};
            stateCopy.arrSettings = [...state.arrSettings];
            stateCopy.arrSettings.push(newSettingsPost);
            stateCopy.addSettingsSms = '';
            return stateCopy;
        }
        case oneSettingsSms:
            let stateCopy = {...state}
            stateCopy.addSettingsSms = action.smsSettings;
            return stateCopy;

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