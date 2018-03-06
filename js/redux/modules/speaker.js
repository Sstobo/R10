const SPEAKER_URL = 'https://r10app-95fea.firebaseio.com/speakers.json';
const SPEAKER_LOADING = 'SPEAKER_LOADING';
const SPEAKER_SUCCESS = 'SPEAKER_SUCCESS';
const SPEAKER_ERROR = 'SPEAKER_ERROR';


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
	dispatch(speakerLoading());

	fetch(SPEAKER_URL)
		.then(res => res.json())
		.then(data => dispatch(getSpeaker(formatSpeakerData(data))))
		.catch(err => dispatch(speakerError(err)));
};


export default (
	state = {

		loading: false,
		data: [],
		error: ''
	},
	action
) => {
	switch (action.type) {
		case SPEAKER_LOADING:
			{
				return {
					...state,
					loading: true,
					error: ''
				};
			}
		case SPEAKER_SUCCESS:
			{
				return {
					...state,
					data: action.payload,
					loading: false,
					error: ''
				};
			}
		case SPEAKER_ERROR:
			{
				return {
					...state,
					loading: false,
					error: action.payload
				};
			}
		default:
			return state;
	}
};