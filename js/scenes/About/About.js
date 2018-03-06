import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, Image, ScrollView, LayoutAnimation, Animated, TouchableOpacity } from 'react-native';

import { styles } from './styles';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false
		};
		this._onPress = this._onPress.bind(this);
	}
	_onPress() {
		LayoutAnimation.easeInEaseOut();
		this.setState({ opened: !this.state.opened });
	}

	render() {
		const { title, description } = this.props;
		return (
			<TouchableOpacity onPress={this._onPress}>
				<Animated.Text style={styles.menuTitlesAbout}>
					{this.state.opened ? '-' : '+'}
					{title}
				</Animated.Text>
				{this.state.opened && <Text style={styles.paragraphText}>{description}</Text>}
			</TouchableOpacity>
		);
	}
}
export default About;
