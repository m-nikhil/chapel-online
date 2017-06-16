import * as types from "../actions/actionTypes";

const initialState = {
  executing: false,
  executed: false,
  output: "Output will be displayed here.",
  error: null
};

export default function editor(state = initialState, action) {
  switch (action.type) {
    case types.EXECUTE_CODE: {
      return { ...state, executing: true, executed: false };
    }
    case types.EXECUTE_CODE_FULFILLED: {
      return {
        ...state,
        executing: false,
        executed: true,
        output: action.payload
      };
    }
    case types.EXECUTE_CODE_REJECTED: {
      return { ...state, executing: false, error: action.payload };
    }
    default:
      return state;
  }
}
