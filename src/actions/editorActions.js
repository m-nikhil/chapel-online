import * as outputActions from "./outputActions";

import io from "socket.io-client";

export function executeCode(code, input, flags) {
  return function(dispatch) {
    let socket = io({ reconnectionAttempts: 5 });

    socket.on("connect", function() {
      dispatch(outputActions.waiting());
    });

    socket.on("reconnect_failed", function() {
      console.log("Socket reconnect failed"); // display a toast - conveying the error
    });

    socket.on("error", function(error) {
      //display docker error
    });

    socket.emit("run", { code: code, stdin: input }); //flags need to added

    let compile = 0;
    let clear = 0;
    socket.on("data", function(data) {
      if (!compile) {
        dispatch(outputActions.compiling());
        compile = 1;
      } else {
        if (!clear) {
          dispatch(outputActions.clearOutput());
          clear = 1;
        }
        dispatch(outputActions.updateOutput(data));
      }
    });

    socket.on("end", function() {
      socket.close();
    });
  };
}
