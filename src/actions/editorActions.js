import * as outputActions from "./outputActions";

import io from "socket.io-client";

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export function executeCode(code, input, flags, link) {
  return function(dispatch) {
    let socket = io({ reconnectionAttempts: 5 });

    socket.on("connect", function() {
      dispatch(outputActions.compiling());
    });

    socket.on("reconnect_failed", function() {
      console.log("Socket reconnect failed"); // display a toast - conveying the error
    });

    socket.on("error", function(error) {
      //display docker error
    });

    socket.emit("run", { code: code, stdin: input, link:link }); //flags need to added

    socket.on("getlink", function(data){      // redirect to link
        history.push(data);
    });

    socket.on("data", function(data) {

        dispatch(outputActions.updateOutput(data));

    });

    socket.on("end", function() {
      socket.close();
    });
  };
}
