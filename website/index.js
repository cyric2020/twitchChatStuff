const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
  var p = document.createElement('p');
  p.innerHTML = event.data;
  document.getElementById('chat').appendChild(p);
  socket.send("s");
});
