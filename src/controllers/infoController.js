export const infoView = (req, res) => {
  const { nombre, email, thumbnail, cart, age, phone, adress } = req.user;
  res.render("info", {
    title: "Infoweb - Info",
    nombre,
    email,
    thumbnail,
    age,
    adress,
    phone,
    product: cart,
  });
};
