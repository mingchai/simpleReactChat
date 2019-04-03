const io = require('socket.io')();

io.on('connection', () => {
  console.log('a user connected');
});

io.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('disconnect', function () { });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);