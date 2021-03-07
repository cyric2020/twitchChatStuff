const tmi = require('tmi.js');
var WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log("Connected");

  const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true
    },
    channels: [ 'Punz' ]
  });

  client.connect();

  client.on('message', (channel, tags, message, self) => {
    ws.send(tags['display-name'] + ":" + message)
  });
});

wss.on('message', function (data) {
  console.log(data);
});
