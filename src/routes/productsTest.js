import { Router } from "express";
import {
  getOneProduct,
  getProduct,
} from "../controllers/productsController.js";

const router = Router();

router.get("/", getProduct);

router.get("/:id", getOneProduct);

export default router;
