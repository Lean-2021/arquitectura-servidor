import { Router } from "express";
import {
  logoutView,
  logoutDestroySession,
} from "../controllers/logoutController.js";

const router = Router();

router.get("/", logoutView);

router.post("/", logoutDestroySession);

export default router;
