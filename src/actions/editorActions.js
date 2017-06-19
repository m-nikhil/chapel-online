//import * as types from "./actionTypes";

import io from "socket.io-client";

export function executeCode(code,input,flags) {
  return function(dispatch) {

   let socket = io({'reconnectionAttempts':5, 'path': '/socket'} );


    socket.on("reconnect_failed", function() {
      console.log("Socket reconnect failed");
    });

    socket.emit("run",{'code':code,'stdin':input});  //flags need to added



  };
}
