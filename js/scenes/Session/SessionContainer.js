import React, { Component } from 'react';
import Session from './Session';
import { connect } from 'react-redux';
import { fetchFaves } from '../../redux/modules/faves';
import { formatDataObject } from '../../redux/helpers/dataReshaper';
import LinearGradient from '../../components/LinearGradient';
class SessionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speaker: ''
		};
	}

	static route = {
		navigationBar: {
			title: 'Session',
			tintColor: 'white',
			renderBackground: LinearGradient
		}
	};

	componentDidMount() {
		this.props.dispatch(fetchFaves());

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
