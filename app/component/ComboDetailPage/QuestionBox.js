/**
 * Created by murkrow on 6/12/17.
 */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../../styles/colors';
import { defaultFonts as fonts } from '../../../styles/fonts';
import IOButtonIcon from '../commons/IOButtonIcon';

export default class QuestionBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <IOButtonIcon size={28} name="chart-pie-1" onPress={() => {}} />
                <Text style={styles.text}>{this.props.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row',
    },
    text: {
        marginLeft: 10,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN,
    },
});
