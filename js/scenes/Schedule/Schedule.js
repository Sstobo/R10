import React, { Component } from 'react';
import propTypes from 'prop-types';
import { styles } from './styles';
import { formatUnixDate } from './../../redux/helpers/dataReshaper';
import { goToSession } from './../../redux/helpers/navigationHelpers';
import { SectionList, AppRegistry, StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { toggleFaves } from '../../redux/modules/faves';
import { createFave, deleteFave } from '../../config/models';
import { fetchFaves } from '../../redux/modules/faves';
class Schedule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data, toggleFaves, list, name, faves } = this.props;

		return (
			<View>
				<SectionList
					sections={data}
					renderItem={({ item }) => (
						<View>
							<TouchableHighlight underlayColor="grey" onPress={() => goToSession('schedule', { item })}>
								<View style={{ borderBottomWidth: 2, borderBottomColor: 'lightgrey' }}>
									<Text style={styles.title}>{item.title}</Text>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingRight: 12
										}}
									>
										<Text style={styles.location}>{item.location}</Text>

										{!!Object.keys(faves).includes(item.session_id) && (
											<Icon
												onPress={() =>
													toggleFaves(
														item.session_id,
														!Object.keys(faves).includes(item.session_id)
													)}
												name="ios-heart"
												color="red"
												size={20}
											/>
										)}
									</View>
								</View>
							</TouchableHighlight>
						</View>
					)}
					renderSectionHeader={({ section }) => (
						<Text style={styles.time}>{formatUnixDate(section.title)}</Text>
					)}
					keyExtractor={(item, index) => index}
				/>
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

Schedule.propTypes = {
	faves: propTypes.object.isRequired,
	toggleFaves: propTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
