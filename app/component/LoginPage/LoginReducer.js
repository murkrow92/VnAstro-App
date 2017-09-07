import { combineReducers } from 'redux';
import {
    ACTION_FETCH_FACEBOOK_SUCCESS,
    ACTION_LOGIN_FACEBOOK_BEFORE,
    ACTION_LOGIN_FACEBOOK_SUCCESS,
    ACTION_LOGIN_SYSTEM_SUCCESS,
} from './LoginActions';

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_LOGIN_FACEBOOK_SUCCESS:
            return {
                ...state,
                ...action.response,
                facebookLoggedIn: true,
            };
        case ACTION_FETCH_FACEBOOK_SUCCESS:
            return {
                ...state,
                ...action.response,
                facebookFetched: true,
            };
        case ACTION_LOGIN_FACEBOOK_BEFORE:
            return {
                ...state,
                ...action.response,
                facebookLoggedIn: true,
            };
        case ACTION_LOGIN_SYSTEM_SUCCESS:
            return {
                ...state,
                token: action.response.access_token,
                systemLoggedIn: true,
            };

        default:
            return state;
    }
};

export default combineReducers({
    data: loginReducer,
});
