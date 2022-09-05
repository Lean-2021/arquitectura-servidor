import winston from "winston";

export const loggerInfo = winston.createLogger({
  //logger mensajes info
  level: "info",
  transports: [new winston.transports.Console({ level: "info" })],
});

export const loggerError = winston.createLogger({
  level: "error",
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});
