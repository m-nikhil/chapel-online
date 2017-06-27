
function docker (socket, code, stdin, link ) {  // add flags

  const Docker = require('dockerode');
  const docker = new Docker();

  let script = ' echo $0 > service.chpl;\
		             echo $1 >input.txt;\
                 chpl -o service service.chpl;\
		             timeout 30s ./service -nl 2 < input.txt;'
              // timeout give a signal
              // nl must take value from a drop list, provided in the UI (future)

 //needs to be replaced with a UUID permalink

 const uuidv4 = require('uuid/v4');
 let containerID = uuidv4();

  let OPTIONS = {
    'name': containerID,
    'Image': 'chapel/chapel-gasnet',
    'AttachStdin': true,
    'AttachStdout': true,
    'AttachStderr': true,
    'Tty': false,
    'Cmd': ['sh','-c',script,code,stdin],
    'OpenStdin': false,
    'StdinOnce': false,
    'AutoRemove': true,
    'Memory': 768000000 //256*3 MB

  }

  let ATTACH_OPTIONS = {
    'stream': true,
    'stdout': true,
    'stderr':true
  }

const MemoryStream = require('memorystream');
let stdout = new MemoryStream();
let stderr = new MemoryStream();

const byline = require('byline')



  docker.createContainer(OPTIONS, (err,container) => {

    if(err) {
      //err
      console.log(err);
    }

    container.attach(ATTACH_OPTIONS, (err,stream) => {
      if(err) {
        //err
      }



      byline(stdout).on('data', (line) => {
        if (line.toString().trim() !== "") {
          socket.emit("data",(line.toString().replace("\n","<br />")) + "<br />");
        }
      });

      stdout.on('end', () => {
        socket.emit("end",' ')
      });

      byline(stderr).on('data', (line) => {
        if (line.toString().trim() !== "") {
          socket.emit("errordata","<warning />"+(line.toString().replace("\n","<br />")) );
        }
      });

      stderr.on('end', () => {
        socket.emit("end",' ')
      });

        container.modem.demuxStream(stream, stdout, stderr );


    });

     container.start();

  });

  socket.emit("getlink",link);

}

module.exports = docker;
