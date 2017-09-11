import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './AstroActions';
import { ScrollView, StyleSheet, View } from 'react-native';
import TopNavigationBar from '../commons/TopNavigationBar';
import ListAstroObject from './ListAstroObject';
import PageWrapper from '../commons/PageWrapper';
import IOButtonIcon from '../commons/IOButtonIcon';

class AstroPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { astro } = this.props;
        const { navigate } = this.props.navigation;
        let title = 'Bầu trời lúc này';
        return (
            <PageWrapper>
                <TopNavigationBar
                    title={title}
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollview}
                >
                    {this.renderList(astro.planet, navigate)}
                </ScrollView>
            </PageWrapper>
        );
    }

    renderList(planet, navigate) {
        if (planet.hasOwnProperty('Sun')) {
            let items = getItems(planet);
            return <ListAstroObject navigate={navigate} items={items} />;
        }
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchAstroAtDateAsync(new Date());
    }
}

const getItems = planet => {
    return [
        planet.Ascendant,
        planet.Sun,
        planet.Moon,
        planet.PurpleAir,
        planet.Mercury,
        planet.Mars,
        planet.Venus,
        planet.Jupiter,
        planet.Saturn,
        planet.Uranus,
        planet.Neptune,
        planet.Pluto,
        planet.MC,
        planet['true Node'],
        planet.SouthNode,
        planet.Chiron,
    ];
};

const rightButton = () => {
    return <IOButtonIcon name="ios-pie" onPress={() => {}} />;
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
});

const mapStateToProps = state => ({
    astro: state.astro,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AstroPage);
