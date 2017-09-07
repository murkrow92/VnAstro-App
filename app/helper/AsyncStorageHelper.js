import { AsyncStorage } from 'react-native';

const KEY_FACEBOOK_LOGIN = 'facebook_login';

export default class AsyncStorageHelper {
    static saveFacebookLogin(response) {
        AsyncStorage.setItem(KEY_FACEBOOK_LOGIN, JSON.stringify(response));
    }

    static getFacebookLogin() {
        return AsyncStorage.getItem(KEY_FACEBOOK_LOGIN);
    }
}
