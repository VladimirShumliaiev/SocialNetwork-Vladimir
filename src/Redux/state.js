const addUserProfileActionType = 'ADD-USER-PROFILE';
const profileOnChangeActionType = 'PROFILE-ONCHANGE';
const addSmsDilogsActionType = 'ADD-SMS-DILOGS';
const oneChangeMesageActionType = 'ONE-CHENGE-MESAGE';
const addSettingsSms = 'ADD-SMS-SETTINGS';
const oneSettingsSms = 'ONE-SETTINGS-POST';

let store = {
    state: {
        profilePage: {
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
        },
        navBarList: [
            {id: '/profile', name: 'Profile'},
            {id: '/dilogs', name: 'Messages'},
            {id: '/music', name: 'Music'},
            {id: '/news', name: 'News'},
            {id: '/settings', name: <h3>Settings</h3>},
            {id: '/friends', name: 'Friends'},
        ],
        arrDilogs: {
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
        },
        arrFriends: [
            {
                foto: 'https://www.meme-arsenal.com/memes/807f7063ae47455ef78d5a0743509576.jpg',
                name: 'Oleg',
            },
            {
                foto: 'https://shutniki.club/wp-content/uploads/2019/12/fire_3_09055306-337x600.jpg',
                name: 'Vasya',
            },
            {
                foto: 'https://sites.google.com/site/kartinkinavuvkontakte/_/rsrc/1353155976446/home/x_6333ad8c.jpg',
                name: 'Kolya',
            },
        ],
        settingsPage: {
            arrSettings: [
                {smsSettings: 'sms:'},
            ],
            addSettingsSms: '',
        },
    },
    rerenderEntireTree() {
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {

        if (action.type === addUserProfileActionType) {
            let newUser = {
                foto: 'https://fb.ru/misc/i/gallery/5158/753111.jpg',
                sms: this.state.profilePage.profileSmsPost,
                like: 43

            }
            this.state.profilePage.arrProfile.push(newUser);
            this.state.profilePage.profileSmsPost = '';
            this.rerenderEntireTree(this.state)

        } else if (action.type === profileOnChangeActionType) {
            this.state.profilePage.profileSmsPost = action.sms;
            this.rerenderEntireTree(this.state)

        } else if (action.type === 'ADD-SMS-DILOGS') {
            let newSms = {
                smsText: this.state.arrDilogs.dilogsPostSms,
            }
            this.state.arrDilogs.arrDilogsSms.push(newSms);
            this.state.arrDilogs.dilogsPostSms = '';
            this.rerenderEntireTree(this.state)

        } else if (action.type === 'ONE-CHENGE-MESAGE') {
            this.state.arrDilogs.dilogsPostSms = action.sms;
            this.rerenderEntireTree(this.state)

        } else if (action.type === addSettingsSms) {
            let newSettingsPost = {
                smsSettings: this.state.settingsPage.addSettingsSms
            }
            this.state.settingsPage.arrSettings.push(newSettingsPost);
            this.state.settingsPage.addSettingsSms = '';
            this.rerenderEntireTree(this.state)

        } else if (action.type === oneSettingsSms){
            this.state.settingsPage.addSettingsSms = action.smsSettings;
            this.rerenderEntireTree(this.state)
        }
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

export default store;
window.store = store;