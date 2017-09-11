/**
 * Created by Murkrow on 5/18/2017.
 */

import NavigationBar from 'react-native-navbar';
import { View, Platform } from 'react-native';
import React, { Component, PropTypes } from 'react';
import colors from '../../../styles/colors';
import LineDivider from './LineDivider';
import IOButtonIcon from './IOButtonIcon';

export default class TopNavigationBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        rightButton: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    render() {
        const leftButtonConfig = this.props.leftButton
            ? this.props.leftButton
            : createButton('ios-menu-outline', this.props.onPress);
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor={colors.BACKGROUND_APP}
                    title={createTitle(this.props.title)}
                    rightButton={this.props.rightButton}
                    leftButton={leftButtonConfig}
                />
                <LineDivider />
            </View>
        );
    }
}

const createTitle = title => {
    return {
        title: title,
        style: {
            fontWeight: 'normal',
            fontSize: 16,
        },
    };
};

const createButton = (icon, onPress) => {
    return <IOButtonIcon name={icon} onPress={onPress} />;
};

const styles = {
    container: {
        marginBottom: Platform.OS === 'ios' ? 20 : 0,
        flexDirection: 'column',
        height: 44,
    },
};
