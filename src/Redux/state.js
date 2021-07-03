import profileReducer from "./Reducers/profileReducer";
import dilogsReducer from "./Reducers/dilogsReducer";
import settingsReducer from "./Reducers/settingsReaducer";



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
        this.state.profilePage = profileReducer(this.state.profilePage,action)
        this.state.arrDilogs = dilogsReducer(this.state.arrDilogs,action)
        this.state.settingsPage = settingsReducer(this.state.settingsPage,action)

       this.rerenderEntireTree(this.state)
    }

}






export default store;
window.store = store;