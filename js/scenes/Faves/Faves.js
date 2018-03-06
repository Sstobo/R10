import React from 'react';
import { formatUnixDate } from '../../redux/helpers/dataReshaper';
import propTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
							<View style={styles.heartWrap}>
								<Text style={styles.location}>{fave.location}</Text>
								<Icon name="ios-heart" color="red" size={20} />
							</View>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default Faves;
