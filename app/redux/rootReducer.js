import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from '../component/LoginPage/LoginReducer';
import profileReducer from '../component/ProfilePage/ProfileReducer';
import astroReducer from '../component/AstroPage/AstroReducer';
import notificationReducer from '../component/NotificationPage/NotificationReducer';
import sidebarReducer from '../component/Sidebar/SideBarReducer';
import bankReducer from '../component/TransactionPage/BankReducer';
import detailReducer from '../component/ComboDetailPage/DetailReducer';
import addFriendReducer from "../component/FriendPage/AddFriendPage/AddFriendReducer";
import friendReducer from "../component/FriendPage/FriendRecuder";


export default combineReducers({
    app: appReducer,
    login: loginReducer,
    profile: profileReducer,
    astro: astroReducer,
    notifications: notificationReducer,
    sidebar: sidebarReducer,
    bank: bankReducer,
    detail: detailReducer,
    friend: friendReducer,
    addFriend: addFriendReducer,
});
