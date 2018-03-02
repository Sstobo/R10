import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeSpeaker } from './../../redux/helpers/navigationHelpers';

const Speaker = ({ speakerData }) => (
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

export default Speaker;
