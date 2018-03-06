import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSessions } from '../../redux/modules/schedule';
import { formatSessionData } from '../../redux/helpers/dataReshaper';
import LinearGradient from '../../components/LinearGradient';
import Schedule from './Schedule';
import { fetchFaves } from '../../redux/modules/faves';
class ScheduleContainer extends Component {
	constructor(props) {
		super(props);
	}

	static route = {
		navigationBar: {
			title: 'Schedule',
			tintColor: 'white',
			renderBackground: LinearGradient
		}
	};

	componentDidMount() {
		this.props.dispatch(getSessions());
		this.props.dispatch(fetchFaves());
	}

	render() {
		const { loading, sessionData, faves } = this.props;
		return <Schedule data={formatSessionData(sessionData)} />;
	}
}

const mapStateToProps = state => ({
	loading: state.schedule.loading,
	sessionData: state.schedule.sessionData
});

export default connect(mapStateToProps)(ScheduleContainer);
