const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  category: [],
  price: [],
  rating: {
    value: Number,
    timeStamp: Number,
  },
  interactions: [],
  averageRating: [],
  imageUrl: String,
  description: String,
  keywords: [],
  promotionGroup: [],
});

const Product = model("Product", productSchema);

module.exports = Product;
