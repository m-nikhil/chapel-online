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

export function clearOutput(data) {
  return {
    type: types.CLEAR_OUTPUT
  };
}

export function waiting(data) {
  return {
    type: types.WAITING
  };
}

export function compiling(data) {
  return {
    type: types.COMPILING
  };
}
