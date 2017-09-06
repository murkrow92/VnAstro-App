import { StackNavigator } from 'react-navigation';
import LoginPage from '../component/LoginPage/index';
import MainPage from './MainPage/index';

const AppRoute = StackNavigator(
    {
        Login: {
            screen: LoginPage,
        },
        Main: {
            screen: MainPage,
        },
    },
    {
        headerMode: 'none',
    },
);

export default AppRoute;
