
module.exports = function(io) {

const docker = require('../modules/dockerModule');

io.on ("connection", function(socket){

        socket.on("run", (data) => {
          docker(socket,data.code,data.stdin);
        });
});


}
