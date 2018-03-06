import React from 'react';
import { formatUnixDate } from '../../redux/helpers/dataReshaper';
import propTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Faves = ({ faves, sessionData }) => {
	const theFaves = sessionData.filter(session => faves[session.session_id] === 'true');

	return (
		<View>
			{theFaves.map((fave, index) => {
				return (
					<View key={index} style={styles.event}>
						<Text style={styles.time}>{formatUnixDate(fave.start_time)}</Text>
						<View>
							<Text style={styles.eventTitle}>{fave.title}</Text>
							<Text style={styles.location}>{fave.location}</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default Faves;
