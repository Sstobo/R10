const SPEAKER_URL = 'https://r10app-95fea.firebaseio.com/speakers.json';
const SPEAKER_LOADING = 'SPEAKER_LOADING';
const SPEAKER_SUCCESS = 'SPEAKER_SUCCESS';
const SPEAKER_ERROR = 'SPEAKER_ERROR';

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const speakerLoading = () => ({
	type: SPEAKER_LOADING
});

const getspeaker = data => ({
	type: SPEAKER_SUCCESS,
	payload: data
});

const speakerError = error => ({
	type: SPEAKER_ERROR,
	payload: error
});

export const fetchSpeaker = () => dispatch => {
	dispatch(speakerLoading()); // set loading icon before fetching the data

	fetch(SPEAKER_URL)
		.then(res => res.json())
		.then(data => dispatch(getSpeaker(formatSpeakerData(data))))
		.catch(err => dispatch(speakerError(err)));
};

// REDUCER
export default (
	state = {
		// initial state
		loading: false,
		data: [],
		error: ''
	},
	action
) => {
	switch (action.type) {
		case SPEAKER_LOADING: {
			return {
				...state,
				loading: true,
				error: '' // if previously there was an error, clear the error
			};
		}
		case SPEAKER_SUCCESS: {
			return {
				...state,
				data: action.payload,
				loading: false,
				error: '' // if previously there was an error, clear the error
			};
		}
		case SPEAKER_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload // if previously there was an error, clear the error
			};
		}
		default:
			return state;
	}
};
