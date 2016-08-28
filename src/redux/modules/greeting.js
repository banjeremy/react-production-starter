import axios from 'axios';

// Actions
const RECEIVE_GREETING = 'react-production-starter/greeting/RECEIVE-GREETING';

const initialState = {
  message: '',
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case RECEIVE_GREETING:
      return {
        text: action.text,
      };
    default:
      return state;
  }
}

// Action Creators
export function receiveGreeting(greeting) {
  return {
    type: RECEIVE_GREETING,
    text: greeting,
  };
}

export function requestGreeting() {
  return dispatch => {
    axios.get('/api/greeting')
      .then(result => {
        dispatch(receiveGreeting(result.data.text));
      });
  };
}
