// //import liraries
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Session from './Session';
// import { fetchSession } from './../../redux/modules/session';
// import { AppRegistry, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import { formatDataObject } from './../../redux/helpers/dataReshaper';

// class SessionContainer extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			speaker: '',
// 			image: ''
// 		};
// 	}
// 	static route = {
// 		navigationBar: {
// 			title: 'Session',
// 			tintColor: 'grey'
// 		}
// 	};

// 	componentDidMount() {
// 		let speakerId = this.props.route.params.sessionData.item.speaker;
// 		fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&"equalTo"="${speakerId}"`)
// 			.then(res => res.json())
// 			.then(name => {
// 				let thisPerson = formatDataObject(name);
// 				this.setState({ speaker: thisPerson, image: thisPerson.image });
// 			})
// 			.catch(err => err);
// 	}

// 	render() {
// 		if (this.props.loading) {
// 			return <ActivityIndicator animating={true} size="large" color="black" style={{ marginTop: 44 }} />;
// 		} else {
// 			return (
// 				<Session
// 					data={this.props.route.params.sessionData}
// 					speaker={this.state.speaker}
// 					image={this.state.image}
// 				/>
// 			);
// 		}
// 	}
// }

import React, { Component } from 'react';
import Session from './Session';
import { connect } from 'react-redux';
import { letsFetchSomeFaves } from '../../redux/modules/faves';
import { formatDataObject } from '../../redux/helpers/dataReshaper';

class SessionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speaker: ''
		};
	}

	static route = {
		navigationBar: {
			title: 'Session'
		}
	};

	componentDidMount() {
		this.props.dispatch(letsFetchSomeFaves());

		let speakerId = this.props.route.params.sessionData.item.speaker;
		fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`)
			.then(res => res.json())
			.then(name => {
				let thisName = formatDataObject(name);
				this.setState({ speaker: thisName });
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Session list={this.props.route.params.sessionData} name={this.state.speaker} faves={this.props.faves} />
		);
	}
}

const mapStateToProps = state => ({
	faves: state.faves.faves
});

export default connect(mapStateToProps)(SessionContainer);
