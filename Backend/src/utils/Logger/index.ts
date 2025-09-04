import Logger from "./logger.js";

const logger = new Logger({
  level: "debug",
  logToFile: true,
  logDir: "./logs",
});

export default logger;
