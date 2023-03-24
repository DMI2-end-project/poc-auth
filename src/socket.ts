import {reactive} from "vue";
import {io, Socket} from "socket.io-client";

export const state = reactive({
  connected: false,
});

// TODO : for production
// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:5173";

export const socket = io("http://localhost:3000", {
  rejectUnauthorized: false // WARN: please do not do this in production
});

socket.on("connect", () => {
  state.connected = true;
  socket.on('coucou', (arg) => {
    console.log('arg in', arg)
  })
  socket.emit('coucou', {
    message : "hello from server"
  })
});

socket.on("disconnect", () => {
  state.connected = false;
});

