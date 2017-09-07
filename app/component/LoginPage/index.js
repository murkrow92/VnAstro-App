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

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <TouchableHighlight
                    style={styles.box}
                    underlayColor={colors.FACEBOOK_WHITE_BLUE}
                    onPress={() => {}}
                >
                    <Text style={styles.text}>Đăng nhập Facebook</Text>
                </TouchableHighlight>
            </View>
        );
    }
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
        fontFamily: 'Arial',
    },
});

export default LoginPage;
