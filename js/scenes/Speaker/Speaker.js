import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking, ScrollView, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeSpeaker } from './../../redux/helpers/navigationHelpers';
import { styles } from './styles';
import GradientButton from '../../components/GradientButton';

const Speaker = ({ speakerData }) => (
	<View style={styles.container}>
		<StatusBar barStyle="light-content" backgroundColor="black" />
		<ScrollView>
			<View style={{ backgroundColor: 'black', height: 1000, padding: 8, paddingTop: 22 }}>
				<View style={styles.headerContainer}>
					<TouchableOpacity underlayColor="grey" onPress={() => removeSpeaker()}>
						<Icon active name="ios-close" color="white" size={40} />
					</TouchableOpacity>
					<Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}> About The Speaker</Text>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={{
							padding: 12,
							backgroundColor: 'white',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 6
						}}
					>
						<Image style={styles.image} source={{ uri: speakerData.image }} />
						<Text style={styles.title}> {speakerData.name} </Text>
						<Text style={styles.description}> {speakerData.bio} </Text>
						<GradientButton
							marginTop={18}
							marginLeft={4}
							fontSize={14}
							onPress={() => Linking.openURL(speakerData.url)}
							buttonText={'Read More on Wikipedia'}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	</View>
);

export default Speaker;
