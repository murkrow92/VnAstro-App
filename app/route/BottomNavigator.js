import React from 'react';
import { Text } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

class HomePage extends React.Component {
    render() {
        return <Text>HomePage</Text>;
    }
}

class NotificationPage extends React.Component {
    render() {
        return <Text>NotificationPage</Text>;
    }
}
class ProfilePage extends React.Component {
    render() {
        return <Text>ProfilePage</Text>;
    }
}

class AccountPage extends React.Component {
    render() {
        return <Text>AccountPage</Text>;
    }
}

const BottomNavigator = TabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons color={tintColor} name="ios-home" size={24} />
                ),
            },
        },
        Notification: {
            screen: NotificationPage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons
                        color={tintColor}
                        name="earth"
                        size={24}
                    />
                ),
            },
        },
        Profile: {
            screen: ProfilePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons
                        color={tintColor}
                        name="account"
                        size={24}
                    />
                ),
            },
        },
        Account: {
            screen: AccountPage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        color={tintColor}
                        name="ios-cash-outline"
                        size={24}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: colors.BLUE,
            inactiveTintColor: colors.DARKER_GREY,
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
            swipeEnabled: true,
            showLabel: false,
            showIcon: true,
            style: {
                borderWidth: 1,
                backgroundColor: 'white',
                height: 48,
                borderColor: colors.GREY_E4,
            },
        },
    },
);

export default BottomNavigator;
