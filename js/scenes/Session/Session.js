import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import propTypes from 'prop-types';
import { createFave, deleteFave } from '../../config/models';
import { formatUnixDate } from '../../redux/helpers/dataReshaper';
import { goToSpeaker } from '../../redux/helpers/navigationHelpers';
import { styles } from './styles';
class Session extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addToFave: true,
			removeFromFave: false
		};

		this.renderAddToFave = this.renderAddToFave.bind(this);
		this.renderRemoveFave = this.renderRemoveFave.bind(this);
	}

	renderAddToFave() {
		createFave(this.props.list.item.session_id);
		this.setState({
			addToFave: !this.state.addToFave,
			removeFromFave: !this.state.addToFave
		});
	}

	renderRemoveFave() {
		deleteFave(this.props.list.item.session_id);
		this.setState({
			removeFromFave: !this.state.removeFromFave
		});
	}

	render() {
		const { list, name, faves } = this.props;
		console.log('FAVES $$$$ ', faves, 'list$#$$% ', list, 'name @#%@', name);
		return (
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.location}>{list.item.location}</Text>
					<Text style={styles.title}>{list.item.title}</Text>
					<Text style={styles.time}>{formatUnixDate(list.item.start_time)}</Text>
					<Text style={styles.description}>{list.item.description}</Text>
					<TouchableHighlight onPress={() => goToSpeaker(name)}>
						<View>
							<Text style={styles.location}>Presented by:</Text>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									marginBottom: 24,
									borderBottomWidth: 1,
									borderBottomColor: 'lightgrey'
								}}
							>
								<Image source={{ uri: name.image }} style={styles.image} />
								<Text style={styles.title}> {name.name}</Text>
							</View>
						</View>
					</TouchableHighlight>

					{faves[name.session] === undefined && (
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<TouchableOpacity onPress={this.renderAddToFave} style={styles.button}>
								<Text style={{ color: 'white' }}>Add to Faves</Text>
							</TouchableOpacity>
						</View>
					)}

					{faves[name.session] && (
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<TouchableOpacity onPress={this.renderRemoveFave} style={styles.button}>
								<Text style={{ color: 'white' }}>Remove From Faves</Text>
							</TouchableOpacity>
						</View>
					)}
				</ScrollView>
			</View>
		);
	}
}

export default Session;
