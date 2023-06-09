import {reactive} from "vue";
import {io} from "socket.io-client";

export const state = reactive({
  connected: false,
});

// TODO : for production
// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:5173";

export const socket = io("http://localhost:3000", {
  autoConnect: false,
  rejectUnauthorized: false // WARN: please do not do this in production
});

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("join", (arg)=>{
  console.log(arg)
})
