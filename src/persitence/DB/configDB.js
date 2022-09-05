import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { loggerError, loggerInfo } from "../../utils/logger.js";
const advanceOptions = { useNewUrlParser: true, useUnifiedTopology: true };

export default function connectedDB() {
  mongoose
    .connect(`${process.env.URI}`, advanceOptions)
    .then(() => loggerInfo.log("info", "Connected MongoDB..."))
    .catch((error) =>
      loggerError.log("error", "Error de conexion DataBase", error)
    );
}
