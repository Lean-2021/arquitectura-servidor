import Data from "../../contenedores/apiClass.js";
import Product from "../models/products.js";
import { loggerError } from "../../utils/logger.js";

export class Products extends Data {
  constructor() {
    super();
  }
  async getProduct() {
    try {
      const listProducts = await Product.find();
      return listProducts;
    } catch (error) {
      loggerError.log("error", error);
    }
  }
  async getById(id) {
    try {
      const getproduct = await Product.findById(id);
      return getproduct;
    } catch (error) {
      loggerError.log("error", error);
    }
  }
}
