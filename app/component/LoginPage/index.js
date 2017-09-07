import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
} from 'react-native';
import Logo from '../../../styles/images/vnastro.png';
import colors from '../../../styles/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './LoginActions';

class LoginPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <TouchableHighlight
                    style={styles.box}
                    underlayColor={colors.FACEBOOK_WHITE_BLUE}
                    onPress={() => {
                        this.login();
                    }}
                >
                    <Text style={styles.text}>Đăng nhập Facebook</Text>
                </TouchableHighlight>
            </View>
        );
    }

    login() {
        const { actions } = this.props;
        actions.loginFacebook();
    }

    componentDidMount() {}
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#BDC3C7',
    },
    logo: {
        marginTop: 80,
        marginBottom: 70,
    },
    box: {
        width: '70%',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.GREY_E4,
        paddingTop: 14,
        paddingBottom: 14,
    },
    text: {
        color: colors.BLACK,
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Bold',
    },
});

const mapStateToProps = state => ({
    login: state.login,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
