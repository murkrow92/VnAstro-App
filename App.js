import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './app/redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Text>Hello World</Text>
            </Provider>
        );
    }
}
