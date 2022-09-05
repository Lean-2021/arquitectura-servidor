export const homeView = (req, res) => {
  //ruta principal -mostrar formulario de ingreso de productos
  //si existe un sesion mostrar pagina de inicio
  const { nombre, email, thumbnail, cart } = req.user;
  res.render("index", {
    title: "Infoweb - Inicio",
    nombre: nombre,
    email: email,
    thumbnail,
    product: cart,
  });
};
