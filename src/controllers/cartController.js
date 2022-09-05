import Usuario from "../persitence/models/usuarios.js";

const usuario = new Usuario();

export const cartView =async(req,res)=>{
    const { nombre, email, thumbnail } = req.user;
    const productCart = await usuario.cart;
    res.render("cart", {
        title: "Infoweb - Cart",
        product: productCart,
        nombre,
        email,
        thumbnail,
    });
}