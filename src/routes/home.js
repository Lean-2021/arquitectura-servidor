import { Router } from "express";
import { homeView } from "../controllers/homeController.js";
import isAuth from "../middleware/Auth.js";
const router = Router();

router.get("/", isAuth, homeView);

export default router;
