import { combineReducers } from 'redux';
import {
    ACTION_FETCH_FACEBOOK_SUCCESS,
    ACTION_LOGIN_FACEBOOK_SUCCESS,
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
        default:
            return state;
    }
};

export default combineReducers({
    data: loginReducer,
});
