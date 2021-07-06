const addSmsDilogsActionType = 'ADD-SMS-DILOGS';
const oneChangeMessageActionType = 'ONE-CHENGE-MESAGE';

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


    } else if (action.type === oneChangeMessageActionType) {
        state.dilogsPostSms = action.sms;
    }


    return state;

}

export const addSmsDilogsActionCreator = () => {
    return (
        {type: addSmsDilogsActionType}
    )
}
export const oneChangeMessageActionCreator = (text) => {
    return (
        {type: oneChangeMessageActionType, sms: text}
    )
}

export default dilogsReducer;