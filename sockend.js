let cote;
try {
    cote = require('cote');
} catch (e) {
    cote = require('../../');
}
let express = require('express'),
    app = express();
var server = app.listen(process.env.PORT, process.env.IP);

let io = require('socket.io').listen(server),
    fs = require('fs'),
    conf = require("./config.json");

io.on('connection', (socket) => {
   socket.join('room1');
});



app.get('/',handler)
app.get('/index.html',handler)
function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
};

app.use(express.static('public'))

let sockend = new cote.Sockend(io, { name: 'sockend', key: conf.key});
