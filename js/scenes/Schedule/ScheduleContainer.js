//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRegistry, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Schedule from './Schedule';
import { fetchSchedule } from './../../redux/modules/schedule';

class ScheduleContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchSchedule());
	}
	static route = {
		navigationBar: {
			title: 'Schedule',
			tintColor: 'grey'
		}
	};

	render() {
		if (this.props.loading) {
			return <ActivityIndicator animating={true} size="large" color="black" style={{ marginTop: 44 }} />;
		} else {
			return <Schedule data={this.props.data} />;
		}
	}
}

//make this component available to the app
const mapStateToProps = state => ({
	loading: state.schedule.loading,
	data: state.schedule.data
});

export default connect(mapStateToProps)(ScheduleContainer);
