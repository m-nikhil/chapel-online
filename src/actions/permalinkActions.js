import * as types from "./actionTypes";

import axios from "axios";

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export function loadPermalink(link) {
  return function(dispatch) {

  let base;
  if (process.env.NODE_ENV === 'production') {
    base = "";
  } else {
    base = "http://localhost:9000"
  }

  let url = `${base}/api/getpermalinkmodel/${link}`;

  axios.get(url)
      .then((response) => {

        if((response.data.length) === 0)
        {

            if(link) {
            history.push('/' );
            }

        }
        else {
            dispatch({type: types.LOAD_PERMALINK, payload: (response.data[0]).link});
            dispatch({type: types.UPDATE_CODE, payload: (response.data[0]).code});
            dispatch({type: types.UPDATE_INPUT, payload: (response.data[0]).input});
        }

      })
      .catch((err) => {
        console.log("error");     //notify network issue
      })

  }
}
