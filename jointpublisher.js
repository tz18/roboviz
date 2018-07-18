const cote = require('cote');
var fs = require('fs');
var conf;
if (process.argv.length >= 3 && fs.existsSync(process.argv[2])) {
    conf = require(process.argv[2]);
}
else
{
    conf = require("./config.json");
}
var sin = require('periodic-function/sine')

// Instantiate a new Publisher component.
const jointPublisher = new cote.Publisher({
    name: 'JointBoard ' + conf.jointName + " " + conf.jointID,
    namespace: 'joints',
    key: conf.key,
    broadcasts: ['orientationUpdate']
});
var time = 0;
// Wait for the publisher to find an open port and listen on it.
setInterval(function() {
    time+=0.001;
    
    const orient = {
        id:conf.jointID,
        name:conf.jointName,
        x: sin(time),
        y: sin(time),
        z: sin(time)
    };

    console.log('emitting', orient);

    // publish an event with arbitrary data at any time
    jointPublisher.publish('orientationUpdate', orient);
}, conf.pushingInterval);