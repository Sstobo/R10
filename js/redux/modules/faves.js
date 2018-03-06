	payload: faves
});

export const toggleFaves = (session_id, onOff) => ({
	type: TOGGLE_FAVES,
	session_id: session_id,
	onOff: onOff
});

export const fetchFaves = () => dispatch => {
	const data = queryFaves();
	const faves = {};
	data.map((item, key) => (faves[item.id] = 'true'));
	dispatch(getFaves(faves));
};

export default (
	state = {
		faves: {},
		loading: true,
		error: ''
	},
	action
) => {
	switch (action.type) {
		case GET_FAVES: {
			return {
				...state,
				faves: action.payload
			};
		}
		case TOGGLE_FAVES: {
			if (action.onOrOff) createFave(action.session_id);
			else deleteFave(action.session_id);
			const data = queryFaves();
			const faves = {};
			data.map((item, key) => (faves[item.id] = 'true'));
			return { ...state, loading: false, faves, error: '' };
		}

		default:
			return state;
	}
};