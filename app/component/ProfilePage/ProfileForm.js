/**
 * Created by Murkrow on 6/1/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import UITextInput from '../commons/UITextInput';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../../styles/colors';

export default class ProfileForm extends Component {
    render() {
        const { onSubmit, onFormChange, profile } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.datetimeContainer}>
                        <UITextInput
                            onSubmitEditing={() => {
                                this.monthInput.textInput.focus();
                            }}
                            value={profile.day}
                            onChangeText={day => {
                                onFormChange('day', day);
                            }}
                            returnKeyType="next"
                            placeholder="Ngày"
                            label="Ngày"
                            style={styles.datetimeComponent}
                            inline={true}
                        />
                        <UITextInput
                            value={profile.month}
                            onChangeText={month => {
                                onFormChange('month', month);
                            }}
                            ref={input => {
                                this.monthInput = input;
                            }}
                            onSubmitEditing={() => {
                                this.yearInput.textInput.focus();
                            }}
                            returnKeyType="next"
                            placeholder="Tháng"
                            label="Tháng"
                            style={styles.datetimeComponent}
                            inline={true}
                        />
                        <UITextInput
                            onChangeText={year => {
                                onFormChange('year', year);
                            }}
                            ref={input => {
                                this.yearInput = input;
                            }}
                            onSubmitEditing={() => {
                                this.hourInput.textInput.focus();
                            }}
                            value={profile.year}
                            returnKeyType="next"
                            placeholder="Năm"
                            label="Năm"
                            style={styles.datetimeComponent}
                            inline={true}
                        />
                        <View style={styles.iconContainer}>
                            <FontAwesome
                                color={colors.BLUE}
                                style={styles.label}
                                size={20}
                                name="birthday-cake"
                            />
                        </View>
                        <UITextInput
                            onChangeText={hour => {
                                onFormChange('hour', hour);
                            }}
                            ref={input => {
                                this.hourInput = input;
                            }}
                            value={profile.hour}
                            onSubmitEditing={() => {
                                this.minuteInput.textInput.focus();
                            }}
                            returnKeyType="next"
                            placeholder="Giờ"
                            label="Giờ"
                            inline={true}
                        />
                        <UITextInput
                            onChangeText={minute => {
                                onFormChange('minute', minute);
                            }}
                            ref={input => {
                                this.minuteInput = input;
                            }}
                            onSubmitEditing={() => {
                                this.emailInput.textInput.focus();
                            }}
                            value={profile.minute}
                            returnKeyType="next"
                            isLast={true}
                            placeholder="Phút"
                            label="Phút"
                            inline={true}
                        />
                    </View>
                    <View style={styles.space} />
                    <UITextInput
                        onChangeText={email => {
                            onFormChange('email', email);
                        }}
                        ref={input => {
                            this.emailInput = input;
                        }}
                        value={profile.email}
                        onSubmitEditing={() => {
                            this.phoneInput.textInput.focus();
                        }}
                        keyboardType="email-address"
                        returnKeyType="next"
                        placeholder="Email"
                        label="Email"
                    />
                    <View style={styles.space} />
                    <UITextInput
                        onChangeText={phone => {
                            onFormChange('phone', phone);
                        }}
                        ref={input => {
                            this.phoneInput = input;
                        }}
                        onSubmitEditing={onSubmit}
                        value={profile.mobile_phone}
                        placeholder="Số điện thoại"
                        label="Số điện thoại"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
    },
    datetimeContainer: {
        flexDirection: 'row',
    },
    datetimeComponent: {
        flex: 1,
    },
    space: {
        height: 25,
    },
    iconContainer: {
        paddingBottom: 8,
        alignItems: 'flex-end',
        marginRight: 10,
        flexDirection: 'row',
    },
    label: {},
});
