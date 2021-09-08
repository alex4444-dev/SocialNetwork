import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'It\'s my first post too', likesCount: 2}
            ],
            newPostText: 'IT-kamasutra.com'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Lesha'},
                {id: 2, name: 'Yulia'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Larisa'},
                {id: 5, name: 'Ivan'},
                {id: 6, name: 'Efim'}
            ],
            message: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi, sun'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Mom'},
                {id: 5, message: 'Lenta'},
                {id: 6, message: 'You'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;