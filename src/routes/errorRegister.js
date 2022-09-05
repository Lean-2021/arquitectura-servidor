import { Router } from "express";
import { errorRegisterView } from "../controllers/errorRegisterController.js";
const router = Router();

router.get("/",errorRegisterView);

export default router;
