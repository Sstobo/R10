import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeSpeaker } from './../../redux/helpers/navigationHelpers';
import { styles } from './styles';

const Speaker = ({ speakerData }) => (
	<View style={styles.container}>
		<ScrollView>
			<View style={{ backgroundColor: 'black', height: 1000, padding: 8 }}>
				<TouchableOpacity onPress={() => removeSpeaker()}>
					<Icon active name="ios-close" color="white" size={40} />
				</TouchableOpacity>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={{
							padding: 8,
							backgroundColor: 'white',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 6
						}}
					>
						<Image style={styles.image} source={{ uri: speakerData.image }} />
						<Text style={styles.title}> {speakerData.name} </Text>
						<Text style={styles.description}> {speakerData.bio} </Text>
						<TouchableOpacity onPress={() => Linking.openURL(speakerData.url)} style={styles.button}>
							<Text style={{ color: 'white' }}>Read More on Wikipedia</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	</View>
);

export default Speaker;
