import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import ProfilePage from '../component/ProfilePage/index';
import AstroPage from '../component/AstroPage/index';
import NotificationPage from '../component/NotificationPage/index';
import TransactionPage from '../component/TransactionPage/index';

const homeOptions = {
    screen: AstroPage,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons color={tintColor} name="ios-home" size={24} />
        ),
    },
    params: {
        date: new Date().getTime(),
    },
};

const notificationOptions = {
    screen: NotificationPage,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons color={tintColor} name="earth" size={24} />
        ),
    },
};

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

const transactionOptions = {
    screen: TransactionPage,
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
        Transaction: transactionOptions,
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: tabBarOptions,
    },
);

export default BottomNavigator;
