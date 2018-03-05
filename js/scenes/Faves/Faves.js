import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { formatUnixDate } from './../../redux/helpers/dataReshaper';

const Faves = ({ faves, sessionData }) => {
	console.log(faves);
	const favesToRender = sessionData.filter(session => faves[session.session_id] === 'true');

	return (
		<View>
			{favesToRender.map((fave, index) => {
				return (
					<View key={index} style={styles.event}>
						<Text style={styles.time}>{formatUnixDate(fave.start_time)}</Text>
						<View>
							<Text>{fave.title}</Text>
							<Text>{fave.location}</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default Faves;
