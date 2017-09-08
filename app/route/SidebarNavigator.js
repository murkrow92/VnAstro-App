import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Sidebar from '../component/Sidebar/index';
import BottomNavigator from './BottomNavigator';

const SidebarNavigator = DrawerNavigator(
    {
        Bottom: { screen: BottomNavigator },
    },
    {
        contentComponent: props => <Sidebar content={props} />,
    },
);

export default SidebarNavigator;
