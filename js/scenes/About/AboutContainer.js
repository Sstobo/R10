//import liraries
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { AppRegistry, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchCodeOfConduct } from './../../redux/modules/about';
import About from './About';
// this file creates and shares the props
import { connect } from 'react-redux';
// create a component

class AboutContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchCodeOfConduct());
	}

	static route = {
		navigationBar: {
			title: 'About',
			tintColor: 'grey'
		}
	};

	render() {
		if (this.props.loading) {
			return <ActivityIndicator animating={true} size="large" color="black" style={{ marginTop: 44 }} />;
		} else {
			return <About data={this.props.data} />;
		}
	}
}

const mapStateToProps = state => ({
	loading: state.about.loading,
	data: state.about.data
});

export default connect(mapStateToProps)(AboutContainer);
