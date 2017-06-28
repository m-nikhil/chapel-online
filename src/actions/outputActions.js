import * as types from "./actionTypes";

export function updateOutput(data) {
  return {
    type: types.UPDATE_OUTPUT,
    payload: data
  };
}

export function executionError(error) {
  return {
    type: types.EXECUTION_ERROR,
    payload: error
  };
}

export function clearOutput() {
  return {
    type: types.CLEAR_OUTPUT
  };
}


export function compiling() {
  return {
    type: types.COMPILING
  };
}

export function executed() {
  return {
    type: types.EXECUTED
  };
}
