import * as types from "../actions/actionTypes";

const initialState = {
  output: "Output will be displayed here.",
  error: " "
};


export default function input(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_OUTPUT: {
      let output = state.output;
      return { ...state, output: output + action.payload};
    }
    case types.EXECUTION_ERROR: {
      let error = state.error;
      return { ...state, error: error + action.payload};
    }
    case types.CLEAR_OUTPUT: {
      return { ...state, output: "", error: "" };
    }

    case types.COMPILING: {
      return { ...state, output: "Compiling...\n", error: "" };
    }
    default:
      return state;
  }
}
