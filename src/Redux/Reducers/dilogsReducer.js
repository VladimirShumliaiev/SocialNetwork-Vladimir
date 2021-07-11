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

    switch (action.type) {
        case addSmsDilogsActionType: {

            let newSms = {
                smsText: state.dilogsPostSms,
            }
            let stateCopy = {...state};
            stateCopy.arrDilogsSms = [...state.arrDilogsSms]
            stateCopy.arrDilogsSms.push(newSms);
            stateCopy.dilogsPostSms = '';
            return stateCopy;
        }
        case oneChangeMessageActionType:
            let stateCopy = {...state};
            stateCopy.dilogsPostSms = action.sms;
            return stateCopy;

        default :
            return state

    }
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