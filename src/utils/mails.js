import nodemailer from "nodemailer";
import usuarios from "../persitence/models/usuarios.js";
import { loggerError } from "./logger.js";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async () => {
  const mailAdmin = "pruebacoder@gmail.com"; //mail de ejemplo para registro de nuevos usuarios
  try {
    const user = new usuarios();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: `${process.env.USER}`,
        pass: `${process.env.PASS}`,
      },
    });
    await transporter.sendMail({
      from: `Info Web ${mailAdmin}`,
      to: mailAdmin,
      subject: "nuevo registro",
      html: `
              <h2>Nuevo Usuario Registrado</h2>
              <h3>Datos:</h3>
              <p>Nombre: ${user.nombre}</p>
              <p>Email: ${user.email}</p>
              <p>Edad: ${user.age}</p>
              <p>Dirección: ${user.adress}</p>
              <p>Teléfono: ${user.phone}</p>
              `,
    });
  } catch (error) {
    loggerError.log("error", "Error en el envio del mail", error);
  }
};

export const sendMailCompra = async (nombre, email, product) => {
  const mailAdmin = "pruebacoder@gmail.com"; //mail de ejemplo para envio de pedidos y proceso del mismo
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: `${process.env.USER}`,
        pass: `${process.env.PASS}`,
      },
    });
    await transporter.sendMail({
      from: `Info Web ${mailAdmin}`,
      to: mailAdmin,
      subject: `Nuevo pedido de Nombre: ${nombre}, email : ${email}`,
      html: `
          <h2>Detalle de la compra</h2>
          <p>Producto:${product.title}</p>
          <p>Precio: $ ${product.price}</p>
        `,
    });
    await transporter.sendMail({
      from: `Info Web ${mailAdmin}`,
      to: `<${email}>`,
      subject: `Info Web - Pedido solicitado`,
      html: `
          <h3>Su pedido fue recibido y se encuentra en proceso de preparación</h3>
          <h4><b>GRACIAS POR SU COMPRA</b></h4>
        `,
    });
  } catch (error) {
    loggerError.log("error", error);
  }
};
