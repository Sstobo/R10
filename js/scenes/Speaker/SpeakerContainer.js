import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRegistry, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchSpeaker } from './../../redux/modules/speaker';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchSpeaker());
	}
	constructor() {
		super();
	}

	render() {
		console.log(this.props.route.params.speakerData);
		return <Speaker speakerData={this.props.route.params.speakerData} />;
	}
}

const mapStateToProps = state => ({
	loading: state.speaker.loading,
	data: state.speaker.data
});

export default connect(mapStateToProps)(SpeakerContainer);
