import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { formatUnixDate } from './../../redux/helpers/dataReshaper';
import { goToSession } from './../../redux/helpers/navigationHelpers';
import { SectionList, AppRegistry, StyleSheet, TouchableHighlight, Text, View } from 'react-native';

const Schedule = ({ data }) => (
	<View>
		<SectionList
			sections={data}
			renderItem={({ item }) => (
				<View>
					<TouchableHighlight onPress={() => goToSession('schedule', { item })}>
						<View style={{ borderBottomWidth: 2, borderBottomColor: 'lightgrey' }}>
							<Text style={styles.title}>{item.title}</Text>
							<Text style={styles.location}>{item.location}</Text>
						</View>
					</TouchableHighlight>
				</View>
			)}
			renderSectionHeader={({ section }) => <Text style={styles.time}>{formatUnixDate(section.title)}</Text>}
			keyExtractor={(item, index) => index}
		/>
	</View>
);

export default Schedule;
