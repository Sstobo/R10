import {
	formatSessionData
} from './../helpers/dataReshaper';

const SESSION_URL = 'https://r10app-95fea.firebaseio.com/sessions.json';
const SESSION_LOADING = 'SESSION_LOADING';
const SESSION_SUCCESS = 'SESSION_SUCCESS';
const SESSION_ERROR = 'SESSION_ERROR';

const sessionLoading = () => ({
	type: SESSION_LOADING
});

const getSession = data => ({
	type: SESSION_SUCCESS,
	payload: data
});

const sessionError = error => ({
	type: SESSION_ERROR,
	payload: error
});

export const fetchSession = () => dispatch => {
	dispatch(sessionLoading()); 

	fetch(SESSION_URL)
		.then(res => res.json())
		.then(data => dispatch(getSession(formatSessionData(data))))
		.catch(err => dispatch(sessionError(err)));
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
		case SESSION_LOADING:
			{
				return {
					...state,
					loading: true,
					error: '' 
				};
			}
		case SESSION_SUCCESS:
			{
				return {
					...state,
					data: action.payload,
					loading: false,
					error: ''
				};
			}
		case SESSION_ERROR:
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