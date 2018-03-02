import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';

import { styles } from './styles';

// create a component
const Faves = () => (
	<View>
		<TouchableOpacity onPress={() => removeSpeaker()}>
			<Icon active name="ios-close" color="black" size={40} />
		</TouchableOpacity>
		<View>
			<Text> {speakerData.name} </Text>
			<Text> {speakerData.bio} </Text>
		</View>
	</View>
);
