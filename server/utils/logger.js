const winston = require("winston");
const { combine, timestamp, printf } = winston.format;

// Configure winston logging
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), myFormat),
  transports: [
    new winston.transports.Console(),
    // Add other transports if needed (e.g., file transport)
  ],
});

module.exports=logger;
