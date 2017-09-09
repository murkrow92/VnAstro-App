import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from '../component/LoginPage/LoginReducer';
import profileReducer from '../component/ProfilePage/ProfileReducer';

export default combineReducers({
    app: appReducer,
    login: loginReducer,
    profile: profileReducer,
});
