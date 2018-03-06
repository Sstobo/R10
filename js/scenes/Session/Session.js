import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import propTypes from 'prop-types';
import { toggleFaves } from '../../redux/modules/faves';
import { createFave, deleteFave } from '../../config/models';
import { formatUnixDate } from '../../redux/helpers/dataReshaper';
import { goToSpeaker } from '../../redux/helpers/navigationHelpers';
import { styles } from './styles';
import LinearGradient from '../../components/LinearGradient';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
class Session extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { list, name, faves, toggleFaves } = this.props;

		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.location}>{list.item.location}</Text>
						{!!Object.keys(faves).includes(list.item.session_id) ? (
							<Icon
								onPress={() =>
									toggleFaves(
										list.item.session_id,
										!Object.keys(faves).includes(list.item.session_id)
									)}
								name="ios-heart"
								color="red"
								size={20}
							/>
						) : (
							<Icon
								onPress={() =>
									toggleFaves(
										list.item.session_id,
										!Object.keys(faves).includes(list.item.session_id)
									)}
								name="ios-heart"
								color="grey"
								size={20}
							/>
						)}
					</View>

					<Text style={styles.title}>{list.item.title}</Text>
					<Text style={styles.time}>{formatUnixDate(list.item.start_time)}</Text>
					<Text style={styles.description}>{list.item.description}</Text>
					<TouchableHighlight onPress={() => goToSpeaker(name)}>
						<View>
							<Text style={styles.location}>Presented by:</Text>
							<View style={styles.border}>
								<Image source={{ uri: name.image }} style={styles.image} />
								<Text style={styles.title}> {name.name}</Text>
							</View>
						</View>
					</TouchableHighlight>

					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<TouchableOpacity
							style={styles.button}
							onPress={() =>
								toggleFaves(list.item.session_id, !Object.keys(faves).includes(list.item.session_id))}
						>
							<Text style={styles.buttonText} marginTop={15} marginLeft={50} fontSize={15}>
								{!!Object.keys(faves).includes(list.item.session_id)
									? 'Remove Favorite'
									: 'Add Favorite'}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	faves: state.faves.faves
});

const mapDispatchToProps = dispatch => ({
	toggleFaves: (session_id, onOff) => {
		dispatch(toggleFaves(session_id, onOff));
	}
});

Session.propTypes = {
	faves: propTypes.object.isRequired,
	toggleFaves: propTypes.func.isRequired,
	list: propTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
