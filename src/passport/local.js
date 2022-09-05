import passport from "passport";
import { Strategy } from "passport-local";
import Usuarios from "../persitence/models/usuarios.js";
import dotenv from "dotenv";
import { loggerError } from "../utils/logger.js";
import { encrypt, compare } from "../utils/bcrypt.js";
import { sendMail } from "../utils/mails.js";

dotenv.config();
const localStrategy = Strategy;

passport.use(
  //passport refistro de usuarios
  "signUp",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const usuario = await Usuarios.findOne({ email });
        if (usuario) {
          return done(null, false);
        }
        const user = new Usuarios();
        const { nombre, age, adress, phone } = req.body;
        user.nombre = nombre;
        user.email = email;
        user.password = encrypt(password); // encriptar contraseña
        user.age = age;
        user.phone = phone;
        user.adress = adress;
        if (req.file === undefined) {
          user.thumbnail = "./public/assets/image/user.png"; //imagen por default si el usuario no sube una
          console.log("usuario sin imagen");
        } else {
          user.thumbnail = req.file.path;
        }
        await user.save();
        sendMail(); //envio de correo al crear un nuevo usuario
        return done(null, user);
      } catch (error) {
        loggerError.log("error", error);
      }
    }
  )
);
// Login de usuarios
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await Usuarios.findOne({ email });
        if (!user) {
          return done(null, false);
        }
        const passwordExist = compare(password, user.password); //comparar contraseñas
        if (!passwordExist) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        loggerError.log("error", "Error al crear usuario", error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await Usuarios.findById(id);
  done(null, user);
});
