import { API } from '../../libs/API';
import { FACEBOOK_APP_ID, IS_PRODUCTION } from '../../Environment';

export const ACTION_LOGIN_SUCCESS = 'action.com.login';
export const ACTION_FETCH_FACEBOOK_SUCCESS = 'action.fetch.facebook.success';

const api = new API();

export const loginFacebook = () => (dispatch, getState) => {
    Expo.Facebook
        .logInWithReadPermissionsAsync(FACEBOOK_APP_ID)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
};
