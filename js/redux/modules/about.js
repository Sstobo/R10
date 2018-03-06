const CODE_OF_CONDUCT_URL =
  "https://r10app-95fea.firebaseio.com/code_of_conduct.json";
const GET_CODE_OF_CONDUCT_LOADING = "GET_CODE_OF_CONDUCT_LOADING";
const GET_CODE_OF_CONDUCT_SUCCESS = "GET_CODE_OF_CONDUCT_SUCCESS";
const GET_CODE_OF_CONDUCT_ERROR = "GET_CODE_OF_CONDUCT_ERROR";

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
  dispatch(getCodeOfConductLoading()); 

  fetch(CODE_OF_CONDUCT_URL)
    .then(res => res.json())
    .then(data => dispatch(getCodeOfConduct(data)))
    .catch(err => dispatch(getCodeOfConductError(err)));
};

export default (
  state = {
    loading: false,
    data: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_CODE_OF_CONDUCT_LOADING:
      {
        return {
          ...state,
          loading: true,
          error: "" 
        };
      }
    case GET_CODE_OF_CONDUCT_SUCCESS:
      {
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: ""
        };
      }
    case GET_CODE_OF_CONDUCT_ERROR:
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