export const logoutView = (req, res) => {
  //mostrar vista logout  - mensaje "hasta luego"
  if (req.user) {
    res.render("logout", {
      title: "Infoweb - Logout",
      nombre: req.session.nombre,
    });
  } else {
    res.redirect("/login");
  }
};

export const logoutDestroySession = (req, res) => {
  // redireccionar a login luego de mostrar el mensaje
  req.session.destroy((err) => {
    if (!err) {
      res.redirect("/login");
    } else {
      res.status(500).json({ message: "Error al borrar sesion" });
    }
  });
};
