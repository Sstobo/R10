//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList, FlatList, Image, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { formatUnixDate } from './../../redux/helpers/dataReshaper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSpeaker } from './../../redux/helpers/navigationHelpers';

// create a component
const Session = ({ data, speaker, image }) => (
	<View style={styles.container}>
		<View style={styles.headWrap}>
			<Text style={styles.location}>{data.item.location}</Text>
			<Icon
				color="red"
				size={30}
				name={Platform.select({
					ios: 'ios-heart',
					android: 'md-heart'
				})}
			/>
		</View>
		<Text style={styles.title}>{data.item.title}</Text>
		<Text style={styles.date}>{formatUnixDate(data.item.start_time)}</Text>
		<Text style={styles.description}>{data.item.description}</Text>
		<Text style={styles.presented}> Presented by: </Text>

		<TouchableHighlight onPress={() => goToSpeaker(speaker)}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={styles.speaker}>{speaker.name}</Text>
				<Image style={{ width: 66, height: 66, marginLeft: 24, borderRadius: 33 }} source={{ uri: image }} />
			</View>
		</TouchableHighlight>
	</View>
);

export default Session;
