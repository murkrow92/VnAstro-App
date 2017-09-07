import { API } from '../../libs/API';
import { FACEBOOK_APP_ID } from '../../Environment';
import AsyncStorageHelper from '../../helper/AsyncStorageHelper';

export const ACTION_LOGIN_SUCCESS = 'action.com.login';
export const ACTION_FETCH_FACEBOOK_SUCCESS = 'action.fetch.facebook.success';
export const ACTION_LOGIN_FACEBOOK_SUCCESS = 'action.facebook.login.success';
export const ACTION_LOGIN_FACEBOOK_BEFORE = 'action.facebook.logged.in.before';

const api = new API();

export const loginFacebook = () => (dispatch, getState) => {
    Expo.Facebook
        .logInWithReadPermissionsAsync(FACEBOOK_APP_ID)
        .then(response => {
            console.log(response);
            if (response.type === 'success') {
                AsyncStorageHelper.saveFacebookLogin(response);
                dispatch(loginFacebookSuccess(response));
            }
        })
        .catch(error => console.log(error));
};

const loginFacebookSuccess = response => ({
    type: ACTION_LOGIN_FACEBOOK_SUCCESS,
    response,
});

export const fetchFaceook = token => (dispatch, getState) => {
    api
        .fetchFacebook(token)
        .then(response => {
            dispatch(fetchFacebookSuccess(response));
        })
        .catch(error => console.log(error));
};

const fetchFacebookSuccess = response => ({
    type: ACTION_FETCH_FACEBOOK_SUCCESS,
    response,
});

export const checkLoginFacebookStatus = () => (dispatch, getState) => {
    AsyncStorageHelper.getFacebookLogin()
        .then(response => {
            const data = JSON.parse(response);
            const currentDate = new Date().getTime();
            if (data.token && currentDate < data.expires * 1000) {
                dispatch(loginFacebookBefore(data));
            }
        })
        .catch(error => console.log(error));
};

const loginFacebookBefore = response => ({
    type: ACTION_LOGIN_FACEBOOK_BEFORE,
    response,
});
