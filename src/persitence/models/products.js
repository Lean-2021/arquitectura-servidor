import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

export default mongoose.model("productos", productsSchema);
