const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080']
  }
});

const port = 3000;
http.listen(port, () => {
  console.log(`Server listening on *:${port}`);
});

let users = 0;

io.on('connection', (socket) => {
  users += 1;
  console.log('a user connected', 'total users connected :', users)

  socket.on('disconnect', () => {
    users -= 1;
    console.log('user disconnected', 'total users connected :', users);
  });
});