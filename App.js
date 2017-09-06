import React from 'react';
import configureStore from './app/redux/configureStore';
import { Provider } from 'react-redux';
import AppRoute from './app/route/AppRoute';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRoute />
            </Provider>
        );
    }
}
