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
            profileSmsPost: 'addPost',
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
            dilogsPostSms: 'Hello World',
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
        arrSettings: [
            {sms: 'sms:'},
        ],

    },
    rerenderEntireTree() {
    },

    addSmsSettings(sms) {
        let smsText = {
            sms: sms,
        }
        this.state.arrSettings.push(smsText);
        this.rerenderEntireTree(this.state);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {

        if (action.type === 'ADD-USER-PROFILE') {
            let newUser = {
                foto: 'https://fb.ru/misc/i/gallery/5158/753111.jpg',
                sms: this.state.profilePage.profileSmsPost,
                like: 43

            }
            this.state.profilePage.arrProfile.push(newUser);
            this.state.profilePage.profileSmsPost = '';
            this.rerenderEntireTree(this.state)

        } else if (action.type === 'PROFILE-ONCHANGE') {
            this.state.profilePage.profileSmsPost = action.sms;
            this.rerenderEntireTree(this.state)

        } else if (action.type === 'ADD-SMS-DILOGS') {
            let newSms = {
                smsText: this.state.arrDilogs.dilogsPostSms,
            }
            this.state.arrDilogs.arrDilogsSms.push(newSms);
            this.state.arrDilogs.dilogsPostSms = '';
            this.rerenderEntireTree(this.state)

        } else if (action.type === 'ONE-CHENGE-MESSAGE') {
            this.state.arrDilogs.dilogsPostSms = action.sms;
            this.rerenderEntireTree(this.state)
        }
    }


}


export default store;
window.store = store;