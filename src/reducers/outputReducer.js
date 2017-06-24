import * as types from "../actions/actionTypes";

const initialState = {
  output: "Output will be displayed here.",
  error: null
};

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

export default function input(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_OUTPUT: {
      let output = state.output;
      return { ...state, output: output + ab2str(action.payload) };
    }
    case types.EXECUTION_ERROR: {      //display as toast
      return { ...state, error: action.payload, output: "" };
    }
    case types.CLEAR_OUTPUT: {
      return { ...state, output: " " };
    }

    case types.COMPILING: {
      return { ...state, output: "Compiling...\n" };
    }
    default:
      return state;
  }
}
