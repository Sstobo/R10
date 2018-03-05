import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { formatUnixDate } from './../../redux/helpers/dataReshaper';



const Faves = ({ faves, sessionData }) => {
	
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
