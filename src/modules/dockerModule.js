
function docker (socket, code, stdin ) {  // add flags

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
    'Tty': true,
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

  docker.createContainer(OPTIONS, (err,container) => {

    if(err) {
      //err
      console.log(err);
    }

    container.attach(ATTACH_OPTIONS, (err,stream) => {
      if(err) {
        //err
      }
      stream.on('data', (chunk) => {
        socket.emit("data",chunk);
      });
      stream.on('end', () => {
        socket.emit("end",' ')
      });
    });

    container.start();

  });

}

module.exports = docker;
