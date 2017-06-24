import * as types from "../actions/actionTypes";

const initialState = {
  link: null
};

export default function permalink(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PERMALINK: {
      return { ...state, link: action.payload };
    }
    default:
      return state;
  }
}
