const SESSION_URL =
  "https://r10app-95fea.firebaseio.com/sessions.json";
const SESSION_LOADING = "SESSION_LOADING";
const SESSION_SUCCESS = "SESSION_SUCCESS";
const SESSION_ERROR = "SESSION_ERROR";

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const sessionLoading = () => ({
  type: SESSION_LOADING
});

const getSession = data => ({
  type:SESSION_SUCCESS,
  payload: data
});

const sessionError = error => ({
  type: SESSION_ERROR,
  payload: error
});

export const fetchSession = () => dispatch => {
  dispatch(sessionLoading()); // set loading icon before fetching the data

  fetch(SESSION_URL)
    .then(res => res.json())
    .then(data => dispatch(getSession(data)))
    .catch(err => dispatch(sessionError(err)));
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
    case SESSION_LOADING: {
      return {
        ...state,
        loading: true,
        error: "" // if previously there was an error, clear the error
      };
    }
    case SESSION_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case SESSION_ERROR: {
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