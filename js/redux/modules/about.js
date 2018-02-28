const CODE_OF_CONDUCT_URL =
  "https://r10app-95fea.firebaseio.com/code_of_conduct.json";
const GET_CODE_OF_CONDUCT_LOADING = "GET_CODE_OF_CONDUCT_LOADING";
const GET_CODE_OF_CONDUCT_SUCCESS = "GET_CODE_OF_CONDUCT_SUCCESS";
const GET_CODE_OF_CONDUCT_ERROR = "GET_CODE_OF_CONDUCT_ERROR";

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const getCodeOfConductLoading = () => ({
  type: GET_CODE_OF_CONDUCT_LOADING
});

const getCodeOfConduct = data => ({
  type: GET_CODE_OF_CONDUCT_SUCCESS,
  payload: data
});

const getCodeOfConductError = error => ({
  type: GET_CODE_OF_CONDUCT_ERROR,
  payload: error
});

export const fetchCodeOfConduct = () => dispatch => {
  dispatch(getCodeOfConductLoading()); // set loading icon before fetching the data

  fetch(CODE_OF_CONDUCT_URL)
    .then(res => res.json())
    .then(data => dispatch(getCodeOfConduct(data)))
    .catch(err => dispatch(getCodeOfConductError(err)));
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
    case GET_CODE_OF_CONDUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_CODE_OF_CONDUCT_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_CODE_OF_CONDUCT_ERROR: {
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