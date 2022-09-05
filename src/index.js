import express from "express";
// import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";
import connectDB from "./persitence/DB/configDB.js";
import sockets from "./sockets.js";
import session from "express-session";
import routeMain from "./routes/mainRoutes.js";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import passport from "passport";
import "./passport/local.js";
import { loggerInfo, loggerError } from "./utils/logger.js";
// import { hideBin } from "yargs/helpers";
// import yargs from "yargs";

// const newYargs = yargs(hideBin(process.argv));
dotenv.config();
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer); //implementación de websocket
const PORT = process.env.PORT || 8081;

connectDB();
const advanceOptions = { useNewUrlParser: true, useUnifiedTopology: true };

sockets(io);

// views - motores de plantilla
app.set("views", "./src/views");
app.set("view engine", "ejs"); //motor de plantillas EJS

//middlewares
// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(
  session({
    secret: "logeo",
    resave: true,
    rolling: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: `${process.env.URI_SESSION}`,
      mongoOptions: advanceOptions,
      ttl: 600,
    }),
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 600000,
    },
  })
);
app.use(passport.initialize()); //iniciar passport y sesion passport
app.use(passport.session());

//routes

app.use("/", routeMain);

//connection server
try {
  httpServer.listen(PORT);
  loggerInfo.log("info", `Server on port ${PORT}🚀🚀🎆🎆...`);
} catch (error) {
  loggerError.log("error", "Error de conexión con el servidor...", error);
}
