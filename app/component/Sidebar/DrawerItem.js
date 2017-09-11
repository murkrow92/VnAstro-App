/**
 * Created by murkrow on 6/13/17.
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import LineDivider from '../commons/LineDivider';
import Currency from '../../helper/CurrencyHelper';
import IOButtonIcon from '../commons/IOButtonIcon';
import { defaultFonts as fonts } from '../../../styles/fonts';
import colors from '../../../styles/colors';
import { APP_MARGIN } from '../../../styles/dimens';

export default class DrawerItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor="transparent"
                onPress={this.props.onPress}
            >
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        {this.renderPrice()}
                        {this.renderButton()}
                    </View>
                    <LineDivider color={colors.GREY_E4} />
                </View>
            </TouchableHighlight>
        );
    }

    renderPrice() {
        const money = this.props.account;
        if (money) {
            return <Text style={styles.price}>{Currency.convert(money)}</Text>;
        }
    }

    renderButton() {
        const { button, onPress } = this.props;
        if (button) {
            return (
                <ButtonIcon color="#999999" icon={button} onPress={onPress} />
            );
        } else {
            return (
                <IOButtonIcon
                    color="#999999"
                    name="ios-arrow-forward-outline"
                    onPress={() => {
                        this.props.navigate('Home');
                    }}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },
    container: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        marginLeft: APP_MARGIN,
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.LABEL,
    },
    price: {
        color: colors.RED,
        fontSize: 16,
        fontFamily: fonts.ARIAL,
    },
});
