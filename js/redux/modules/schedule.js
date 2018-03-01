import {formatSessionData} from './../helpers/dataReshaper'
const SCHEDULE_URL =
"https://r10app-95fea.firebaseio.com/sessions.json";
const SCHEDULE_LOADING = "SCHEDULE_LOADING";
const SCHEDULE_SUCCESS = "SCHEDULE_SUCCESS";
const SCHEDULE_ERROR = "SCHEDULE_ERROR";

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const scheduleLoading = () => ({
  type: SCHEDULE_LOADING
});

const getSchedule = data => ({
  type:SCHEDULE_SUCCESS,
  payload: data
});

const scheduleError = error => ({
  type: SCHEDULE_ERROR,
  payload: error
});

export const fetchSchedule = () => dispatch => {
  dispatch(scheduleLoading()); // set loading icon before fetching the data

  fetch(SCHEDULE_URL)
    .then(res => res.json())
    .then(data => dispatch(getSchedule(formatSessionData(data))))
    .catch(err => dispatch(scheduleError(err)));
};

// REDUCER
export default (
  state = {
    // initial state
    loading: false,
    data: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case SCHEDULE_LOADING: {
      return {
        ...state,
        loading: true,
        error: "" // if previously there was an error, clear the error
      };
    }
    case SCHEDULE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case SCHEDULE_ERROR: {
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