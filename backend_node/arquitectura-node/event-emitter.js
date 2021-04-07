const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("Starting"));
logger.on("start", () => console.log("Re-start"));
logger.on("finish", () => console.log("Finishing"));
logger.on("start", () => console.log("Re-start"));
logger.on("finish", () => console.log("It's Done"));
logger.on("start", () => console.log("Re-start"));

// logger.execute(() => console.log("Hello world"));

// Al usar asincronismo dentro de event-emitter no se ejecutan de manera controlada.
// Para estos casos si hay que usar callbacks.
logger.execute(() => setTimeout(() => console.log("Hello world"), 500));