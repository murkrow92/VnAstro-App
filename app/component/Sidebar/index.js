/**
 * Created by murkrow on 6/13/17.
 */

import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import AccountBox from './AccountBox';
import DrawerItem from './DrawerItem';
import DrawerTitle from './DrawerTitle';
import { bindActionCreators } from 'redux';
import * as actions from './SideBarAction';
import { connect } from 'react-redux';
import BlankProfile from '../../../styles/images/blank_profile.png';
import { mapRole } from '../../libs/map';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { bank, profile } = this.props;
        const { navigate } = this.props.content.navigation;
        const role = mapRole(profile.data.user_role);

        return (
            <View style={styles.container}>
                <AccountBox
                    role={role}
                    picture={this.getPicture()}
                    name={profile.data.fullname}
                    navigate={navigate}
                />
                <DrawerItem
                    onPress={() => navigate('Bank')}
                    account={bank.transaction.money}
                    title="Ngân quỹ"
                />
                <DrawerItem
                    onPress={() => navigate('Chat')}
                    button="ios-add-outline"
                    title="Tạo câu hỏi"
                />
                <DrawerItem
                    onPress={() => navigate('Conversation')}
                    title="Danh sách câu hỏi"
                />
                <DrawerTitle onPress={() => {}} title="Bản đồ sao" />
                <DrawerItem onPress={() => navigate('Chart')} title="Của tôi" />
                <DrawerItem
                    onPress={() => navigate('Friend')}
                    title="Của bạn bè"
                />
            </View>
        );
    }

    getPicture() {
        const { login } = this.props;
        let picture = BlankProfile;
        if (typeof login.data.picture === 'object') {
            picture = {
                uri: login.data.picture.data.url,
            };
        }
        return picture;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 24 : 0,
    },
});

const mapStateToProps = state => ({
    sidebar: state.sidebar,
    bank: state.bank,
    profile: state.profile,
    login: state.login,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
