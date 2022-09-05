import { Router } from "express";
import { infoView } from "../controllers/infoController.js";
import isAuth from "../middleware/Auth.js";
const router = Router();

router.get("/", isAuth, infoView);

export default router;
