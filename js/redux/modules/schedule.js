import { formatSessionData } from '../helpers/dataReshaper';

const SESSIONS_URL = 'https://r10app-95fea.firebaseio.com/sessions.json';

const SESSIONS_LOADING = 'SESSIONS_LOADING';
const SESSIONS_SUCCESS = 'SESSIONS_SUCCESS';
const SESSIONS_ERROR = 'SESSIONS_ERROR';

const sessionsLoading = () => ({
	type: SESSIONS_LOADING
});

const sessionsSuccess = data => ({
	type: SESSIONS_SUCCESS,
	payload: data
});

const sessionsError = err => ({
	type: SESSIONS_ERROR,
	payload: err
});

export const getSessions = () => dispatch => {
	dispatch(sessionsLoading());

	fetch(SESSIONS_URL)
		.then(res => res.json())
		// .then(data => dispatch(sessionsSuccess(formatSessionData(data))))
		.then(data => dispatch(sessionsSuccess(data)))
		.catch(err => dispatch(sessionsError(err)));
};

//reducer

export default (
	state = {
		loading: false,
		sessionData: [],
		error: ''
	},
	action
) => {
	switch (action.type) {
		case SESSIONS_LOADING: {
			return {
				...state,
				loading: true,
				error: ''
			};
		}
		case SESSIONS_SUCCESS: {
			return {
				...state,
				loading: false,
				sessionData: action.payload,
				error: ''
			};
		}
		case SESSIONS_ERROR: {
			return {
				loading: false,
				error: action.payload
			};
		}
		default:
			return state;
	}
};
