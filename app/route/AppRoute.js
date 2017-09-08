import { StackNavigator } from 'react-navigation';
import LoginPage from '../component/LoginPage/index';
import SidebarNavigator from "./SidebarNavigator";

const AppRoute = StackNavigator(
    {
        Login: {
            screen: LoginPage,
        },
        Main: {
            screen: SidebarNavigator,
        },
    },
    {
        headerMode: 'none',
    },
);

export default AppRoute;
