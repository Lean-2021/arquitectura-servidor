import { Router } from "express";
import { cartView } from "../controllers/cartController.js";

const router = Router();

router.get("/",cartView);

export default router;
