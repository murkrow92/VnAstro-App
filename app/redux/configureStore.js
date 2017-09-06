import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default (configureStore = () =>
    createStore(rootReducer, undefined, compose(applyMiddleware(thunk))));
