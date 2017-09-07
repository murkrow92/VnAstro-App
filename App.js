import React from 'react';
import configureStore from './app/redux/configureStore';
import { Provider } from 'react-redux';
import AppRoute from './app/route/AppRoute';
import { Font, AppLoading } from 'expo';
import fonts from './styles/fonts';

const store = configureStore();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Provider store={store}>
                    <AppRoute />
                </Provider>
            );
        } else {
            return <AppLoading />;
        }
    }

    componentDidMount() {
        this.loadFont().then(this.setState({ fontLoaded: true }));
    }

    async loadFont() {
        await Font.loadAsync(fonts);
    }

}
