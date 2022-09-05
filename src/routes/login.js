import { Router } from "express";
import passport from "passport";
import { loginView } from "../controllers/loginController.js";
const router = Router();

router.get("/", loginView);

router.post(
  "/",
  passport.authenticate("login", {
    failureRedirect: "/errorLogin",
    successRedirect: "/",
  })
);

export default router;
