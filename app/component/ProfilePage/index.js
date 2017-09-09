/**
 * Created by Murkrow on 5/31/2017.
 */

import React, { Component } from 'react';
import { Image, Text, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './ProfileActions';
import PageWrapper from '../commons/PageWrapper';
import { defaultFonts } from '../../../styles/fonts';
import colors from '../../../styles/colors';
import ButtonLabel from '../commons/ButtonLabel';
import ProfileForm from './ProfileForm';
import TopNavigationBar from '../commons/TopNavigationBar';
import BlankProfile from '../../../styles/images/blank_profile.png';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { profile, login } = this.props;
        const userProfile = { ...login.data, ...profile.data };
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Cá nhân"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(() => this.doSaveProfile())}
                />
                <Image style={styles.avatar} source={this.getPicture()} />
                <Text style={styles.username}>
                    {userProfile.fullname || userProfile.name}
                </Text>
                <Text style={styles.astroName}>{userProfile.astroname}</Text>
                <ProfileForm
                    onFormChange={(key, value) => this.onFormChange(key, value)}
                    obSubmit={() => this.doSaveProfile()}
                    profile={userProfile}
                />
            </PageWrapper>
        );
    }

    getPicture() {
        const { profile, login } = this.props;
        const userProfile = { ...login.data, ...profile.data };
        let picture = BlankProfile;
        if (typeof userProfile.picture === 'object') {
            picture = {
                uri: userProfile.picture.data.url,
            };
        }
        return picture;
    }

    onFormChange(key, value) {
        const { actions } = this.props;
        actions.onFormChange(key, value);
    }

    doSaveProfile() {
        const { profile, login } = this.props;
        const userProfile = { ...login.data, ...profile.data };
        const { actions } = this.props;
        Keyboard.dismiss();
        actions.saveProfileAsync(userProfile);
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchUserProfileAsync();
    }
}

const rightButton = onSubmit => {
    return <ButtonLabel onPress={onSubmit} label="Lưu lại" />;
};

const styles = {
    avatar: {
        marginTop: 50,
        alignSelf: 'center',
        borderWidth: 1,
        width: 76,
        height: 76,
        borderRadius: 38,
    },
    username: {
        fontFamily: defaultFonts.OPEN_SAN,
        color: colors.BLACK,
        marginTop: 8,
        alignSelf: 'center',
        fontSize: 13,
    },
    astroName: {
        fontFamily: defaultFonts.OPEN_SAN,
        color: 'black',
        marginTop: 8,
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 25,
    },
};

const mapStateToProps = state => ({
    profile: state.profile,
    login: state.login,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
