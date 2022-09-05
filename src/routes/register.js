import { Router } from "express";
import passport from "passport";
import { registerView } from "../controllers/registerController.js";
import uploadFile from "../middleware/multer.js";

const router = Router();

router.get("/", registerView);

router.post(
  "/",
  uploadFile(),
  passport.authenticate("signUp", {
    failureRedirect: "/errorRegister",
    successRedirect: "/login",
  }),
);

export default router;
