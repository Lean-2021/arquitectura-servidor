import { allProducts, oneProduct } from "../services/servicesProducts.js";
import { loggerError } from "../utils/logger.js";
import { sendMailCompra } from "../utils/mails.js";

export const getProduct = async (req, res) => {
  try {
    const product = await allProducts;
    res.json(product);
  } catch (error) {
    loggerError.log("error", error);
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.user;
    const product = await oneProduct(id);
    sendMailCompra(nombre, email, product); //enviar dato de nombre e email al hacer compra de un producto para que envie esa informacion en el email de la compra realizada
    res.json(product);
  } catch (error) {
    loggerError.log("error", error);
  }
};
