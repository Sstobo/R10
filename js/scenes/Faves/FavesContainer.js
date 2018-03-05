// import React, { Component } from "react";
// import { connect } from "react-redux";
// // import realm, { queryFaves } from "../../config/model";
// import { fetchSomeFaves } from "../../redux/modules/faves";
// import { formatSessionData } from "../../redux/helpers";

// import Faves from "./Faves";

// class FavesContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   static route = {
//     navigationBar: {
//       title: "Faves"
//     }
//   };

//   componentDidMount() {
//     this.props.dispatch(fetchSomeFaves());
//   }

//   render() {
//     // console.log(this.props.faves);
//     // console.log(this.props.sessionData);
//     return (
//       <Faves faves={this.props.faves} sessionData={this.props.sessionData} />
//     );
//   }
// }

// const mapStateToProps = state => ({
//   faves: state.faves.faves,
//   sessionData: state.schedule.sessionData
// });

// export default connect(mapStateToProps)(FavesContainer);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRealmFaves } from '../../redux/modules/faves';
import { formatFaves } from '../../config/helpers/dataReshaper';
import Faves from './Faves';

class FavesContainer extends Component {
	constructor(props) {
		super(props);
	}

	static route = {
		navigationBar: {
			title: 'Faves'
		}
	};

	componentDidMount() {
		this.props.dispatch(getRealmFaves(this.props.data));
	}

	render() {
		const { faves, data } = this.props;
		const faveSessions = formatAndFilterFaves(faves, data);

		return <Faves faves={faves} data={faveSessions} />;
	}
}

const mapStateToProps = state => ({
	isLoading: state.faves.isLoading,
	faves: state.faves.faves,
	data: state.schedule.data,
	error: state.faves.error
});

export default connect(mapStateToProps)(FavesContainer);
