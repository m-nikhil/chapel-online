import * as types from "../actions/actionTypes";

const initialState = {
  code: 'writeln("Hello Chapel!");',
  input: "Enter your Input here.",
  flags: null
};

export default function input(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_CODE: {
      return { ...state, code: action.payload };
    }
    case types.UPDATE_INPUT: {
      return { ...state, input: action.payload };
    }
    case types.UPDATE_FLAGS: {
      return { ...state, flags: action.payload };
    }
    default:
      return state;
  }
}
