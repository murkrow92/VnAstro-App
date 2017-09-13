import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Sidebar from '../component/Sidebar/index';
import BottomNavigator from './BottomNavigator';
import DetailPage from '../component/ComboDetailPage/index';
import FriendPage from '../component/FriendPage/index';
import AddFriendPage from '../component/FriendPage/AddFriendPage/index';

const SidebarNavigator = DrawerNavigator(
    {
        Bottom: { screen: BottomNavigator },
        Detail: { screen: DetailPage },
        Friend: { screen: FriendPage },
        AddFriend: { screen: AddFriendPage },
    },
    {
        contentComponent: props => <Sidebar content={props} />,
    },
);

export default SidebarNavigator;
