const mongoose = require("mongoose");
const Product = require("../models/Product.model");

require("../db");

const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    const insertedProducts = await Product.insertMany(products);
    console.log("Now we have a catalogue! Hadi again!");
  } catch (error) {
    console.error("Error in seeding the database: ", error);
  } finally {
    mongoose.connection.close();
  }
};

mongoose.connect("mongodb://127.0.0.1:27017/tiny-treats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
 
  {
    name: "Kitchen Alchemy Herb Garden Kit",
    category: ["Kitchen", "Home & Living"],
    price: 34.99,
    rating: { value: 4.2, timeStamp: Date.now() },
    interactions: 85,
    averageRating: 4.0,
    imageUrl: "path/to/kitchen-alchemy-herb-garden-kit.jpg",
    description:
      "Embark on culinary adventures with our Kitchen Alchemy Herb Garden Kit. Grow your own herbs for a touch of freshness in every dish.",
    keywords: ["kitchen", "herb garden", "cooking"],
    promotionGroup: ["Culinary Magic"],
  },
  {
    name: "Timeless Romance Candle Holder",
    category: ["Decor"],
    price: 24.99,
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: 65,
    averageRating: 3.8,
    imageUrl: "path/to/timeless-romance-candle-holder.jpg",
    description:
      "Create a romantic ambiance with our Timeless Romance Candle Holder. Elegant and enchanting, it adds a warm glow to your evenings.",
    keywords: ["decor", "candle holder", "romance"],
    promotionGroup: ["Romantic Evenings"],
  },
  {
    name: "EcoEssence Bamboo Fiber Bedding Set",
    category: ["Home & Living", "Eco-Friendly"],
    price: 79.99,
    rating: { value: 4.5, timeStamp: Date.now() },
    interactions: 110,
    averageRating: 4.3,
    imageUrl: "path/to/ecoessence-bamboo-fiber-bedding-set.jpg",
    description:
      "Wrap yourself in comfort with our EcoEssence Bamboo Fiber Bedding Set. Luxuriously soft and eco-friendly, it's a dream for sustainable sleep.",
    keywords: ["home & living", "bedding", "eco-friendly"],
    promotionGroup: ["Sustainable Slumber"],
  },
  {
    name: "Whispering Winds Silk Scarf",
    category: ["Fashion", "Accessories"],
    price: 39.99,
    rating: { value: 4.4, timeStamp: Date.now() },
    interactions: 95,
    averageRating: 4.2,
    imageUrl: "path/to/whispering-winds-silk-scarf.jpg",
    description:
      "Drape yourself in the elegance of our Whispering Winds Silk Scarf. A versatile accessory that adds a touch of sophistication to any outfit.",
    keywords: ["fashion", "accessories", "silk scarf"],
    promotionGroup: ["Elegant Ensembles"],
  },
  {
    name: "Lunar Lullaby Music Box",
    category: ["Arts & Crafts"],
    price: 49.99,
    rating: { value: 4.3, timeStamp: Date.now() },
    interactions: 80,
    averageRating: 4.1,
    imageUrl: "path/to/lunar-lullaby-music-box.jpg",
    description:
      "Delight in the soothing tunes of our Lunar Lullaby Music Box. A charming piece that brings a touch of nostalgia and magic to your space.",
    keywords: ["arts & crafts", "music box", "lullaby"],
    promotionGroup: ["Musical Memories"],
  },
];

seedDatabase();

module.exports = products;
