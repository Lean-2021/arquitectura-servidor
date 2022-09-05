import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  //modelo de datos usuario
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  cart: {
    type: Array,
  },
},{
  timestamps:true
});

export default mongoose.model("usuarios", usuarioSchema);
