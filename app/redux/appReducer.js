import { combineReducers } from 'redux';

const appReducer = (state = {}, action) => {
    return state;
};

export default combineReducers({
    app: appReducer,
});
