const addSmsDilogsActionType = 'ADD-SMS-DILOGS';
const oneChangeMesageActionType = 'ONE-CHENGE-MESAGE';

let initialState = {
    arrDilogsUsers: [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Irina'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Vitaliy'},
        {id: 5, name: 'Mariya'}
    ],
    arrDilogsSms: [
        {smsText: 'Hello Vladimir'},
    ],
    dilogsPostSms: '',
}

const dilogsReducer = (state = initialState, action) => {

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