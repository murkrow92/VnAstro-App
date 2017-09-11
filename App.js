import React from 'react';
import configureStore from './app/redux/configureStore';
import { Provider } from 'react-redux';
import AppRoute from './app/route/AppRoute';
import { Font, AppLoading } from 'expo';
import fonts from './styles/fonts';
import Expo from 'expo';
import { Platform } from 'react-native';

const store = configureStore();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    render() {
        const marginTop =
            Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight;

        if (this.state.fontLoaded) {
            return (
                <Provider store={store}>
                    <AppRoute style={{ marginTop: marginTop }} />
                </Provider>
            );
        } else {
            return <AppLoading />;
        }
    }

    componentDidMount() {
        this.loadFont();
    }

    async loadFont() {
        await Font.loadAsync(fonts);
        this.setState({
            fontLoaded: true,
        });
    }
}
