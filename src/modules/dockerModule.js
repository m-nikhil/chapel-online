
function docker (socket, code, stdin ) {  // add flags

  const Docker = require('dockerode');
  const docker = new Docker();

  let script = ' echo $0 > service.chpl;\
		             echo $1 >input.txt;\
                 echo "Compiling..."; \
                 chpl -o service service.chpl;\
		             ./service < input.txt;';

 //needs to be replaced with a UUID peralink
 var containerID = (Math.random() * 7983 +1).toString();

  let OPTIONS = {
    'name': containerID,
    'Image': 'chapel/chapel',
    'AttachStdin': true,
    'AttachStdout': true,
    'AttachStderr': true,
    'Tty': true,
    'Cmd': ['sh','-c',script,code,stdin],
    'OpenStdin': false,
    'StdinOnce': false,
    'AutoRemove': true
    //add memory and cpu limits
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
