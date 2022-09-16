const logEvents = require("./logEvent");

const EventEmitter = require("events");

class MyEmmiter extends EventEmitter {}

const myEmmiter = new MyEmmiter();

// Add listener
myEmmiter.on("log", (message) => {
  logEvents(message);
});

setTimeout(() => {
  // Emit event
  myEmmiter.emit("log", "Log event rolou de novo mais uma vez novamente");
}, 2000);
