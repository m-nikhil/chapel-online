import * as types from "./actionTypes";


export function updateCode(data) {
  return {
    type: types.UPDATE_CODE,
    payload: data
  }
}

export function updateInput(data) {
  return {
    type: types.UPDATE_INPUT,
    payload: data
  }
}

export function updateFlags(data) {
  return {
    type: types.UPDATE_FLAGS,
    payload: data
  }
}
