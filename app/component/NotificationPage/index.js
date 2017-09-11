/**
 * Created by murkrow on 6/13/17.
 */

import React, { Component } from 'react';
import ListNotification from './ListNotification';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './NotificationActions';
import { Text, StyleSheet } from 'react-native';
import PageWrapper from '../commons/PageWrapper';
import TopNavigationBar from '../commons/TopNavigationBar';

let lodash = require('lodash');

class NotificationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Thông báo"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}
                />
                {this.renderList()}
            </PageWrapper>
        );
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchNotificationsAsync();
    }

    renderList() {
        const { navigate } = this.props.navigation;
        const { list } = this.props.notifications;
        if (!lodash.isEmpty(list)) {
            let items = getItems(list);
            return <ListNotification navigate={navigate} items={items} />;
        } else {
            return <Text style={styles.empty}>Vẫn chưa có thông báo nào</Text>;
        }
    }
}

const getItems = list => {
    let items = [];
    lodash.forEach(list, function(value, key) {
        items.push(value);
    });
    items[0].isFirst = true;
    return items;
};

const rightButton = () => {
    return {
        title: '',
    };
};

const styles = StyleSheet.create({
    empty: {
        alignItems: 'center',
        marginTop: 30,
        textAlign: 'center',
    },
});

const mapStateToProps = state => ({
    notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPage);
