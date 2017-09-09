import { AsyncStorage } from 'react-native';

const KEY_FACEBOOK_LOGIN = 'facebook_login';
const KEY_PROFILE = 'key.user.profile';

export default class AsyncStorageHelper {
    static saveFacebookLogin(response) {
        AsyncStorage.setItem(KEY_FACEBOOK_LOGIN, JSON.stringify(response));
    }

    static getFacebookLogin() {
        return AsyncStorage.getItem(KEY_FACEBOOK_LOGIN);
    }

    static saveUserProfile(data) {
        AsyncStorage.setItem(KEY_PROFILE, JSON.stringify(data));
    }

    static getUserProfile() {
        return AsyncStorage.getItem(KEY_PROFILE);
    }
}
