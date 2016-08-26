// Actions
const INCREMENT = 'react-production-starter/counter/INCREMENT';

const initialState = {
  count: 0
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const { count } = state;
      return {
        count: count + 1
      };
    default:
      return state;
  }
}

// Action Creators
export function increment() {
  return {
    type: INCREMENT
  };
}
