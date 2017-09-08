import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

class HomePage extends React.Component {
    render() {
        return <Text>HomePage</Text>;
    }
}

const homeOptions = {
    screen: HomePage,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons color={tintColor} name="ios-home" size={24} />
        ),
    },
};

class NotificationPage extends React.Component {
    render() {
        return <Text>NotificationPage</Text>;
    }
}

const notificationOptions = {
    screen: NotificationPage,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons color={tintColor} name="earth" size={24} />
        ),
    },
};

class ProfilePage extends React.Component {
    render() {
        return <Text>ProfilePage</Text>;
    }
}

const profileOptions = {
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
};

class AccountPage extends React.Component {
    render() {
        return <Text>AccountPage</Text>;
    }
}

const accountOptions = {
    screen: AccountPage,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons color={tintColor} name="ios-cash-outline" size={24} />
        ),
    },
};

const tabBarOptions = {
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
};

const BottomNavigator = TabNavigator(
    {
        Home: homeOptions,
        Notification: notificationOptions,
        Profile: profileOptions,
        Account: accountOptions,
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: tabBarOptions,
    },
);

export default BottomNavigator;
