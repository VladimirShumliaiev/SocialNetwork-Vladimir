const addUserProfileActionType = 'ADD-USER-PROFILE';
const profileOnChangeActionType = 'PROFILE-ONCHANGE';

const profileReducer = (state, action) => {

    if (action.type === addUserProfileActionType) {
        let newUser = {
            foto: 'https://fb.ru/misc/i/gallery/5158/753111.jpg',
            sms: state.profileSmsPost,
            like: 43

        }
        state.arrProfile.push(newUser);
        state.profileSmsPost = '';

    } else if (action.type === profileOnChangeActionType) {
        state.profileSmsPost = action.sms;
    }
    return state;

}

export const addUserProfileActionCreator = () => {
    return (
        {type: addUserProfileActionType}
    )
}
export const profileOnChangeActionCreator = (text) => {
    return (
        {type: profileOnChangeActionType, sms: text}
    )
}



export default profileReducer;