import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

function subscribeToTimer(cb) {
  socket.on("tick", data => cb(null, data));
}
export { subscribeToTimer };
