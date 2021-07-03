const addSmsDilogsActionType = 'ADD-SMS-DILOGS';
const oneChangeMesageActionType = 'ONE-CHENGE-MESAGE';

const dilogsReducer = (state, action) => {

 if (action.type === addSmsDilogsActionType) {
    let newSms = {
        smsText: state.dilogsPostSms,
    }
    state.arrDilogsSms.push(newSms);
    state.dilogsPostSms = '';


} else if (action.type === oneChangeMesageActionType) {
        state.dilogsPostSms = action.sms;
    }


    return state;

}

export const addSmsDilogsActionCreator = () => {
    return (
        {type: addSmsDilogsActionType}
    )
}
export const oneChangeMesageActionCreator = (text) => {
    return (
        {type: oneChangeMesageActionType, sms: text}
    )
}

export default dilogsReducer;