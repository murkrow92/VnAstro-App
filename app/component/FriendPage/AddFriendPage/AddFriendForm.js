/**
 * Created by murkrow on 7/15/17.
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Keyboard } from 'react-native';
import UITextInput from '../../commons/UITextInput';
import { FontAwesome } from '@expo/vector-icons';

export default class AddFriendForm extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <UITextInput
                        onChangeText={name => {
                            this.props.onFormChange('name', name);
                        }}
                        onSubmitEditing={() => {
                            this.dayInput.textInput.focus();
                        }}
                        placeholder="Họ tên"
                        label="Họ tên"
                    />
                    <View style={styles.datetimeContainer}>
                        <UITextInput
                            onSubmitEditing={() => {
                                this.monthInput.textInput.focus();
                            }}
                            ref={input => {
                                this.dayInput = input;
                            }}
                            onChangeText={day => {
                                this.props.onFormChange('bday', day);
                            }}
                            returnKeyType="next"
                            placeholder="Ngày"
                            label="Ngày"
                            style={styles.datetimeComponent}
                            inline={true}
                        />
                        <UITextInput
                            onChangeText={month => {
                                this.props.onFormChange('bmonth', month);
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
                                this.props.onFormChange('byear', year);
                            }}
                            ref={input => {
                                this.yearInput = input;
                            }}
                            onSubmitEditing={() => {
                                this.hourInput.textInput.focus();
                            }}
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
                                this.props.onFormChange('bhour', hour);
                            }}
                            ref={input => {
                                this.hourInput = input;
                            }}
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
                                this.props.onFormChange('bminute', minute);
                            }}
                            ref={input => {
                                this.minuteInput = input;
                            }}
                            onSubmitEditing={() => {
                                this.emailInput.textInput.focus();
                            }}
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
                            this.props.onFormChange('email', email);
                        }}
                        ref={input => {
                            this.emailInput = input;
                        }}
                        onSubmitEditing={() => {
                            this.phoneInput.textInput.focus();
                        }}
                        keyboardType="email-address"
                        returnKeyType="next"
                        placeholder="Email"
                        label="Email"
                    />
                    <UITextInput
                        onChangeText={phone => {
                            this.props.onFormChange('phone', phone);
                        }}
                        ref={input => {
                            this.phoneInput = input;
                        }}
                        onSubmitEditing={() => {
                            Keyboard.dismiss();
                            this.props.onSubmit();
                        }}
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
    iconContainer: {
        paddingBottom: 8,
        alignItems: 'flex-end',
        marginRight: 10,
        flexDirection: 'row',
    },
    label: {},
});
