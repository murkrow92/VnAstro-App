/**
 * Created by Murkrow on 6/9/2017.
 */

import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import colors from '../../../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { APP_MARGIN, ICON_SIZE } from '../../../styles/dimens';

export default class IOButtonIcon extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        size: PropTypes.number,
        color: PropTypes.string,
        width: PropTypes.number,
    };

    render() {
        let size = this.props.size ? this.props.size : ICON_SIZE;
        let color = this.props.color ? this.props.color : colors.BLUE;
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress()}
                style={styles.button}
                underlayColor="transparent"
            >
                <View style={styles.label}>
                    <Ionicons
                        name={this.props.name}
                        size={size}
                        color={color}
                    />
                </View>
            </TouchableHighlight>
        );
    }
}
const boxWidth = (ICON_SIZE * 0.5 + APP_MARGIN) * 2;

const styles = StyleSheet.create({
    button: {
        width: boxWidth,
        justifyContent: 'center',
    },
    label: {
        alignSelf: 'center',
    },
});
