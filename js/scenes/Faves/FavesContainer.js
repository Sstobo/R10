import React, { Component } from 'react';
import { fetchFaves } from '../../redux/modules/faves';
import { AppRegistry, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { formatSessionData } from '../../redux/helpers/dataReshaper';
import { connect } from 'react-redux';
import Faves from './Faves';

// create a component
class FavesContainer extends Component {
	constructor() {
		super();
	}
	static route = {
		navigationBar: {
			title: 'Faves',
			tintColor: 'grey'
		}
	};
	componentDidMount() {
		this.props.dispatch(fetchFaves());
	}

	render() {
		return <Faves faves={this.props.faves} sessionData={this.props.sessionData} />;
	}
}

const mapStateToProps = state => ({
	faves: state.faves.faves,
	sessionData: state.schedule.sessionData
});

export default connect(mapStateToProps)(FavesContainer);
// export default FavesContainer;
