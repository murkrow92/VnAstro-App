/**
 * Created by murkrow on 6/13/17.
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListFriend from './ListFriend';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './FriendActions';
import lodash from 'lodash';
import PageWrapper from '../commons/PageWrapper';
import TopNavigationBar from '../commons/TopNavigationBar';
import IOButtonIcon from '../commons/IOButtonIcon';
import { APP_MARGIN } from '../../../styles/dimens';
import * as StringHelper from '../../helper/StringHelper';
import SearchBox from '../commons/SearchBox';

class FriendPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywordSearch: '',
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { friend } = this.props.friend;
        return (
            <PageWrapper>
                <TopNavigationBar
                    leftButton={
                        <IOButtonIcon
                            name="md-arrow-back"
                            onPress={() => navigate('Bottom')}
                        />
                    }
                    title="Bạn bè"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(navigate)}
                />
                <View style={styles.searchBoxContainer}>
                    <SearchBox
                        text={this.state.keywordSearch}
                        onChangeText={text => this.search(text)}
                    />
                </View>
                {this.renderList(friend, navigate)}
            </PageWrapper>
        );
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchFriendAsync();
    }

    renderList(friends, navigate) {
        if (!lodash.isEmpty(friends)) {
            let items = this.getItems(friends);
            if (!lodash.isEmpty(items)) {
                return <ListFriend navigate={navigate} items={items} />;
            }
        }
    }

    getItems(friends) {
        const keyword = this.state.keywordSearch;
        let items = [];
        lodash.forEach(friends, function(value, key) {
            let lowerCaseName = value.name.toLowerCase();
            let upperCaseName = value.name.toUpperCase();
            let standardName = StringHelper.replaceVietnamese(value.name);

            if (keyword === '') {
                items.push(value);
            } else if (
                lowerCaseName.includes(keyword) ||
                upperCaseName.includes(keyword) ||
                standardName.includes(keyword)
            ) {
                items.push(value);
            }
        });
        return items;
    }

    search(text) {
        this.setState({
            keywordSearch: text,
        });
    }
}

const rightButton = navigate => {
    return (
        <IOButtonIcon
            size={20}
            name="ios-person-add-outline"
            onPress={() => navigate('AddFriend')}
        />
    );
};

const styles = StyleSheet.create({
    searchBoxContainer: {
        marginLeft: APP_MARGIN,
        marginRight: APP_MARGIN,
    },
});

const mapStateToProps = state => ({
    friend: state.friend,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendPage);
