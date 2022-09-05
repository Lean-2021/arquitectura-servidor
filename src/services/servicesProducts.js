import DataProducts from "../persitence/dataFactory.js";
import { loggerError } from "../utils/logger.js";

export const allProducts = async () => {
  try {
    const products = await DataProducts.getApi();
    return products;
  } catch (error) {
    loggerError.log("error", error);
  }
};

export const oneProduct = async (id) => {
  try {
    const productOne = await DataProducts.getApi();
    const one = await productOne.getById(id);
    return one;
  } catch (error) {
    loggerError.log("error", error);
  }
};
