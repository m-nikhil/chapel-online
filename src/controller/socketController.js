
module.exports = function(io) {

const docker = require('../modules/dockerModule');
const addpermalink = require('../modules/addpermalinkModule');
const updatepermalink = require('../modules/updatepermalinkModule');

io.on ("connection", function(socket){

        socket.on("run", (data) => {
          if(data.link == null) {
            data.link = addpermalink(data.code,data.stdin);
          } else {
            updatepermalink(data.code,data.stdin,data.link);
          }
          docker(socket,data.code,data.stdin,data.link);
        });
});


}
