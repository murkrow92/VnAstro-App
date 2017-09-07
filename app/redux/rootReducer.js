import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from '../component/LoginPage/LoginReducer';

export default combineReducers({
    app: appReducer,
    login: loginReducer,
});
