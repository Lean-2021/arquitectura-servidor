import { Router } from "express";
import routeHome from "./home.js";
import routeProduct from "./productsTest.js";
import routeLogin from "./login.js";
import routeLogout from "./logout.js";
import routeRegister from "./register.js";
import routeErrorLogin from "./errorLogin.js";
import routeErrorRegister from "./errorRegister.js";
import routeInfo from "./info.js";
import routeCart from "./cart.js";

const route = Router();
//routes
route.use("/", routeHome); //ruta inicio
route.use("/api/productos-test", routeProduct); //ruta productos-test
route.use("/login", routeLogin); //ruta login
route.use("/logout", routeLogout); //ruta logout
route.use("/register", routeRegister); //ruta registro
route.use("/errorLogin", routeErrorLogin); //ruta error login
route.use("/errorRegister", routeErrorRegister); //ruta error registro
route.use("/info", routeInfo); //ruta info
route.use("/cart", routeCart); // ruta cart

export default route;
