import { Router } from "express";
import { errorloginView } from "../controllers/errorLoginController.js";
const router = Router();

router.get("/", errorloginView);

export default router;
