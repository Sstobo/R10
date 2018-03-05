import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeSpeaker } from './../../redux/helpers/navigationHelpers';
import { styles } from './styles';

const Speaker = ({ speakerData }) => (
	<View style={styles.container}>
		<ScrollView>
			<TouchableOpacity onPress={() => removeSpeaker()}>
				<Icon active name="ios-close" color="black" size={40} />
			</TouchableOpacity>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Image style={styles.image} source={{ uri: speakerData.image }} />
				<Text style={styles.title}> {speakerData.name} </Text>

				<Text style={styles.description}> {speakerData.bio} </Text>
				<Text style={styles.link} onPress={() => Linking.openURL(speakerData.url)}>
					Read More on Wikipedia
				</Text>
			</View>
		</ScrollView>
	</View>
);

export default Speaker;
