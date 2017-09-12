import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Sidebar from '../component/Sidebar/index';
import BottomNavigator from './BottomNavigator';
import DetailPage from '../component/ComboDetailPage/index';

const SidebarNavigator = DrawerNavigator(
    {
        Bottom: { screen: BottomNavigator },
        Detail: { screen: DetailPage },
    },
    {
        contentComponent: props => <Sidebar content={props} />,
    },
);

export default SidebarNavigator;
