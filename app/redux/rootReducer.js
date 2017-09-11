import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from '../component/LoginPage/LoginReducer';
import profileReducer from '../component/ProfilePage/ProfileReducer';
import astroReducer from '../component/AstroPage/AstroReducer';
import notificationReducer from '../component/NotificationPage/NotificationReducer';

export default combineReducers({
    app: appReducer,
    login: loginReducer,
    profile: profileReducer,
    astro: astroReducer,
    notifications:notificationReducer
});
