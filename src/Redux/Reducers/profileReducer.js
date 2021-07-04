const addUserProfileActionType = 'ADD-USER-PROFILE';
const profileOnChangeActionType = 'PROFILE-ONCHANGE';

let initialState = {

    arrProfile: [

        {
            foto: 'https://ic.pics.livejournal.com/bigra/74120222/428910/428910_600.jpg',
            sms: `Yo Yo, wot is uore name`,
            like: 498
        },

        {
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGi-IiJ_f_rlqPt--LJQ4wx_3lEt2kYspOQ&usqp=CAU',
            sms: 'Wat to you duet? yes of corse',
            like: 345
        },

        {
            foto: 'https://fb.ru/misc/i/gallery/5158/753111.jpg',
            sms: 'Hello Hi',
            like: 658
        },
    ],
    profileSmsPost: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case addUserProfileActionType:
            let newUser = {
                foto: 'https://fb.ru/misc/i/gallery/5158/753111.jpg',
                sms: state.profileSmsPost,
                like: 43
            }
            state.arrProfile.push(newUser);
            state.profileSmsPost = '';
            return state;

        case profileOnChangeActionType:
            state.profileSmsPost = action.sms;
            return state

        default:
            return state;
    }


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